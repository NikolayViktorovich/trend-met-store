import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import metallImg from '../assets/Services/metall.jpg'
import nerjstalImg from '../assets/Services/nerjstal.png'
import balkiImg from '../assets/Services/balki.JPG'
import kranImg from '../assets/Services/kran.JPG'
import stallImg from '../assets/Services/stall.JPG'
import lazerImg from '../assets/Services/lazer.JPG'

const services = [
  { title: 'Изготовление металлоконструкций', img: metallImg },
  { title: 'Металлоконструкции из нержавеющей стали', img: nerjstalImg },
  { title: 'Про-во сварных балок из черной и нержавеющей стали', img: balkiImg },
  { title: 'Про-во мостовых и козловых кранов', img: kranImg },
  { title: 'Мебель из нержавеющей стали для пищевой, химической и медицинской отраслей', img: stallImg },
  { title: 'Услуги по лазерной резке и покраске', img: lazerImg }
]

const Services = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { margin: "-100px" })

  return (
    <section id="services" className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-gray-900 mb-10"
        >
          Услуги
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl aspect-[4/3]"
            >
              <img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-white text-lg font-semibold leading-snug">{s.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
