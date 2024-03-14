
import './App.css'
import Header from './components/Header/Header'
import SloganGretting from './components/Slogan/SloganGretting'
import SwipeableTextMobileStepper from './components/carosel-image/Carousel'
// import Carousel from './components/carosel-image/Carousel'
import ProductsOffer from './components/offer-secction/ProductsOffer'
import OrganicProducts from './components/organic-products/OrganicProducts'
import BestSellers from './components/the-best-sellers/BestSellers'
import BestSellersCards from './components/the-best-sellers/BestSellersCards'


function App() {

  return (
    <>
      <Header />
      <SloganGretting />
      <ProductsOffer />
      <OrganicProducts />
      <SwipeableTextMobileStepper />
      <BestSellers />
      <BestSellersCards />
    </>
  )
    
}

export default App
