import '../organic-products/OrganicCard.css'

const OrganicCards = () => {
  return (
    <>
    
    <div className='card-meat'>
      <img className="img-organic-card" src="meat-card1.png" alt="" />
      <h4>Hamburguer meat</h4>
      <p>$ 176</p>
      <p className='textCardFooter'>carne suprema</p>
    </div>

    <div className='card-meat'>
      <img className="img-organic-card" src="meat-card2.png" alt="" />
      <h4>Hamburguer meat</h4>
      <p>$ 176</p>
      <p className='textCardFooter'>carne suprema</p>
    </div>

    <div className='card-meat'>
      <img className="img-organic-card" src="meat3.png" alt="" />
      <h4>Hamburguer meat</h4>
      <p>$ 186</p>
      <p className='textCardFooter'>carne suprema</p>
    </div>

    </>
  )
  
}

export default OrganicCards
