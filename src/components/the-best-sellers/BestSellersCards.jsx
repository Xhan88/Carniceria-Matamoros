import './BestSellerCards.css'

const BestSellersCards = (props) => {
  const {title, description, price, image } = props;
  return (
    <>
    <div className='containeer-seller' >
     
    
        <img className="image-bestseller" src={image} alt={title} />
        <p> {title}</p>
        <p>{description}</p>
        <h3>{price}</h3>
      </div>
      
    
    </>
  )
}

export default BestSellersCards;
