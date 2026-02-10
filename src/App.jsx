import { useEffect, useRef } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LocomotiveScroll from 'locomotive-scroll'
import 'locomotive-scroll/dist/locomotive-scroll.css'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'

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
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
