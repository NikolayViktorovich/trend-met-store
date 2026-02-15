import { motion } from 'framer-motion'
import { useEffect } from 'react'
import Breadcrumbs from '../components/Breadcrumbs'
import rollImage from '../assets/rulon-nerj.jpg'

const steelRolls = [
  {
    name: 'AISI 304',
    size: '1250',
    thickness: '0.7 -2',
    price: 'по запросу',
    availability: 'в наличии'
  },
  {
    name: 'AISI 321',
    size: '1250',
    thickness: '0.7 - 2',
    price: 'по запросу',
    availability: 'в наличии'
  },
  {
    name: 'AISI 316L',
    size: '1000- 1250',
    thickness: 'по запросу',
    price: 'по запросу',
    availability: 'под заказ'
  },
  {
    name: 'AISI 316Ti',
    size: '1000- 1250',
    thickness: 'по запросу',
    price: 'по запросу',
    availability: 'под заказ'
  }
]

const SteelRollsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Breadcrumbs 
        items={[
          { label: 'Каталог', href: '/#catalog' },
          { label: 'Нержавеющие рулоны' }
        ]} 
      />
      
      <section className="py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-8 sm:mb-12 text-center"
          >
            Нержавеющие рулоны
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gray-50 rounded-2xl p-6 sm:p-8 mb-12"
          >
            <p className="text-gray-700 leading-relaxed mb-4">
              Нержавеющие рулоны – это листовой прокат из нержавеющей стали, свернутый в рулон для удобства транспортировки и хранения. Используются в различных отраслях промышленности благодаря высокой коррозионной стойкости и долговечности.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Мы предлагаем широкий ассортимент нержавеющих рулонов различных марок стали, толщин и ширины. Вся продукция соответствует международным стандартам качества.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-12"
          >
            <div className="bg-white rounded-2xl overflow-hidden border-2 border-gray-200">
              <div className="hidden sm:grid grid-cols-6 gap-4 p-4 sm:p-6 bg-gray-100 font-bold text-gray-900 text-sm">
                <div className="text-center">Изображение</div>
                <div className="text-center">Название</div>
                <div className="text-center">Размеры</div>
                <div className="text-center">Толщина</div>
                <div className="text-center">Цена</div>
                <div className="text-center">Наличие</div>
              </div>

              <div className="hidden sm:block">
                {steelRolls.map((roll, index) => (
                  <div 
                    key={index}
                    className={`grid grid-cols-6 gap-4 p-4 sm:p-6 items-center ${index !== steelRolls.length - 1 ? 'border-b border-gray-200' : ''}`}
                  >
                    <div className="flex justify-center">
                      <img 
                        src={rollImage} 
                        alt={roll.name}
                        className="w-20 h-20 object-contain"
                      />
                    </div>
                    <div className="text-center font-semibold text-gray-900">{roll.name}</div>
                    <div className="text-center text-gray-700">{roll.size}</div>
                    <div className="text-center text-gray-700">{roll.thickness}</div>
                    <div className="text-center text-gray-700">{roll.price}</div>
                    <div className="text-center">
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${
                        roll.availability === 'в наличии' 
                          ? 'bg-green-500 text-white' 
                          : 'bg-gray-400 text-white'
                      }`}>
                        {roll.availability === 'в наличии' ? (
                          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                          </svg>
                        ) : (
                          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z" clipRule="evenodd"/>
                          </svg>
                        )}
                        {roll.availability}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="sm:hidden space-y-4 p-4">
                {steelRolls.map((roll, index) => (
                  <div key={index} className="bg-gray-50 rounded-xl p-4">
                    <div className="flex items-start gap-4 mb-4">
                      <img 
                        src={rollImage} 
                        alt={roll.name}
                        className="w-20 h-20 object-contain flex-shrink-0"
                      />
                      <div className="flex-1">
                        <div className="font-bold text-gray-900 mb-2">{roll.name}</div>
                        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${
                          roll.availability === 'в наличии' 
                            ? 'bg-green-500 text-white' 
                            : 'bg-gray-400 text-white'
                        }`}>
                          {roll.availability === 'в наличии' ? (
                            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                            </svg>
                          ) : (
                            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z" clipRule="evenodd"/>
                            </svg>
                          )}
                          {roll.availability}
                        </span>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="text-gray-600">Размеры:</div>
                      <div className="text-gray-900 font-medium">{roll.size}</div>
                      <div className="text-gray-600">Толщина:</div>
                      <div className="text-gray-900 font-medium">{roll.thickness}</div>
                      <div className="text-gray-600">Цена:</div>
                      <div className="text-gray-900 font-medium">{roll.price}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-[#0062dd] text-white rounded-2xl p-6 sm:p-8 mb-12"
          >
            <h2 className="text-2xl font-bold mb-6">Преимущества нержавеющих рулонов:</h2>
            <ul className="space-y-3">
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
                <span>Удобство транспортировки и хранения</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span>Широкий выбор марок стали и размеров</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-center"
          >
            <p className="text-gray-600 mb-6">
              Для уточнения цен и наличия, а также для оформления заказа, свяжитесь с нашими менеджерами
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+79199995409"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0062dd] text-white rounded-full hover:bg-[#0052bb] transition-colors font-semibold"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                +7 (919) 999-54-09
              </a>
              <a 
                href="mailto:zakaz@trend-met.ru"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gray-100 text-gray-900 rounded-full hover:bg-gray-200 transition-colors font-semibold"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                zakaz@trend-met.ru
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default SteelRollsPage