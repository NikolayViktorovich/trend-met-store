import { useState } from 'react'
import Projects from '../components/Projects'
import Clients from '../components/Clients'
import Breadcrumbs from '../components/Breadcrumbs'
import analitycs from '../assets/Sertificate/analitycs.png'
import declaration from '../assets/Sertificate/declaration.png'
import protokol from '../assets/Sertificate/protokol.png'
import sertif from '../assets/Sertificate/sertif.png'
import sootves from '../assets/Sertificate/sootves.png'

const certificates = [
  { img: sootves, title: 'Соответствие' },
  { img: protokol, title: 'Протокол' },
  { img: sertif, title: 'Сертификат' },
  { img: analitycs, title: 'Аналитика' },
  { img: declaration, title: 'Декларация' }
]

const AboutPage = () => {
  const [activeCert, setActiveCert] = useState(0)

  const navigate = (dir) => {
    setActiveCert(a => dir === 'prev' 
      ? (a > 0 ? a - 1 : certificates.length - 1) 
      : (a < certificates.length - 1 ? a + 1 : 0)
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <Breadcrumbs items={[{ label: 'О компании' }]} />
      <section className="py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-start mb-8 sm:mb-12">
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-gray-900">О компании</h1>
              
              <div className="flex lg:hidden items-center justify-center mb-4 sm:mb-6">
                <img 
                  src="/logo.svg"
                  alt="ТрендМет"
                  className="w-48 sm:w-56 h-auto"
                />
              </div>

              <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-3 sm:mb-4">
                ООО ТрендМет – ведущая компания на рынке российского цветного металлопроката. Упорная и нацеленная работа сделала нашу компанию преуспевающей в своей области. ООО «ТрендМет» зарекомендовал себя надежным поставщиком на рынке цветной металлургии.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Сегодня мы занимаем лидирующие позиции на российском рынке и в своем активе имеем серьезные деловые связи с гигантами отечественной металлургии, которые являются нашими постоянными поставщиками. Деятельность компании всегда направлена на удовлетворение потребностей каждого нашего клиента с учетом сложных нестандартных заказов и финансовых возможностей покупателя.
              </p>
            </div>
            <div className="hidden lg:flex items-center justify-center pt-24">
              <img 
                src="/logo.svg"
                alt="ТрендМет"
                className="w-full h-auto max-w-xs sm:max-w-sm md:max-w-md"
              />
            </div>
          </div>

          <div className="bg-gray-50 p-4 sm:p-6 md:p-8 rounded-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
              <div className="relative order-2 lg:order-1">
                <div className="flex items-center justify-center gap-2 sm:gap-4">
                  <button 
                    onClick={() => navigate('prev')}
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors flex-shrink-0"
                  >
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/>
                    </svg>
                  </button>

                  <div className="flex-1 max-w-sm mx-auto">
                    <img 
                      src={certificates[activeCert].img} 
                      alt={certificates[activeCert].title}
                      className="w-full h-auto rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition-shadow"
                      onClick={() => window.open(certificates[activeCert].img, '_blank')}
                    />
                  </div>

                  <button 
                    onClick={() => navigate('next')}
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors flex-shrink-0"
                  >
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                    </svg>
                  </button>
                </div>

                <div className="flex justify-center gap-1.5 mt-3 sm:mt-4">
                  {certificates.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveCert(i)}
                      className={`h-1.5 rounded-full transition-all ${i === activeCert ? 'bg-gray-900 w-6' : 'bg-gray-300 w-1.5'}`}
                    />
                  ))}
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-3 sm:mb-4">
                  В ассортиментном регламенте представлены установки различной производительности и комплектации. Вся продукция изготавливается на современном лазерном оборудовании, что обеспечивает гарантированную точность сборочных единиц. В зависимости от пожеланий заказчика, аспирационные установки могут комплектоваться дополнительными опциями - частотный преобразователь для главного привода, система плавного пуска, антистатические фильтры, система шнековой разгрузки и т.д.
                </p>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Еще одним направлением деятельности компании является производство оборудования для шлифовки и окраски изделий из различных материалов.Это направление представлено шлифовальными столами, обеспыливающими кабинами, окрасочными камерами сухой фильтрации, окрасочными камерами с водяной завесой, чистыми комнатами с избыточным давлением и другим оборудыванием. Вся наша продукция сертифицирована и успешно прошла испытания, что подтверждено протоколами испытаний и сертификатами.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Projects />
      <Clients />
    </div>
  )
}

export default AboutPage
