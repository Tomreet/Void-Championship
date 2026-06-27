export interface FaqItem {
  question: string
  answer: string
}

export const faqItems: FaqItem[] = [
  { question: "Когда начинается турнир?", answer: "24 ноября в 18:00 по Москве." },
  { question: "Как зарегистрироваться?", answer: "Нажмите кнопку «Войти» и заполните форму." },
  { question: "Где смотреть трансляцию?", answer: "На нашем Twitch-канале. Ссылка будет в новостях." },
  { question: "Какой формат турнира?", answer: "Double Elimination, матчи до двух побед." },
]