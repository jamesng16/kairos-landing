import React from 'react';
import { ArrowRight } from 'lucide-react';
import { SiteContent } from '../data/content';
import { SITE_CONFIG } from '../config/site';
import { TelegramIcon } from './KairosLogo';
import { ScrollReveal } from './ScrollReveal';

interface PerspectivesSectionProps {
  content: SiteContent['perspectives'];
}

export const PerspectivesSection: React.FC<PerspectivesSectionProps> = ({ content }) => {
  return (
    <section id="perspectives" className="bg-white py-20 sm:py-24 border-y border-slate-200/80 kairos-deferred-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="font-display font-bold uppercase tracking-tight text-5xl sm:text-7xl text-[#0B0B0B]">
            {content.title}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#52514E]">{content.subtitle}</p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {content.items.map((article) => (
            <article
              key={article.id}
              className="group rounded-2xl border border-slate-200 bg-white overflow-hidden hover:border-[#534AB7]/40 hover:shadow-lg transition-all flex flex-col"
            >
              {/* Bespoke Editorial Cover Art */}
              <div className="h-44 relative overflow-hidden bg-[#1E232B] flex items-center justify-center">
                {article.artVariant === 'orbits' && (
                  <svg viewBox="0 0 320 180" className="w-full h-full">
                    <rect width="320" height="180" fill="#181D26" />
                    <circle cx="160" cy="90" r="68" stroke="#534AB7" strokeOpacity="0.45" strokeWidth="1.5" fill="none" />
                    <circle cx="160" cy="90" r="46" stroke="#FFFFFF" strokeOpacity="0.2" strokeWidth="1.5" strokeDasharray="4 4" fill="none" />
                    <circle cx="160" cy="90" r="24" fill="#534AB7" />
                    <circle cx="222" cy="60" r="7" fill="#EF9F27" />
                    <circle cx="104" cy="118" r="5" fill="#38BDF8" />
                  </svg>
                )}
                {article.artVariant === 'horizon' && (
                  <svg viewBox="0 0 320 180" className="w-full h-full">
                    <defs>
                      <linearGradient id="perspGrad" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#2A2356" />
                        <stop offset="60%" stopColor="#534AB7" />
                        <stop offset="100%" stopColor="#EF9F27" />
                      </linearGradient>
                    </defs>
                    <rect width="320" height="180" fill="url(#perspGrad)" />
                    <circle cx="235" cy="52" r="22" fill="#EF9F27" fillOpacity="0.9" />
                    <path d="M0 180 L95 92 L160 132 L245 78 L320 155 L320 180 Z" fill="#1E232B" fillOpacity="0.88" />
                  </svg>
                )}
                {article.artVariant === 'peaks' && (
                  <svg viewBox="0 0 320 180" className="w-full h-full">
                    <rect width="320" height="180" fill="#DCE8F5" />
                    <polygon points="0,180 78,64 150,180" fill="#534AB7" fillOpacity="0.75" />
                    <polygon points="95,180 185,46 270,180" fill="#1E232B" fillOpacity="0.9" />
                    <polygon points="205,180 272,82 320,160 320,180" fill="#534AB7" fillOpacity="0.55" />
                    <circle cx="185" cy="46" r="6" fill="#EF9F27" />
                  </svg>
                )}
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between text-[11px] font-semibold tracking-wider text-[#52514E]">
                    <span className="text-[#534AB7]">{article.category}</span>
                    <span>{article.date}</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#0B0B0B] leading-snug group-hover:text-[#534AB7] transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-sm text-[#52514E] leading-relaxed">{article.excerpt}</p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-medium text-[#52514E]">
                  <span>{article.readTime}</span>
                  <a
                    href={SITE_CONFIG.telegramChannelUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-semibold text-[#534AB7] hover:underline"
                  >
                    <span>Telegram</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href={SITE_CONFIG.telegramChannelUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#534AB7] hover:bg-[#41389B] text-white px-6 py-3 text-xs font-semibold uppercase tracking-wider transition-all"
          >
            <TelegramIcon className="w-3.5 h-3.5" />
            <span>{content.readAllCta}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
