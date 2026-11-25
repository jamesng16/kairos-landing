import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowRight, Sparkles, TrendingUp, ShieldCheck } from 'lucide-react';
import { SiteContent } from '../data/content';
import { SITE_CONFIG } from '../config/site';
import { KairosLogo, TelegramIcon } from './KairosLogo';

interface HeroSectionProps {
  content: SiteContent['hero'];
  onOpenWaitlist: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ content, onOpenWaitlist }) => {
  const prefersReduced = useReducedMotion();

  return (
    <section
      id="top"
      className="relative overflow-hidden kairos-hero-sky pt-24 pb-16 sm:pt-28 sm:pb-20 border-b border-slate-200/80"
    >
      {/* Atmospheric Mountain Peak Backdrop seamlessly masked into sky */}
      <div
        className="pointer-events-none absolute inset-x-0 top-12 h-[440px] sm:h-[520px] flex justify-center overflow-hidden"
        aria-hidden="true"
      >
        <img
          src={`${import.meta.env.BASE_URL}images/hero-mountain.jpg`}
          alt=""
          className="w-full max-w-[1380px] h-full object-cover object-center opacity-85"
          style={{
            maskImage:
              'radial-gradient(ellipse 75% 75% at 50% 48%, black 38%, transparent 88%)',
            WebkitMaskImage:
              'radial-gradient(ellipse 75% 75% at 50% 48%, black 38%, transparent 88%)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top editorial row: left micro-block + centerpiece MacBook Pro + right floating TG card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left micro-copy */}
          <motion.div
            initial={prefersReduced ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-3 text-left space-y-2.5 self-start lg:pt-8"
          >
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#534AB7]">
              <span className="relative flex h-2 w-2">
                <span className="animate-kairos-pulse absolute inline-flex h-full w-full rounded-full bg-[#EF9F27]" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#EF9F27]" />
              </span>
              {content.sideEyebrow}
            </div>
            <p className="text-sm text-[#3F444C] leading-relaxed bg-white/55 backdrop-blur-xs rounded-xl p-2.5 lg:p-0 lg:bg-transparent lg:backdrop-blur-none">
              {content.sideCopy}
            </p>
            <a
              href="#features"
              className="inline-flex items-center gap-1 text-xs font-semibold text-[#0B0B0B] hover:text-[#534AB7] transition-colors"
            >
              <span>{content.sideLink}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </motion.div>

          {/* Centerpiece MacBook Pro with Notch + 3D Lid-Opening Animation */}
          <div className="lg:col-span-6 relative flex flex-col items-center pb-8 sm:pb-12">
            <div
              className="relative w-full max-w-[540px] animate-kairos-float"
              style={{ perspective: '1400px' }}
            >
              {/* Animated MacBook Display Lid opening from closed angle */}
              <motion.div
                initial={
                  prefersReduced
                    ? false
                    : { rotateX: -82, opacity: 0.72, scale: 0.96 }
                }
                animate={{ rotateX: 0, opacity: 1, scale: 1 }}
                transition={{
                  duration: 1.05,
                  delay: 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                style={{
                  transformOrigin: 'bottom center',
                  transformStyle: 'preserve-3d',
                }}
                className="relative z-10 rounded-t-[20px] rounded-b-[6px] bg-[#11141A] p-[7px] sm:p-[9px] ring-1 ring-white/20 shadow-[0_28px_70px_-15px_rgba(15,23,42,0.45)]"
              >
                {/* Inner Glass Screen */}
                <div className="relative rounded-[12px] bg-white overflow-hidden">
                  {/* Subtle Screen Wake Glow as lid opens */}
                  {!prefersReduced && (
                    <motion.div
                      initial={{ opacity: 0.85 }}
                      animate={{ opacity: 0 }}
                      transition={{ duration: 0.75, delay: 0.3 }}
                      className="pointer-events-none absolute inset-0 z-30 bg-gradient-to-br from-[#141824] via-[#27225A] to-[#0F1218]"
                      aria-hidden="true"
                    />
                  )}

                  {/* macOS Menu Bar + Signature MacBook Notch ("tai thỏ") */}
                  <div className="relative h-7 bg-[#F4F6FA] border-b border-slate-200/80 px-3.5 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <KairosLogo variant="mark" size={14} />
                      <span className="text-[10px] font-semibold text-[#0B0B0B]">
                        Kairos
                      </span>
                    </div>

                    {/* MacBook Pro Notch */}
                    <div
                      className="absolute top-0 left-1/2 -translate-x-1/2 w-24 sm:w-28 h-[18px] bg-[#11141A] rounded-b-[9px] flex items-center justify-center gap-1.5 z-20"
                      aria-hidden="true"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1E293B] ring-1 ring-[#475569]/60" />
                      <span className="w-1 h-1 rounded-full bg-[#EF9F27]/85" />
                    </div>

                    <div className="flex items-center gap-1.5">
                      <span className="inline-flex items-center gap-1 rounded-full bg-[#FEF4E2] px-2 py-0.5 text-[9.5px] font-semibold text-[#9A5B00]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#EF9F27]" />
                        LIVE • RUB
                      </span>
                    </div>
                  </div>

                  {/* Dashboard Body (wakes smoothly after lid opens) */}
                  <motion.div
                    initial={prefersReduced ? false : { opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, delay: 0.42, ease: [0.22, 1, 0.36, 1] }}
                    className="p-4 sm:p-5 space-y-4 bg-gradient-to-br from-white via-[#FAFBFD] to-[#F1F0FA]"
                  >
                    <div className="flex flex-wrap items-end justify-between gap-3">
                      <div>
                        <div className="text-[11px] font-medium text-[#52514E]">
                          {content.mockup.balanceLabel}
                        </div>
                        <div className="font-mono-num text-2xl sm:text-3xl font-bold text-[#0B0B0B] tracking-tight">
                          {content.mockup.balanceValue}
                        </div>
                      </div>
                      <div className="inline-flex items-center gap-1 rounded-full bg-[#EEEDFA] text-[#534AB7] px-2.5 py-1 text-xs font-semibold font-mono-num">
                        <TrendingUp className="w-3.5 h-3.5" />
                        {content.mockup.delta}
                      </div>
                    </div>

                    {/* Mini Bar + Reserve Card */}
                    <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-end pt-1">
                      <div className="sm:col-span-7 flex items-end gap-1.5 h-24 px-2.5 pt-2 pb-1.5 rounded-xl bg-white border border-slate-200/70">
                        {[34, 42, 38, 52, 58, 55, 68, 74, 71, 84, 92, 100].map((h, i) => (
                          <div key={i} className="flex-1 h-full flex flex-col justify-end items-center">
                            <div
                              className="w-full rounded-t-sm transition-all"
                              style={{
                                height: `${Math.round(h * 0.85)}%`,
                                backgroundColor:
                                  i === 11
                                    ? '#EF9F27'
                                    : i >= 8
                                    ? '#534AB7'
                                    : 'rgba(83, 74, 183, 0.28)',
                              }}
                            />
                          </div>
                        ))}
                      </div>

                      <div className="sm:col-span-5 rounded-xl bg-[#1E232B] text-white p-3 space-y-1.5">
                        <div className="flex items-center justify-between gap-1 text-[10px] text-slate-300">
                          <span className="truncate">{content.mockup.reserveLabel}</span>
                          <ShieldCheck className="w-3.5 h-3.5 text-[#EF9F27] shrink-0" />
                        </div>
                        <div className="font-mono-num text-xs font-semibold text-white">
                          {content.mockup.reserveValue}
                        </div>
                        <div className="w-full h-1.5 rounded-full bg-white/15 overflow-hidden">
                          <div className="h-full w-4/5 rounded-full bg-gradient-to-r from-[#534AB7] to-[#EF9F27]" />
                        </div>
                      </div>
                    </div>

                    {/* Right Moment AI Banner */}
                    <div className="rounded-xl border border-[#534AB7]/20 bg-[#EEEDFA]/80 px-3.5 py-2.5 flex items-start gap-2.5">
                      <span className="mt-0.5 p-1 rounded-lg bg-[#534AB7] text-white shrink-0">
                        <Sparkles className="w-3.5 h-3.5 text-[#EF9F27]" />
                      </span>
                      <div className="text-left">
                        <div className="text-[11px] font-bold text-[#534AB7] uppercase tracking-wide">
                          {content.mockup.signalTitle}
                        </div>
                        <p className="text-xs text-[#1E232B] leading-snug">
                          {content.mockup.signalText}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* MacBook Aluminum Unibody Base with Thumb-Opening Indentation */}
              <div className="relative z-20 mx-auto w-[108%] -ml-[4%] h-3.5 rounded-b-[14px] rounded-t-[2px] bg-gradient-to-b from-[#D5DCE6] via-[#94A3B8] to-[#64748B] shadow-lg flex justify-center items-start">
                <div className="w-16 sm:w-20 h-1.5 rounded-b-md bg-[#475569]/65" />
              </div>
            </div>
          </div>

          {/* Right Floating Telegram Preview Card */}
          <motion.div
            initial={prefersReduced ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.48, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-3 flex justify-center lg:justify-end"
          >
            <a
              href={SITE_CONFIG.telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full max-w-[265px] rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-lg p-3.5 hover:border-[#534AB7]/50 hover:shadow-xl hover:-translate-y-0.5 transition-all"
            >
              <div className="flex items-center justify-between gap-2 mb-2">
                <div className="flex items-center gap-2">
                  <span className="w-7 h-7 rounded-full bg-[#229ED9] text-white flex items-center justify-center shrink-0">
                    <TelegramIcon className="w-3.5 h-3.5" />
                  </span>
                  <div>
                    <div className="text-xs font-bold text-[#0B0B0B]">
                      {content.mockup.tgSender}
                    </div>
                    <div className="text-[10px] text-[#52514E]">{SITE_CONFIG.telegramHandle}</div>
                  </div>
                </div>
                <span className="text-[10px] font-medium text-[#534AB7]">
                  {content.mockup.tgTime}
                </span>
              </div>
              <p className="text-xs text-[#2A2E35] leading-relaxed bg-[#F4F7FB] rounded-xl p-2.5 border border-slate-100">
                {content.mockup.tgMessage}
              </p>
              <div className="mt-2.5 flex items-center justify-between text-[11px] font-semibold text-[#534AB7] group-hover:translate-x-0.5 transition-transform">
                <span>{content.telegramCta}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </a>
          </motion.div>
        </div>

        {/* Center Massive Condensed Editorial Headline */}
        <motion.div
          initial={prefersReduced ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 mt-6 sm:mt-8 text-center max-w-4xl mx-auto"
        >
          <h1 className="font-display font-bold uppercase tracking-tight text-[#0B0B0B] text-4xl sm:text-6xl lg:text-[74px] leading-[1.02]">
            <span className="block">{content.headlineBefore}</span>
            <span className="inline-flex flex-wrap items-center justify-center gap-3 mt-1.5">
              <span className="inline-flex items-center justify-center w-14 h-10 sm:w-20 sm:h-12 rounded-xl bg-gradient-to-br from-[#534AB7] via-[#7A71D8] to-[#EF9F27] shadow-md align-middle">
                <svg width="28" height="28" viewBox="0 0 140 140" fill="none" aria-hidden="true">
                  <line x1="46" y1="36" x2="46" y2="104" stroke="#FFFFFF" strokeWidth="14" strokeLinecap="round" />
                  <line x1="48" y1="72" x2="90" y2="40" stroke="#FFFFFF" strokeWidth="14" strokeLinecap="round" />
                  <line x1="48" y1="72" x2="92" y2="104" stroke="#FFFFFF" strokeWidth="14" strokeLinecap="round" />
                  <circle cx="98" cy="34" r="9" fill="#EF9F27" />
                </svg>
              </span>
              <span>{content.headlineAfter}</span>
            </span>
          </h1>

          <p className="mt-5 max-w-2xl mx-auto text-sm sm:text-base text-[#52514E] leading-relaxed">
            {content.subtitle}
          </p>

          {/* Dual Primary Conversion CTAs: Waitlist + Telegram */}
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3.5">
            <button
              type="button"
              onClick={onOpenWaitlist}
              className="inline-flex items-center gap-2 rounded-full bg-[#534AB7] hover:bg-[#41389B] active:scale-[0.98] text-white px-7 py-3.5 text-sm font-semibold shadow-lg shadow-[#534AB7]/25 transition-all cursor-pointer"
            >
              <span className="w-2 h-2 rounded-full bg-[#EF9F27]" />
              <span>{content.waitlistCta}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={SITE_CONFIG.telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white hover:bg-slate-50 active:scale-[0.98] text-[#0B0B0B] border border-slate-300 hover:border-[#229ED9] px-7 py-3.5 text-sm font-semibold shadow-sm transition-all"
            >
              <TelegramIcon className="w-4 h-4 text-[#229ED9]" />
              <span>{content.telegramCta}</span>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </a>
          </div>
        </motion.div>

        {/* Monochrome Ecosystem Compatibility Strip */}
        <div className="mt-14 pt-8 border-t border-slate-200/80 text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#52514E] mb-5">
            {content.trustLabel}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 opacity-75">
            {content.trustItems.map((item) => (
              <span
                key={item}
                className="font-mono-num text-xs sm:text-sm font-bold tracking-widest text-[#334155]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
