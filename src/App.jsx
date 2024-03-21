
import './App.css'
import CardSellers from './components/the-best-sellers/CardSellers'
import Header from './components/Header/Header'
import SloganGretting from './components/Slogan/SloganGretting'
import SwipeableTextMobileStepper from './components/carosel-image/Carousel'
import ProductsOffer from './components/offer-secction/ProductsOffer'
import OrganicProducts from './components/organic-products/OrganicProducts'
import BestSellers from './components/the-best-sellers/BestSellers'
import OurTeam from './components/Our-Team/OurTeam'


function App() {

  return (
    <>
      <Header />
      <SloganGretting />
      <ProductsOffer />
      <OrganicProducts />
      <SwipeableTextMobileStepper />
      <BestSellers />
      <CardSellers />
      <OurTeam />
    </>
  )
    
}

export default App
