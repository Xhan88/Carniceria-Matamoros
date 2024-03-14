
const BestSellersCards = ({title, description, price, image }) => {
  // const {title, description, price, image } = props;
  // console.log(props)
  return (
    <>
    <div >
      <div>
        <p> fff{title}</p>
        <img src={image} alt={title} />
        <p>{description}</p>
        <h3>{price}</h3>
      </div>
    </div>
    </>
  )
}

export default BestSellersCards;
