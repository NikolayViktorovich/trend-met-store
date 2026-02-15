import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const slides = [
  { id: 1 },
  { id: 2},
  { id: 3 },
  { id: 4 }
]

const orbs = [
  { color: 'rgba(34, 197, 94, 0.1)', size: 'w-96 h-96', pos: 'top-20 right-20', delay: '0s' },
  { color: 'rgba(16, 185, 129, 0.1)', size: 'w-80 h-80', pos: 'bottom-20 left-20', delay: '2s' },
  { color: 'rgba(20, 184, 166, 0.08)', size: 'w-72 h-72', pos: 'top-1/2 right-1/3', delay: '4s' }
]

const OwnProduction = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { margin: "-100px", once: true })
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  const handleSlideClick = () => {
    navigate('/production')
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  return (
    <section id="own-production" className="py-8 sm:py-10 md:py-12 bg-gray-900 relative overflow-hidden" ref={ref}>
      {orbs.map((orb, i) => (
        <div 
          key={i} 
          className={`absolute ${orb.size} ${orb.pos} rounded-full blur-3xl glow-orb`} 
          style={{ backgroundColor: orb.color, animationDelay: orb.delay }} 
        />
      ))}
      
      {/* Gradient fade at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-10"
        >
          Продукция собственного про-ва
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <div
            className="relative overflow-hidden rounded-2xl aspect-video bg-gray-800 cursor-pointer group"
            onClick={handleSlideClick}
          >
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`absolute inset-0 transition-opacity duration-700 ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img 
                  src={slide.img} 
                  alt={slide.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
              </div>
            ))}

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity">
                <svg className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                </svg>
                <p className="text-base sm:text-lg font-semibold">Посмотреть подробнее</p>
              </div>
            </div>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation()
                    goToSlide(index)
                  }}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentSlide 
                      ? 'bg-white w-8' 
                      : 'bg-white/50 hover:bg-white/75'
                  }`}
                  aria-label={`Перейти к слайду ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default OwnProduction
