import { Link } from 'react-router-dom'

const Breadcrumbs = ({ items }) => (
  <nav className="bg-gray-50 border-b border-gray-200">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
      <ol className="flex items-center gap-2 text-sm">
        <li>
          <Link to="/" className="text-gray-500 hover:text-gray-700 transition-colors">
            Главная
          </Link>
        </li>
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-2">
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
            </svg>
            {item.href ? (
              <Link to={item.href} className="text-gray-500 hover:text-gray-700 transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="text-gray-900 font-medium">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </div>
  </nav>
)

export default Breadcrumbs
