export interface Prize {
  place: string
  amount: string
  description: string
}

export const prizes: Prize[] = [
  { place: "1 место", amount: "$25,000", description: "Эксклюзивный мерч и золотой скин" },
  { place: "2 место", amount: "$15,000", description: "Серебряный скин и подписка на год" },
  { place: "3 место", amount: "$7,500", description: "Бронзовый скин и подписка на 6 месяцев" },
  { place: "4–8 места", amount: "$500", description: "Пакет внутриигровой валюты" },
]