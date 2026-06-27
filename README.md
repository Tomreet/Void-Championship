# 🕳️ Void Championship — Abyssal Arena

_Лендинг киберспортивного турнира.  
Мрачная космическая бездна, золотой акцент._

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38bdf8?logo=tailwindcss)](https://tailwindcss.com/)
[![Three.js](https://img.shields.io/badge/Three.js-r185-black?logo=three.js)](https://threejs.org/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-ff69b4)](https://www.framer.com/motion/)
[![Vercel](https://img.shields.io/badge/Deploy-Vercel-black?logo=vercel)](https://vercel.com)

![Превью лендинга](./public/og-image.png)

## 🌌 Демо

[**void-championship.vercel.app**](https://void-championship.vercel.app/)

## 🛸 Особенности

- **Интерактивная 3D-сцена** – летающая тарелка (НЛО) с лучом энергии над клочком земли поднимая свиней, звёздное небо и пост-обработка Bloom.
- **Атмосферный прелоадер** – анимация погружения в бездну перед показом сцены.
- **Адаптивный дизайн** – mobile-first, корректное отображение на любых устройствах.
- **Система авторизации** – регистрация и вход (мок-сервис), контекст пользователя, персонализированное приветствие.
- **Плавные анимации** – Framer Motion для появления секций, карточек, мобильного меню.
- **Валидация форм** – React Hook Form + Zod, индикатор сложности пароля.
- **Типизированный код** – TypeScript во всех компонентах и утилитах.
- **Кастомная тёмная тема** – Tailwind v4 с `@theme`: глубокие фиолетовые и золотые акценты.
- **Оптимизация** – динамический импорт 3D-сцены (нет SSR), Suspense, ленивая загрузка.

## 🧱 Технический стек

- **Фреймворк:** Next.js 16 (App Router)
- **Язык:** TypeScript
- **Стили:** Tailwind CSS v4
- **3D-графика:** React Three Fiber, Drei, Postprocessing
- **Анимации:** Framer Motion
- **Формы:** React Hook Form + Zod
- **Иконки:** Lucide React
- **Деплой:** Vercel

## 🚀 Быстрый старт

```bash
# Клонируйте репозиторий
git clone https://github.com/Tomreet/void-championship.git
cd void-championship

# Установите зависимости
npm install

# Запустите dev-сервер
npm run dev
```

Откройте http://localhost:3000 в браузере.

## 📁 Структура проекта

```
public/
  ├── models/          # 3D-модели (.glb)
  └── screenshots/     # скриншоты для README
src/
  ├── app/             # роутинг (layout, page, register, login)
  ├── components/      # секции и UI-компоненты
  │   ├── hero/        # Hero с 3D-сценой
  │   ├── features/    # карточки преимуществ
  │   ├── teams/       # карточки команд
  │   ├── schedule/    # расписание матчей
  │   ├── prizes/      # призовой фонд
  │   ├── faq/         # вопросы-ответы
  │   ├── newsletter/  # форма подписки
  │   ├── layout/      # Header, Footer, MobileMenu
  │   └── ui/          # кнопки, инпуты
  ├── contexts/        # AuthContext
  ├── hooks/           # useMediaQuery, useScrollAnimation, useParallax
  ├── lib/             # данные, утилиты, валидаторы, мок-аутентификация
  └── styles/          # глобальные стили
.env.local.example     # пример переменных окружения
next.config.js
tailwind.config.ts
tsconfig.json
README.md
```

---

**Автор:** [MrKrabsArt]  
**Лицензия:** MIT