import { faqItems } from "@/lib/data/faq"
import AccordionItem from "./AccordionItem"
import SectionWrapper from "@/components/layout/SectionWrapper"
import SectionTitle from "@/components/ui/SectionTitle"

export default function Faq() {
  return (
    <SectionWrapper id="faq">
      <SectionTitle>Часто задаваемые вопросы</SectionTitle>
      <div className="max-w-2xl mx-auto space-y-4">
        {faqItems.map((item, i) => (
          <AccordionItem key={item.question} item={item} index={i} />
        ))}
      </div>
    </SectionWrapper>
  )
}