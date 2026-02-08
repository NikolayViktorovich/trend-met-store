import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import videoBackground from '../assets/aa.mp4'

const useCounter = (end, duration = 600) => {
  const [count, setCount] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)

  useEffect(() => {
    if (!hasStarted) return
    
    let startTime
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      setCount(Math.floor(progress * end))
      if (progress < 1) requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)
  }, [end, duration, hasStarted])

  return [count, () => setHasStarted(true)]
}

const stats = [
  { value: 35, label: 'лет на рынке', delay: 0.1 },
  { value: 1000, label: ['тонн в месяц —', 'объём производства'], delay: 0.2 },
]

const icons = [
  { path: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z', label: ['выполнение', 'работы в срок'], delay: 0.3 },
  { path: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z', label: ['работа с крупнейшими', 'подрядчиками'], delay: 0.4 }
]

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [count35, startCount35] = useCounter(35)
  const [count1000, startCount1000] = useCounter(1000)

  useEffect(() => {
    setIsLoaded(true)
    setTimeout(() => {
      startCount35()
      startCount1000()
    }, 500)
  }, [])

  return (
    <section className="relative h-[600px] bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
      <video autoPlay loop muted playsInline className={`absolute inset-0 w-full h-full object-cover opacity-40 transition-all duration-500 ${isLoaded ? 'scale-100' : 'scale-110'}`}>
        <source src={videoBackground} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
      
      <div className="absolute inset-0 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.h1 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-4xl md:text-6xl font-bold text-white"
          >
            Производство<br />металлоконструкций<br /><span className="text-[#0062dd]">полного цикла</span>
          </motion.h1>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-center backdrop-blur-sm bg-black/20 rounded-lg py-4 px-3"
            >
              <div className="h-16 flex items-center justify-center mb-2">
                <div className="text-5xl font-bold text-white">{count35}</div>
              </div>
              <div className="text-xs text-gray-200">лет на рынке</div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="text-center backdrop-blur-sm bg-black/20 rounded-lg py-4 px-3"
            >
              <div className="h-16 flex items-center justify-center mb-2">
                <div className="text-5xl font-bold text-white">{count1000}</div>
              </div>
              <div className="text-xs text-gray-200">тонн в месяц —</div>
              <div className="text-xs text-gray-200">объём производства</div>
            </motion.div>
            
            {icons.map((icon, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: icon.delay }}
                className="text-center backdrop-blur-sm bg-black/20 rounded-lg py-4 px-3"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 mb-2">
                  <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={icon.path}/>
                  </svg>
                </div>
                {icon.label.map((l, j) => <div key={j} className="text-xs text-gray-200">{l}</div>)}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export const Stats = () => null
export default Hero
