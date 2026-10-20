# Лендинг «Личная CRM»

Одна статичная страница: рассказывает о продукте и ведёт в приложение https://app.kropcrm.ru.

## Запуск

```sh
pnpm install
pnpm dev       # разработка: http://localhost:4321
pnpm build     # сборка в папку dist/
pnpm preview   # посмотреть собранную версию
```

## Где что лежит

- `src/content/landing.ts` - все тексты страницы
- `src/styles/tokens.css` - цвета, шрифты, размеры текста, отступы
- `src/components/` - секции страницы
- `src/config.ts` - адрес приложения (можно переопределить через `PUBLIC_APP_URL` в `.env`)
- `public/fonts/` - шрифты Inter Tight и JetBrains Mono
- `design/` - макет, по которому собрана страница
