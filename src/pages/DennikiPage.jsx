import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Breadcrumbs from '../components/Breadcrumbs'
import ImageModal from '../components/ImageModal'
import ContactModal from '../components/ContactModal'
import DennikiWorks from '../components/DennikiWorks'

import stallMain from '../assets/denniki/wmremove-transformed.jpeg'
import stallRow from '../assets/denniki/1d72tgsjnsrmr0d0ffqswcddwg_result_0.png'
import stableAisle from '../assets/denniki/5qses3msmhrmy0d0ffqapty48r_result_0.png'
import arena from '../assets/denniki/z05g0zff49rmt0d0ffqa6mjgn0_result_0.png'
import raceTrack from '../assets/denniki/6685845782682c3a93fe4a5b.jpg'

const galleryImages = [
  { src: stallMain, alt: 'Денники с деревянным заполнением и металлическим каркасом' },
  { src: stallRow, alt: 'Ряд денников со сдвижными решетчатыми дверями' },
  { src: stableAisle, alt: 'Конюшенный проход с денниками' },
  { src: arena, alt: 'Крытый манеж' },
  { src: raceTrack, alt: 'Скачки на ипподроме' }
]

const features = [
  'Изготовление по вашим чертежам и размерам помещения',
  'Подбор материалов, цвета и фурнитуры под ваш проект',
  'Возможность изготовления образца перед основным заказом',
  'Полная кастомизация — реализуем нестандартные решения'
]

const specColumns = ['Тип 1', 'Тип 2', 'Тип 3']

const specRows = [
  {
    element: 'Фасад со сдвижной дверью',
    cells: [
      [
        'Размер — 3,0 × 2,7 м',
        'Заполнение — пластик 30×130',
        'Глухая часть — 1,32 м',
        'Решетчатая часть — 1,28 м',
        'Декоративная часть — 0,1 м'
      ],
      null,
      null
    ]
  },
  {
    element: 'Задняя стенка',
    cells: [
      [
        'Размер — 3,0 × 2,6 м',
        'Нижняя часть — 1,32 м',
        'Верхняя часть — 1,28 м',
        'Решетчатая часть — в зоне окна'
      ],
      null,
      null
    ]
  },
  {
    element: 'Боковая перегородка',
    cells: [
      [
        'Размер — 3,5 × 2,6 м',
        'Заполнение — пласт., глухая, 30×130',
        'Нижняя часть — 1,32 м',
        'Верхняя часть — 1,28 м'
      ],
      [
        'Размер — 3,5 × 2,6 м',
        'Заполнение — пласт., глухая, 30×130',
        'Нижняя часть — 1,32 м',
        'Верхняя часть — 1,28 м'
      ],
      [
        'Размер — 3,5 × 2,6 м',
        'Заполнение — пласт., глухая, 30×130',
        'Нижняя часть — 1,32 м',
        'Верхняя часть — 1,28 м'
      ]
    ]
  },
  {
    element: 'Боковая перегородка доп.',
    cells: [
      [
        'Размер — 3,5 × 2,6 м',
        'Заполнение — пласт., 30×130',
        'Глухая часть — 1,32 м',
        'Решетчатая часть — 1,28 м'
      ],
      [
        'Размер — 3,5 × 2,6 м',
        'Заполнение — пласт., 30×130',
        'Глухая часть — 1,32 м',
        'Решетчатая часть — 1,28 м'
      ],
      [
        'Размер — 3,5 × 2,6 м',
        'Заполнение — пласт., 30×130',
        'Глухая часть — 1,32 м',
        'Решетчатая часть — 1,28 м'
      ]
    ]
  }
]

const SpecCell = ({ cell }) => {
  if (!cell) return <span className="text-gray-400">—</span>
  return (
    <div className="space-y-1">
      {cell.map((line, index) => (
        <p key={`${index}-${line}`} className="text-gray-700 text-xs sm:text-sm leading-relaxed">
          {line}
        </p>
      ))}
    </div>
  )
}

const DennikiPage = () => {
  const [activeImage, setActiveImage] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isContactOpen, setIsContactOpen] = useState(false)
  const [reduceMotion, setReduceMotion] = useState(false)
  const [isTabHidden, setIsTabHidden] = useState(false)
  const touchStartX = useRef(0)
  const didSwipe = useRef(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setReduceMotion(media.matches)
    update()
    media.addEventListener('change', update)
    return () => media.removeEventListener('change', update)
  }, [])

  useEffect(() => {
    const update = () => setIsTabHidden(document.hidden)
    update()
    document.addEventListener('visibilitychange', update)
    return () => document.removeEventListener('visibilitychange', update)
  }, [])

  useEffect(() => {
    if (reduceMotion || isModalOpen || isContactOpen || isTabHidden) return undefined
    const timer = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % galleryImages.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [reduceMotion, isModalOpen, isContactOpen, isTabHidden, activeImage])

  const openModal = (index) => {
    if (didSwipe.current) {
      didSwipe.current = false
      return
    }
    setActiveImage(index)
    setIsModalOpen(true)
  }

  const handleNavigate = (direction) => {
    setActiveImage((prev) => (
      direction === 'next'
        ? (prev + 1) % galleryImages.length
        : (prev - 1 + galleryImages.length) % galleryImages.length
    ))
  }

  const stepImage = (event, direction) => {
    event.stopPropagation()
    handleNavigate(direction)
  }

  const onGalleryTouchStart = (event) => {
    touchStartX.current = event.changedTouches[0].clientX
    didSwipe.current = false
  }

  const onGalleryTouchEnd = (event) => {
    const dx = event.changedTouches[0].clientX - touchStartX.current
    if (Math.abs(dx) < 40) return
    didSwipe.current = true
    handleNavigate(dx < 0 ? 'next' : 'prev')
  }

  return (
    <div className="min-h-screen bg-white">
      <Breadcrumbs
        items={[
          { label: 'Главная', href: '/' },
          { label: 'Денники' }
        ]}
      />

      <section className="py-8 sm:py-12 md:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start mb-12 sm:mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col gap-3 lg:flex-row"
            >
              <div
                className="relative group flex-1 rounded-2xl overflow-hidden bg-gray-100 aspect-4/3 min-h-0 select-none"
                onTouchStart={onGalleryTouchStart}
                onTouchEnd={onGalleryTouchEnd}
              >
                {galleryImages.map((image, index) => (
                  <img
                    key={image.alt}
                    src={image.src}
                    alt={index === activeImage ? image.alt : ''}
                    aria-hidden={index !== activeImage}
                    decoding="async"
                    loading={index === 0 ? 'eager' : 'lazy'}
                    fetchPriority={index === 0 ? 'high' : 'low'}
                    draggable={false}
                    className={`absolute inset-0 w-full h-full object-cover ${reduceMotion ? '' : 'transition-opacity duration-500'} ${
                      index === activeImage ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}
                  />
                ))}

                <button
                  type="button"
                  onClick={() => openModal(activeImage)}
                  className="absolute inset-0 z-10 cursor-zoom-in"
                  aria-label="Открыть фото в полном размере"
                />

                <div className="absolute inset-0 z-20 pointer-events-none">
                  <button
                    type="button"
                    onClick={(event) => stepImage(event, 'prev')}
                    className="pointer-events-auto absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/90 shadow-md flex items-center justify-center hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0062dd]"
                    aria-label="Предыдущее фото"
                  >
                    <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    onClick={(event) => stepImage(event, 'next')}
                    className="pointer-events-auto absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/90 shadow-md flex items-center justify-center hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0062dd]"
                    aria-label="Следующее фото"
                  >
                    <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>

              <div
                className="flex gap-2 lg:order-first lg:flex-col lg:shrink-0"
                aria-label="Фотографии денников"
              >
                {galleryImages.map((image, index) => (
                  <button
                    key={image.alt}
                    type="button"
                    aria-current={index === activeImage ? 'true' : undefined}
                    aria-label={`Показать фото ${index + 1}`}
                    onClick={() => setActiveImage(index)}
                    className={`min-w-0 flex-1 aspect-square lg:flex-none lg:w-20 lg:h-20 rounded-lg lg:rounded-xl overflow-hidden border-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0062dd] focus-visible:ring-offset-2 ${
                      index === activeImage ? 'border-[#0062dd]' : 'border-gray-200 hover:border-gray-400'
                    }`}
                  >
                    <img src={image.src} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 text-balance">
                Собственное производство денников и конюшенного оборудования
              </h1>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6 text-pretty">
                Мы — <span className="font-bold text-gray-900">частное производство полного цикла</span>: проектируем и изготавливаем денники и любое конюшенное оснащение под ваш объект — от типовых решений до полностью индивидуальных заказов по вашим размерам, эскизам и пожеланиям.
              </p>

              <ul className="mb-6">
                {features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 py-3 border-b border-gray-100 last:border-b-0">
                    <span className="mt-0.5 w-5 h-5 rounded-full bg-[#0062dd] flex items-center justify-center shrink-0">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-sm sm:text-base text-gray-700 leading-snug text-pretty">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-gray-50 rounded-xl p-4 sm:p-5 mb-6">
                <p className="text-xs font-semibold tracking-wide text-gray-900 mb-2">Скидки на объём</p>
                <p className="text-sm text-gray-600 leading-relaxed text-pretty">
                  Чем больше заказ — тем выгоднее цена за денник. Точные условия и стоимость рассчитываем индивидуально под ваш объём и комплектацию.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  onClick={() => setIsContactOpen(true)}
                  className="inline-flex items-center justify-center px-6 py-3 bg-[#0062dd] text-white rounded-full hover:bg-[#0052bb] active:scale-[0.96] transition-[background-color,transform] font-medium text-sm"
                >
                  Оставить заявку
                </button>
                <a
                  href="https://wa.me/79199995409"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-gray-100 text-gray-900 rounded-full hover:bg-gray-200 active:scale-[0.96] transition-[background-color,transform] font-medium text-sm"
                >
                  Написать в мессенджер
                </a>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-2">Денники гостевые</h2>
            <p className="text-sm sm:text-base text-gray-600 text-center mb-6 sm:mb-8">
              Помещение для содержания лошадей (пом. 4, 16)
            </p>

            <div className="hidden md:block rounded-2xl border border-gray-200 overflow-hidden">
              <div className="bg-[#0062dd] text-white text-center font-semibold text-sm sm:text-base py-3 px-4">
                Технические характеристики по типам
              </div>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[760px] text-left">
                <thead>
                  <tr className="bg-gray-100">
                    <th scope="col" className="p-4 sm:p-5 font-bold text-gray-900 text-sm w-[22%]">Элемент денника</th>
                    {specColumns.map((column) => (
                      <th scope="col" key={column} className="p-4 sm:p-5 font-bold text-gray-900 text-sm text-center">
                        {column}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {specRows.map((row, index) => (
                    <tr key={row.element} className={index !== specRows.length - 1 ? 'border-b border-gray-200' : ''}>
                      <th scope="row" className="p-4 sm:p-5 bg-gray-50 font-semibold text-gray-900 text-sm align-top">{row.element}</th>
                      {row.cells.map((cell, cellIndex) => (
                        <td key={`${row.element}-${cellIndex}`} className="p-4 sm:p-5 align-top bg-white">
                          <SpecCell cell={cell} />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
                </table>
              </div>
            </div>

            <div className="md:hidden space-y-4">
              <div className="bg-[#0062dd] text-white text-center font-semibold text-sm py-3 px-4 rounded-xl">
                Технические характеристики по типам
              </div>
              {specRows.map((row) => (
                <div key={row.element} className="bg-gray-50 rounded-xl p-4">
                  <h3 className="font-bold text-gray-900 mb-3 text-sm">{row.element}</h3>
                  <div className="space-y-3">
                    {row.cells.map((cell, cellIndex) => (
                      cell ? (
                        <div key={`${row.element}-m-${cellIndex}`} className="bg-white rounded-lg p-3 border border-gray-200">
                          <div className="font-semibold text-gray-900 text-xs mb-2">{specColumns[cellIndex]}</div>
                          <SpecCell cell={cell} />
                        </div>
                      ) : null
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20" aria-labelledby="denniki-works-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <DennikiWorks inactive={isModalOpen || isContactOpen} />
        </div>
      </section>

      <ImageModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        images={galleryImages}
        currentIndex={activeImage}
        onNavigate={handleNavigate}
      />
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </div>
  )
}

export default DennikiPage
