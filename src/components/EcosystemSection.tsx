import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { SiteContent } from '../data/content';
import { SITE_CONFIG } from '../config/site';
import { KairosLogo, TelegramIcon } from './KairosLogo';

interface EcosystemSectionProps {
  content: SiteContent['ecosystem'];
}

export const EcosystemSection: React.FC<EcosystemSectionProps> = ({ content }) => {
  return (
    <section id="ecosystem" className="bg-[#F8FAFC] py-20 sm:py-24 kairos-deferred-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center space-y-3 mb-14">
          <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#534AB7]">
            {content.eyebrow}
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#0B0B0B]">
            {content.heading}
          </h2>
          <p className="text-sm sm:text-base text-[#52514E] leading-relaxed">
            {content.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Dark Spotlight Card */}
          <div className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-3xl bg-[#1E232B] text-white p-8 sm:p-10 shadow-xl min-h-[290px] flex flex-col justify-between">
              <div className="pointer-events-none absolute -right-10 -bottom-10 w-52 h-52 rounded-full bg-[#534AB7]/35 blur-2xl" />
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-semibold uppercase tracking-widest text-[#EF9F27]">
                  {content.spotlightLabel}
                </span>
                <KairosLogo variant="mark" size={28} />
              </div>

              <div className="my-6 space-y-2 relative z-10">
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
                  {content.spotlightTitle}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {content.spotlightText}
                </p>
              </div>

              <div className="relative z-10">
                <a
                  href={SITE_CONFIG.telegramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-white text-[#0B0B0B] hover:bg-[#EEEDFA] px-5 py-2.5 text-xs font-semibold transition-colors"
                >
                  <TelegramIcon className="w-3.5 h-3.5 text-[#229ED9]" />
                  <span>{content.spotlightBtn}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right 2-Column Ecosystem Checklist */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
            {[content.itemsCol1, content.itemsCol2].map((col, colIdx) => (
              <ul key={colIdx} className="divide-y divide-slate-200/80">
                {col.map((item) => (
                  <li
                    key={item}
                    className="py-3.5 flex items-center gap-3 text-sm font-medium text-[#1E232B]"
                  >
                    <span className="w-5 h-5 rounded-full bg-[#EEEDFA] text-[#534AB7] flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 stroke-[2.5]" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
