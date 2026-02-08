import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import almisLogo from '../assets/Logo/almis.png'
import belorusLogo from '../assets/Logo/belorus.png'
import mb3Logo from '../assets/Logo/mb3.png'
import mmzavodLogo from '../assets/Logo/mmzavod.png'
import nztmLogo from '../assets/Logo/nztm.png'
import o3tmLogo from '../assets/Logo/o3tm.png'
import rmsLogo from '../assets/Logo/rms.png'
import rshdLogo from '../assets/Logo/rshd.png'
import shahtaLogo from '../assets/Logo/shahta.png'
import stroytegiaLogo from '../assets/Logo/stroytegia.png'
import ttmLogo from '../assets/Logo/ttm.png'
import volatLogo from '../assets/Logo/volat.png'

const clients = [
  { logo: ttmLogo, size: 'normal' },
  { logo: stroytegiaLogo, size: 'normal' },
  { logo: nztmLogo, size: 'xlarge' },
  { logo: shahtaLogo, size: 'normal' },
  { logo: belorusLogo, size: 'normal' },
  { logo: volatLogo, size: 'normal' },
  { logo: mb3Logo, size: 'xxlarge' },
  { logo: o3tmLogo, size: 'large' },
  { logo: rmsLogo, size: 'xlarge' },
  { logo: almisLogo, size: 'xlarge' },
  { logo: mmzavodLogo, size: 'large' },
  { logo: rshdLogo, size: 'normal' }
]

const Clients = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { margin: "-100px" })

  return (
    <section className="py-20 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-gray-900 mb-10"
        >
          Наши клиенты
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {clients.map((client, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="flex items-center justify-center"
            >
              <img 
                src={client.logo} 
                alt="" 
                className={`max-w-full h-auto object-contain opacity-60 hover:opacity-100 transition-opacity ${
                  client.size === 'xxlarge' ? 'max-h-44' : client.size === 'xlarge' ? 'max-h-36' : client.size === 'large' ? 'max-h-20' : 'max-h-14'
                }`} 
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Clients
