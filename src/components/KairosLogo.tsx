import React from 'react';

interface KairosLogoProps {
  variant?: 'mark' | 'horizontal' | 'stacked';
  theme?: 'light' | 'dark';
  size?: number;
  className?: string;
}

export const KairosLogo: React.FC<KairosLogoProps> = ({
  variant = 'horizontal',
  theme = 'light',
  size = 36,
  className = '',
}) => {
  const textColor = theme === 'dark' ? '#FFFFFF' : '#0B0B0B';
  const subColor = theme === 'dark' ? '#94A3B8' : '#52514E';

  const mark = (
    <svg
      width={size}
      height={size}
      viewBox="0 0 140 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="shrink-0"
    >
      <circle cx="70" cy="70" r="64" fill="#534AB7" />
      <line
        x1="48"
        y1="40"
        x2="48"
        y2="100"
        stroke="#FFFFFF"
        strokeWidth="10"
        strokeLinecap="round"
      />
      <line
        x1="50"
        y1="72"
        x2="86"
        y2="44"
        stroke="#FFFFFF"
        strokeWidth="10"
        strokeLinecap="round"
      />
      <line
        x1="50"
        y1="72"
        x2="88"
        y2="100"
        stroke="#FFFFFF"
        strokeWidth="10"
        strokeLinecap="round"
      />
      <circle cx="96" cy="36" r="7.5" fill="#EF9F27" />
    </svg>
  );

  if (variant === 'mark') {
    return <span className={`inline-flex items-center ${className}`}>{mark}</span>;
  }

  if (variant === 'stacked') {
    return (
      <div className={`inline-flex flex-col items-center gap-1.5 ${className}`}>
        {mark}
        <span
          className="font-sans text-xl font-semibold tracking-wider"
          style={{ color: textColor }}
        >
          Kairos
        </span>
        <span className="text-[11px] tracking-wide" style={{ color: subColor }}>
          the right moment
        </span>
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center gap-2.5 ${className}`}>
      {mark}
      <div className="flex flex-col leading-none">
        <span
          className="font-sans text-lg font-bold tracking-tight"
          style={{ color: textColor }}
        >
          Kairos
        </span>
        <span
          className="text-[10px] font-medium tracking-wider uppercase"
          style={{ color: subColor }}
        >
          the right moment
        </span>
      </div>
    </div>
  );
};

export const TelegramIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M21.93 3.24a1.1 1.1 0 0 0-1.15-.16L2.42 10.37a1.08 1.08 0 0 0 .06 2.02l4.74 1.56 1.83 5.76a1.05 1.05 0 0 0 1.72.46l2.74-2.59 4.86 3.57a1.1 1.1 0 0 0 1.72-.66l2.9-16.1a1.1 1.1 0 0 0-.06-1.15ZM9.66 13.78l-.52 3.8-1.26-3.97 9.93-6.4-8.15 6.57Z" />
  </svg>
);
