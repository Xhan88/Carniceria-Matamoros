import './OrganicProducts.css'
import OrganicCards from './OrganicCards'


const OrganicProducts = () => {
  return (
    <>
    <div  className="secction-organic">
      <p>Nuestros productos organicos</p>
      <h1>Organic Products</h1>
      <img src="../shape.png" alt="" />
       
    </div>
<div className='Organic-cards'>
          
          <OrganicCards />
          
      </div>
      </>
  )
}

export default OrganicProducts