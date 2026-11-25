export const SITE_CONFIG = {
  brandName: 'Kairos',
  taglineEn: 'the right moment',
  telegramUrl: 'https://t.me/kairos_ai_bot',
  telegramHandle: '@kairos_ai_bot',
  telegramChannelUrl: 'https://t.me/kairos_finance_ru',
  waitlistWebhookUrl: (import.meta.env.VITE_WAITLIST_WEBHOOK_URL as string | undefined) || '',
  supportEmail: 'hello@kairos-ai.ru',
  showLanguageToggle: true,
} as const;
