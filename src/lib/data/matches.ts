export interface Match {
  id: string
  team1: string
  team2: string
  time: string
  live: boolean
  bracket?: string
}

export const matches: Match[] = [
  { id: "1", team1: "Lunar Wolves", team2: "Void Reapers", time: "24.11 18:00 MSK", live: true, bracket: "Верхняя сетка" },
  { id: "2", team1: "Solar Flares", team2: "Abyss Walkers", time: "24.11 20:00 MSK", live: false },
  { id: "3", team1: "Nebula Knights", team2: "Cosmic Tide", time: "25.11 18:00 MSK", live: false },
  { id: "4", team1: "Star Forgers", team2: "Dark Matter", time: "25.11 20:00 MSK", live: false },
]