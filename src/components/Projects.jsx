import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const projects = [
  {
    title: 'Национальный аэропорт Минск',
    images: [
      'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800',
      'https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?w=800',
      'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800'
    ]
  },
  {
    title: 'Национальная библиотека, г. Минск',
    images: [
      'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800',
      'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800',
      'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=800'
    ]
  },
  {
    title: 'Бизнес-центр Kiroff',
    images: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800',
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800',
      'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800'
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
      <div className="relative aspect-[16/11]">
        <img 
          src={project.images[activeImg]} 
          alt={project.title}
          className="w-full h-full object-cover transition-opacity duration-300"
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
        
        {project.images.length > 1 && (
          <>
            <button 
              onClick={() => navigate('prev')}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10"
            >
              <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/>
              </svg>
            </button>

            <button 
              onClick={() => navigate('next')}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10"
            >
              <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
          className="absolute bottom-0 left-0 right-0 p-6"
        >
          <div className="relative">
            <motion.div 
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
              className="absolute -left-2 top-0 bottom-0 w-1 bg-[#0062dd] origin-left"
            />
            <h3 className="text-white text-xl font-bold pl-4">{project.title}</h3>
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
    <section id="projects" className="py-20 bg-gray-900 relative overflow-hidden" ref={ref}>
      {orbs.map((orb, i) => (
        <div key={i} className={`absolute ${orb.size} ${orb.pos} bg-${orb.color} rounded-full blur-3xl glow-orb`} style={{ animationDelay: orb.delay }} />
      ))}
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-white mb-10"
        >
          Наши проекты
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
