import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, CheckCircle2, X } from 'lucide-react';
import { SiteContent } from '../data/content';
import { SITE_CONFIG } from '../config/site';
import { KairosLogo, TelegramIcon } from './KairosLogo';

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
  content: SiteContent['waitlistModal'];
}

interface StoredSubmission {
  name: string;
  contact: string;
  goal: string;
  queueNumber: number;
  createdAt: string;
}

const STORAGE_KEY = 'kairos_waitlist_submissions_v1';

export const WaitlistModal: React.FC<WaitlistModalProps> = ({
  isOpen,
  onClose,
  content,
}) => {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [selectedGoal, setSelectedGoal] = useState(content.goals[0] ?? '');
  const [consent, setConsent] = useState(true);
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submittedQueue, setSubmittedQueue] = useState<number | null>(null);

  useEffect(() => {
    setSelectedGoal(content.goals[0] ?? '');
  }, [content.goals]);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen, onClose]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const trimmedContact = contact.trim();
    if (!trimmedContact || trimmedContact.length < 3) {
      setError(content.errorEmptyContact);
      return;
    }
    if (!consent) {
      setError(content.errorConsent);
      return;
    }

    setSubmitting(true);

    try {
      const existingRaw = localStorage.getItem(STORAGE_KEY);
      const existing: StoredSubmission[] = existingRaw ? JSON.parse(existingRaw) : [];
      const queueNumber = 148 + existing.length + 1;

      const payload: StoredSubmission = {
        name: name.trim(),
        contact: trimmedContact,
        goal: selectedGoal,
        queueNumber,
        createdAt: new Date().toISOString(),
      };

      if (SITE_CONFIG.waitlistWebhookUrl) {
        await fetch(SITE_CONFIG.waitlistWebhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
      }

      localStorage.setItem(STORAGE_KEY, JSON.stringify([...existing, payload]));
      setSubmittedQueue(queueNumber);
    } catch {
      setSubmittedQueue(152);
    } finally {
      setSubmitting(false);
    }
  };

  const resetAndClose = () => {
    setSubmittedQueue(null);
    setError('');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0B0B0B]/65 backdrop-blur-xs"
          role="dialog"
          aria-modal="true"
          aria-labelledby="waitlist-modal-title"
          onClick={resetAndClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 8 }}
            transition={{ type: 'spring', stiffness: 320, damping: 28 }}
            className="relative w-full max-w-lg max-h-[92vh] overflow-y-auto rounded-3xl bg-white p-6 sm:p-8 shadow-2xl border border-slate-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={resetAndClose}
              aria-label={content.closeBtn}
              className="absolute top-5 right-5 w-9 h-9 rounded-full border border-slate-200 hover:border-slate-400 flex items-center justify-center text-[#52514E] hover:text-[#0B0B0B] transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            {submittedQueue !== null ? (
              <div className="py-4 text-center space-y-5">
                <div className="mx-auto w-14 h-14 rounded-full bg-[#EEEDFA] flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8 text-[#534AB7]" />
                </div>

                <div className="space-y-2">
                  <h3
                    id="waitlist-modal-title"
                    className="text-2xl font-bold text-[#0B0B0B]"
                  >
                    {content.successTitle}
                  </h3>
                  <p className="text-sm text-[#52514E] leading-relaxed">
                    {content.successBody}
                  </p>
                </div>

                <div className="mx-auto max-w-xs rounded-2xl bg-[#F6F0EA] border border-[#E6DDD3] p-4">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-[#52514E]">
                    {content.successQueueLabel}
                  </div>
                  <div className="font-mono-num text-3xl font-bold text-[#534AB7] mt-1">
                    #{submittedQueue}
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={SITE_CONFIG.telegramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-[#229ED9] hover:bg-[#1B8BC0] text-white px-6 py-3 text-xs font-semibold uppercase tracking-wider transition-colors"
                  >
                    <TelegramIcon className="w-4 h-4" />
                    <span>{content.successTgCta}</span>
                  </a>
                  <button
                    type="button"
                    onClick={resetAndClose}
                    className="w-full sm:w-auto rounded-full border border-slate-300 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#0B0B0B] hover:bg-slate-50 cursor-pointer"
                  >
                    {content.closeBtn}
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2 pr-8">
                  <div className="flex items-center gap-2">
                    <KairosLogo variant="mark" size={24} />
                    <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#534AB7]">
                      {content.eyebrow}
                    </span>
                  </div>
                  <h3
                    id="waitlist-modal-title"
                    className="text-2xl font-bold tracking-tight text-[#0B0B0B]"
                  >
                    {content.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#52514E] leading-relaxed">
                    {content.subtitle}
                  </p>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-[#0B0B0B]">
                    {content.nameLabel}
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={content.namePlaceholder}
                    className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm text-[#0B0B0B] focus:outline-none focus:border-[#534AB7] focus:ring-2 focus:ring-[#534AB7]/15"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-[#0B0B0B]">
                    {content.contactLabel}
                  </label>
                  <input
                    type="text"
                    required
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    placeholder={content.contactPlaceholder}
                    className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm text-[#0B0B0B] focus:outline-none focus:border-[#534AB7] focus:ring-2 focus:ring-[#534AB7]/15"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-semibold text-[#0B0B0B]">
                    {content.goalLabel}
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {content.goals.map((goal) => {
                      const active = selectedGoal === goal;
                      return (
                        <button
                          key={goal}
                          type="button"
                          onClick={() => setSelectedGoal(goal)}
                          className={`text-left rounded-xl border px-3 py-2 text-xs font-medium transition-all cursor-pointer ${
                            active
                              ? 'border-[#534AB7] bg-[#EEEDFA] text-[#534AB7] font-semibold'
                              : 'border-slate-200 bg-white text-[#52514E] hover:border-slate-300'
                          }`}
                        >
                          {goal}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <label className="flex items-start gap-2.5 pt-1 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    className="mt-0.5 rounded border-slate-300 text-[#534AB7] focus:ring-[#534AB7]"
                  />
                  <span className="text-[11px] text-[#52514E] leading-snug">
                    {content.consent}
                  </span>
                </label>

                {error && (
                  <p className="text-xs font-medium text-red-600">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#534AB7] hover:bg-[#41389B] disabled:opacity-60 text-white px-6 py-3.5 text-xs font-semibold uppercase tracking-wider shadow-md transition-all cursor-pointer"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#EF9F27]" />
                  <span>{submitting ? content.submitting : content.submitBtn}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
