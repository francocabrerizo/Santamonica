import Atmosphere from './components/Atmosphere'
import DonationBoard from './components/DonationBoard'
import EditorialSections from './components/EditorialSections'
import Footer from './components/Footer'
import HelpAndFaq from './components/HelpAndFaq'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import SmoothScroll from './components/SmoothScroll'

function App() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-forest text-cream">
      <SmoothScroll />
      <Atmosphere />
      <Navbar />
      <main>
        <Hero />
        <EditorialSections />
        <DonationBoard />
        <HelpAndFaq />
      </main>
      <Footer />
    </div>
  )
}

export default App
