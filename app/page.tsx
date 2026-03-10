import Navbar from '@/components/layout/navbar'
import Footer from '@/components/layout/footer'

import HeroSection from '@/components/hero/hero-section'
import RecentLinks from '@/components/links/recent-links'

import FeaturesSection from '@/components/features/features-section'
import HowItWorks from '@/components/features/how-it-works'
import Stats from '@/components/features/stats'
import CTA from '@/components/features/cta'
import AnimatedBackground from '@/components/effects/animated-background'


export default function Home() {
  return (
    <>
    <Navbar />
    <main className="relative min-h-screen overflow-hidden text-white">
      <AnimatedBackground />
      <HeroSection />
      <RecentLinks />
      <FeaturesSection />
      <HowItWorks />
      <Stats />
      <CTA />
    </main>
    <Footer />
    </>
  )
}