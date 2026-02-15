import Breadcrumbs from '../components/Breadcrumbs'

const ProductionPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Breadcrumbs 
        items={[
          { label: 'Главная', href: '/' },
          { label: 'Продукция собственного про-ва' }
        ]} 
      />
      
      <section className="py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
            Продукция собственного про-ва
          </h1>
          
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 mb-6">
              Здесь будет информация о продукции собственного производства.
            </p>

          </div>
        </div>
      </section>
    </div>
  )
}

export default ProductionPage
