# Handoff: лендинг «Личная CRM»

## Overview
Одностраничный статичный лендинг продукта «Личная CRM». Единственное целевое действие — перейти в приложение по кнопке «Открыть CRM» (`https://app.<домен>`). Есть мобильная (390px) и десктопная (до 1200px контента) версии одной страницы.

**Стек:** Astro + Tailwind CSS 4, статическая сборка (`output: 'static'`), без клиентского JS.

## About the Design Files
Файлы в `design/` — **дизайн-референсы в HTML**, а не продакшн-код. Задача — воссоздать их в Astro + Tailwind 4 одной адаптивной страницей. Открыть референсы: `design/Landing Mobile.dc.html` и `design/Landing Desktop.dc.html` в браузере (рядом должен лежать `support.js`). Все стили в них inline — используйте как источник точных значений.

Исходный текст лендинга: `landing-text.md`. Тексты в дизайне — финальные (заголовки секций переименованы, см. ниже), переносить дословно, включая «ё»/«е» как в макете.

## Fidelity
**High-fidelity.** Цвета, типографика, отступы, радиусы, тени финальные. Верстать pixel-perfect.

## Адаптив
- `< 768px` — мобильная раскладка (референс 390px, работать от 360px).
- `≥ 1024px` — десктопная раскладка, контейнер `max-width: 1200px`, `padding-inline: 40px`, `margin-inline: auto`.
- `768–1023px` — промежуточно: десктопная структура, колонки переносятся (в референсе flex-wrap / auto-fit, см. ниже).
- В мобильном референсе страница показана в «рамке» с `border-radius: 36px` и тенью на сером фоне `#dcdad5` — это только подача макета. В реальной верстке рамки нет, фон страницы `#f1efeb`, на всю ширину.

## Структура страницы (одинакова для обеих версий)
1. Первый экран (hero)
2. «Знакомо?» — проблемы
3. «Как это работает» — решение (тёмная секция)
4. «Что это вам даст» — выгоды
5. Финальный призыв (тёмная секция) + подвал-строка

Компоненты Astro: `Hero.astro`, `Problems.astro`, `HowItWorks.astro`, `Benefits.astro`, `FinalCta.astro`, общие `SectionLabel.astro`, `CtaButton.astro`, `SunriseGlow.astro` (декоративный фон). Данные списков — массивы во frontmatter или `src/content/landing.ts`.

---

## 1. Hero

### Тёмная полоса (верх)
- Фон `#08081a`, `overflow: hidden`, `position: relative`. Высота: mobile **360px**, desktop **440px**.
- **Свечение «рассвет»** (absolute, эллипс `border-radius: 50%`):
  `radial-gradient(closest-side, #ff8a3d 0%, #f0564a 22%, #8a4cf0 52%, #3b3ff0 72%, rgba(40,40,200,0) 100%)`
  - mobile: `left:-60px; right:-60px; bottom:-260px; height:560px`
  - desktop: `width:1600px; left:50%; translateX(-50%); bottom:-420px; height:820px`
- **Лучи** поверх (absolute, inset 0):
  `repeating-conic-gradient(from 270deg at 50% 100%, rgba(255,255,255,.14) 0deg .25deg, transparent .25deg 12deg)` — на desktop шаг `6deg` вместо `12deg`.
- **Навбар** (relative, белый текст), `justify-between`, `items-center`:
  - mobile: `padding: 56px 24px 0` (56 учитывает статус-бар в макете; в реальной верстке ~20–24px сверху).
  - desktop: в контейнере 1200, `padding-top: 32px`.
  - Логотип: квадрат с градиентом `linear-gradient(180deg,#4b47f2,#f07a4a)` + текст «Личная CRM», Inter Tight 600, letter-spacing −0.02em…−0.025em.
    - mobile: значок 18×18, радиус 5px, gap 8px, текст 17px.
    - desktop: значок 26×26, радиус 8px, gap 12px, текст 26px.
  - Ссылка «ВОЙТИ →» → `https://app.<домен>`; JetBrains Mono, 11px (desktop 12px), letter-spacing 0.12em, цвет `#c9c8e8`.

### Светлая часть
- **Mobile:** колонка, `padding: 28px 24px`, gap 16px; весь hero = 844px по высоте (кнопка прижата к низу через spacer `flex:1`). В реализации: `min-height: 100svh` для hero, кнопка внизу.
- **Desktop:** сетка `repeat(auto-fit, minmax(min(100%,440px),1fr))`, gap `48px 80px`, `padding: 56px 40px 96px`. Слева H1, справа колонка (gap 24px, padding-top 8px): подзаголовок → карточка → кнопка (выровнена по левому краю).
- **H1** «Помните о людях, которые вам важны.» (неразрывный пробел после «о»). Inter Tight 500, `text-wrap: balance`, цвет `#0d0c14`.
  - mobile: 38px / 1.02, letter-spacing −0.04em.
  - desktop: `clamp(44px, 5.4vw, 76px)` / 0.98, letter-spacing −0.045em.
- **Подзаголовок** «Все контакты и заметки в одном месте: открыл, нашел человека, вспомнил, о чем договорились.» Цвет `#4a4752`, line-height 1.42, `text-wrap: pretty`. mobile 16px, desktop 20px.
- **Карточка контакта** (иллюстрация продукта, статичная): фон `#fff`, радиус 14px (desktop 16px), padding `14px 16px` (desktop `16px 18px`), gap 10px, тень `0 1px 0 rgba(0,0,0,.04), 0 10px 24px -18px rgba(30,20,80,.5)` (desktop `… 0 14px 30px -20px …`).
  1. Строка: зелёная точка 7×7 `#2fbf71` + «Елена Смирнова · продакт» (500, 14/15px) — справа «вчера» (`#8a8794`, 12/13px).
  2. Контакты: блок с `border-top` и `border-bottom` `1px #eeece8`, padding `8px 0` (desktop `10px 0`), 13px (desktop 14px). Пары «Телефон» `+7 900 482-17-35` и «Почта» `elena.smirnova@example.ru`; подпись `#8a8794`, значение `#0d0c14`, gap 6px. Mobile — столбиком (gap 4px), desktop — в строку с переносом (gap `6px 20px`).
  3. «Договорились: прислать презентацию до пятницы.» 13px (desktop 14px), `#4a4752`, lh 1.4.
- **Основная кнопка** «Открыть CRM →» → `https://app.<домен>`. Фон `linear-gradient(90deg,#4b47f2,#8a4cf0 55%,#f0663f)`, белый текст, Inter Tight 500, радиус 999px.
  - mobile: на всю ширину, высота 56px, 17px.
  - desktop: высота 60px, padding-x 36px, 18px.

## 2. «Знакомо?» (проблемы)
- `border-top: 1px solid #e2dfd9`.
- Метка секции «01 / ЗНАКОМО», H2 «Знакомо?».
- **Mobile:** `padding: 56px 24px 64px`, колонка gap 24px; карточки в колонку gap 10px.
- **Desktop:** `padding: 96px 40px`, flex-wrap gap `40px 80px`: левая колонка (`flex: 1 1 280px`) — метка + H2 (gap 20px); правая (`flex: 2 1 560px`) — сетка карточек `repeat(auto-fit, minmax(min(100%,280px),1fr))`, gap 12px (2×2).
- **Карточка:** `#fff`, радиус 14px (desktop 16px), padding 18px (desktop 24px), flex row gap 14px, тень `0 10px 24px -18px rgba(30,20,80,.5)`. Текст 16px (desktop 18px) / 1.42, `text-wrap: pretty`.
- **Буллит** (разный на версиях):
  - mobile: круг 8×8, `margin-top: 8px`.
  - desktop: ромб — квадрат 16×16, радиус 4px, `rotate(45deg)`, `margin-top: 5px`, тень `0 6px 14px -4px rgba(110,70,230,.55)`, внутри белый квадрат 5×5 радиус 1px по центру.
  - Градиенты по порядку (135deg): `#4b47f2→#8a4cf0`, `#8a4cf0→#f0564a`, `#f0564a→#ff8a3d`, `#3b3ff0→#ff8a3d`.
- Тексты:
  1. В телефоне «Саша работа» и «Лена конференция» — а кто это, уже не вспомнить.
  2. О чём-то договорились в разговоре, а через месяц не помните, о чём именно.
  3. Помните имя, но не знаете, где искать номер или почту.
  4. Номера, переписки и заметки разбросаны по телефону, почте, мессенджерам и визиткам.

## 3. «Как это работает» (решение)
- Фон `#08081a`, текст `#f3f2fa`, `overflow: hidden`, relative.
- **Сетка-фон** (absolute inset 0): `linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)`, `background-size` 39px (desktop 48px).
- **Свечение сверху** (тот же радиальный градиент, стопы `#ff8a3d 0, #e2504f 18%, #6a45ee 45%, #2c34c8 65%, rgba(20,20,90,0) 100%`, opacity .75):
  - mobile: `left:-120px; right:-120px; top:-380px; height:560px`.
  - desktop: `left:-200px; width:900px; top:-520px; height:820px`.
- Метка «02 / КАК РАБОТАЕТ» (цвет `#c9c8e8`), H2 «Как это работает».
- Padding: mobile `64px 24px 72px`; desktop `112px 40px`, раскладка как в п.2 (левая колонка заголовок, правая список).
- **Пункт списка:** `border-top: 1px solid rgba(255,255,255,.14)`, у последнего ещё `border-bottom`. Номер «01…05» JetBrains Mono 11px (desktop 12px) `#f07a4a`. Заголовок Inter Tight 600, 18px (desktop 21px), ls −0.02em. Описание `#a9a8c2`, 15px (desktop 17px) / 1.45.
  - mobile: padding `18px 0`; строка номер+заголовок (gap 12px, baseline), описание ниже с `padding-left: 28px`, gap 6px.
  - desktop: padding `24px 0`, flex-wrap gap `8px 24px`, baseline: номер (40px) | заголовок (`flex 1 1 220px`) | описание (`flex 1 1 240px`).
- Тексты (заголовок — описание):
  1. Все контакты в одном списке. — Открыли — и видите всех.
  2. Поиск по имени. — Нужный человек находится за секунды.
  3. Карточка на каждого человека. — Имя, кто это, откуда знакомы, телефон и почта.
  4. Заметки после разговоров. — О чём поговорили и о чём договорились — прямо в карточке.
  5. Легко пополнять и исправлять. — Добавьте новый контакт или поменяйте данные, когда что-то изменилось.

## 4. «Что это вам даст» (выгоды)
- Метка «03 / ЧТО ДАЁТ», H2 «Что это вам даст».
- mobile: `padding: 64px 24px`, gap 24px, карточки в колонку gap 10px.
- desktop: `padding: 112px 40px`, gap 48px между заголовком и сеткой; сетка `repeat(auto-fit, minmax(min(100%,300px),1fr))`, gap 12px (3 + 2 при 1200px).
- **Карточка:** `#fff`, радиус 14px (desktop 16px), padding `20px 18px` (desktop `28px 24px`), колонка gap 8px (desktop 10px), тень как в п.2. Сверху полоска 28×4 (desktop 32×4, +8px снизу), радиус 2px, `linear-gradient(90deg,#4b47f2,#f0663f)`. Заголовок Inter Tight 600, 19px (desktop 22px) / 1.2, ls −0.025em, `text-wrap: balance`. Описание `#4a4752`, 15px (desktop 16px) / 1.45.
- Тексты:
  1. Вы помните, кто есть кто. — Даже если виделись всего один раз.
  2. Разговор продолжается с того места, где остановились. — Перед встречей откройте заметки — и вспомните, о чём говорили.
  3. Вы держите слово. — Всё, о чём договорились, записано.
  4. Нужный контакт — за секунды. — Не нужно искать по телефону, мессенджерам и визиткам.
  5. Голова свободна. — Не нужно держать всё в памяти.

## 5. Финальный призыв
- Фон `#08081a`, белый текст. Свечение «рассвет» + лучи как в hero, но снизу: mobile `bottom:-300px; height:560px`; desktop `width:1600px; bottom:-460px; height:820px`, центрировано.
- Метка «04 / НАЧАТЬ» (`#c9c8e8`), H2 «Помните о людях, которые вам важны.» Inter Tight 500, mobile 38px / 1.02 / −0.04em; desktop `clamp(40px,5vw,68px)` / 1 / −0.045em, max-width 820px, по центру.
- Кнопка «Открыть CRM →» → `https://app.<домен>`: фон `#fff`, текст `#0d0c14`, радиус 999px. mobile — во всю ширину, 56px, 17px; desktop — 60px, padding-x 40px, 18px.
- Отступ под кнопкой (место для свечения): mobile 160px, desktop 200px.
- Подвал-строка: `border-top: 1px solid rgba(255,255,255,.25)`, padding-top 14px (desktop 16px), JetBrains Mono 10px (desktop 11px), ls 0.14em: слева «ЛИЧНАЯ CRM», справа «APP →» (можно сделать ссылкой на приложение).
- Padding секции: mobile `72px 24px 40px`; desktop `128px 40px 40px`, содержимое по центру.

## Interactions & Behavior
- Все CTA («Открыть CRM», «ВОЙТИ», опционально «APP →») — обычные `<a href="https://app.<домен>">`. Вынести URL в одну константу (`APP_URL`, через `import.meta.env.PUBLIC_APP_URL`).
- Hover ссылок/кнопок: `opacity: .88`. Добавить `focus-visible` outline (например, 2px `#8a4cf0`, offset 3px).
- Анимаций нет. Клиентского JS нет.

## State Management
Нет. Статичная страница.

## Design Tokens (Tailwind 4, `@theme` в `src/styles/global.css`)
```css
@import "tailwindcss";
@theme {
  --font-sans: "Inter Tight", ui-sans-serif, system-ui, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, monospace;

  --color-paper: #f1efeb;      /* фон светлых секций */
  --color-ink: #0d0c14;        /* основной текст */
  --color-ink-2: #4a4752;      /* вторичный текст на светлом */
  --color-ink-3: #6b6874;      /* метки секций на светлом */
  --color-ink-4: #8a8794;      /* подписи */
  --color-line: #e2dfd9;       /* разделитель секций */
  --color-line-2: #eeece8;     /* разделители в карточке */
  --color-night: #08081a;      /* тёмные секции */
  --color-night-text: #f3f2fa;
  --color-night-2: #a9a8c2;    /* вторичный текст на тёмном */
  --color-night-label: #c9c8e8;
  --color-indigo: #4b47f2;
  --color-blue: #3b3ff0;
  --color-violet: #8a4cf0;
  --color-coral: #f0564a;
  --color-orange: #f0663f;
  --color-amber: #ff8a3d;
  --color-accent-num: #f07a4a; /* номера в «Как это работает» */
  --color-online: #2fbf71;

  --shadow-card: 0 10px 24px -18px rgba(30,20,80,.5);
  --radius-card: 14px;         /* desktop 16px */
}
```
- Градиент CTA: `linear-gradient(90deg, #4b47f2, #8a4cf0 55%, #f0663f)`.
- Типографика: H1 38 / 76 max, H2 34 (mobile) / 48 (desktop), метки mono 11/12px uppercase ls 0.14em. Начертания Inter Tight 400/500/600, JetBrains Mono 400/500.
- Отступы по горизонтали: mobile 24px, desktop 40px. Вертикальные паддинги секций указаны выше.
- Декоративные градиенты (свечение, лучи, сетка) удобнее держать в `<style>` компонента или как arbitrary values (`bg-[...]`).

## Assets
- Изображений и иконок нет — всё на CSS. Стрелка «→» — текстовый символ.
- Шрифты: Inter Tight и JetBrains Mono (Google Fonts, кириллица). Рекомендуется self-host через `@fontsource-variable/inter-tight` и `@fontsource/jetbrains-mono` (subset cyrillic + latin), `font-display: swap`.

## SEO / мета
- `<title>`: Личная CRM - помните о людях, которые вам важны.
- `<meta name="description">`: Все контакты и заметки в одном месте: открыл, нашел человека, вспомнил, о чем договорились.
- `lang="ru"`, `theme-color` `#08081a`. Разметка: один `<h1>`, секции `<section>` с `<h2>`, списки — `<ul>/<li>`.

## Files
- `design/Landing Mobile.dc.html` — мобильная версия (390px), финальная.
- `design/Landing Desktop.dc.html` — десктопная версия, финальная.
- `design/support.js` — рантайм для открытия референсов в браузере (в проект не переносить).
- `landing-text.md` — исходный текст лендинга.
