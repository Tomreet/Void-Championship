import { features } from "@/lib/data/features"
import FeatureCard from "./FeatureCard"
import SectionWrapper from "@/components/layout/SectionWrapper"
import SectionTitle from "@/components/ui/SectionTitle"

export default function Features() {
  return (
    <SectionWrapper id="about">
      <div className="absolute top-0 left-0 w-full h-32 bg-linear-to-b from-void-950 to-transparent pointer-events-none z-10" />

      <SectionTitle>Почему Void Championship?</SectionTitle>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {features.map((f, i) => (
          <FeatureCard key={f.title} feature={f} index={i} />
        ))}
      </div>
    </SectionWrapper>
  )
}