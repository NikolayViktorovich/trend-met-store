const CatalogMenu = ({ isDark = false }) => {
  const bgClass = isDark ? 'bg-black' : 'bg-white'
  const borderClass = isDark ? 'border-[#0062dd]' : 'border-gray-200'
  const textClass = isDark ? 'text-white' : 'text-gray-900'
  const subTextClass = isDark ? 'text-gray-400' : 'text-gray-700'
  const hoverClass = isDark ? 'hover:text-[#0062dd]' : 'hover:bg-gray-50'

  return (
    <div className={`absolute ${isDark ? 'bottom-full mb-2' : 'top-full mt-2'} left-0 lg:left-0 min-w-[250px] lg:min-w-[320px] ${bgClass} ${isDark ? 'border-2' : 'border'} ${borderClass} ${isDark ? 'rounded-lg' : 'rounded'} shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 p-3 lg:p-4 space-y-2 lg:space-y-3 text-left`}>
      <div>
        <div className={`font-semibold ${textClass} py-1.5 lg:py-2 text-xs lg:text-sm`}>
          Сталь нержавеющая
        </div>
        <div className={`pl-3 lg:pl-4 space-y-1 lg:space-y-1.5 border-l-2 ${isDark ? 'border-[#0062dd]' : 'border-gray-200'} ml-1`}>
          <a href="/steel-rolls" className={`block py-1.5 lg:py-2 ${subTextClass} ${hoverClass} transition-colors text-xs lg:text-sm`}>
            Нержавеющие рулоны
          </a>
          <a href="/steel-sheet" className={`block py-1.5 lg:py-2 ${subTextClass} ${hoverClass} transition-colors text-xs lg:text-sm`}>
            Лист Нержавеющий
          </a>
          <a href="#steel-tape" className={`block py-1.5 lg:py-2 ${subTextClass} ${hoverClass} transition-colors text-xs lg:text-sm`}>
            Лента нержавеющая (штрипса)
          </a>
        </div>
      </div>
      <div className={`border-t ${isDark ? 'border-[#0062dd]' : 'border-gray-200'} pt-2 lg:pt-3`}>
        <a href="/decorative-steel" className={`block py-1.5 lg:py-2 ${subTextClass} ${hoverClass} transition-colors text-xs lg:text-sm`}>
          Сталь нержавеющая декоративная
        </a>
        <a href="/painted-steel" className={`block py-1.5 lg:py-2 ${subTextClass} ${hoverClass} transition-colors text-xs lg:text-sm`}>
          Окрашенная сталь нержавеющая
        </a>
        <a href="#catalog-galvanized" className={`block py-1.5 lg:py-2 ${subTextClass} ${hoverClass} transition-colors text-xs lg:text-sm`}>
          Сталь оцинкованная с полимерным покрытием
        </a>
        <a href="#own-production" className={`block py-1.5 lg:py-2 ${subTextClass} ${hoverClass} transition-colors text-xs lg:text-sm`}>
          Продукция собств. про-ва
        </a>
      </div>
    </div>
  )
}

export default CatalogMenu
