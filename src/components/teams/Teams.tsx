import { teams } from "@/lib/data/teams"
import TeamCard from "./TeamCard"
import SectionWrapper from "@/components/layout/SectionWrapper"
import SectionTitle from "@/components/ui/SectionTitle"

export default function Teams() {
  return (
    <SectionWrapper id="teams">
      <SectionTitle>Команды-участники</SectionTitle>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
        {teams.map((team, i) => (
          <TeamCard key={team.name} team={team} index={i} />
        ))}
      </div>
    </SectionWrapper>
  )
}