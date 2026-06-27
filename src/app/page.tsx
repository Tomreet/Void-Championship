import Header from "@/components/layout/Header"
import Hero from "@/components/hero/Hero"
import Features from "@/components/features/Features"
import Teams from "@/components/teams/Teams"
import Schedule from "@/components/schedule/Schedule"
import Prizes from "@/components/prizes/Prizes"
import Faq from "@/components/faq/Faq"
import NewsletterSection from "@/components/newsletter/NewsletterSection"
import Footer from "@/components/layout/Footer"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Teams />
        <Schedule />
        <Prizes />
        <Faq />
        <NewsletterSection />
      </main>
      <Footer />
    </>
  )
}