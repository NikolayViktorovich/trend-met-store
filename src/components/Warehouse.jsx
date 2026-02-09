import dekoratImg from '../assets/Warehouse/dekorat.JPG'
import ocinkovImg from '../assets/Warehouse/ocinkov.PNG'
import okrasstalImg from '../assets/Warehouse/okrasstal.JPG'
import stalnerjImg from '../assets/Warehouse/stalnerj.JPG'

const items = [
  'Сталь нержавеющая в рулонах и листах',
  'Сталь нержавеющая декоративная',
  'Окрашенная сталь нержавеющая',
  'Сталь оцинкованная с полимерным покрытием',
  'Кровля'
]

const images = [stalnerjImg, dekoratImg, okrasstalImg, ocinkovImg]

const orbs = [
  { color: 'rgba(34, 197, 94, 0.1)', size: 'w-96 h-96', pos: 'top-20 right-20', delay: '0s' },
  { color: 'rgba(16, 185, 129, 0.1)', size: 'w-80 h-80', pos: 'bottom-20 left-20', delay: '2s' },
  { color: 'rgba(20, 184, 166, 0.08)', size: 'w-72 h-72', pos: 'top-1/2 right-1/3', delay: '4s' }
]

const Warehouse = () => (
  <section id="catalog" className="py-12 sm:py-16 md:py-20 bg-gray-900 relative overflow-hidden">
    {orbs.map((orb, i) => (
      <div key={i} className={`absolute ${orb.size} ${orb.pos} rounded-full blur-3xl glow-orb`} style={{ backgroundColor: orb.color, animationDelay: orb.delay }} />
    ))}
    
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-10">Склад</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
        <div className="space-y-2 sm:space-y-3">
          {items.map((item, i) => (
            <div key={i} className="bg-gray-800/50 backdrop-blur-sm p-3 sm:p-5 rounded-xl hover:bg-gray-800/80 transition-all cursor-pointer group">
              <span className="text-white text-sm sm:text-base font-medium flex items-center justify-between">
                {item}
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                </svg>
              </span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-2 sm:gap-3">
          {images.map((img, i) => (
            <div key={i} className="overflow-hidden rounded-lg sm:rounded-xl aspect-video border border-gray-700">
              <img src={img} alt="" loading="lazy" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
)

export default Warehouse
