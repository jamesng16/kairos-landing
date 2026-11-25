import React from 'react';
import { ArrowRight } from 'lucide-react';
import { SiteContent } from '../data/content';
import { ScrollReveal } from './ScrollReveal';

interface ValueCardsSectionProps {
  content: SiteContent['valueCards'];
  onOpenWaitlist: () => void;
}

const TONE_MAP = {
  sage: {
    bg: 'bg-[#86A954]',
    text: 'text-[#121A09]',
    subtext: 'text-[#202C12]',
    badgeBg: 'bg-white/25',
  },
  sky: {
    bg: 'bg-[#88C4E8]',
    text: 'text-[#0B1E2E]',
    subtext: 'text-[#153147]',
    badgeBg: 'bg-white/30',
  },
  sand: {
    bg: 'bg-[#DED1C2]',
    text: 'text-[#201A14]',
    subtext: 'text-[#3F362C]',
    badgeBg: 'bg-white/40',
  },
} as const;

export const ValueCardsSection: React.FC<ValueCardsSectionProps> = ({
  content,
  onOpenWaitlist,
}) => {
  return (
    <section
      id="why-kairos"
      className="relative overflow-hidden kairos-hero-sky py-20 sm:py-28 border-b border-slate-200/70"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="max-w-xl mx-auto text-center space-y-4">
          <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#534AB7]">
            {content.eyebrow}
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#0B0B0B]">
            {content.heading}
          </h2>
          <div>
            <button
              type="button"
              onClick={onOpenWaitlist}
              className="inline-flex items-center gap-2 rounded-full bg-[#534AB7] hover:bg-[#41389B] text-white px-6 py-2.5 text-xs font-semibold uppercase tracking-wider shadow-sm transition-all cursor-pointer"
            >
              <span>{content.cta}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </ScrollReveal>

        {/* 3 Staggered Tilted Editorial Cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-7 lg:gap-9 items-stretch">
          {content.cards.map((card, idx) => {
            const palette = TONE_MAP[card.tone];
            const verticalOffset = idx === 1 ? 'md:-translate-y-4' : idx === 0 ? 'md:translate-y-4' : 'md:translate-y-1';

            return (
              <div
                key={card.id}
                className={`group rounded-2xl p-7 sm:p-8 shadow-xl transition-transform duration-300 hover:rotate-0 hover:-translate-y-1 flex flex-col justify-between min-h-[320px] ${palette.bg} ${card.rotation} ${verticalOffset}`}
              >
                <div className="flex items-start justify-between">
                  <span className={`font-mono-num text-xs font-bold px-2.5 py-1 rounded-full ${palette.badgeBg} ${palette.text}`}>
                    0{idx + 1}
                  </span>
                </div>

                {/* Bespoke Geometric Illustration */}
                <div className="my-6 flex items-center justify-center">
                  {card.tone === 'sage' && (
                    <svg width="110" height="86" viewBox="0 0 110 86" fill="none" aria-hidden="true">
                      <rect x="14" y="20" width="38" height="38" rx="8" fill="#FFFFFF" fillOpacity="0.9" />
                      <rect x="36" y="10" width="38" height="38" rx="8" fill="#534AB7" />
                      <rect x="58" y="26" width="38" height="38" rx="8" fill="#1E232B" />
                      <circle cx="77" cy="45" r="7" fill="#EF9F27" />
                    </svg>
                  )}
                  {card.tone === 'sky' && (
                    <svg width="110" height="86" viewBox="0 0 110 86" fill="none" aria-hidden="true">
                      <ellipse cx="55" cy="43" rx="44" ry="26" fill="#FFFFFF" fillOpacity="0.92" />
                      <circle cx="55" cy="43" r="17" fill="#534AB7" />
                      <circle cx="55" cy="43" r="7" fill="#EF9F27" />
                    </svg>
                  )}
                  {card.tone === 'sand' && (
                    <svg width="110" height="86" viewBox="0 0 110 86" fill="none" aria-hidden="true">
                      <rect x="18" y="12" width="20" height="20" rx="5" fill="#1E232B" />
                      <rect x="45" y="12" width="20" height="20" rx="5" fill="#534AB7" />
                      <rect x="72" y="12" width="20" height="20" rx="5" fill="#FFFFFF" />
                      <rect x="18" y="42" width="20" height="20" rx="5" fill="#FFFFFF" />
                      <rect x="45" y="42" width="20" height="20" rx="5" fill="#EF9F27" />
                      <rect x="72" y="42" width="20" height="20" rx="5" fill="#1E232B" />
                    </svg>
                  )}
                </div>

                <div className="space-y-2">
                  <h3 className={`text-xl font-bold tracking-tight ${palette.text}`}>
                    {card.title}
                  </h3>
                  <p className={`text-sm leading-relaxed ${palette.subtext}`}>
                    {card.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
