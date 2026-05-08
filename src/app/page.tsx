import Navbar from '@/components/nav/Navbar'
import Footer from '@/components/nav/Footer'
import HeroSection from '@/components/hero/HeroSection'
import StatsTicker from '@/components/hero/StatsTicker'
import QuickStats from '@/components/stats/QuickStats'
import AboutSection from '@/components/about/AboutSection'
import AchievementsSection from '@/components/achievements/AchievementsSection'
import PerformanceSection from '@/components/performance/PerformanceSection'
import TimelineSection from '@/components/timeline/TimelineSection'
import GallerySection from '@/components/gallery/GallerySection'
import OlympicMission from '@/components/olympic/OlympicMission'
import SponsorSection from '@/components/sponsorship/SponsorSection'
import ContactSection from '@/components/contact/ContactSection'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <StatsTicker />
        <QuickStats />
        <AboutSection />
        <AchievementsSection />
        <PerformanceSection />
        <TimelineSection />
        <GallerySection />
        <OlympicMission />
        <SponsorSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
