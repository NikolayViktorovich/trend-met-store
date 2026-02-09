import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const projects = [
  {
    title: 'Национальный аэропорт Минск',
    images: [
      'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600"%3E%3Crect fill="%23374151" width="800" height="600"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" fill="%239ca3af" font-size="24" font-family="sans-serif"%3EПроект 1%3C/text%3E%3C/svg%3E',
      'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600"%3E%3Crect fill="%23374151" width="800" height="600"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" fill="%239ca3af" font-size="24" font-family="sans-serif"%3EПроект 1%3C/text%3E%3C/svg%3E',
      'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600"%3E%3Crect fill="%23374151" width="800" height="600"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" fill="%239ca3af" font-size="24" font-family="sans-serif"%3EПроект 1%3C/text%3E%3C/svg%3E'
    ]
  },
  {
    title: 'Национальная библиотека, г. Минск',
    images: [
      'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600"%3E%3Crect fill="%23374151" width="800" height="600"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" fill="%239ca3af" font-size="24" font-family="sans-serif"%3EПроект 2%3C/text%3E%3C/svg%3E',
      'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600"%3E%3Crect fill="%23374151" width="800" height="600"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" fill="%239ca3af" font-size="24" font-family="sans-serif"%3EПроект 2%3C/text%3E%3C/svg%3E',
      'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600"%3E%3Crect fill="%23374151" width="800" height="600"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" fill="%239ca3af" font-size="24" font-family="sans-serif"%3EПроект 2%3C/text%3E%3C/svg%3E'
    ]
  },
  {
    title: 'Бизнес-центр Kiroff',
    images: [
      'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600"%3E%3Crect fill="%23374151" width="800" height="600"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" fill="%239ca3af" font-size="24" font-family="sans-serif"%3EПроект 3%3C/text%3E%3C/svg%3E',
      'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600"%3E%3Crect fill="%23374151" width="800" height="600"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" fill="%239ca3af" font-size="24" font-family="sans-serif"%3EПроект 3%3C/text%3E%3C/svg%3E',
      'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600"%3E%3Crect fill="%23374151" width="800" height="600"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" fill="%239ca3af" font-size="24" font-family="sans-serif"%3EПроект 3%3C/text%3E%3C/svg%3E'
    ]
  }
]

const orbs = [
  { color: 'blue-500/20', size: 'w-96 h-96', pos: 'top-20 left-20', delay: '0s' },
  { color: 'purple-500/20', size: 'w-80 h-80', pos: 'bottom-20 right-20', delay: '2s' },
  { color: 'cyan-500/15', size: 'w-72 h-72', pos: 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2', delay: '4s' }
]

const ProjectCard = ({ project, index }) => {
  const [activeImg, setActiveImg] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { margin: "-100px" })

  const navigate = (dir) => {
    setActiveImg(a => dir === 'prev' 
      ? (a > 0 ? a - 1 : project.images.length - 1) 
      : (a < project.images.length - 1 ? a + 1 : 0)
    )
  }

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
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
          animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
          className="absolute bottom-0 left-0 right-0 p-3 sm:p-6"
        >
          <div className="relative">
            <motion.div 
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
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
  const isInView = useInView(ref, { margin: "-100px" })

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
            <ProjectCard key={i} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
