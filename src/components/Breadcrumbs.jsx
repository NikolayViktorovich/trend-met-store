import { Link } from 'react-router-dom'

const Breadcrumbs = ({ items }) => (
  <nav className="py-4">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <ol className="flex items-center gap-2 text-sm">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-2">
            {i > 0 && (
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
              </svg>
            )}
            {item.href ? (
              <Link to={item.href} className="text-gray-600 hover:text-[#0062dd] transition-colors duration-300 font-medium">
                {item.label}
              </Link>
            ) : (
              <span className="text-[#0062dd] font-semibold">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </div>
  </nav>
)

export default Breadcrumbs
