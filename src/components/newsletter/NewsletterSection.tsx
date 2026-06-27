import NewsletterForm from "./NewsletterForm"
import SectionWrapper from "@/components/layout/SectionWrapper"
import SectionTitle from "@/components/ui/SectionTitle"

export default function NewsletterSection() {
  return (
    <SectionWrapper>
      <SectionTitle>Не пропусти старт</SectionTitle>
      <p className="text-center text-indigo-200/70 mb-8 -mt-8 max-w-md mx-auto">
        Подпишись на рассылку и получи расписание матчей и ссылку на стрим.
      </p>
      <NewsletterForm />
    </SectionWrapper>
  )
}