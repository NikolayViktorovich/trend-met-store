import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Breadcrumbs from '../components/Breadcrumbs'

import crane1 from '../assets/Kran/Dvuhbaloch/1cxtd-double-girder-overhead-crane-with-low-headroom.jpg'
import crane2 from '../assets/Kran/Dvuhbaloch/3cxtd-double-girder-overhead-crane-with-low-headroom.jpg'
import crane3 from '../assets/Kran/Dvuhbaloch/double-girder-eot-crane-500x500-1.jpg'
import crane4 from '../assets/Kran/Dvuhbaloch/double-girder-overhead-crane04.jpg'
import crane5 from '../assets/Kran/Dvuhbaloch/prm-overheadeot-crane-1.jpg'

const infoCards = [
  {
    title: 'Описание',
    content: 'Мостовой кран — это грузоподъемное оборудование, используемое с целью перемещение различных грузов. Перемещение груза происходит во всех трех плоскостях: это его подъем и опускание, перемещение вдоль самого крана, а также перемещение вдоль рабочей области. Часто размещается внутри зданий и сооружений. Эксплуатируются круглогодично, как в производственных помещениях, так и на открытых строительных и производственных площадках. В зависимости от конструкции, а именно от количества балок, кран мостовой подразделяют на: мостовой электрический кран двухбалочный и кран мостовой электрический однобалочный.'
  },
  {
    title: 'Назначение мостового крана',
    content: 'Сфера применения двухбалочных конструкций настолько широка, что трудно перечислить все области использования. Складские и цеховые помещения, логистические терминалы, порты и железнодорожные станции и многое другое.'
  },
  {
    title: 'Устройство мостового двухбалочного крана',
    content: 'Электрический двухбалочный кран состоит из следующих основных конструктивных элементов: пролетные балки (два параллельных полумоста); концевые балки; грузоподъемное устройство (тележка грузовая); кабина управления (при необходимости).'
  }
]

const advantages = [
  'надежность и долговечность конструкции',
  'характеризуется плавным ходом, точным позиционированием, простым управлением',
  'возможность использовать кран в зонах, где повышенная сейсмоактивность',
  'эффективность работы и оптимизация затрат работ с негабаритными грузами'
]

const specifications = [
  { label: 'Грузоподъемность крана, т', value: 'От 5,0 до 50' },
  { label: 'Пролет крана, м', value: 'до 34,5' },
  { label: 'Скорость передвижения крана, м/с (м/мин)', value: 'до 2,5 (150)' },
  { label: 'Скорость передвижения тележки, м/с (м/мин)', value: 'до 0,66 (40)' },
  { label: 'Скорость подъема груза, м/с (м/мин)', value: 'от 0,0016 до 0,33 (от 0,1 до 20)' },
  { label: 'Высота подъема, м', value: 'от 6,0 до 52' },
  { label: 'Режим работы крана по ISO 4301/1', value: 'А3…А7' },
  { label: 'Режим работы механизмов по ISO 4301/1', value: 'М2…М7' },
  { label: 'Грузозахватный орган тали', value: '— крюк\n— магнит\n— грейфер\n— специальный, согласно тех. задания' },
  { label: 'Тип управления', value: '— подвесной пульт\n— радиоуправление\n— кабина управления' },
  { label: 'Схема управления приводами', value: '— частотная\n— реллейная\n— смешанная' },
  { label: 'Тип токопровода', value: '— кабельный\n— троллейный' },
  { label: 'Климатическое исполнение', value: 'У1, У2, У3' },
  { label: 'Температура окружающей среды', value: 'От -40°С до +40°С' }
]

const documents = [
  { title: 'ДВУХБАЛОЧНЫЙ', file: 'dvuhbaloch.pdf' },
  { title: 'ЛИЦЕНЗИЯ НА ПРОЕКТИРОВАНИЕ ГП ОБОР', file: 'license2.pdf' },
  { title: 'ОПРОСНЫЙ ЛИСТ (АНКЕТА-ЗАЯВКА)', file: 'opros-list2.pdf' }
]

const craneImages = [
  crane1,
  crane2,
  crane3,
  crane4,
  crane5
]

const CranesTwoBeamPage = () => {
  const [showAllSpecs, setShowAllSpecs] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const visibleSpecs = showAllSpecs ? specifications : specifications.slice(0, 3)

  return (
    <div className="min-h-screen bg-white">
      <Breadcrumbs 
        items={[
          { label: 'Кран мостовой опорный двухбалочный' }
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
            Кран мостовой опорный двухбалочный
          </motion.h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 sm:mb-16">
            {infoCards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">{card.title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{card.content}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-12 sm:mb-16"
          >
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3 sm:gap-4">
              {craneImages.map((img, index) => (
                <div 
                  key={index}
                  className="aspect-square rounded-xl overflow-hidden bg-gray-100 hover:scale-105 transition-transform cursor-pointer"
                >
                  <img 
                    src={img} 
                    alt={`Двухбалочный кран ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </motion.div>

          <div className="mb-12 sm:mb-16">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-gray-700 leading-relaxed mb-8"
            >
              Как следует из названия, кран называется мостовой, т.к. вся конструкция в сборе образует мост. В зависимости от основных характеристик и задач, которые предстоит выполнять крану, балку делают различной геометрической формы. Это может быть коробчатая либо двутавровая. Основную грузоподъемную функцию в мостовом кране выполняет грузовая тележка, которая передвигается вдоль пролетных балок крана либо установлена стационарно. Возможно размещение двух механизмов подъема на тележке крана либо двух грузовых тележек для подъема грузов различной массы.
            </motion.p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="bg-white border-2 border-gray-200 rounded-2xl p-6 sm:p-8"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">Конструкция опорного мостового двухбалочного крана</h3>
                <p className="text-gray-700 leading-relaxed">
                  Работают такие краны от электрической сети. Передвигается кран по специально установленным подкрановым рельсам, которые в свою очередь располагают на эстакадах вдоль открытой рабочей площадки либо в цехе. Климатические исполнение крана, как правило, это температура от -20 до +40 °С, это отапливаемые помещения. Но возможна установка и улице в режиме до -40°С. Мостовой кран управляется с помощью специального подвесного пульта, однако, кроме того, возможна установка специального радиоуправляемого оборудования либо кабины управления.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="bg-[#0062dd] text-white rounded-2xl p-6 sm:p-8"
              >
                <h3 className="text-xl font-bold mb-4">Преимущества двухбалочных кранов:</h3>
              <ul className="space-y-3">
                {advantages.map((advantage, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg className="w-6 h-6 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <span className="text-sm leading-relaxed">{advantage}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm leading-relaxed">
                В мостовых крановых системах нашего производства мы выбираем специальные грунтовки и краски для защиты от коррозии в зависимости от места установки и условий эксплуатации.
              </p>
              </motion.div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">ТЕХНИЧЕСКИЕ ХАРАКТЕРИСТИКИ</h2>
            <div className="bg-gray-50 rounded-2xl overflow-hidden">
              {visibleSpecs.map((spec, index) => (
                <div 
                  key={index}
                  className={`grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 p-4 sm:p-6 ${index !== visibleSpecs.length - 1 ? 'border-b border-gray-200' : ''}`}
                >
                  <div className="font-semibold text-gray-900 text-sm sm:text-base">{spec.label}</div>
                  <div className="text-gray-700 whitespace-pre-line text-sm sm:text-base">{spec.value}</div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-4 sm:mt-6">
              <button
                onClick={() => setShowAllSpecs(!showAllSpecs)}
                className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 bg-[#0062dd] text-white rounded-full hover:bg-[#0052bb] transition-colors font-medium text-sm sm:text-base"
              >
                {showAllSpecs ? (
                  <>
                    Скрыть характеристики
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7"/>
                    </svg>
                  </>
                ) : (
                  <>
                    Показать все характеристики
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                    </svg>
                  </>
                )}
              </button>
            </div>
            <p className="text-gray-600 text-xs sm:text-sm mt-4 sm:mt-6 leading-relaxed">
              Производятся двухбалочные краны по техзаданию клиента. Допускается изготовление кранов по индивидуальным требованиям, отличающихся размерами и параметрами от указанных: высотой подъема, пролетом, режимом работы, скоростями движения – на основании габаритных чертежей изготовителя, согласованных с заказчиком.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="mb-12"
          >
            <div className="hidden md:grid grid-cols-3 gap-6 mb-8">
              {documents.map((doc, index) => (
                <a
                  key={index}
                  href={`/${doc.file}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white border-2 border-[#0062dd] rounded-xl p-6 text-center hover:bg-[#0062dd] hover:text-white transition-all group"
                >
                  <svg className="w-12 h-12 mx-auto mb-3 text-[#0062dd] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                  </svg>
                  <h4 className="font-bold text-sm mb-2">{doc.title}</h4>
                  <span className="text-sm opacity-75">открыть pdf ›</span>
                </a>
              ))}
            </div>

            <div className="flex md:hidden flex-col gap-3 mb-8">
              {documents.map((doc, index) => (
                <a
                  key={index}
                  href={`/${doc.file}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white border-2 border-[#0062dd] rounded-xl p-4 hover:bg-[#0062dd] hover:text-white transition-all group flex items-center gap-3"
                >
                  <svg className="w-6 h-6 text-[#0062dd] group-hover:text-white transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                  </svg>
                  <span className="font-semibold text-sm">{doc.title}</span>
                </a>
              ))}
            </div>

            <p className="text-gray-600 text-sm mt-8 leading-relaxed">
              Для точного расчета стоимости и сроков изготовления крана просим заполнить опросный лист. Наши инженеры готовы проконсультировать вас по всем техническим вопросам и помочь с выбором оптимальной конфигурации оборудования.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-center"
          >
            <Link 
              to="/cranes"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="bg-gray-100 text-gray-900 px-6 py-3 md:px-8 md:py-4 rounded-full text-sm md:text-lg font-semibold hover:bg-gray-200 transition-colors inline-flex items-center gap-2"
            >
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/>
              </svg>
              КРАН МОСТОВОЙ ОПОРНЫЙ ОДНОБАЛОЧНЫЙ
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default CranesTwoBeamPage
