import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Solutions from '@/components/Solutions'
import Pricing from '@/components/Pricing'
import FAQ from '@/components/FAQ'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'
import ExampleCards from '@/components/ExampleCards'
import TechFrameworks from '@/components/TechFrameworks'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ExampleCards />
      <TechFrameworks />
      <Features />
      <Solutions />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  )
}
