import { useEffect, useRef } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LocomotiveScroll from 'locomotive-scroll'
import 'locomotive-scroll/dist/locomotive-scroll.css'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ProductionPage from './pages/ProductionPage'
import CranesPage from './pages/CranesPage'
import CranesTwoBeamPage from './pages/CranesTwoBeamPage'
import SteelRollsPage from './pages/SteelRollsPage'
import SteelSheetPage from './pages/SteelSheetPage'
import PaintedSteelPage from './pages/PaintedSteelPage'
import DecorativeSteelPage from './pages/DecorativeSteelPage'
import GalvanizedSteelPage from './pages/GalvanizedSteelPage'
import MetalConstructionsPage from './pages/MetalConstructionsPage'

const App = () => {
  const scrollRef = useRef(null)

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      multiplier: 1.5,
      lerp: 0.15,
      class: 'is-reveal',
      smartphone: {
        smooth: true,
        multiplier: 1.5
      },
      tablet: {
        smooth: true,
        multiplier: 1.5
      },
      reloadOnContextChange: true,
      resetNativeScroll: true
    })

    return () => {
      if (scroll) scroll.destroy()
    }
  }, [])

  return (
    <BrowserRouter>
      <div ref={scrollRef} data-scroll-container className="min-h-screen bg-white overflow-x-hidden w-full max-w-full">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/production" element={<ProductionPage />} />
          <Route path="/cranes" element={<CranesPage />} />
          <Route path="/cranes-two-beam" element={<CranesTwoBeamPage />} />
          <Route path="/steel-rolls" element={<SteelRollsPage />} />
          <Route path="/steel-sheet" element={<SteelSheetPage />} />
          <Route path="/painted-steel" element={<PaintedSteelPage />} />
          <Route path="/decorative-steel" element={<DecorativeSteelPage />} />
          <Route path="/galvanized-steel" element={<GalvanizedSteelPage />} />
          <Route path="/metal-constructions" element={<MetalConstructionsPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
