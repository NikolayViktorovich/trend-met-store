import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import Breadcrumbs from '../components/Breadcrumbs'
import ImageModal from '../components/ImageModal'

const MetalConstructionsPage = () => {
  const [currentSlides, setCurrentSlides] = useState([0, 0, 0])
  const [modalState, setModalState] = useState({ isOpen: false, currentIndex: 0 })

  const placeholderImages = [
    'https://via.placeholder.com/800x600/0062dd/ffffff?text=Изображение+1',
    'https://via.placeholder.com/800x600/0052bb/ffffff?text=Изображение+2',
    'https://via.placeholder.com/800x600/0062dd/ffffff?text=Изображение+3'
  ]

  const sections = [
    {
      id: 0,
      title: 'Металлоконструкции строительные',
      items: [
        'типовые строительные конструкции (фермы, колонны, связи)',
        'нестандартные металлические конструкции',
        'сварные двутавровые балки, балки коробчатого сечения',
        'мостовые конструкции, путепроводы'
      ]
    },
    {
      id: 1,
      title: 'Металлоконструкции для машиностроения',
      items: [
        'сварные хребтовые, боковые, концевые балки в вагоностроении',
        'подкрановые пути и крановые балки',
        'крыши и стенки полувагонов, минераловозов, хопперов'
      ]
    },
    {
      id: 2,
      title: 'Производство из нержавеющих сталей',
      items: [
        'металлоконструкции для химической и нефтехимической промышленности, нестандартные емкости, контейнеры, бункера, течки',
        'приточки, вентиляционные и аспирационные системы',
        'ЛСТК – строительный профиль, термопрофиль',
        'Прочие изделия по чертежам заказчика'
      ]
    }
  ]

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const imagesList = placeholderImages.map((img, index) => ({
    src: img,
    alt: `Изображение ${index + 1}`
  }))

  const handleImageClick = (index) => {
    setModalState({ isOpen: true, currentIndex: index })
  }

  const handleNavigate = (direction) => {
    setModalState(prev => {
      const newIndex = direction === 'next' 
        ? (prev.currentIndex + 1) % imagesList.length
        : (prev.currentIndex - 1 + imagesList.length) % imagesList.length
      return { ...prev, currentIndex: newIndex }
    })
  }

  const updateSlide = (sectionIndex, direction) => {
    setCurrentSlides(prev => {
      const newSlides = [...prev]
      if (direction === 'next') {
        newSlides[sectionIndex] = (newSlides[sectionIndex] + 1) % placeholderImages.length
      } else {
        newSlides[sectionIndex] = (newSlides[sectionIndex] - 1 + placeholderImages.length) % placeholderImages.length
      }
      return newSlides
    })
  }

  return (
    <div className="min-h-screen bg-white">
      <Breadcrumbs 
        items={[
          { label: 'Главная', href: '/' },
          { label: 'Металлоконструкции' }
        ]} 
      />
      
      <section className="py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="text-center mb-10"
          >
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
              Металлоконструкции
            </h1>
            <p className="text-gray-600">
              Профессиональное производство металлоконструкций любой сложности
            </p>
          </motion.div>

          <div className="space-y-12">
            {sections.map((section, sectionIndex) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4 }}
              >
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center ${
                  sectionIndex % 2 === 0 ? '' : 'lg:flex-row-reverse'
                }`}>
                  <div className={`relative ${sectionIndex % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="relative h-[350px] rounded-xl overflow-hidden shadow-lg group">
                      {placeholderImages.map((img, imgIndex) => (
                        <motion.div
                          key={imgIndex}
                          initial={false}
                          animate={{
                            opacity: imgIndex === currentSlides[sectionIndex] ? 1 : 0,
                            scale: imgIndex === currentSlides[sectionIndex] ? 1 : 1.05
                          }}
                          transition={{ duration: 0.5 }}
                          className="absolute inset-0 cursor-pointer"
                          onClick={() => handleImageClick(imgIndex)}
                        >
                          <img
                            src={img}
                            alt={`${section.title} ${imgIndex + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </motion.div>
                      ))}

                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

                      <button
                        onClick={() => updateSlide(sectionIndex, 'prev')}
                        className="absolute left-3 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/90 hover:bg-white transition-all opacity-0 group-hover:opacity-100"
                      >
                        <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7"/>
                        </svg>
                      </button>
                      <button
                        onClick={() => updateSlide(sectionIndex, 'next')}
                        className="absolute right-3 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/90 hover:bg-white transition-all opacity-0 group-hover:opacity-100"
                      >
                        <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7"/>
                        </svg>
                      </button>

                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                        {placeholderImages.map((_, idx) => (
                          <button
                            key={idx}
                            onClick={() => setCurrentSlides(prev => {
                              const newSlides = [...prev]
                              newSlides[sectionIndex] = idx
                              return newSlides
                            })}
                            className={`h-1.5 rounded-full transition-all duration-200 ${
                              idx === currentSlides[sectionIndex]
                                ? 'w-6 bg-[#0062dd]'
                                : 'w-1.5 bg-white/60 hover:bg-white/80'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className={`${sectionIndex % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      {section.title}
                    </h2>

                    <div className="space-y-1">
                      {section.items.map((item, itemIndex) => (
                        <motion.div
                          key={itemIndex}
                          initial={{ opacity: 0, x: sectionIndex % 2 === 0 ? -20 : 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: itemIndex * 0.05 }}
                          className="flex items-start gap-2 py-1.5 px-3 rounded hover:bg-gray-50 transition-colors"
                        >
                          <div className="mt-1.5 w-1 h-1 rounded-full bg-[#0062dd] flex-shrink-0" />
                          <p className="text-gray-700 leading-snug">
                            {item}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="mt-12 bg-[#0062dd] rounded-xl p-8 text-white shadow-lg"
          >
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold mb-3">
                Нужна консультация по металлоконструкциям?
              </h2>
              <p className="mb-6 opacity-90">
                Свяжитесь с нами для обсуждения вашего проекта
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="tel:+79199995409"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-[#0062dd] rounded-full hover:bg-gray-100 transition-colors font-semibold text-sm"
                >
                  +7 (919) 999-54-09
                </a>
                <a
                  href="mailto:zakaz@trend-met.ru"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 text-white rounded-full hover:bg-white/20 transition-colors font-semibold border-2 border-white text-sm"
                >
                  zakaz@trend-met.ru
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <ImageModal
        isOpen={modalState.isOpen}
        onClose={() => setModalState({ isOpen: false, currentIndex: 0 })}
        images={imagesList}
        currentIndex={modalState.currentIndex}
        onNavigate={handleNavigate}
      />
    </div>
  )
}

export default MetalConstructionsPage
