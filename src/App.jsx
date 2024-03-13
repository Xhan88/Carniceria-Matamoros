
import './App.css'
import Header from './components/Header/Header'
import SloganGretting from './components/Slogan/SloganGretting'
import SwipeableTextMobileStepper from './components/carosel-image/Carousel'
// import Carousel from './components/carosel-image/Carousel'
import ProductsOffer from './components/offer-secction/ProductsOffer'
import OrganicProducts from './components/organic-products/OrganicProducts'
import BestSellers from './components/the-best-sellers/BestSellers'


function App() {

  return (
    <>
      <Header />
      <SloganGretting />
      <ProductsOffer />
      <OrganicProducts />
      <SwipeableTextMobileStepper />
      <BestSellers />
    </>
  )
    
}

export default App
