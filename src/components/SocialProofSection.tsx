import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { SiteContent } from '../data/content';

interface SocialProofSectionProps {
  content: SiteContent['socialProof'];
  onOpenWaitlist: () => void;
}

export const SocialProofSection: React.FC<SocialProofSectionProps> = ({
  content,
  onOpenWaitlist,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const rotatePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? content.items.length - 1 : prev - 1));
  };

  const rotateNext = () => {
    setActiveIndex((prev) => (prev + 1) % content.items.length);
  };

  return (
    <section id="proof" className="relative bg-[#F6F0EA] pt-16 pb-20 sm:pb-24 kairos-deferred-section">
      {/* Jagged Mountain Ridge Top Divider matching everest-systems.jpg */}
      <div className="absolute -top-8 inset-x-0 overflow-hidden leading-none pointer-events-none">
        <svg
          viewBox="0 0 1440 48"
          preserveAspectRatio="none"
          className="w-full h-8 sm:h-10 fill-[#F6F0EA]"
          aria-hidden="true"
        >
          <polygon points="0,48 0,32 140,12 290,34 460,8 650,30 820,6 1020,28 1220,10 1440,30 1440,48" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center space-y-4">
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
              className="inline-flex items-center gap-2 rounded-full bg-[#534AB7] hover:bg-[#41389B] text-white px-6 py-2.5 text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer"
            >
              <span>{content.cta}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* 3-Column Carousel Showcase */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {content.items.map((item, idx) => {
            const isFeatured = idx === activeIndex;

            return (
              <article
                key={item.id}
                onClick={() => setActiveIndex(idx)}
                className={`rounded-2xl p-6 sm:p-7 transition-all duration-300 cursor-pointer flex flex-col justify-between border ${
                  isFeatured
                    ? 'bg-white border-[#534AB7]/35 shadow-xl md:-translate-y-2'
                    : 'bg-white/75 border-[#E6DDD3] hover:bg-white shadow-sm'
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#EEEDFA] text-[#534AB7] px-3 py-1 text-[11px] font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#EF9F27]" />
                      {item.badge}
                    </span>
                    <span className="text-xs font-medium text-[#52514E]">{item.city}</span>
                  </div>

                  <p className="text-sm sm:text-[15px] text-[#1E232B] leading-relaxed">
                    {item.quote}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                  <div>
                    <div className="text-sm font-bold text-[#0B0B0B]">{item.name}</div>
                    <div className="text-xs text-[#52514E]">{item.role}</div>
                  </div>
                  <div className="text-right">
                    <span className="inline-block rounded-lg bg-[#FEF4E2] px-2.5 py-1 font-mono-num text-[11px] font-bold text-[#9A5B00]">
                      {item.outcome}
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Carousel Navigation + Disclaimer */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#52514E]">{content.disclaimer}</p>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={rotatePrev}
              aria-label="Previous story"
              className="w-9 h-9 rounded-full border border-slate-300 bg-white hover:border-[#534AB7] flex items-center justify-center text-[#0B0B0B] transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={rotateNext}
              aria-label="Next story"
              className="w-9 h-9 rounded-full border border-slate-300 bg-white hover:border-[#534AB7] flex items-center justify-center text-[#0B0B0B] transition-colors cursor-pointer"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
