import React, { useState, useEffect } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';
import { KairosLogo, TelegramIcon } from './KairosLogo';
import { Lang, SiteContent } from '../data/content';
import { SITE_CONFIG } from '../config/site';

interface NavbarProps {
  lang: Lang;
  onToggleLang: (next: Lang) => void;
  content: SiteContent['nav'];
  onOpenWaitlist: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  lang,
  onToggleLang,
  content,
  onOpenWaitlist,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-white/88 backdrop-blur-md border-b border-slate-200/80 shadow-xs'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        <a href="#top" className="focus:outline-none">
          <KairosLogo variant="horizontal" theme="light" size={34} />
        </a>

        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#2A2E35]">
          {content.links.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hover:text-[#534AB7] transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2.5">
          {SITE_CONFIG.showLanguageToggle && (
            <div
              className="inline-flex items-center rounded-full bg-white/80 border border-slate-200 p-0.5 text-xs font-semibold"
              role="group"
              aria-label="Language switch"
            >
              <button
                type="button"
                onClick={() => onToggleLang('ru')}
                className={`px-2.5 py-1 rounded-full transition-colors cursor-pointer ${
                  lang === 'ru'
                    ? 'bg-[#0B0B0B] text-white'
                    : 'text-[#52514E] hover:text-[#0B0B0B]'
                }`}
              >
                RU
              </button>
              <button
                type="button"
                onClick={() => onToggleLang('en')}
                className={`px-2.5 py-1 rounded-full transition-colors cursor-pointer ${
                  lang === 'en'
                    ? 'bg-[#0B0B0B] text-white'
                    : 'text-[#52514E] hover:text-[#0B0B0B]'
                }`}
              >
                EN
              </button>
            </div>
          )}

          <a
            href={SITE_CONFIG.telegramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-slate-300 bg-white/90 hover:border-[#229ED9] hover:text-[#1D8AC0] px-3.5 py-2 text-xs font-semibold text-[#0B0B0B] transition-all"
          >
            <TelegramIcon className="w-3.5 h-3.5 text-[#229ED9]" />
            <span>{content.telegramBtn}</span>
          </a>

          <button
            type="button"
            onClick={onOpenWaitlist}
            className="inline-flex items-center gap-1.5 rounded-full bg-[#534AB7] hover:bg-[#41389B] text-white px-4 py-2 text-xs font-semibold shadow-sm transition-all cursor-pointer"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#EF9F27]" />
            <span>{content.waitlistBtn}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          className="md:hidden p-2 rounded-lg border border-slate-300 bg-white/80 text-[#0B0B0B]"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 py-4 space-y-3 shadow-lg">
          <div className="flex flex-col gap-2">
            {content.links.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="py-1.5 text-sm font-medium text-[#0B0B0B] hover:text-[#534AB7]"
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="pt-2 border-t border-slate-100 flex items-center justify-between gap-2">
            {SITE_CONFIG.showLanguageToggle && (
              <div className="inline-flex rounded-full bg-slate-100 p-0.5 text-xs font-semibold">
                <button
                  type="button"
                  onClick={() => onToggleLang('ru')}
                  className={`px-2.5 py-1 rounded-full ${
                    lang === 'ru' ? 'bg-[#0B0B0B] text-white' : 'text-[#52514E]'
                  }`}
                >
                  RU
                </button>
                <button
                  type="button"
                  onClick={() => onToggleLang('en')}
                  className={`px-2.5 py-1 rounded-full ${
                    lang === 'en' ? 'bg-[#0B0B0B] text-white' : 'text-[#52514E]'
                  }`}
                >
                  EN
                </button>
              </div>
            )}
            <div className="flex items-center gap-2">
              <a
                href={SITE_CONFIG.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 rounded-full border border-slate-300 px-3 py-1.5 text-xs font-semibold"
              >
                <TelegramIcon className="w-3.5 h-3.5 text-[#229ED9]" />
                {content.telegramBtn}
              </a>
              <button
                type="button"
                onClick={() => {
                  setMobileOpen(false);
                  onOpenWaitlist();
                }}
                className="inline-flex items-center gap-1 rounded-full bg-[#534AB7] text-white px-3.5 py-1.5 text-xs font-semibold"
              >
                {content.waitlistBtn}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
