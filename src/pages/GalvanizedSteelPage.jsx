import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import Breadcrumbs from '../components/Breadcrumbs'
import ImageModal from '../components/ImageModal'

import ral3003Roll from '../assets/ocinkovka/RAL 3003.jpg'
import ral3005Roll from '../assets/ocinkovka/RAL 3005.jpg'
import ral3009Roll from '../assets/ocinkovka/RAL 3009.jpg'
import ral6005Roll from '../assets/ocinkovka/RAL 6005.jpg'
import ral7016Roll from '../assets/ocinkovka/RAL 7016.JPG'
import ral7021Roll from '../assets/ocinkovka/RAL 7021.jpg'
import ral7024Roll from '../assets/ocinkovka/RAL 7024.jpg'
import ral8017Roll from '../assets/ocinkovka/RAL 8017.jpg'
import ral9005Roll from '../assets/ocinkovka/RAL 9005.jpg'

import ral3003Color from '../assets/ocinkovka/RAL 3003.png'
import ral3005Color from '../assets/ocinkovka/RAL 3005.png'
import ral3009Color from '../assets/ocinkovka/RAL 3009.png'
import ral6005Color from '../assets/ocinkovka/RAL 6005.png'
import ral7016Color from '../assets/ocinkovka/RAL 7016.png'
import ral7021Color from '../assets/ocinkovka/RAL 7021.png'
import ral7024Color from '../assets/ocinkovka/RAL 7024.png'
import ral8017Color from '../assets/ocinkovka/RAL 8017.png'
import ral9005Color from '../assets/ocinkovka/RAL 9005.png'

const galvanizedSteelGroup1 = [
  {
    color: 'RAL 3003',
    colorImage: ral3003Color,
    rollImage: ral3003Roll,
    size: '1250',
    thickness: '0.5',
    price: 'по запросу',
    availability: 'на складе'
  },
  {
    color: 'RAL 3005',
    colorImage: ral3005Color,
    rollImage: ral3005Roll,
    size: '1250',
    thickness: '0.5',
    price: 'по запросу',
    availability: 'на складе'
  },
  {
    color: 'RAL 3009',
    colorImage: ral3009Color,
    rollImage: ral3009Roll,
    size: '1250',
    thickness: '0.5',
    price: 'по запросу',
    availability: 'на складе'
  },
  {
    color: 'RAL 6005',
    colorImage: ral6005Color,
    rollImage: ral6005Roll,
    size: '1250',
    thickness: '0.5',
    price: 'по запросу',
    availability: 'на складе'
  },
  {
    color: 'RAL 7016',
    colorImage: ral7016Color,
    rollImage: ral7016Roll,
    size: '1250',
    thickness: '0.5',
    price: 'по запросу',
    availability: 'на складе'
  }
]

const galvanizedSteelGroup2 = [
  {
    color: 'RAL 7021',
    colorImage: ral7021Color,
    rollImage: ral7021Roll,
    size: '1250',
    thickness: '0.5',
    price: 'по запросу',
    availability: 'на складе'
  },
  {
    color: 'RAL 7024',
    colorImage: ral7024Color,
    rollImage: ral7024Roll,
    size: '1250',
    thickness: '0.5',
    price: 'по запросу',
    availability: 'на складе'
  },
  {
    color: 'RAL 8017',
    colorImage: ral8017Color,
    rollImage: ral8017Roll,
    size: '1250',
    thickness: '0.5',
    price: 'по запросу',
    availability: 'на складе'
  },
  {
    color: 'RAL 9005',
    colorImage: ral9005Color,
    rollImage: ral9005Roll,
    size: '1250',
    thickness: '0.5',
    price: 'по запросу',
    availability: 'на складе'
  }
]

const GalvanizedSteelPage = () => {
  const [modalState, setModalState] = useState({ isOpen: false, currentIndex: 0 })

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const allImages = [...galvanizedSteelGroup1, ...galvanizedSteelGroup2]
  const imagesList = allImages.map((steel) => ({
    src: steel.rollImage,
    alt: steel.color
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

  const renderTable = (data, title, startIndex = 0) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="mb-8"
    >
      {title && (
        <h2 className="text-xl font-bold text-gray-900 mb-4">{title}</h2>
      )}
      <div className="bg-white rounded-xl overflow-hidden border-2 border-gray-200">
        <div className="hidden sm:grid grid-cols-6 gap-4 p-4 sm:p-6 bg-gray-100 font-bold text-gray-900 text-sm">
          <div className="text-center">Изображение</div>
          <div className="text-center">RAL</div>
          <div className="text-center">Размеры</div>
          <div className="text-center">Толщина</div>
          <div className="text-center">Цена</div>
          <div className="text-center">Наличие</div>
        </div>

        <div className="hidden sm:block">
          {data.map((steel, index) => (
            <div 
              key={index}
              className={`grid grid-cols-6 gap-4 p-4 sm:p-6 items-center ${index !== data.length - 1 ? 'border-b border-gray-200' : ''}`}
            >
              <div className="flex justify-center">
                <img 
                  src={steel.rollImage} 
                  alt={steel.color}
                  className="w-20 h-20 object-contain cursor-pointer hover:scale-110 transition-transform"
                  onClick={() => handleImageClick(startIndex + index)}
                />
              </div>
              <div className="flex flex-col items-center gap-2">
                <img 
                  src={steel.colorImage} 
                  alt={steel.color}
                  className="w-16 h-10 object-cover rounded border border-gray-300"
                />
                <span className="text-xs font-medium text-gray-700">{steel.color}</span>
              </div>
              <div className="text-center text-gray-700">{steel.size}</div>
              <div className="text-center text-gray-700">{steel.thickness}</div>
              <div className="text-center text-gray-700">{steel.price}</div>
              <div className="text-center">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-green-500 text-white">
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  {steel.availability}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="sm:hidden space-y-4 p-4">
          {data.map((steel, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-4">
              <div className="flex items-start gap-4 mb-4">
                <img 
                  src={steel.rollImage} 
                  alt={steel.color}
                  className="w-20 h-20 object-contain flex-shrink-0 cursor-pointer hover:scale-110 transition-transform"
                  onClick={() => handleImageClick(startIndex + index)}
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <img 
                      src={steel.colorImage} 
                      alt={steel.color}
                      className="w-12 h-8 object-cover rounded border border-gray-300"
                    />
                    <span className="text-sm font-bold text-gray-900">{steel.color}</span>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-green-500 text-white">
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    {steel.availability}
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="text-gray-600">Размеры:</div>
                <div className="text-gray-900 font-medium">{steel.size}</div>
                <div className="text-gray-600">Толщина:</div>
                <div className="text-gray-900 font-medium">{steel.thickness}</div>
                <div className="text-gray-600">Цена:</div>
                <div className="text-gray-900 font-medium">{steel.price}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )

  return (
    <div className="min-h-screen bg-white">
      <Breadcrumbs 
        items={[
          { label: 'Каталог', href: '/#catalog' },
          { label: 'Сталь оцинкованная с полимерным покрытием' }
        ]} 
      />
      
      <section className="py-8 sm:py-12 md:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 sm:mb-8 text-center"
          >
            Сталь оцинкованная с полимерным покрытием
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gray-50 rounded-xl p-4 sm:p-6 mb-6"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-4">Одностороннее / Двустороннее покрытие</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Покрытие полиэстер - склад</li>
              <li>• Покрытие PVDF, пурал - под заказ</li>
              <li className="font-semibold">• Все цвета по RAL - под заказ</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mb-6"
          >
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 text-center">Оцинковка</h2>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
              <div className="relative group">
                <div className="absolute inset-0 bg-[#0062dd] rounded-full blur-sm opacity-0 group-hover:opacity-20 transition-opacity"></div>
                <span className="relative inline-block px-6 py-3 bg-white border-2 border-[#0062dd] text-[#0062dd] rounded-full font-semibold text-sm sm:text-base hover:bg-[#0062dd] hover:text-white transition-all cursor-default">
                  Мат-текстурированная
                </span>
              </div>
              <div className="relative group">
                <div className="absolute inset-0 bg-[#0062dd] rounded-full blur-sm opacity-0 group-hover:opacity-20 transition-opacity"></div>
                <span className="relative inline-block px-6 py-3 bg-white border-2 border-[#0062dd] text-[#0062dd] rounded-full font-semibold text-sm sm:text-base hover:bg-[#0062dd] hover:text-white transition-all cursor-default">
                  Мат
                </span>
              </div>
              <div className="relative group">
                <div className="absolute inset-0 bg-[#0062dd] rounded-full blur-sm opacity-0 group-hover:opacity-20 transition-opacity"></div>
                <span className="relative inline-block px-6 py-3 bg-white border-2 border-[#0062dd] text-[#0062dd] rounded-full font-semibold text-sm sm:text-base hover:bg-[#0062dd] hover:text-white transition-all cursor-default">
                  Глянец
                </span>
              </div>
            </div>
          </motion.div>

          {renderTable(galvanizedSteelGroup1, null, 0)}
          {renderTable(galvanizedSteelGroup2, null, galvanizedSteelGroup1.length)}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-[#0062dd] text-white rounded-xl p-4 sm:p-6 mb-8"
          >
            <h2 className="text-xl font-bold mb-4">Преимущества оцинкованной стали с полимерным покрытием:</h2>
            <ul className="space-y-2">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span>Высокая коррозионная стойкость</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span>Широкая цветовая палитра RAL</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span>Устойчивость к атмосферным воздействиям</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span>Долговечность и надежность</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span>Эстетичный внешний вид</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span>Различные варианты текстуры поверхности</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-center"
          >
            <p className="text-gray-600 mb-4 text-sm">
              Для уточнения цен и оформления заказа в любом цвете RAL, свяжитесь с нашими менеджерами
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a 
                href="tel:+79199995409"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#0062dd] text-white rounded-full hover:bg-[#0052bb] transition-colors font-semibold text-sm"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                +7 (919) 999-54-09
              </a>
              <a 
                href="mailto:zakaz@trend-met.ru"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-100 text-gray-900 rounded-full hover:bg-gray-200 transition-colors font-semibold text-sm"
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

export default GalvanizedSteelPage
