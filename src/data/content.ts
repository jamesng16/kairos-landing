export type Lang = 'ru' | 'en';

export interface FeatureModule {
  id: string;
  num: string;
  diagramType: 'cashflow' | 'savings' | 'portfolio' | 'timing' | 'tax' | 'sandbox';
  title: string;
  description: string;
  ctaLabel: string;
  metricBadge: string;
}

export interface ValueCard {
  id: string;
  tone: 'sage' | 'sky' | 'sand';
  rotation: string;
  title: string;
  description: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  city: string;
  badge: string;
  quote: string;
  outcome: string;
}

export interface PerspectiveArticle {
  id: string;
  category: string;
  date: string;
  title: string;
  excerpt: string;
  readTime: string;
  artVariant: 'orbits' | 'horizon' | 'peaks';
}

export interface SiteContent {
  nav: {
    links: { label: string; href: string }[];
    telegramBtn: string;
    waitlistBtn: string;
  };
  hero: {
    sideEyebrow: string;
    sideCopy: string;
    sideLink: string;
    headlineBefore: string;
    headlineAfter: string;
    subtitle: string;
    waitlistCta: string;
    telegramCta: string;
    mockup: {
      balanceLabel: string;
      balanceValue: string;
      delta: string;
      reserveLabel: string;
      reserveValue: string;
      signalTitle: string;
      signalText: string;
      tgSender: string;
      tgMessage: string;
      tgTime: string;
    };
    trustLabel: string;
    trustItems: string[];
  };
  showcase: {
    eyebrow: string;
    heading: string;
    modules: FeatureModule[];
    sandboxHorizons: { label: string; projected: string; yieldRate: string }[];
  };
  valueCards: {
    eyebrow: string;
    heading: string;
    cta: string;
    cards: ValueCard[];
  };
  interstitial: {
    heading: string;
    description: string;
    waitlistCta: string;
    telegramCta: string;
  };
  socialProof: {
    eyebrow: string;
    heading: string;
    cta: string;
    disclaimer: string;
    items: TestimonialItem[];
  };
  perspectives: {
    title: string;
    subtitle: string;
    readAllCta: string;
    items: PerspectiveArticle[];
  };
  ecosystem: {
    eyebrow: string;
    heading: string;
    subtitle: string;
    spotlightLabel: string;
    spotlightTitle: string;
    spotlightText: string;
    spotlightBtn: string;
    itemsCol1: string[];
    itemsCol2: string[];
  };
  bottomCta: {
    heading: string;
    description: string;
    waitlistCta: string;
    telegramCta: string;
  };
  footer: {
    tagline: string;
    summary: string;
    columns: { title: string; links: { label: string; href: string }[] }[];
    disclaimer: string;
    copyright: string;
  };
  waitlistModal: {
    eyebrow: string;
    title: string;
    subtitle: string;
    nameLabel: string;
    namePlaceholder: string;
    contactLabel: string;
    contactHint: string;
    contactPlaceholder: string;
    goalLabel: string;
    goals: string[];
    consent: string;
    submitBtn: string;
    submitting: string;
    errorLabel: string;
    errorEmptyContact: string;
    errorConsent: string;
    successTitle: string;
    successBody: string;
    successQueueLabel: string;
    successTgCta: string;
    closeBtn: string;
  };
}

export const CONTENT: Record<Lang, SiteContent> = {
  ru: {
    nav: {
      links: [
        { label: 'Возможности', href: '#features' },
        { label: 'Почему Kairos', href: '#why-kairos' },
        { label: 'Интеграции', href: '#ecosystem' },
        { label: 'Перспективы', href: '#perspectives' },
        { label: 'Отзывы', href: '#proof' },
      ],
      telegramBtn: 'Telegram',
      waitlistBtn: 'Вступить в Waitlist',
    },
    hero: {
      sideEyebrow: 'ИИ для личного капитала',
      sideCopy: 'Аналитика трат, вкладов и инвестиций в рублях — без сложных таблиц.',
      sideLink: 'Как это работает',
      headlineBefore: 'ВАШИ ДЕНЬГИ',
      headlineAfter: 'В ПРАВИЛЬНЫЙ МОМЕНТ',
      subtitle:
        'Kairos объединяет бюджет, финансовую подушку и инвестиции в одном ИИ-ассистенте. Отслеживайте движение рублей, фиксируйте лучшие ставки по вкладам и получайте точные сигналы для входа в активы.',
      waitlistCta: 'Войти в Waitlist',
      telegramCta: 'Открыть в Telegram',
      mockup: {
        balanceLabel: 'Совокупный капитал',
        balanceValue: '1 482 900 ₽',
        delta: '+18,4% за 12 мес.',
        reserveLabel: 'Финансовая подушка',
        reserveValue: '6,2 мес. • 21,0% годовых',
        signalTitle: 'Момент Kairos',
        signalText: 'Переложите 180 000 ₽ с карты под 21,2% на 6 мес. — +19 080 ₽ к цели.',
        tgSender: 'Kairos AI Bot',
        tgMessage: 'ОФЗ 26238 и фонд ликвидности: оптимальное окно ребалансировки открыто сегодня.',
        tgTime: 'сейчас',
      },
      trustLabel: 'Совместимо с инструментами и стандартами в России',
      trustItems: ['СБП', 'МИР', 'МОСБИРЖА', 'ИИС-3', 'ОФЗ', '152-ФЗ', 'TELEGRAM MINI APP'],
    },
    showcase: {
      eyebrow: 'Единая платформа для личных финансов',
      heading: 'Всё, что нужно для роста личного капитала, в одном ИИ-ассистенте',
      modules: [
        {
          id: 'cashflow',
          num: '01',
          diagramType: 'cashflow',
          title: 'Умный учёт и кэшфлоу',
          description:
            'Загружайте выписки или фиксируйте траты в Telegram за секунду. ИИ сам распределяет категории, находит незаметные списания и показывает реальный свободный остаток к концу месяца.',
          ctaLabel: 'Попробовать в Waitlist',
          metricBadge: '−14 200 ₽/мес. лишних трат',
        },
        {
          id: 'savings',
          num: '02',
          diagramType: 'savings',
          title: 'Подушка и вклады под максимум',
          description:
            'Kairos автоматически делит поступления между повседневными расходами, резервом и накопительными счетами с учётом актуальной ставки ЦБ, чтобы ни один рубль не лежал под 0%.',
          ctaLabel: 'Настроить накопления',
          metricBadge: 'до 21,5% годовых по вкладам',
        },
        {
          id: 'portfolio',
          num: '03',
          diagramType: 'portfolio',
          title: 'ИИ-баланс инвестиций',
          description:
            'Персональное распределение между ОФЗ, акциями РФ, фондами денежного рынка и защитными активами под ваш горизонт и терпимость к риску.',
          ctaLabel: 'Собрать стратегию',
          metricBadge: 'Диверсификация 4 классов',
        },
        {
          id: 'timing',
          num: '04',
          diagramType: 'timing',
          title: 'Правильный момент (Kairos Engine)',
          description:
            'Уведомления в нужную минуту: когда закрывать вклад перед изменением ставки, когда заходить перед дивидендной отсечкой и как выровнять доли без лишних комиссий.',
          ctaLabel: 'Получать сигналы в TG',
          metricBadge: 'Сигналы 24/7 в Telegram',
        },
        {
          id: 'tax',
          num: '05',
          diagramType: 'tax',
          title: 'Налоги и вычеты (ИИС-3)',
          description:
            'Контроль лимитов по ИИС-3 и ЛДВ, календарь возврата НДФЛ до 52 000–88 000 ₽ в год и подсказки, на какой счёт выгоднее заводить следующую сумму.',
          ctaLabel: 'Проверить вычеты',
          metricBadge: '+до 88 000 ₽ налогового возврата',
        },
        {
          id: 'sandbox',
          num: '06',
          diagramType: 'sandbox',
          title: 'Симулятор целей «Что если?»',
          description:
            'Проверьте любой сценарий до реального перевода денег: ипотека против аренды, отпуск, пополнение капитала на 25 000 ₽ в месяц с учётом инфляции и сложного процента.',
          ctaLabel: 'Открыть симулятор',
          metricBadge: 'Прогноз на 6 мес. — 5 лет',
        },
      ],
      sandboxHorizons: [
        { label: '6 мес.', projected: '642 000 ₽', yieldRate: '+10,2%' },
        { label: '1 год', projected: '1 390 000 ₽', yieldRate: '+21,4%' },
        { label: '3 года', projected: '4 820 000 ₽', yieldRate: '+68,9%' },
      ],
    },
    valueCards: {
      eyebrow: 'Почему Kairos',
      heading: 'Убираем хаос из личных финансов',
      cta: 'Присоединиться к Waitlist',
      cards: [
        {
          id: 'no-sheets',
          tone: 'sage',
          rotation: '-rotate-2',
          title: 'Ноль ручных таблиц',
          description:
            'Забудьте про Excel по выходным. Отправьте голосовое, чек или PDF-выписку в Telegram — Kairos сам сведёт баланс.',
        },
        {
          id: 'live-clarity',
          tone: 'sky',
          rotation: 'rotate-1',
          title: 'Ясность на реальных цифрах',
          description:
            'Никакой абстрактной теории: расчёты учитывают ключевую ставку ЦБ, комиссии брокера и инфляцию в рублях.',
        },
        {
          id: 'privacy',
          tone: 'sand',
          rotation: '-rotate-1',
          title: 'Контроль и приватность',
          description:
            'Kairos работает как ваш личный советник без доступа к переводам средств и с защитой данных по стандартам 152-ФЗ.',
        },
      ],
    },
    interstitial: {
      heading: 'Посмотрите, как Kairos превращает рубли в работающий капитал',
      description:
        'Запустите бота в Telegram или займите место в раннем доступе, чтобы получить персональный финансовый разбор на старте.',
      waitlistCta: 'Занять место в Waitlist',
      telegramCta: 'Перейти в Telegram',
    },
    socialProof: {
      eyebrow: 'Бета-сообщество',
      heading: 'Как первые пользователи применяют Kairos',
      cta: 'Попробовать в раннем доступе',
      disclaimer: '* Примеры сценариев раннего тестирования в бета-группе',
      items: [
        {
          id: 'alexey',
          name: 'Алексей В.',
          role: 'Senior Frontend-разработчик',
          city: 'Москва',
          badge: 'Сценарий • ИИС-3 + Вклады',
          quote:
            '«Раньше свободные деньги просто лежали на дебетовой карте. Kairos за 5 минут разложил подушку на 6 месяцев под 21% и напомнил, когда добрать лимит ИИС-3 под вычет.»',
          outcome: '+74 500 ₽ доп. дохода за год',
        },
        {
          id: 'maria',
          name: 'Мария К.',
          role: 'Продакт-менеджер',
          city: 'Санкт-Петербург',
          badge: 'Сценарий • Цель: первый взнос',
          quote:
            '«Самое удобное — бот в Telegram. Нашла три лишние подписки, автоматизировала перевод 15% с каждой премии и теперь вижу точную дату, когда закрою цель по первому взносу.»',
          outcome: 'Цель ускорена на 4 месяца',
        },
        {
          id: 'timur',
          name: 'Тимур Г.',
          role: 'Предприниматель',
          city: 'Казань',
          badge: 'Сценарий • Личный резерв',
          quote:
            '«Разделил личные финансы и оборотку бизнеса. Симулятор помог сравнить досрочное погашение кредита и покупку коротких ОФЗ — выбрал вариант с большей выгодой.»',
          outcome: 'Экономия 118 000 ₽ на процентах',
        },
      ],
    },
    perspectives: {
      title: 'ПЕРСПЕКТИВЫ',
      subtitle: 'Аналитика, разборы стратегий и идеи для личного капитала.',
      readAllCta: 'Читать разборы в Telegram',
      items: [
        {
          id: 'p1',
          category: 'НАКОПЛЕНИЯ',
          date: 'НОЯБРЬ 2026',
          title: 'Лестница вкладов или фонд ликвидности: что выгоднее при смене ставки',
          excerpt:
            'Разбираем на цифрах в рублях, как распределять резерв, чтобы зафиксировать высокую доходность и не потерять гибкость.',
          readTime: '4 мин чтения',
          artVariant: 'orbits',
        },
        {
          id: 'p2',
          category: 'ИИ-СТРАТЕГИЯ',
          date: 'НОЯБРЬ 2026',
          title: 'Почему «правильный момент» важнее попыток угадать дно рынка',
          excerpt:
            'Как регулярная ребалансировка и дисциплина автопополнений обгоняют импульсивные сделки на горизонте от 2 лет.',
          readTime: '5 мин чтения',
          artVariant: 'horizon',
        },
        {
          id: 'p3',
          category: 'НАЛОГИ И ИИС',
          date: 'ОКТЯБРЬ 2026',
          title: 'Чек-лист по ИИС-3 до конца года: как не упустить налоговый вычет',
          excerpt:
            'Сколько нужно внести, какие бумаги подходят для консервативного портфеля и как Kairos отслеживает сроки.',
          readTime: '3 мин чтения',
          artVariant: 'peaks',
        },
      ],
    },
    ecosystem: {
      eyebrow: 'Быстрый старт без сложной настройки',
      heading: 'Поддержка привычных банков, форматов и инструментов',
      subtitle:
        'Импортируйте выписки за пару кликов, ведите быстрый учёт прямо в Telegram и подключайте аналитику по российским активам.',
      spotlightLabel: 'Связка Web + Telegram',
      spotlightTitle: 'Kairos Mini App',
      spotlightText: 'Мгновенный доступ к балансу, сигналам и быстрым записям прямо внутри Telegram.',
      spotlightBtn: 'Открыть в Telegram',
      itemsCol1: [
        'Т-Банк (выписки CSV / PDF)',
        'СберБанк (история операций)',
        'Альфа-Банк',
        'ВТБ и Газпромбанк',
        'Озон Банк и Яндекс Пэй',
        'Переводы и цели по СБП',
        'Накопительные счета и вклады',
      ],
      itemsCol2: [
        'Московская биржа (MOEX)',
        'ОФЗ и корпоративные облигации',
        'Фонды денежного рынка (LQDT и др.)',
        'Учёт лимитов ИИС-3',
        'Дивидендный и купонный календарь',
        'Голосовой ввод в Telegram',
        'Контроль подписок и регулярных списаний',
      ],
    },
    bottomCta: {
      heading: 'Поймайте правильный момент для своих финансов',
      description:
        'Присоединяйтесь к раннему доступу Kairos или подписывайтесь на Telegram-бота, чтобы первым протестировать персонального ИИ-советника.',
      waitlistCta: 'Вступить в Waitlist',
      telegramCta: 'Открыть Telegram',
    },
    footer: {
      tagline: 'Kairos — ИИ-ассистент для личных финансов, сбережений и инвестиций.',
      summary:
        'Помогаем принимать взвешенные финансовые решения в рублях: от ежедневного бюджета и подушки безопасности до долгосрочного капитала.',
      columns: [
        {
          title: 'Продукт',
          links: [
            { label: 'Возможности 01–06', href: '#features' },
            { label: 'Почему Kairos', href: '#why-kairos' },
            { label: 'Интеграции', href: '#ecosystem' },
            { label: 'Перспективы', href: '#perspectives' },
          ],
        },
        {
          title: 'Доступ',
          links: [
            { label: 'Записаться в Waitlist', href: '#waitlist' },
            { label: 'Telegram-бот', href: '#telegram' },
            { label: 'Канал аналитики', href: '#telegram-channel' },
          ],
        },
        {
          title: 'Контакты',
          links: [
            { label: 'hello@kairos-ai.ru', href: 'mailto:hello@kairos-ai.ru' },
            { label: 'Москва / Remote-first', href: '#top' },
            { label: 'Политика конфиденциальности (152-ФЗ)', href: '#waitlist' },
          ],
        },
      ],
      disclaimer:
        'Информация на сайте носит исключительно справочный и ознакомительный характер и не является индивидуальной инвестиционной рекомендацией (не ИИР). Все расчёты доходности являются модельными.',
      copyright: '© 2026 Kairos AI. Все права защищены.',
    },
    waitlistModal: {
      eyebrow: 'РАННИЙ ДОСТУП • РОССИЯ',
      title: 'Войти в Waitlist Kairos',
      subtitle:
        'Оставьте Email или Telegram-ник — мы откроем доступ к бета-версии и пришлём персональное приглашение.',
      nameLabel: 'Как к вам обращаться (необязательно)',
      namePlaceholder: 'Например, Алексей',
      contactLabel: 'Email или @username в Telegram *',
      contactHint: 'Формат: name@example.ru или @username',
      contactPlaceholder: 'name@example.ru или @username',
      goalLabel: 'Что для вас сейчас важнее всего?',
      goals: [
        'Накопления и вклады',
        'Инвестиции (ИИС, ОФЗ, акции)',
        'Учёт бюджета и расходов',
        'Всё вместе в одном ИИ',
      ],
      consent: 'Согласен на обработку контактных данных для получения приглашения в ранний доступ (152-ФЗ).',
      submitBtn: 'Получить ранний доступ',
      submitting: 'Отправляем...',
      errorLabel: 'Ошибка',
      errorEmptyContact: 'Укажите корректный Email или @username в Telegram (от 3 символов).',
      errorConsent: 'Подтвердите согласие на обработку данных.',
      successTitle: 'Вы в списке раннего доступа!',
      successBody:
        'Мы сохранили вашу заявку. Пока открывается следующая волна приглашений, переходите в нашего Telegram-бота за полезными разборами.',
      successQueueLabel: 'Ваш номер в бета-волне',
      successTgCta: 'Перейти в Telegram-бота',
      closeBtn: 'Закрыть',
    },
  },
  en: {
    nav: {
      links: [
        { label: 'Features', href: '#features' },
        { label: 'Why Kairos', href: '#why-kairos' },
        { label: 'Integrations', href: '#ecosystem' },
        { label: 'Perspectives', href: '#perspectives' },
        { label: 'Stories', href: '#proof' },
      ],
      telegramBtn: 'Telegram',
      waitlistBtn: 'Join Waitlist',
    },
    hero: {
      sideEyebrow: 'AI for personal wealth',
      sideCopy: 'Smart tracking, deposits, and RUB investing — without spreadsheet fatigue.',
      sideLink: 'See how it works',
      headlineBefore: 'YOUR MONEY AT',
      headlineAfter: 'THE RIGHT MOMENT',
      subtitle:
        'Kairos unifies personal budgeting, high-yield savings cushions, and investing in one AI copilot built for individuals in Russia. Track cashflow in ₽, lock top deposit rates, and catch smart entry moments.',
      waitlistCta: 'Join Waitlist',
      telegramCta: 'Open Telegram',
      mockup: {
        balanceLabel: 'Total Net Worth',
        balanceValue: '1 482 900 ₽',
        delta: '+18.4% over 12 mo.',
        reserveLabel: 'Safety Cushion',
        reserveValue: '6.2 mo. • 21.0% APY',
        signalTitle: 'Kairos Moment',
        signalText: 'Move 180,000 ₽ from checking to a 21.2% 6-mo. deposit for +19,080 ₽.',
        tgSender: 'Kairos AI Bot',
        tgMessage: 'OFZ 26238 & money-market fund: optimal rebalancing window open today.',
        tgTime: 'now',
      },
      trustLabel: 'Tailored for Russian personal finance rails & standards',
      trustItems: ['SBP', 'MIR', 'MOEX', 'IIS-3', 'OFZ', '152-FZ', 'TELEGRAM MINI APP'],
    },
    showcase: {
      eyebrow: 'Everything for personal wealth in one AI copilot',
      heading: 'Everything modern savers & investors need in one unified platform',
      modules: [
        {
          id: 'cashflow',
          num: '01',
          diagramType: 'cashflow',
          title: 'Smart Cashflow & Spend',
          description:
            'Upload bank statements or log expenses via Telegram in seconds. AI categorizes spending, spots forgotten subscriptions, and projects your true monthly surplus.',
          ctaLabel: 'Join Waitlist',
          metricBadge: '−14,200 ₽/mo. leakages found',
        },
        {
          id: 'savings',
          num: '02',
          diagramType: 'savings',
          title: 'Max-Yield Savings & Cushion',
          description:
            'Automatically route incoming income between everyday spend, emergency reserves, and high-yield RUB deposits aligned with Central Bank rate shifts.',
          ctaLabel: 'Optimize Savings',
          metricBadge: 'Up to 21.5% APY on deposits',
        },
        {
          id: 'portfolio',
          num: '03',
          diagramType: 'portfolio',
          title: 'AI Investment Allocation',
          description:
            'Tailored balance across OFZ bonds, Russian equities, money-market funds, and defensive assets matched to your horizon and risk comfort.',
          ctaLabel: 'Build Strategy',
          metricBadge: '4-Asset Diversification',
        },
        {
          id: 'timing',
          num: '04',
          diagramType: 'timing',
          title: 'The Right Moment (Kairos Engine)',
          description:
            'Timely alerts when to lock deposit yields before rate changes, position before dividend cutoffs, and rebalance with minimal drag.',
          ctaLabel: 'Get TG Signals',
          metricBadge: '24/7 Telegram Alerts',
        },
        {
          id: 'tax',
          num: '05',
          diagramType: 'tax',
          title: 'Tax & IIS-3 Deductions',
          description:
            'Track IIS-3 contribution limits, annual tax deduction calendars up to 52,000–88,000 ₽, and smart hints on which account to fund next.',
          ctaLabel: 'Check Deductions',
          metricBadge: 'Up to +88,000 ₽ tax refund',
        },
        {
          id: 'sandbox',
          num: '06',
          diagramType: 'sandbox',
          title: 'Live Goal Sandbox',
          description:
            'Test "what-if" scenarios before moving a single ruble: mortgage vs. renting, major purchases, or compounding 25,000 ₽/mo. with inflation factored in.',
          ctaLabel: 'Try Sandbox',
          metricBadge: '6 mo. — 5 yr. projections',
        },
      ],
      sandboxHorizons: [
        { label: '6 mo', projected: '642 000 ₽', yieldRate: '+10.2%' },
        { label: '1 yr', projected: '1 390 000 ₽', yieldRate: '+21.4%' },
        { label: '3 yr', projected: '4 820 000 ₽', yieldRate: '+68.9%' },
      ],
    },
    valueCards: {
      eyebrow: 'Why Kairos',
      heading: 'Solving the friction holding your finances back',
      cta: 'Join Waitlist',
      cards: [
        {
          id: 'no-sheets',
          tone: 'sage',
          rotation: '-rotate-2',
          title: 'Zero manual spreadsheets',
          description:
            'Drop the weekend Excel routine. Send a voice note, receipt, or PDF statement in Telegram — Kairos reconciles it.',
        },
        {
          id: 'live-clarity',
          tone: 'sky',
          rotation: 'rotate-1',
          title: 'Real-time RUB clarity',
          description:
            'Practical projections factoring in Central Bank key rates, brokerage fees, and local inflation.',
        },
        {
          id: 'privacy',
          tone: 'sand',
          rotation: '-rotate-1',
          title: 'Privacy & control first',
          description:
            'Read-only advisory workflow with zero fund-transfer permissions and 152-FZ compliant data handling.',
        },
      ],
    },
    interstitial: {
      heading: 'See how Kairos turns everyday rubles into compounding wealth',
      description:
        'Open our Telegram bot or reserve early access on the waitlist to get a personalized launch portfolio review.',
      waitlistCta: 'Reserve Waitlist Spot',
      telegramCta: 'Open Telegram',
    },
    socialProof: {
      eyebrow: 'Beta Community',
      heading: 'How early adopters use Kairos',
      cta: 'Request Early Access',
      disclaimer: '* Illustrative early-beta user scenarios',
      items: [
        {
          id: 'alexey',
          name: 'Alexey V.',
          role: 'Senior Frontend Engineer',
          city: 'Moscow',
          badge: 'Scenario • IIS-3 + Deposits',
          quote:
            '"Idle cash used to sit on my debit card. Kairos structured a 6-month 21% reserve in 5 minutes and reminded me to max out my IIS-3 tax deduction."',
          outcome: '+74,500 ₽ extra annual yield',
        },
        {
          id: 'maria',
          name: 'Maria K.',
          role: 'Product Manager',
          city: 'Saint Petersburg',
          badge: 'Scenario • Down Payment Goal',
          quote:
            '"The Telegram bot is effortless. I cut three unused subscriptions, automated 15% bonus sweeps, and now see the exact month my down payment hits target."',
          outcome: 'Goal reached 4 months sooner',
        },
        {
          id: 'timur',
          name: 'Timur G.',
          role: 'Founder',
          city: 'Kazan',
          badge: 'Scenario • Personal Reserve',
          quote:
            '"Separated personal wealth from business cashflow. The sandbox compared early loan payoff against short OFZ bonds — saved real money."',
          outcome: '118,000 ₽ saved in interest',
        },
      ],
    },
    perspectives: {
      title: 'PERSPECTIVES',
      subtitle: 'Insights and playbooks for smarter personal wealth.',
      readAllCta: 'Read in Telegram',
      items: [
        {
          id: 'p1',
          category: 'SAVINGS',
          date: 'NOV 2026',
          title: 'Deposit ladder vs. liquidity funds when rates start shifting',
          excerpt:
            'Breaking down how to split your ruble reserve to lock peak yields without giving up instant liquidity.',
          readTime: '4 min read',
          artVariant: 'orbits',
        },
        {
          id: 'p2',
          category: 'AI STRATEGY',
          date: 'NOV 2026',
          title: 'Why catching "the right moment" beats trying to time market bottoms',
          excerpt:
            'How automated rebalancing and disciplined contributions outperform reactive trading over 2+ year horizons.',
          readTime: '5 min read',
          artVariant: 'horizon',
        },
        {
          id: 'p3',
          category: 'TAX & IIS',
          date: 'OCT 2026',
          title: 'Year-end IIS-3 checklist: capturing every ruble of tax relief',
          excerpt:
            'Contribution caps, conservative bond picks, and how Kairos keeps your calendar on track.',
          readTime: '3 min read',
          artVariant: 'peaks',
        },
      ],
    },
    ecosystem: {
      eyebrow: 'Start faster with zero friction',
      heading: 'Built around Russian banks, formats, and investment rails',
      subtitle:
        'Import CSV/PDF statements in seconds, log quick notes in Telegram, and track MOEX & deposit instruments side by side.',
      spotlightLabel: 'Web + Telegram Sync',
      spotlightTitle: 'Kairos Mini App',
      spotlightText: 'Instant access to your net worth, signals, and quick expense capture inside Telegram.',
      spotlightBtn: 'Open Telegram',
      itemsCol1: [
        'T-Bank (CSV / PDF statements)',
        'SberBank (transaction history)',
        'Alfa-Bank',
        'VTB & Gazprombank',
        'Ozon Bank & Yandex Pay',
        'SBP transfers & goal buckets',
        'High-yield savings & deposits',
      ],
      itemsCol2: [
        'Moscow Exchange (MOEX)',
        'OFZ & corporate bonds',
        'Money-market funds (LQDT, etc.)',
        'IIS-3 limit tracking',
        'Dividend & coupon calendar',
        'Voice input in Telegram',
        'Subscription & recurring charge radar',
      ],
    },
    bottomCta: {
      heading: 'Catch the right moment for your finances',
      description:
        'Join the Kairos waitlist or jump into our Telegram bot to be among the first personal wealth testers.',
      waitlistCta: 'Join Waitlist',
      telegramCta: 'Open Telegram',
    },
    footer: {
      tagline: 'Kairos — AI copilot for personal finance, savings, and investing.',
      summary:
        'Helping individuals make calmer, higher-yield decisions in RUB — from daily cashflow and safety cushions to long-term portfolios.',
      columns: [
        {
          title: 'Product',
          links: [
            { label: 'Capabilities 01–06', href: '#features' },
            { label: 'Why Kairos', href: '#why-kairos' },
            { label: 'Integrations', href: '#ecosystem' },
            { label: 'Perspectives', href: '#perspectives' },
          ],
        },
        {
          title: 'Access',
          links: [
            { label: 'Join Waitlist', href: '#waitlist' },
            { label: 'Telegram Bot', href: '#telegram' },
            { label: 'Insights Channel', href: '#telegram-channel' },
          ],
        },
        {
          title: 'Contact',
          links: [
            { label: 'hello@kairos-ai.ru', href: 'mailto:hello@kairos-ai.ru' },
            { label: 'Moscow / Remote-first', href: '#top' },
            { label: 'Privacy Policy (152-FZ)', href: '#waitlist' },
          ],
        },
      ],
      disclaimer:
        'Information on this website is provided for informational purposes only and does not constitute individual investment advice (not IIR). All yield examples are illustrative.',
      copyright: '© 2026 Kairos AI. All rights reserved.',
    },
    waitlistModal: {
      eyebrow: 'EARLY ACCESS • RUSSIA',
      title: 'Join the Kairos Waitlist',
      subtitle:
        'Leave your Email or Telegram handle — we will send your private beta invite as seats open.',
      nameLabel: 'Your name (optional)',
      namePlaceholder: 'e.g., Alexey',
      contactLabel: 'Email or Telegram @username *',
      contactHint: 'Format: name@example.ru or @username',
      contactPlaceholder: 'name@example.ru or @username',
      goalLabel: 'What matters most to you right now?',
      goals: [
        'Savings & high-yield deposits',
        'Investing (IIS, OFZ, equities)',
        'Budgeting & cashflow tracking',
        'All-in-one AI wealth copilot',
      ],
      consent: 'I agree to the processing of my contact details for early access updates (152-FZ).',
      submitBtn: 'Request Early Access',
      submitting: 'Submitting...',
      errorLabel: 'Error',
      errorEmptyContact: 'Enter a valid Email or Telegram @username (at least 3 characters).',
      errorConsent: 'Please confirm data processing consent.',
      successTitle: "You're on the early-access list!",
      successBody:
        'Your request is saved. While the next wave opens, jump into our Telegram bot for live rate notes and updates.',
      successQueueLabel: 'Your beta queue position',
      successTgCta: 'Open Telegram Bot',
      closeBtn: 'Close',
    },
  },
};
