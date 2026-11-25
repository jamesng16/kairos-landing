import { useState, useEffect } from 'react';
import { CONTENT, Lang } from './data/content';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { DarkFeatureShowcase } from './components/DarkFeatureShowcase';
import { ValueCardsSection } from './components/ValueCardsSection';
import { InterstitialBanner } from './components/InterstitialBanner';
import { SocialProofSection } from './components/SocialProofSection';
import { PerspectivesSection } from './components/PerspectivesSection';
import { EcosystemSection } from './components/EcosystemSection';
import { BottomCtaAndFooter } from './components/BottomCtaAndFooter';
import { WaitlistModal } from './components/WaitlistModal';

export function App() {
  const [lang, setLang] = useState<Lang>('ru');
  const [waitlistOpen, setWaitlistOpen] = useState(false);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title =
      lang === 'ru'
        ? 'Kairos — ИИ-ассистент для личных финансов, инвестиций и накоплений'
        : 'Kairos — AI Copilot for Personal Finance, Investing & Savings';
  }, [lang]);

  const current = CONTENT[lang];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar
        lang={lang}
        onToggleLang={setLang}
        content={current.nav}
        onOpenWaitlist={() => setWaitlistOpen(true)}
      />

      <main className="flex-1">
        <HeroSection
          content={current.hero}
          onOpenWaitlist={() => setWaitlistOpen(true)}
        />
        <DarkFeatureShowcase
          content={current.showcase}
          onOpenWaitlist={() => setWaitlistOpen(true)}
        />
        <ValueCardsSection
          content={current.valueCards}
          onOpenWaitlist={() => setWaitlistOpen(true)}
        />
        <InterstitialBanner
          content={current.interstitial}
          onOpenWaitlist={() => setWaitlistOpen(true)}
        />
        <SocialProofSection
          content={current.socialProof}
          onOpenWaitlist={() => setWaitlistOpen(true)}
        />
        <PerspectivesSection content={current.perspectives} />
        <EcosystemSection content={current.ecosystem} />
      </main>

      <BottomCtaAndFooter
        bottomCta={current.bottomCta}
        footer={current.footer}
        onOpenWaitlist={() => setWaitlistOpen(true)}
      />

      <WaitlistModal
        isOpen={waitlistOpen}
        onClose={() => setWaitlistOpen(false)}
        content={current.waitlistModal}
      />
    </div>
  );
}

export default App;
