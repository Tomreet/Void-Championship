import { matches } from "@/lib/data/matches"
import MatchRow from "./MatchRow"
import SectionWrapper from "@/components/layout/SectionWrapper"
import SectionTitle from "@/components/ui/SectionTitle"

export default function Schedule() {
  return (
    <SectionWrapper id="schedule">
      <SectionTitle>Расписание матчей</SectionTitle>
      <div className="max-w-3xl mx-auto space-y-4">
        {matches.map((match, i) => (
          <MatchRow key={match.id} match={match} index={i} />
        ))}
      </div>
    </SectionWrapper>
  )
}