import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FeatureModule } from '../data/content';

interface FeatureDiagramsProps {
  type: FeatureModule['diagramType'];
  horizons: { label: string; projected: string; yieldRate: string }[];
}

export const FeatureDiagrams: React.FC<FeatureDiagramsProps> = ({ type, horizons }) => {
  const [horizonIdx, setHorizonIdx] = useState(1);
  const currentHorizon = horizons[horizonIdx] ?? horizons[0];

  return (
    <div className="relative w-full min-h-[370px] sm:min-h-[395px] max-w-[400px] mx-auto rounded-2xl bg-[#EAF0F8] border border-white/60 shadow-2xl p-5 sm:p-6 flex flex-col justify-between gap-3">
      {/* Contained atmospheric glow so parent never scrolls horizontally */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl overflow-hidden" aria-hidden="true">
        <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-[#534AB7]/12 blur-2xl" />
        <div className="absolute -bottom-12 -left-12 w-40 h-40 rounded-full bg-[#EF9F27]/16 blur-2xl" />
      </div>

      {type === 'cashflow' && (
        <div className="relative z-10 flex-1 flex flex-col items-center justify-between gap-3 py-1">
          <svg viewBox="0 0 260 210" className="w-full max-h-[210px]">
            <circle cx="130" cy="105" r="90" stroke="#CBD5E1" strokeWidth="1" strokeDasharray="4 4" fill="none" />
            <circle cx="130" cy="105" r="74" stroke="#534AB7" strokeOpacity="0.2" strokeWidth="14" fill="none" />
            <circle
              cx="130"
              cy="105"
              r="74"
              stroke="#534AB7"
              strokeWidth="14"
              strokeDasharray="300 500"
              strokeLinecap="round"
              transform="rotate(-90 130 105)"
              fill="none"
            />
            <circle
              cx="130"
              cy="105"
              r="52"
              stroke="#1E232B"
              strokeWidth="12"
              strokeDasharray="210 360"
              strokeLinecap="round"
              transform="rotate(20 130 105)"
              fill="none"
            />
            <circle
              cx="130"
              cy="105"
              r="33"
              stroke="#EF9F27"
              strokeWidth="10"
              strokeDasharray="135 230"
              strokeLinecap="round"
              transform="rotate(140 130 105)"
              fill="none"
            />
            <circle cx="130" cy="105" r="15" fill="#534AB7" />
            <circle cx="130" cy="105" r="5.5" fill="#EF9F27" />
          </svg>

          <div className="w-full grid grid-cols-3 gap-2">
            <div className="rounded-lg bg-white/95 px-2 py-1.5 border border-slate-200/80 text-center">
              <div className="text-[10px] font-semibold text-[#52514E]">Жильё</div>
              <div className="font-mono-num text-xs font-bold text-[#1E232B]">34%</div>
            </div>
            <div className="rounded-lg bg-white/95 px-2 py-1.5 border border-slate-200/80 text-center">
              <div className="text-[10px] font-semibold text-[#52514E]">Резерв</div>
              <div className="font-mono-num text-xs font-bold text-[#534AB7]">28%</div>
            </div>
            <div className="rounded-lg bg-white/95 px-2 py-1.5 border border-slate-200/80 text-center">
              <div className="text-[10px] font-semibold text-[#52514E]">Остаток</div>
              <div className="font-mono-num text-xs font-bold text-[#9A5B00]">+22%</div>
            </div>
          </div>
        </div>
      )}

      {type === 'savings' && (
        <div className="relative z-10 flex-1 flex items-center justify-center">
          <svg viewBox="0 0 330 250" className="w-full h-full max-h-[260px]">
            {[
              { y: 36, label: 'Подушка 21%', color: '#534AB7', val: '600 000 ₽' },
              { y: 92, label: 'Вклад 6 мес.', color: '#229ED9', val: '450 000 ₽' },
              { y: 148, label: 'Накопительный', color: '#10B981', val: '220 000 ₽' },
              { y: 204, label: 'ИИС-3 резерв', color: '#EF9F27', val: '212 900 ₽' },
            ].map((row) => (
              <g key={row.label}>
                <path
                  d={`M 68 122 C 128 122, 128 ${row.y}, 190 ${row.y}`}
                  stroke={row.color}
                  strokeWidth="3"
                  strokeOpacity="0.7"
                  fill="none"
                />
                <circle cx="190" cy={row.y} r="5.5" fill={row.color} />
                <rect x="200" y={row.y - 18} width="120" height="36" rx="8" fill="#FFFFFF" stroke="#CBD5E1" />
                <text x="209" y={row.y - 3} className="fill-[#52514E] text-[9.5px] font-semibold">
                  {row.label}
                </text>
                <text x="209" y={row.y + 11} className="fill-[#0B0B0B] text-[10.5px] font-bold">
                  {row.val}
                </text>
              </g>
            ))}
            <circle cx="48" cy="122" r="26" fill="#1E232B" />
            <circle cx="48" cy="122" r="9.5" fill="#EF9F27" />
            <text x="48" y="164" textAnchor="middle" className="fill-[#0B0B0B] text-[10px] font-bold">
              ДОХОД ₽
            </text>
          </svg>
        </div>
      )}

      {type === 'portfolio' && (
        <div className="relative z-10 flex-1 flex flex-col items-center justify-between gap-2 py-1">
          <svg viewBox="0 0 240 200" className="w-full max-h-[200px]">
            <g transform="translate(120,100)">
              <path d="M0,0 L0,-88 A88,88 0 0,1 83,-27 Z" fill="#534AB7" fillOpacity="0.92" stroke="#EAF0F8" strokeWidth="3" />
              <path d="M0,0 L83,-27 A88,88 0 0,1 52,71 Z" fill="#229ED9" fillOpacity="0.86" stroke="#EAF0F8" strokeWidth="3" />
              <path d="M0,0 L52,71 A88,88 0 0,1 -71,52 Z" fill="#EF9F27" fillOpacity="0.92" stroke="#EAF0F8" strokeWidth="3" />
              <path d="M0,0 L-71,52 A88,88 0 0,1 0,-88 Z" fill="#1E232B" fillOpacity="0.88" stroke="#EAF0F8" strokeWidth="3" />
              <circle cx="0" cy="0" r="36" fill="#EAF0F8" />
              <circle cx="0" cy="0" r="17" fill="#534AB7" />
              <circle cx="7" cy="-7" r="4" fill="#EF9F27" />

              <text x="36" y="-48" textAnchor="middle" dominantBaseline="central" className="fill-white text-[11px] font-bold">
                35%
              </text>
              <text x="55" y="21" textAnchor="middle" dominantBaseline="central" className="fill-white text-[11px] font-bold">
                25%
              </text>
              <text x="-8" y="61" textAnchor="middle" dominantBaseline="central" className="fill-[#0B0B0B] text-[11px] font-bold">
                22%
              </text>
              <text x="-52" y="-26" textAnchor="middle" dominantBaseline="central" className="fill-white text-[11px] font-bold">
                18%
              </text>
            </g>
          </svg>

          <div className="w-full grid grid-cols-2 gap-1.5 text-[11px]">
            <div className="flex items-center gap-2 rounded-lg bg-white/95 px-2.5 py-1.5 border border-slate-200/80">
              <span className="w-2.5 h-2.5 rounded-full bg-[#534AB7] shrink-0" />
              <span className="font-semibold text-[#0B0B0B] truncate">ОФЗ • 35%</span>
            </div>
            <div className="flex items-center gap-2 rounded-lg bg-white/95 px-2.5 py-1.5 border border-slate-200/80">
              <span className="w-2.5 h-2.5 rounded-full bg-[#229ED9] shrink-0" />
              <span className="font-semibold text-[#0B0B0B] truncate">Фонды • 25%</span>
            </div>
            <div className="flex items-center gap-2 rounded-lg bg-white/95 px-2.5 py-1.5 border border-slate-200/80">
              <span className="w-2.5 h-2.5 rounded-full bg-[#EF9F27] shrink-0" />
              <span className="font-semibold text-[#0B0B0B] truncate">Акции РФ • 22%</span>
            </div>
            <div className="flex items-center gap-2 rounded-lg bg-white/95 px-2.5 py-1.5 border border-slate-200/80">
              <span className="w-2.5 h-2.5 rounded-full bg-[#1E232B] shrink-0" />
              <span className="font-semibold text-[#0B0B0B] truncate">Защита • 18%</span>
            </div>
          </div>
        </div>
      )}

      {type === 'timing' && (
        <div className="relative z-10 flex-1 flex items-center justify-center">
          <svg viewBox="0 0 330 250" className="w-full h-full max-h-[260px]">
            <path d="M24 50 C 120 50, 136 118, 232 118" stroke="#534AB7" strokeWidth="16" strokeOpacity="0.28" fill="none" />
            <path d="M24 118 C 120 118, 136 118, 232 118" stroke="#534AB7" strokeWidth="12" strokeOpacity="0.68" fill="none" />
            <path d="M24 186 C 120 186, 136 118, 232 118" stroke="#EF9F27" strokeWidth="11" strokeOpacity="0.85" fill="none" />
            <circle cx="242" cy="118" r="28" fill="#1E232B" />
            <circle cx="242" cy="118" r="12" fill="#EF9F27" />
            <rect x="10" y="36" width="98" height="26" rx="7" fill="#FFFFFF" stroke="#CBD5E1" />
            <text x="59" y="53" textAnchor="middle" className="fill-[#0B0B0B] text-[9.5px] font-bold">Ставка ЦБ</text>
            <rect x="10" y="105" width="98" height="26" rx="7" fill="#FFFFFF" stroke="#CBD5E1" />
            <text x="59" y="122" textAnchor="middle" className="fill-[#0B0B0B] text-[9.5px] font-bold">Дивиденды</text>
            <rect x="10" y="173" width="98" height="26" rx="7" fill="#FFFFFF" stroke="#CBD5E1" />
            <text x="59" y="190" textAnchor="middle" className="fill-[#0B0B0B] text-[9.5px] font-bold">Ребаланс</text>
            <text x="242" y="170" textAnchor="middle" className="fill-[#534AB7] text-[10px] font-bold">
              ТОЧКА ВХОДА
            </text>
          </svg>
        </div>
      )}

      {type === 'tax' && (
        <div className="relative z-10 flex-1 flex flex-col justify-center gap-3">
          <div className="rounded-xl bg-white p-3.5 border border-slate-200/80 shadow-xs">
            <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-semibold text-[#52514E] mb-2">
              <span>ИИС-3 • Лимит года</span>
              <span className="font-mono-num text-[#534AB7]">400 000 / 400 000 ₽</span>
            </div>
            <div className="grid grid-cols-10 gap-1.5">
              {Array.from({ length: 10 }).map((_, idx) => (
                <div
                  key={idx}
                  className="h-9 rounded-md"
                  style={{
                    backgroundColor:
                      idx < 7 ? '#534AB7' : idx < 9 ? '#EF9F27' : '#CBD5E1',
                  }}
                />
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-xl bg-[#1E232B] text-white p-3.5">
              <div className="text-[10px] uppercase tracking-wider text-slate-300">Вычет 13%</div>
              <div className="font-mono-num text-lg font-bold text-[#EF9F27] mt-1">+52 000 ₽</div>
            </div>
            <div className="rounded-xl bg-white p-3.5 border border-slate-200/80">
              <div className="text-[10px] uppercase tracking-wider text-[#52514E]">НДФЛ 15%</div>
              <div className="font-mono-num text-lg font-bold text-[#0B0B0B] mt-1">+60 000 ₽</div>
            </div>
          </div>
        </div>
      )}

      {type === 'sandbox' && (
        <div className="relative z-10 flex-1 flex flex-col justify-between gap-2">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#534AB7]">
              Горизонт
            </span>
            <div className="inline-flex items-center rounded-full bg-white p-1 border border-slate-200 shadow-xs">
              {horizons.map((h, i) => (
                <button
                  key={h.label}
                  type="button"
                  onClick={() => setHorizonIdx(i)}
                  className={`whitespace-nowrap px-2.5 py-0.5 rounded-full text-[11px] font-semibold transition-colors cursor-pointer ${
                    i === horizonIdx
                      ? 'bg-[#534AB7] text-white'
                      : 'text-[#52514E] hover:text-[#0B0B0B]'
                  }`}
                >
                  {h.label}
                </button>
              ))}
            </div>
          </div>

          <svg viewBox="0 0 300 160" className="w-full h-36 sm:h-40">
            <circle cx="150" cy="80" r="68" stroke="#CBD5E1" strokeWidth="1.5" strokeDasharray="5 5" fill="none" />
            <motion.circle
              cx="150"
              cy="80"
              animate={{ r: 38 + horizonIdx * 12 }}
              transition={{ type: 'spring', stiffness: 220, damping: 24 }}
              stroke="#534AB7"
              strokeWidth="11"
              strokeOpacity="0.88"
              fill="none"
            />
            <circle cx="150" cy="80" r="21" fill="#1E232B" />
            <circle cx="150" cy="80" r="7" fill="#EF9F27" />
            <motion.circle
              animate={{ cx: 150 + (38 + horizonIdx * 12) }}
              transition={{ type: 'spring', stiffness: 220, damping: 24 }}
              cy="80"
              r="7"
              fill="#EF9F27"
              stroke="#FFFFFF"
              strokeWidth="2"
            />
          </svg>

          <div className="rounded-xl bg-white border border-slate-200/80 px-3.5 py-2.5 flex items-center justify-between gap-2 shadow-xs">
            <div className="min-w-0">
              <div className="text-[10px] font-semibold uppercase tracking-wider text-[#52514E]">
                Прогноз капитала
              </div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentHorizon.projected}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.18 }}
                  className="font-mono-num text-lg sm:text-xl font-bold text-[#0B0B0B]"
                >
                  {currentHorizon.projected}
                </motion.div>
              </AnimatePresence>
            </div>
            <span className="shrink-0 rounded-full bg-[#FEF4E2] text-[#9A5B00] font-mono-num text-xs font-bold px-3 py-1">
              {currentHorizon.yieldRate}
            </span>
          </div>
        </div>
      )}

      {/* Bottom caption bar on every light tile */}
      <div className="relative z-10 pt-2 border-t border-slate-300/60 flex items-center justify-between gap-2 text-[11px] font-medium text-[#52514E]">
        <span>Kairos Engine • RUB</span>
        <span className="inline-flex items-center gap-1 font-semibold text-[#534AB7] shrink-0">
          <span className="w-1.5 h-1.5 rounded-full bg-[#EF9F27]" />
          Live model
        </span>
      </div>
    </div>
  );
};
