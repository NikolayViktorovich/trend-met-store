import { useEffect, useRef } from 'react'
import LocomotiveScroll from 'locomotive-scroll'
import 'locomotive-scroll/dist/locomotive-scroll.css'
import Header from './components/Header'
import Hero, { Stats } from './components/Hero'
import Services from './components/Services'
import Warehouse from './components/Warehouse'
import About from './components/About'
import Projects from './components/Projects'
import Clients from './components/Clients'
import Footer from './components/Footer'

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
    <div ref={scrollRef} data-scroll-container className="min-h-screen bg-white overflow-x-hidden w-full max-w-full">
      <Header />
      <Hero />
      <Stats />
      <Services />
      <Warehouse />
      <About />
      <Projects />
      <Clients />
      <Footer />
    </div>
  )
}

export default App
