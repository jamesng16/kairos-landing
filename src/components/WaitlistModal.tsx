import React, { useState, useEffect, useRef, useId, useCallback } from 'react';
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

let cachedDisplayTransitionSupport: boolean | undefined;

function canTransitionDisplay(): boolean {
  if (cachedDisplayTransitionSupport !== undefined) return cachedDisplayTransitionSupport;
  if (
    typeof window === 'undefined' ||
    !window.CSS?.supports?.('transition-behavior', 'allow-discrete') ||
    !document.body
  ) {
    return false;
  }
  const probe = document.createElement('div');
  probe.style.cssText = 'transition: display 1s allow-discrete !important; display: block;';
  document.body.appendChild(probe);
  getComputedStyle(probe).display;
  probe.style.display = 'none';
  cachedDisplayTransitionSupport = getComputedStyle(probe).display === 'block';
  probe.remove();
  return cachedDisplayTransitionSupport;
}

function supportsTopLayerExit(): boolean {
  if (typeof window === 'undefined') return false;
  return Boolean(window.CSS?.supports?.('overlay', 'auto')) && canTransitionDisplay();
}

export const WaitlistModal: React.FC<WaitlistModalProps> = ({
  isOpen,
  onClose,
  content,
}) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const contactInputRef = useRef<HTMLInputElement>(null);
  const closingRef = useRef(false);
  const announceTimerRef = useRef<number | undefined>(undefined);

  const uid = useId();
  const titleId = `${uid}-title`;
  const nameId = `${uid}-name`;
  const contactId = `${uid}-contact`;
  const hintId = `${uid}-hint`;
  const errorId = `${uid}-error`;

  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [selectedGoal, setSelectedGoal] = useState(content.goals[0] ?? '');
  const [consent, setConsent] = useState(true);
  const [contactInvalid, setContactInvalid] = useState(false);
  const [consentError, setConsentError] = useState('');
  const [liveAnnouncement, setLiveAnnouncement] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submittedQueue, setSubmittedQueue] = useState<number | null>(null);

  useEffect(() => {
    setSelectedGoal(content.goals[0] ?? '');
  }, [content.goals]);

  const closeTopLayer = useCallback(async () => {
    const dialog = dialogRef.current;
    if (!dialog || !dialog.open || closingRef.current) return;
    closingRef.current = true;

    if (!supportsTopLayerExit()) {
      dialog.setAttribute('data-closing', '');
      const animations = dialog.getAnimations({ subtree: true });
      if (animations.length > 0) {
        await Promise.race([
          Promise.allSettled(animations.map((a) => a.finished)),
          new Promise<void>((resolve) => window.setTimeout(resolve, 600)),
        ]);
      }
      dialog.removeAttribute('data-closing');
    }

    if (dialog.open) {
      dialog.close();
    }
    closingRef.current = false;
  }, []);

  // Sync React open prop with native top-layer showModal()
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen && !dialog.open) {
      dialog.removeAttribute('data-closing');
      dialog.showModal();
    } else if (!isOpen && dialog.open) {
      void closeTopLayer();
    }
  }, [isOpen, closeTopLayer]);

  // Handle native close, cancel (Esc / closedby light-dismiss), and Safari pointer fallback
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const handleCancel = (e: Event) => {
      e.preventDefault();
      void closeTopLayer();
    };

    const handleClose = () => {
      dialog.returnValue = '';
      setSubmittedQueue(null);
      setContactInvalid(false);
      setConsentError('');
      setLiveAnnouncement('');
      onClose();
    };

    dialog.addEventListener('cancel', handleCancel);
    dialog.addEventListener('close', handleClose);

    // Fallback light-dismiss when closedBy is unsupported (require press AND release outside)
    let cleanupPointerFallback: (() => void) | undefined;
    if (!('closedBy' in HTMLDialogElement.prototype)) {
      let pressedOutside = false;
      const isOutside = (e: PointerEvent) => {
        const r = dialog.getBoundingClientRect();
        return (
          e.clientX < r.left ||
          e.clientX > r.right ||
          e.clientY < r.top ||
          e.clientY > r.bottom
        );
      };
      const onPointerDown = (e: PointerEvent) => {
        pressedOutside = isOutside(e);
      };
      const onPointerUp = (e: PointerEvent) => {
        if (pressedOutside && isOutside(e)) {
          void closeTopLayer();
        }
        pressedOutside = false;
      };
      dialog.addEventListener('pointerdown', onPointerDown);
      dialog.addEventListener('pointerup', onPointerUp);
      cleanupPointerFallback = () => {
        dialog.removeEventListener('pointerdown', onPointerDown);
        dialog.removeEventListener('pointerup', onPointerUp);
      };
    }

    return () => {
      dialog.removeEventListener('cancel', handleCancel);
      dialog.removeEventListener('close', handleClose);
      cleanupPointerFallback?.();
      window.clearTimeout(announceTimerRef.current);
    };
  }, [closeTopLayer, onClose]);

  const syncContactValidity = (announce: boolean) => {
    const el = contactInputRef.current;
    if (!el) return true;

    const supportsUserInvalid =
      typeof window !== 'undefined' &&
      (window.CSS?.supports?.('selector(:user-invalid)') ?? false);
    const invalid = supportsUserInvalid
      ? el.matches(':user-invalid')
      : !el.validity.valid;

    if (!supportsUserInvalid) {
      el.classList.toggle('user-invalid-fallback', invalid);
      el.classList.toggle('user-valid-fallback', !invalid && el.value.length > 0);
    }

    setContactInvalid(invalid);

    if (invalid && announce) {
      window.clearTimeout(announceTimerRef.current);
      setLiveAnnouncement('');
      announceTimerRef.current = window.setTimeout(() => {
        setLiveAnnouncement(
          `${content.contactLabel}: ${content.errorLabel}: ${content.errorEmptyContact}`
        );
      }, 500);
    } else if (!invalid) {
      window.clearTimeout(announceTimerRef.current);
      setLiveAnnouncement('');
    }

    return !invalid;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setConsentError('');

    const el = contactInputRef.current;
    const isContactOk = el ? el.checkValidity() : contact.trim().length >= 3;
    if (!isContactOk) {
      setContactInvalid(true);
      el?.classList.add('user-invalid-fallback');
      el?.focus();
      return;
    }

    if (!consent) {
      setConsentError(content.errorConsent);
      return;
    }

    setSubmitting(true);

    try {
      const existingRaw = localStorage.getItem(STORAGE_KEY);
      const existing: StoredSubmission[] = existingRaw ? JSON.parse(existingRaw) : [];
      const queueNumber = 148 + existing.length + 1;

      const payload: StoredSubmission = {
        name: name.trim(),
        contact: contact.trim(),
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

  const handleCloseClick = () => {
    void closeTopLayer();
  };

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby={titleId}
      {...({ closedby: 'any' } as Record<string, string>)}
      className="kairos-dialog m-auto w-[calc(100%-2rem)] max-w-lg max-h-[90dvh] overflow-y-auto rounded-3xl bg-white p-6 sm:p-8 shadow-2xl border border-slate-200 text-[#0B0B0B]"
    >
      {/* Polite screen-reader announcer for blurred field validation */}
      <div aria-live="polite" className="visually-hidden">
        {liveAnnouncement}
      </div>

      <button
        type="button"
        onClick={handleCloseClick}
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
            <h1 id={titleId} className="text-2xl font-bold text-[#0B0B0B]">
              {content.successTitle}
            </h1>
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
              onClick={handleCloseClick}
              className="w-full sm:w-auto rounded-full border border-slate-300 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#0B0B0B] hover:bg-slate-50 cursor-pointer"
            >
              {content.closeBtn}
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-4">
          <div className="space-y-2 pr-8">
            <div className="flex items-center gap-2">
              <KairosLogo variant="mark" size={24} />
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#534AB7]">
                {content.eyebrow}
              </span>
            </div>
            <h1
              id={titleId}
              className="text-2xl font-bold tracking-tight text-[#0B0B0B]"
            >
              {content.title}
            </h1>
            <p className="text-xs sm:text-sm text-[#52514E] leading-relaxed">
              {content.subtitle}
            </p>
          </div>

          <div className="space-y-1.5">
            <label htmlFor={nameId} className="block text-xs font-semibold text-[#0B0B0B]">
              {content.nameLabel}
            </label>
            <input
              id={nameId}
              name="name"
              type="text"
              autoFocus
              autoComplete="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={content.namePlaceholder}
              className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm text-[#0B0B0B] focus:outline-none focus:border-[#534AB7] focus:ring-2 focus:ring-[#534AB7]/15"
            />
          </div>

          <div className="space-y-1">
            <label htmlFor={contactId} className="block text-xs font-semibold text-[#0B0B0B]">
              {content.contactLabel}
            </label>
            {/* Format hint placed above input so autocomplete/mobile keyboards don't cover it */}
            <span id={hintId} className="block text-[11px] text-[#52514E]">
              {content.contactHint}
            </span>
            <input
              ref={contactInputRef}
              id={contactId}
              name="contact"
              type="text"
              inputMode="email"
              autoComplete="email"
              required
              minLength={3}
              pattern="(@[A-Za-z0-9_]{2,}|[^\s@]+@[^\s@]+\.[^\s@]+)"
              value={contact}
              aria-invalid={contactInvalid ? 'true' : 'false'}
              aria-describedby={contactInvalid ? `${hintId} ${errorId}` : hintId}
              onChange={(e) => {
                setContact(e.target.value);
                if (contactInvalid) syncContactValidity(false);
              }}
              onBlur={() => {
                if (contact.length > 0 || contactInvalid) {
                  syncContactValidity(true);
                }
              }}
              onInvalid={() => syncContactValidity(false)}
              placeholder={content.contactPlaceholder}
              className="kairos-field-input w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm text-[#0B0B0B] focus:outline-none focus:border-[#534AB7] focus:ring-2 focus:ring-[#534AB7]/15"
            />
            <div id={errorId} className="kairos-error-msg">
              <span role="img" aria-label={content.errorLabel}>
                ⚠️
              </span>
              <span>{content.errorEmptyContact}</span>
            </div>
          </div>

          <div className="space-y-2">
            <span className="block text-xs font-semibold text-[#0B0B0B]">
              {content.goalLabel}
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {content.goals.map((goal) => {
                const active = selectedGoal === goal;
                return (
                  <button
                    key={goal}
                    type="button"
                    aria-pressed={active}
                    onClick={() => setSelectedGoal(goal)}
                    className={`text-left rounded-xl border px-3 py-2 text-xs font-medium transition-colors cursor-pointer ${
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
              onChange={(e) => {
                setConsent(e.target.checked);
                if (e.target.checked) setConsentError('');
              }}
              className="mt-0.5 rounded border-slate-300 text-[#534AB7] focus:ring-[#534AB7]"
            />
            <span className="text-[11px] text-[#52514E] leading-snug">
              {content.consent}
            </span>
          </label>

          {consentError && (
            <p className="text-xs font-medium text-[#b91c1c]">
              <span role="img" aria-label={content.errorLabel}>
                ⚠️
              </span>{' '}
              {consentError}
            </p>
          )}

          <button
            type="submit"
            disabled={submitting}
            className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#534AB7] hover:bg-[#41389B] disabled:opacity-60 text-white px-6 py-3.5 text-xs font-semibold uppercase tracking-wider shadow-md transition-colors cursor-pointer"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#EF9F27]" />
            <span>{submitting ? content.submitting : content.submitBtn}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>
      )}
    </dialog>
  );
};
