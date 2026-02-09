const CatalogMenu = ({ isDark = false }) => {
  const bgClass = isDark ? 'bg-gray-900' : 'bg-white'
  const borderClass = isDark ? 'border-gray-800' : 'border-gray-200'
  const textClass = isDark ? 'text-gray-300' : 'text-gray-900'
  const hoverClass = isDark ? 'hover:bg-gray-800' : 'hover:bg-gray-50'

  return (
    <div className={`absolute ${isDark ? 'bottom-full mb-2' : 'top-full mt-2'} left-0 lg:left-0 w-64 ${bgClass} border ${borderClass} rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50`}>
      <div className="relative group/sub">
        <button className={`w-full text-left px-4 py-2.5 ${textClass} ${hoverClass} transition-colors flex items-center justify-between text-sm first:rounded-t`}>
          Сталь нержавеющая
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
          </svg>
        </button>
        <div className={`absolute left-full top-0 ml-1 w-56 ${bgClass} border ${borderClass} rounded shadow-lg opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all`}>
          <a href="#steel-rolls" className={`block px-4 py-2.5 ${textClass} ${hoverClass} transition-colors text-sm first:rounded-t`}>
            Нержавеющие рулоны
          </a>
          <a href="#steel-sheet" className={`block px-4 py-2.5 ${textClass} ${hoverClass} transition-colors text-sm`}>
            Лист Нержавеющий
          </a>
          <a href="#steel-perforated" className={`block px-4 py-2.5 ${textClass} ${hoverClass} transition-colors text-sm`}>
            Лист Нержавеющий перфорированный
          </a>
          <a href="#steel-tape" className={`block px-4 py-2.5 ${textClass} ${hoverClass} transition-colors text-sm last:rounded-b`}>
            Лента нержавеющая (штрипса)
          </a>
        </div>
      </div>
      <a href="#catalog-decorative" className={`block px-4 py-2.5 ${textClass} ${hoverClass} transition-colors text-sm`}>
        Сталь нержавеющая декоративная
      </a>
      <a href="#catalog-painted" className={`block px-4 py-2.5 ${textClass} ${hoverClass} transition-colors text-sm`}>
        Окрашенная сталь нержавеющая
      </a>
      <a href="#catalog-galvanized" className={`block px-4 py-2.5 ${textClass} ${hoverClass} transition-colors text-sm`}>
        Сталь оцинкованная с полимерным покрытием
      </a>
      <a href="#catalog-roofing" className={`block px-4 py-2.5 ${textClass} ${hoverClass} transition-colors text-sm last:rounded-b`}>
        Кровля
      </a>
    </div>
  )
}

export default CatalogMenu
