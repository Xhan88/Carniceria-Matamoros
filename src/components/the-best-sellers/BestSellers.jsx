import './BestSeller.css'
import BestSellersCards from './BestSellersCards'


const BestSellers = () => {
  return (
    <>
    <div className='BestSeller-container'>
      <p className='bestSeller'>Cortes Finos</p>
      <h1 >Nuestros Productos mas vendidos</h1>
      <img src="./shape.png" alt="" />
    </div>

    <BestSellersCards />
    </>
  )
}

export default BestSellers
