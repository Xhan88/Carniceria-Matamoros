import './BestSellerCard.css'

const BestSellersCards = (props) => {
  const { title, description, price, image } = props;
  return (
    <>
      <div className='best-seller-cont'>
        <div className='content-seller'>

          <img className="image-bestseller" src={image} alt={title} />
          <section className='text-p'>
             <p className='text-title'>{title}</p>
             <p className='text-description'>{description}</p>
          </section>
         
          <h3>${price}</h3>
        </div>
      </div>
    </>
  )
}

export default BestSellersCards;
