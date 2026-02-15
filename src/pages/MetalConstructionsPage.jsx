import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import Breadcrumbs from '../components/Breadcrumbs'
import ImageModal from '../components/ImageModal'

const MetalConstructionsPage = () => {
  const [currentSlide1, setCurrentSlide1] = useState(0)
  const [currentSlide2, setCurrentSlide2] = useState(0)
  const [currentSlide3, setCurrentSlide3] = useState(0)
  const [modalState, setModalState] = useState({ isOpen: false, currentIndex: 0 })

  const placeholderImages = [
    'https://via.placeholder.com/600x400/0062dd/ffffff?text=Изображение+1',
    'https://via.placeholder.com/600x400/0052bb/ffffff?text=Изображение+2',
    'https://via.placeholder.com/600x400/0062dd/ffffff?text=Изображение+3'
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

  useEffect(() => {
    const interval1 = setInterval(() => {
      setCurrentSlide1((prev) => (prev + 1) % placeholderImages.length)
    }, 3000)

    const interval2 = setInterval(() => {
      setCurrentSlide2((prev) => (prev + 1) % placeholderImages.length)
    }, 3500)

    const interval3 = setInterval(() => {
      setCurrentSlide3((prev) => (prev + 1) % placeholderImages.length)
    }, 4000)

    return () => {
      clearInterval(interval1)
      clearInterval(interval2)
      clearInterval(interval3)
    }
  }, [])

  const Slideshow = ({ images, currentSlide }) => (
    <div className="relative w-full h-[250px] sm:h-[300px] rounded-xl overflow-hidden bg-gray-100">
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 cursor-pointer ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => handleImageClick(index)}
        >
          <img
            src={img}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-1.5">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-1.5 h-1.5 rounded-full transition-all ${
              index === currentSlide ? 'bg-gray-700 w-5' : 'bg-gray-700/50'
            }`}
          />
        ))}
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-white">
      <Breadcrumbs 
        items={[
          { label: 'Главная', href: '/' },
          { label: 'Металлоконструкции' }
        ]} 
      />
      
      <section className="py-8 sm:py-12 md:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-8 sm:mb-10 text-center"
          >
            МЕТАЛЛОКОНСТРУКЦИИ
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-10 sm:mb-12"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                  Металлоконструкции строительные
                </h2>
                <ul className="space-y-2 text-gray-700 text-sm sm:text-base">
                  <li className="flex items-start gap-2">
                    <span className="text-[#0062dd] font-bold mt-0.5">•</span>
                    <span>типовые строительные конструкции (фермы, колонны, связи)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0062dd] font-bold mt-0.5">•</span>
                    <span>нестандартные металлические конструкции</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0062dd] font-bold mt-0.5">•</span>
                    <span>сварные двутавровые балки, балки коробчатого сечения</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0062dd] font-bold mt-0.5">•</span>
                    <span>мостовые конструкции, путепроводы</span>
                  </li>
                </ul>
              </div>
              <div className="order-1 lg:order-2">
                <Slideshow images={placeholderImages} currentSlide={currentSlide1} />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-10 sm:mb-12"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
              <div className="order-1">
                <Slideshow images={placeholderImages} currentSlide={currentSlide2} />
              </div>
              <div className="order-2">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                  Металлоконструкции для машиностроения
                </h2>
                <ul className="space-y-2 text-gray-700 text-sm sm:text-base">
                  <li className="flex items-start gap-2">
                    <span className="text-[#0062dd] font-bold mt-0.5">•</span>
                    <span>сварные хребтовые, боковые, концевые балки в вагоностроении</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0062dd] font-bold mt-0.5">•</span>
                    <span>подкрановые пути и крановые балки</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0062dd] font-bold mt-0.5">•</span>
                    <span>крыши и стенки полувагонов, минераловозов, хопперов</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-10"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                  Производство металлоконструкций из нержавеющих сталей
                </h2>
                <ul className="space-y-2 text-gray-700 text-sm sm:text-base">
                  <li className="flex items-start gap-2">
                    <span className="text-[#0062dd] font-bold mt-0.5">•</span>
                    <span>металлоконструкции для химической и нефтехимической промышленности, нестандартные емкости, контейнеры, бункера, течки</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0062dd] font-bold mt-0.5">•</span>
                    <span>приточки, вентиляционные и аспирационные системы</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0062dd] font-bold mt-0.5">•</span>
                    <span>ЛСТК – строительный профиль, термопрофиль</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0062dd] font-bold mt-0.5">•</span>
                    <span>Прочие изделия по чертежам заказчика</span>
                  </li>
                </ul>
              </div>
              <div className="order-1 lg:order-2">
                <Slideshow images={placeholderImages} currentSlide={currentSlide3} />
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-[#0062dd] text-white rounded-xl p-6 sm:p-8 text-center mt-10"
          >
            <h2 className="text-xl sm:text-2xl font-bold mb-3">
              Нужна консультация по металлоконструкциям?
            </h2>
            <p className="text-base mb-6 opacity-90">
              Свяжитесь с нами для обсуждения вашего проекта
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a 
                href="tel:+79199995409"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-[#0062dd] rounded-full hover:bg-gray-100 transition-colors font-semibold text-sm"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                +7 (919) 999-54-09
              </a>
              <a 
                href="mailto:zakaz@trend-met.ru"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 text-white rounded-full hover:bg-white/20 transition-colors font-semibold border-2 border-white text-sm"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                zakaz@trend-met.ru
              </a>
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
