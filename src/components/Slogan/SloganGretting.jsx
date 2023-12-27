import PresentationImages from "../images-secction-gretting/PresentationImages"
import './SloganGretting.css'

const SloganGretting = () => {
  return (
    <>
    <div className="gretting-presentation animate__animated  animate__slideInUp">
      <h1 className='gretting' >Carne Fresca</h1>
      <p className='gretting'>Carne Suprema</p>
      <button className='btn-order'>Ordene Ahora</button>
      <PresentationImages />
    </div>
      
    </>
  )
}

export default SloganGretting
