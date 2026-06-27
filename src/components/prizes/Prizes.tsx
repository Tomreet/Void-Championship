import { prizes } from "@/lib/data/prizes"
import PrizeCard from "./PrizeCard"
import SectionWrapper from "@/components/layout/SectionWrapper"
import SectionTitle from "@/components/ui/SectionTitle"

export default function Prizes() {
  return (
    <SectionWrapper id="prizes">
      <SectionTitle>Призовой фонд</SectionTitle>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {prizes.map((prize, i) => (
          <PrizeCard key={prize.place} prize={prize} index={i} isTop={i === 0} />
        ))}
      </div>
    </SectionWrapper>
  )
}