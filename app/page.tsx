import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { WorkflowSection } from "@/components/workflow-section"
import { PortfolioSection } from "@/components/portfolio-section"
import { TeamSection } from "@/components/team-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { Footer } from "@/components/footer"
export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <WorkflowSection />
        <PortfolioSection />
        <TeamSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  )
}
