import { useState } from 'react'
import { Link } from 'react-router-dom'
import CatalogMenu from './CatalogMenu'
import ContactModal from './ContactModal'

const navLinks = [
  { href: '/about', label: 'О компании', isRoute: true },
  { href: '#services', label: 'Металлоконструкции' }
]

const craneLinks = [
  { href: '/cranes', label: 'Про-во мостовых кранов', isRoute: true }
]

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isCatalogOpen, setIsCatalogOpen] = useState(false)
  const [isCranesOpen, setIsCranesOpen] = useState(false)

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
    setIsCatalogOpen(false)
    setIsCranesOpen(false)
  }

  return (
    <>
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-3 border-b border-gray-100">
            <Link to="/">
              <img src="/logo.svg" alt="ТрендМет" className="h-10 cursor-pointer" />
            </Link>

            <div className="flex items-center gap-3">
              <div className="hidden md:flex flex-col items-end">
                <a href="tel:+79199995409" className="text-sm font-semibold text-gray-900 hover:text-gray-600 transition-colors">+7 (919) 999-54-09</a>
                <a href="mailto:zakaz@trend-met.ru" className="text-xs text-gray-500 hover:text-gray-700 transition-colors">zakaz@trend-met.ru</a>
              </div>

              <button 
                onClick={() => setIsModalOpen(true)} 
                className="hidden lg:inline-flex bg-[#0062dd] text-white px-6 py-2.5 rounded-full hover:bg-[#0052bb] transition-colors font-medium text-sm whitespace-nowrap items-center justify-center"
              >
                Оставить заявку
              </button>

              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 text-gray-700 hover:text-gray-900 flex items-center justify-center"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
                  )}
                </svg>
              </button>
            </div>
          </div>

          <nav className="hidden lg:flex items-center justify-center gap-8 py-3">
            {navLinks.map(link => link.isRoute ? (
              <Link key={link.href} to={link.href} className="text-gray-900 hover:text-gray-700 transition-colors text-sm">{link.label}</Link>
            ) : (
              <a key={link.href} href={link.href} className="text-gray-900 hover:text-gray-700 transition-colors text-sm">{link.label}</a>
            ))}

            <div className="relative group">
              <button className="text-gray-900 hover:text-gray-700 transition-colors flex items-center gap-1 text-sm">
                Краны
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                </svg>
              </button>
              <div className="absolute top-full mt-2 w-56 bg-white border border-gray-200 rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                {craneLinks.map((link, i) => 
                  link.isRoute ? (
                    <Link key={link.href} to={link.href} className={`block px-4 py-2.5 text-gray-900 hover:bg-gray-50 transition-colors text-sm ${i === 0 ? 'rounded-t' : 'rounded-b'}`}>{link.label}</Link>
                  ) : (
                    <a key={link.href} href={link.href} className={`block px-4 py-2.5 text-gray-900 hover:bg-gray-50 transition-colors text-sm ${i === 0 ? 'rounded-t' : 'rounded-b'}`}>{link.label}</a>
                  )
                )}
              </div>
            </div>

            <div className="relative group">
              <button className="text-gray-900 hover:text-gray-700 transition-colors flex items-center gap-1 text-sm">
                Каталог
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                </svg>
              </button>
              <CatalogMenu />
            </div>

            <a href="#furniture" className="text-gray-900 hover:text-gray-700 transition-colors text-sm">Мет. мебель</a>
          </nav>

          {isMobileMenuOpen && (
            <nav className="lg:hidden py-4 border-t border-gray-100 animate-slide-in">
              <button 
                onClick={() => {
                  setIsModalOpen(true)
                  closeMobileMenu()
                }} 
                className="w-full bg-[#0062dd] text-white py-3 rounded-full hover:bg-[#0052bb] transition-colors font-medium text-sm mb-4"
              >
                Оставить заявку
              </button>

              {navLinks.map((link, index) => (
                <div key={link.href}>
                  {link.isRoute ? (
                    <Link to={link.href} onClick={closeMobileMenu} className="block py-3 text-gray-700 hover:text-gray-900 transition-colors text-sm">{link.label}</Link>
                  ) : (
                    <a href={link.href} onClick={closeMobileMenu} className="block py-3 text-gray-700 hover:text-gray-900 transition-colors text-sm">{link.label}</a>
                  )}
                  {index === 0 && <div className="border-t border-gray-100"></div>}
                </div>
              ))}

              <div className="border-t border-gray-100">
                <button 
                  onClick={() => setIsCranesOpen(!isCranesOpen)}
                  className="w-full flex items-center justify-between py-3 text-gray-900 hover:text-gray-700 transition-colors text-sm"
                >
                  Краны
                  <svg className={`w-4 h-4 transition-transform ${isCranesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                  </svg>
                </button>
                {isCranesOpen && (
                  <div className="pl-4 space-y-2">
                    {craneLinks.map(link => 
                      link.isRoute ? (
                        <Link key={link.href} to={link.href} onClick={closeMobileMenu} className="block py-2 text-gray-900 hover:text-gray-700 transition-colors text-sm">{link.label}</Link>
                      ) : (
                        <a key={link.href} href={link.href} onClick={closeMobileMenu} className="block py-2 text-gray-900 hover:text-gray-700 transition-colors text-sm">{link.label}</a>
                      )
                    )}
                  </div>
                )}
              </div>

              <div className="border-t border-gray-100">
                <button 
                  onClick={() => setIsCatalogOpen(!isCatalogOpen)}
                  className="w-full flex items-center justify-between py-3 text-gray-900 hover:text-gray-700 transition-colors text-sm"
                >
                  Каталог
                  <svg className={`w-4 h-4 transition-transform ${isCatalogOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                  </svg>
                </button>
                {isCatalogOpen && (
                  <div className="pl-4 space-y-2">
                    <a href="#steel" onClick={closeMobileMenu} className="block py-2 text-gray-900 hover:text-gray-700 transition-colors text-sm">Сталь нержавеющая</a>
                    <a href="#catalog-decorative" onClick={closeMobileMenu} className="block py-2 text-gray-900 hover:text-gray-700 transition-colors text-sm">Сталь декоративная</a>
                    <a href="#catalog-painted" onClick={closeMobileMenu} className="block py-2 text-gray-900 hover:text-gray-700 transition-colors text-sm">Окрашенная сталь</a>
                    <a href="#catalog-galvanized" onClick={closeMobileMenu} className="block py-2 text-gray-900 hover:text-gray-700 transition-colors text-sm">Сталь оцинкованная</a>
                    <a href="#own-production" onClick={closeMobileMenu} className="block py-2 text-gray-900 hover:text-gray-700 transition-colors text-sm">Продукция собств. про-ва</a>
                  </div>
                )}
              </div>

              <div className="border-t border-gray-100"></div>
              <div>
                <a href="#furniture" onClick={closeMobileMenu} className="block py-3 text-gray-700 hover:text-gray-900 transition-colors text-sm">Мет. мебель</a>
              </div>

              <div className="md:hidden border-t border-gray-100 pt-4 space-y-2">
                <a href="tel:+79199995409" className="block text-sm font-semibold text-gray-900">+7 (919) 999-54-09</a>
                <a href="mailto:zakaz@trend-met.ru" className="block text-xs text-gray-500">zakaz@trend-met.ru</a>
              </div>
            </nav>
          )}
        </div>
      </header>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}

export default Header
