// All page copy, verbatim from the design (design/README.md). Change texts only with the owner's approval.

export const brand = "Личная CRM";

export const meta = {
  // Shortened at the owner's request; the design has "Личная CRM - помните о людях, которые вам важны."
  title: brand,
  description: "Все контакты и заметки в одном месте: открыл, нашел человека, вспомнил, о чем договорились.",
  // The link preview image shows the brand and the promise
  imageAlt: "Личная CRM - помните о людях, которые вам важны.",
};

export const ctaLabel = "Открыть CRM";

// Non-breaking space after "о" keeps the preposition on the same line as the next word
const promise = "Помните о людях, которые вам важны.";

export const hero = {
  title: promise,
  subtitle: "Все контакты и заметки в одном месте: открыл, нашел человека, вспомнил, о чем договорились.",
  contact: {
    name: "Елена Смирнова · продакт",
    lastSeen: "вчера",
    details: [
      { label: "Телефон", value: "+7 900 482-17-35" },
      { label: "Почта", value: "elena.smirnova@example.ru" },
    ],
    note: "Договорились: прислать презентацию до пятницы.",
  },
};

export const problems = {
  label: "01 / ЗНАКОМО",
  title: "Знакомо?",
  items: [
    "В телефоне «Саша работа» и «Лена конференция» — а кто это, уже не вспомнить.",
    "О чём-то договорились в разговоре, а через месяц не помните, о чём именно.",
    "Помните имя, но не знаете, где искать номер или почту.",
    "Номера, переписки и заметки разбросаны по телефону, почте, мессенджерам и визиткам.",
  ],
};

export const howItWorks = {
  label: "02 / КАК РАБОТАЕТ",
  title: "Как это работает",
  steps: [
    { title: "Все контакты в одном списке.", text: "Открыли — и видите всех." },
    { title: "Поиск по имени.", text: "Нужный человек находится за секунды." },
    { title: "Карточка на каждого человека.", text: "Имя, кто это, откуда знакомы, телефон и почта." },
    { title: "Заметки после разговоров.", text: "О чём поговорили и о чём договорились — прямо в карточке." },
    {
      title: "Легко пополнять и исправлять.",
      text: "Добавьте новый контакт или поменяйте данные, когда что-то изменилось.",
    },
  ],
};

export const benefits = {
  label: "03 / ЧТО ДАЁТ",
  title: "Что это вам даст",
  items: [
    { title: "Вы помните, кто есть кто.", text: "Даже если виделись всего один раз." },
    {
      title: "Разговор продолжается с того места, где остановились.",
      text: "Перед встречей откройте заметки — и вспомните, о чём говорили.",
    },
    { title: "Вы держите слово.", text: "Всё, о чём договорились, записано." },
    { title: "Нужный контакт — за секунды.", text: "Не нужно искать по телефону, мессенджерам и визиткам." },
    { title: "Голова свободна.", text: "Не нужно держать всё в памяти." },
  ],
};

export const finalCta = {
  label: "04 / НАЧАТЬ",
  title: promise,
  footerBrand: "ЛИЧНАЯ CRM",
  footerLink: "APP",
};
