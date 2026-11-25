import React from 'react';
import { ArrowRight } from 'lucide-react';
import { SiteContent } from '../data/content';
import { SITE_CONFIG } from '../config/site';
import { TelegramIcon } from './KairosLogo';
import { ScrollReveal } from './ScrollReveal';

interface InterstitialBannerProps {
  content: SiteContent['interstitial'];
  onOpenWaitlist: () => void;
}

export const InterstitialBanner: React.FC<InterstitialBannerProps> = ({
  content,
  onOpenWaitlist,
}) => {
  return (
    <section className="relative bg-[#EDF2F8] py-10 sm:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="relative overflow-hidden rounded-3xl bg-[#1E232B] text-white p-8 sm:p-12 lg:p-14 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="pointer-events-none absolute -right-16 -top-16 w-72 h-72 rounded-full bg-[#534AB7]/30 blur-3xl" />
            <div className="pointer-events-none absolute left-1/3 -bottom-20 w-64 h-64 rounded-full bg-[#EF9F27]/15 blur-3xl" />

            <div className="lg:col-span-7 relative z-10 space-y-4">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight leading-tight">
                {content.heading}
              </h2>
              <p className="text-sm sm:text-base text-slate-300 max-w-xl leading-relaxed">
                {content.description}
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={onOpenWaitlist}
                  className="inline-flex items-center gap-2 rounded-full bg-[#534AB7] hover:bg-[#665CD4] active:scale-[0.98] text-white px-6 py-3 text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#EF9F27]" />
                  <span>{content.waitlistCta}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <a
                  href={SITE_CONFIG.telegramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/15 border border-white/20 text-white px-6 py-3 text-xs font-semibold uppercase tracking-wider transition-all"
                >
                  <TelegramIcon className="w-3.5 h-3.5 text-[#38BDF8]" />
                  <span>{content.telegramCta}</span>
                </a>
              </div>
            </div>

            {/* Right Bespoke 3D Kairos Prism Image */}
            <div className="lg:col-span-5 relative z-10 flex justify-center lg:justify-end">
              <div className="w-full max-w-[380px] h-52 rounded-2xl overflow-hidden border border-white/15 shadow-2xl bg-[#141820]">
                <img
                  src={`${import.meta.env.BASE_URL}images/kairos-prism.jpg`}
                  alt="Kairos 3D financial engine prism"
                  className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
