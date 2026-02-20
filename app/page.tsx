import Navbar from '@/components/layout/navbar'
import HeroSection from '@/components/hero/hero-section'
import AnimatedBackground from '@/components/effects/animated-background'
import RecentLinks from '@/components/links/recent-links'

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden text-white">
      <AnimatedBackground />
      <Navbar />
      <HeroSection />
      <RecentLinks />
    </main>
  )
}