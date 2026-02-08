import { useState } from 'react'
import CatalogMenu from './CatalogMenu'
import ContactModal from './ContactModal'

const navLinks = [
  { href: '#about', label: 'О компании' },
  { href: '#services', label: 'Металлоконструкции' }
]

const craneLinks = [
  { href: '#cranes-bridge', label: 'Про-во мостовых кранов' },
  { href: '#cranes-gantry', label: 'Про-во козловых кранов' }
]

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-3 border-b border-gray-100">
            <img src="/logo.svg" alt="ТрендМет" className="h-12" />

            <div className="flex items-center gap-6">
              <div className="hidden md:flex flex-col items-end">
                <a href="tel:+79199995409" className="text-sm font-semibold text-gray-900 hover:text-gray-600 transition-colors">+7 (919) 999-54-09</a>
                <a href="mailto:zakaz@trend-met.ru" className="text-xs text-gray-500 hover:text-gray-700 transition-colors">zakaz@trend-met.ru</a>
              </div>

              <button onClick={() => setIsModalOpen(true)} className="bg-[#0062dd] text-white px-6 py-2.5 rounded-full hover:bg-[#0052bb] transition-colors font-medium text-sm">
                Оставить заявку
              </button>
            </div>
          </div>

          <nav className="hidden lg:flex items-center justify-center gap-8 py-3">
            {navLinks.map(link => (
              <a key={link.href} href={link.href} className="text-gray-700 hover:text-gray-900 transition-colors text-sm">{link.label}</a>
            ))}
            
            <div className="relative group">
              <button className="text-gray-700 hover:text-gray-900 transition-colors flex items-center gap-1 text-sm">
                Краны
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                </svg>
              </button>
              <div className="absolute top-full mt-2 w-56 bg-white border border-gray-200 rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                {craneLinks.map((link, i) => (
                  <a key={link.href} href={link.href} className={`block px-4 py-2.5 text-gray-700 hover:bg-gray-50 transition-colors text-sm ${i === 0 ? 'rounded-t' : 'rounded-b'}`}>{link.label}</a>
                ))}
              </div>
            </div>
            
            <div className="relative group">
              <button className="text-gray-700 hover:text-gray-900 transition-colors flex items-center gap-1 text-sm">
                Каталог
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                </svg>
              </button>
              <CatalogMenu />
            </div>
            
            <a href="#furniture" className="text-gray-700 hover:text-gray-900 transition-colors text-sm">Мет. мебель</a>
          </nav>
        </div>
      </header>
      
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}

export default Header
