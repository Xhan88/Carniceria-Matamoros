import './ProductsOffer.css'

const ProductsOffer = () => {
  return (
    <>
    <div className='container'>
      <div className='offerProducts'>
        <h3>Productos Frezcos</h3>
        <h2>Lorem, ipsum dolor.</h2>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <h1>$ 176</h1>
    <div>
      <img className="card-images" src="/meat-card1.png" alt="" />
    </div>
        
      </div>

      <div className='offerProducts'>
        <h3>Productos Frezcos</h3>
        <h2>Lorem, ipsum dolor.</h2>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <h1>$ 90</h1>

        <div>
          <img className="card-images" src="/meat-card2.png" alt="" />
        </div>

      </div>

      
    </div>
    </>
    
  )
}

export default ProductsOffer
