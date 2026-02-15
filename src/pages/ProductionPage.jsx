import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import Breadcrumbs from '../components/Breadcrumbs'
import ImageModal from '../components/ImageModal'

const ProductionPage = () => {
  const [activeTab, setActiveTab] = useState(0)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [modalState, setModalState] = useState({ isOpen: false, currentIndex: 0 })

  const placeholderImages = [
    'https://via.placeholder.com/800x600/0062dd/ffffff?text=Изображение+1',
    'https://via.placeholder.com/800x600/0052bb/ffffff?text=Изображение+2',
    'https://via.placeholder.com/800x600/0062dd/ffffff?text=Изображение+3',
    'https://via.placeholder.com/800x600/0042aa/ffffff?text=Изображение+4'
  ]

  const categories = [
    {
      id: 0,
      title: 'Кровельные решения',
      items: [
        'ПРОФЛИСТ (п -Трп 15/20/35/60/575/114)',
        'МЕТАЛЛОЧЕРЕПИЦА',
        'ФАЛЬЦЕВАЯ КРОВЛЯ'
      ]
    },
    {
      id: 1,
      title: 'Стеновые решения',
      items: [
        'ПРОФЛИСТ (П15 П20, НС35)',
        'ЛИННЕАРНЫЕ ПАНЕЛИ',
        'ФАСАДНЫЕ КАССЕТЫ',
        'ПАНЕЛИ ДЛЯ ВЕНТИЛИРУЕМЫХ ФАСАДОВ',
        'ПОДКОНСТРУКЦИИ ДЛЯ ВЕНТИЛИРУЕМЫХ ФАСАДОВ (КРОНШТЕЙНЫ, ПРОФИЛИ)'
      ]
    },
    {
      id: 2,
      title: 'Сэндвич-панели',
      items: [
        'Толщина — 100-150 мм',
        'Производство из оцинкованной стали с полимерным покрытием и нержавеющей стали'
      ]
    },
    {
      id: 3,
      title: 'Штрипса',
      items: [
        'Высококачественная штрипса для различных применений',
        'Широкий ассортимент размеров и толщин'
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

  return (
    <div className="min-h-screen bg-white">
      <Breadcrumbs 
        items={[
          { label: 'Главная', href: '/' },
          { label: 'Продукция собственного про-ва' }
        ]} 
      />
      
      <section className="py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="text-center mb-8"
          >
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
              Продукция собственного производства
            </h1>
            <p className="text-gray-600">
              Инновационные решения для строительства и промышленности
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:col-span-4 space-y-2"
            >
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveTab(category.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 ${
                    activeTab === category.id
                      ? 'bg-[#0062dd] text-white shadow-md'
                      : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <h3 className="font-semibold">
                    {category.title}
                  </h3>
                </button>
              ))}
            </motion.div>

            <div className="lg:col-span-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
                >

                  <div className="relative h-[300px] sm:h-[350px] bg-gray-900 overflow-hidden group">
                    {placeholderImages.map((img, index) => (
                      <motion.div
                        key={index}
                        initial={false}
                        animate={{
                          opacity: index === currentSlide ? 1 : 0,
                          scale: index === currentSlide ? 1 : 1.05
                        }}
                        transition={{ duration: 0.5 }}
                        className="absolute inset-0 cursor-pointer"
                        onClick={() => handleImageClick(index)}
                      >
                        <img
                          src={img}
                          alt={`Slide ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                    ))}

                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                    <button
                      onClick={() => setCurrentSlide((prev) => (prev - 1 + placeholderImages.length) % placeholderImages.length)}
                      className="absolute left-3 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/90 hover:bg-white transition-all opacity-0 group-hover:opacity-100"
                    >
                      <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7"/>
                      </svg>
                    </button>
                    <button
                      onClick={() => setCurrentSlide((prev) => (prev + 1) % placeholderImages.length)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/90 hover:bg-white transition-all opacity-0 group-hover:opacity-100"
                    >
                      <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7"/>
                      </svg>
                    </button>

                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                      {placeholderImages.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentSlide(index)}
                          className={`h-1.5 rounded-full transition-all duration-200 ${
                            index === currentSlide
                              ? 'w-6 bg-[#0062dd]'
                              : 'w-1.5 bg-white/50 hover:bg-white/75'
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="p-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      {categories[activeTab].title}
                    </h2>

                    <div className="space-y-1">
                      {categories[activeTab].items.map((item, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.03 * index, duration: 0.2 }}
                          className="flex items-start gap-2 py-1.5 px-3 rounded hover:bg-gray-50 transition-colors"
                        >
                          <div className="mt-1.5 w-1 h-1 rounded-full bg-[#0062dd] flex-shrink-0" />
                          <span className="text-gray-700 leading-snug font-semibold">
                            {item}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.4 }}
            className="mt-12 bg-[#0062dd] rounded-xl p-8 text-white shadow-lg"
          >
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold mb-3">
                Нужна консультация по продукции?
              </h2>
              <p className="mb-6 opacity-90">
                Свяжитесь с нами для обсуждения вашего заказа
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

export default ProductionPage
