const documents = [
  { code: 'ГОСТ 23118-2012', title: '«Конструкции стальные строительные»', link: true },
  { code: 'СТБ 2174-2011', title: '«Изделия арматурные сварные для железобетонных конструкций»', link: true },
  { code: 'СТБ 1396-2003', title: '«Фермы стропильные стальные для производственных зданий»', link: true },
  { code: 'ТУ BY 631597467.001-2015', title: '«Фонари зенитные»' },
  { code: 'ТУ BY 691799580.006-2019', title: '«Балки двутавровые сварные»' },
  { title: 'Сертификат продукции собственного производства', link: true },
  { title: 'Свидетельство на сварочное производство', link: true },
  { title: 'Сертификат ISO', link: true },
  { title: 'Сертификат ISO-nac', link: true },
  { title: 'Свидетельство о технической компетентности', link: true }
]

const About = () => (
  <section id="about" className="py-12 sm:py-16 md:py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
        <div>
          <img src="/logo.svg" alt="ТрендМет" className="h-12 sm:h-16 grayscale mb-6 sm:mb-8" />
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-gray-900">О компании</h2>
          <p className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6">Ведущая компания на рынке российского металлопроката</p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4 sm:mb-6">
            ТрендМет - официальный представитель Группы компании "ГидроИзолСтрой" осуществляет производство и реализацию металлоконструкций более 10 лет. Предлагаем весь комплекс работ по изготовлению и логистике металлоконструкций.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            Вся металлопродукция, предназначенная для строительства, сертифицирована в соответствии с требованиями безопасности <span className="font-bold">ТР 2009/013/BY</span> «Здания и сооружения, строительные материалы изделия.
          </p>
        </div>

        <div>
          <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">Нормативные документы:</h3>
          <ul className="space-y-2 sm:space-y-3">
            {documents.map((doc, i) => (
              <li key={i} className="flex items-start gap-2 sm:gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-1.5 sm:mt-2 flex-shrink-0" />
                <span className="text-gray-600 text-xs sm:text-sm">
                  {doc.code && <span className="font-bold">{doc.code}</span>} {doc.title}
                  {doc.link && <a href="#" className="text-blue-600 hover:underline ml-1">скачать</a>}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
)

export default About
