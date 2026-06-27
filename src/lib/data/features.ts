export interface Feature {
  iconKey: string
  title: string
  description: string
}

export const features: Feature[] = [
  {
    iconKey: "orbit",
    title: "Уникальная арена",
    description: "Сражения на астероиде с низкой гравитацией и голографическими препятствиями.",
  },
  {
    iconKey: "trophy",
    title: "Призовой фонд",
    description: "$50,000 и эксклюзивные игровые девайсы от спонсоров.",
  },
  {
    iconKey: "antenna",
    title: "Прямая трансляция",
    description: "4K-стрим с профессиональными комментаторами.",
  },
  {
    iconKey: "swords",
    title: "Double Elimination",
    description: "Второй шанс в нижней сетке для каждой команды.",
  },
  {
    iconKey: "globe",
    title: "Международный состав",
    description: "16 команд со всего мира.",
  },
  {
    iconKey: "gift",
    title: "Розыгрыши",
    description: "Мерч и скины для зрителей каждые 2 часа.",
  },
]