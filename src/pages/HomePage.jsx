import Hero, { Stats } from '../components/Hero'
import Services from '../components/Services'
import OwnProduction from '../components/OwnProduction'
import Warehouse from '../components/Warehouse'
import Projects from '../components/Projects'
import Clients from '../components/Clients'

const HomePage = () => (
  <>
    <Hero />
    <Stats />
    <Services />
    <OwnProduction />
    <Warehouse />
    <Projects />
    <Clients />
  </>
)

export default HomePage
