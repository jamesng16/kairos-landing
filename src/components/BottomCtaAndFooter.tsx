import React from 'react';
import { ArrowRight } from 'lucide-react';
import { SiteContent } from '../data/content';
import { SITE_CONFIG } from '../config/site';
import { KairosLogo, TelegramIcon } from './KairosLogo';

interface BottomCtaAndFooterProps {
  bottomCta: SiteContent['bottomCta'];
  footer: SiteContent['footer'];
  onOpenWaitlist: () => void;
}

export const BottomCtaAndFooter: React.FC<BottomCtaAndFooterProps> = ({
  bottomCta,
  footer,
  onOpenWaitlist,
}) => {
  return (
    <>
      {/* Warm Editorial Split CTA Banner (echoing Everest's bottom peach/monolith banner, themed to Kairos) */}
      <section className="bg-[#F8FAFC] pt-6 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#EFEAFD] via-[#F7EFE8] to-[#FCEFD9] border border-[#534AB7]/15 p-8 sm:p-12 lg:p-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-lg">
            <div className="lg:col-span-7 space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#0B0B0B] leading-tight">
                {bottomCta.heading}
              </h2>
              <p className="text-sm sm:text-base text-[#52514E] max-w-xl leading-relaxed">
                {bottomCta.description}
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={onOpenWaitlist}
                  className="inline-flex items-center gap-2 rounded-full bg-[#534AB7] hover:bg-[#41389B] text-white px-7 py-3.5 text-xs font-semibold uppercase tracking-wider shadow-md transition-all cursor-pointer"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#EF9F27]" />
                  <span>{bottomCta.waitlistCta}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={SITE_CONFIG.telegramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-white hover:bg-slate-50 border border-slate-300 text-[#0B0B0B] px-6 py-3.5 text-xs font-semibold uppercase tracking-wider transition-all"
                >
                  <TelegramIcon className="w-4 h-4 text-[#229ED9]" />
                  <span>{bottomCta.telegramCta}</span>
                </a>
              </div>
            </div>

            {/* Right Sculptural Kairos Monolith Render */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="w-64 sm:w-72 aspect-square rounded-2xl overflow-hidden shadow-xl border border-white/70 bg-[#F4ECE7]">
                <img
                  src={`${import.meta.env.BASE_URL}images/kairos-monolith.jpg`}
                  alt="Kairos geometric summit sculpture"
                  className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dark Mountain-Edge Footer */}
      <footer className="relative bg-[#1B2028] text-white pt-16 pb-10">
        <div className="absolute -top-8 inset-x-0 overflow-hidden leading-none pointer-events-none">
          <svg
            viewBox="0 0 1440 40"
            preserveAspectRatio="none"
            className="w-full h-8 fill-[#1B2028]"
            aria-hidden="true"
          >
            <polygon points="0,40 0,24 180,8 400,28 620,6 920,24 1180,10 1440,26 1440,40" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
            <div className="lg:col-span-5 space-y-4">
              <KairosLogo variant="horizontal" theme="dark" size={38} />
              <p className="text-sm font-medium text-white/90">{footer.tagline}</p>
              <p className="text-xs text-slate-400 leading-relaxed max-w-md">
                {footer.summary}
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={onOpenWaitlist}
                  className="inline-flex items-center gap-2 rounded-full bg-[#534AB7] hover:bg-[#665CD4] text-white px-5 py-2.5 text-xs font-semibold transition-colors cursor-pointer"
                >
                  <span>{bottomCta.waitlistCta}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <a
                  href={SITE_CONFIG.telegramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 hover:border-[#38BDF8] px-4 py-2.5 text-xs font-semibold text-white transition-colors"
                >
                  <TelegramIcon className="w-3.5 h-3.5 text-[#38BDF8]" />
                  <span>{SITE_CONFIG.telegramHandle}</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8">
              {footer.columns.map((col) => (
                <div key={col.title} className="space-y-3">
                  <div className="text-[11px] font-bold uppercase tracking-widest text-slate-400">
                    {col.title}
                  </div>
                  <ul className="space-y-2.5">
                    {col.links.map((link) => {
                      const isWaitlist = link.href === '#waitlist';
                      const isTg = link.href === '#telegram';
                      const isTgChannel = link.href === '#telegram-channel';

                      if (isWaitlist) {
                        return (
                          <li key={link.label}>
                            <button
                              type="button"
                              onClick={onOpenWaitlist}
                              className="text-xs text-slate-300 hover:text-white transition-colors cursor-pointer text-left"
                            >
                              {link.label}
                            </button>
                          </li>
                        );
                      }

                      return (
                        <li key={link.label}>
                          <a
                            href={
                              isTg
                                ? SITE_CONFIG.telegramUrl
                                : isTgChannel
                                ? SITE_CONFIG.telegramChannelUrl
                                : link.href
                            }
                            target={isTg || isTgChannel ? '_blank' : undefined}
                            rel={isTg || isTgChannel ? 'noopener noreferrer' : undefined}
                            className="text-xs text-slate-300 hover:text-white transition-colors"
                          >
                            {link.label}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-8 space-y-3 text-[11px] text-slate-400">
            <p className="leading-relaxed">{footer.disclaimer}</p>
            <div className="flex flex-wrap items-center justify-between gap-4 pt-1 text-slate-500">
              <span>{footer.copyright}</span>
              <span className="font-mono-num">Kairos • the right moment</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
