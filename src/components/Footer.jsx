import { useState } from 'react'
import { Link } from 'react-router-dom'
import CatalogMenu from './CatalogMenu'

const navItems = [
  { href: '/about', label: 'О компании', isRoute: true },
  { href: '#delivery', label: 'Доставка' },
  { href: '#contacts', label: 'Контакты' }
]

const Footer = () => {
  const [isCatalogOpen, setIsCatalogOpen] = useState(false)

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-12 lg:gap-12">
          <div className="col-span-2 md:col-span-1 lg:col-span-1 text-center sm:text-left">
            <img src="/logo.svg" alt="ТрендМет" className="h-10 sm:h-12 mb-4 sm:mb-6 brightness-0 invert mx-auto sm:mx-0" />
            <div className="space-y-2">
              <a href="tel:+79199995409" className="block text-base sm:text-lg font-semibold hover:text-gray-300 transition-colors">8 (919) 999 54 09</a>
              <a href="mailto:maryland@inbox.ru" className="block text-xs sm:text-sm text-gray-400 hover:text-gray-300 transition-colors">maryland@inbox.ru</a>
            </div>
          </div>

          <div className="text-center sm:text-left md:col-start-auto lg:col-start-auto">
            <h3 className="font-semibold mb-3 sm:mb-4 text-sm">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm">Главная</a>
              </li>
              <li className="relative group">
                <button 
                  onClick={() => setIsCatalogOpen(!isCatalogOpen)}
                  className="text-gray-400 hover:text-white transition-colors inline-flex items-center gap-1 text-xs sm:text-sm"
                >
                  Каталог
                  <svg className={`w-3.5 h-3.5 transition-transform ${isCatalogOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                  </svg>
                </button>
                <div className={`${isCatalogOpen ? 'block text-left' : 'hidden'} lg:opacity-0 lg:invisible lg:group-hover:opacity-100 lg:group-hover:visible`}>
                  <CatalogMenu isDark={true} />
                </div>
              </li>
              {navItems.map(item => (
                <li key={item.href}>
                  {item.isRoute ? (
                    <Link 
                      to={item.href} 
                      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                      className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <a href={item.href} className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm">{item.label}</a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center sm:text-left md:col-start-4 lg:col-start-4">
            <h3 className="font-semibold mb-3 sm:mb-4 text-sm">Документы</h3>
            <a href="#" className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 bg-[#0062dd] hover:bg-[#0052bb] text-white rounded-full transition-colors font-medium text-xs sm:text-sm">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
              </svg>
              Скачать прайс
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs text-center md:text-left">© {new Date().getFullYear()} ТрендМет. Все права защищены</p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 text-center">
            <a href="#" className="text-gray-500 hover:text-white transition-colors text-xs">Политика конфиденциальности</a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors text-xs">Пользовательское соглашение</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
