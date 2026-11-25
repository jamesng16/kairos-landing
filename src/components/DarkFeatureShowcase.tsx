import React from 'react';
import { ArrowRight } from 'lucide-react';
import { SiteContent } from '../data/content';
import { SITE_CONFIG } from '../config/site';
import { FeatureDiagrams } from './FeatureDiagrams';
import { TelegramIcon } from './KairosLogo';
import { ScrollReveal } from './ScrollReveal';

interface DarkFeatureShowcaseProps {
  content: SiteContent['showcase'];
  onOpenWaitlist: () => void;
}

export const DarkFeatureShowcase: React.FC<DarkFeatureShowcaseProps> = ({
  content,
  onOpenWaitlist,
}) => {
  return (
    <section
      id="features"
      className="relative bg-[#1E232B] text-white kairos-grid-hairline py-20 sm:py-28"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Header */}
        <ScrollReveal className="max-w-2xl mx-auto text-center mb-16 sm:mb-24">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-[#EF9F27] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#EF9F27]" />
            {content.eyebrow}
          </div>
          <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight text-white leading-tight">
            {content.heading}
          </h2>
        </ScrollReveal>

        {/* Numbered Vertical Feature Rows 01..06 */}
        <div className="divide-y divide-white/10 border-t border-b border-white/10">
          {content.modules.map((mod) => {
            const isTelegramCta = mod.diagramType === 'timing';

            return (
              <ScrollReveal
                key={mod.id}
                className="py-14 sm:py-20 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center"
              >
                <div className="lg:col-span-5 space-y-5">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <span className="font-mono-num text-xs font-semibold tracking-widest text-slate-400">
                      {mod.num}
                    </span>
                    <span className="rounded-full bg-[#534AB7]/25 border border-[#534AB7]/40 px-3 py-1 text-[11px] font-semibold text-[#C7C2FA]">
                      {mod.metricBadge}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
                    {mod.title}
                  </h3>

                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                    {mod.description}
                  </p>

                  <div className="pt-1 flex flex-wrap items-center gap-3">
                    {isTelegramCta ? (
                      <a
                        href={SITE_CONFIG.telegramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-[#534AB7] hover:bg-[#665CD4] active:scale-[0.98] text-white px-5 py-2.5 text-xs font-semibold uppercase tracking-wider transition-all"
                      >
                        <TelegramIcon className="w-3.5 h-3.5" />
                        <span>{mod.ctaLabel}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    ) : (
                      <button
                        type="button"
                        onClick={onOpenWaitlist}
                        className="inline-flex items-center gap-2 rounded-full bg-[#534AB7] hover:bg-[#665CD4] active:scale-[0.98] text-white px-5 py-2.5 text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#EF9F27]" />
                        <span>{mod.ctaLabel}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>

                  <div className="pt-4 opacity-20 pointer-events-none" aria-hidden="true">
                    <svg width="110" height="32" viewBox="0 0 110 32" fill="none">
                      <path
                        d="M2 30 L32 8 L50 20 L74 4 L108 30 Z"
                        stroke="#94A3B8"
                        strokeWidth="1"
                      />
                      <circle cx="74" cy="4" r="2" fill="#EF9F27" />
                    </svg>
                  </div>
                </div>

                <div className="lg:col-span-7">
                  <FeatureDiagrams
                    type={mod.diagramType}
                    horizons={content.sandboxHorizons}
                  />
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
