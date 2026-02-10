import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

import minsk1 from '../assets/Projects/Minsk/1.jpg'
import minsk2 from '../assets/Projects/Minsk/2.jpg'
import parkMinsk1 from '../assets/Projects/park_minsk/1.jpg'
import parkMinsk2 from '../assets/Projects/park_minsk/2.jpg'
import biznes1 from '../assets/Projects/biznes_centre/1.jpg'
import biznes2 from '../assets/Projects/biznes_centre/2.jpg'
import biznes3 from '../assets/Projects/biznes_centre/3.jpg'
import biznes4 from '../assets/Projects/biznes_centre/4.jpg'
import biznes5 from '../assets/Projects/biznes_centre/5.jpg'
import sanatoriy1 from '../assets/Projects/sanatoriy/1.jpg'
import sanatoriy2 from '../assets/Projects/sanatoriy/2.jpg'
import sanatoriy3 from '../assets/Projects/sanatoriy/3.jpg'
import gostinitsa1 from '../assets/Projects/gostinitsa/1.jpg'
import gostinitsa2 from '../assets/Projects/gostinitsa/2.jpg'
import gostinitsa3 from '../assets/Projects/gostinitsa/3.jpg'
import gostinitsa4 from '../assets/Projects/gostinitsa/4.jpg'
import gostinitsa5 from '../assets/Projects/gostinitsa/5.jpg'
import gostinitsa6 from '../assets/Projects/gostinitsa/6.jpg'
import gostinitsa7 from '../assets/Projects/gostinitsa/7.jpg'
import gostinitsa8 from '../assets/Projects/gostinitsa/8.jpg'
import gostinitsa9 from '../assets/Projects/gostinitsa/9.jpg'
import utc1 from '../assets/Projects/utc/1.jpg'
import utc2 from '../assets/Projects/utc/2.jpg'
import utc3 from '../assets/Projects/utc/3.jpg'
import utc4 from '../assets/Projects/utc/4.jpg'
import utc5 from '../assets/Projects/utc/5.jpg'
import ipodrom1 from '../assets/Projects/ipodrom/1.jpg'
import ipodrom2 from '../assets/Projects/ipodrom/2.jpeg'
import belorus1 from '../assets/Projects/belorus/1.jpg'
import belorus2 from '../assets/Projects/belorus/2.jpg'
import belorus3 from '../assets/Projects/belorus/3.jpg'
import belorus4 from '../assets/Projects/belorus/4.jpg'
import belorus5 from '../assets/Projects/belorus/5.jpg'
import belorus6 from '../assets/Projects/belorus/6.jpg'
import technologies1 from '../assets/Projects/technologies/1.jpg'

const projects = [
  {
    title: 'Национальный аэропорт Минск',
    images: [minsk1, minsk2]
  },
  {
    title: 'Национальная библиотека, г. Минск',
    images: [parkMinsk1, parkMinsk2]
  },
  {
    title: 'Бизнес-центр Kiroff',
    images: [biznes1, biznes2, biznes3, biznes4, biznes5]
  },
  {
    title: 'Санаторий «Берёзка»',
    images: [sanatoriy1, sanatoriy2, sanatoriy3]
  },
  {
    title: 'Гостиница "Беларусь"',
    images: [gostinitsa1, gostinitsa2, gostinitsa3, gostinitsa4, gostinitsa5, gostinitsa6, gostinitsa7, gostinitsa8, gostinitsa9]
  },
  {
    title: 'УТЦ фристайла',
    images: [utc1, utc2, utc3, utc4, utc5]
  },
  {
    title: 'Московский ипподром',
    images: [ipodrom1, ipodrom2]
  },
  {
    title: 'Административное здание РУП "ПО "Белоруснефть"',
    images: [belorus1, belorus2, belorus3, belorus4, belorus5, belorus6]
  },
  {
    title: 'Административное здание АДАНИ Технолоджис',
    images: [technologies1]
  }
]

const orbs = [
  { color: 'blue-500/20', size: 'w-96 h-96', pos: 'top-20 left-20', delay: '0s' },
  { color: 'purple-500/20', size: 'w-80 h-80', pos: 'bottom-20 right-20', delay: '2s' },
  { color: 'cyan-500/15', size: 'w-72 h-72', pos: 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2', delay: '4s' }
]

const ProjectCard = ({ project, index, parentInView }) => {
  const [activeImg, setActiveImg] = useState(0)

  const navigate = (dir) => {
    setActiveImg(a => dir === 'prev' 
      ? (a > 0 ? a - 1 : project.images.length - 1) 
      : (a < project.images.length - 1 ? a + 1 : 0)
    )
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={parentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group relative rounded-2xl overflow-hidden"
    >
      <div className="relative aspect-16/11">
        <img 
          src={project.images[activeImg]} 
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover transition-opacity duration-300"
        />
        
        <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
        
        {project.images.length > 1 && (
          <>
            <button 
              onClick={() => navigate('prev')}
              className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/90 flex items-center justify-center opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity z-10"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/>
              </svg>
            </button>

            <button 
              onClick={() => navigate('next')}
              className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/90 flex items-center justify-center opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity z-10"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
              </svg>
            </button>

            <div className="absolute top-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
              {project.images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className={`h-1.5 rounded-full transition-all ${i === activeImg ? 'bg-white w-6' : 'bg-white/50 w-1.5'}`}
                />
              ))}
            </div>
          </>
        )}

        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={parentInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
          className="absolute bottom-0 left-0 right-0 p-3 sm:p-6"
        >
          <div className="relative">
            <motion.div 
              initial={{ scaleX: 0 }}
              animate={parentInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
              className="absolute -left-2 top-0 bottom-0 w-1 bg-[#0062dd] origin-left"
            />
            <h3 className="text-white text-base sm:text-xl font-bold pl-3 sm:pl-4">{project.title}</h3>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { margin: "-100px", once: true })

  return (
    <section id="projects" className="py-12 sm:py-16 md:py-20 bg-gray-900 relative overflow-hidden" ref={ref}>
      {orbs.map((orb, i) => (
        <div key={i} className={`absolute ${orb.size} ${orb.pos} bg-${orb.color} rounded-full blur-3xl glow-orb`} style={{ animationDelay: orb.delay }} />
      ))}
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-10"
        >
          Наши проекты
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} index={i} parentInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
