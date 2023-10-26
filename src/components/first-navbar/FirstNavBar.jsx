import RoomIcon from '@mui/icons-material/Room';
import '../first-navbar/first-navbar.css'

const FirstNavBar = () => {
  return (
    <>
    <div className='first-navbar'>
     
      <p className='adress-email'><RoomIcon className='locatio-icon'/>    Matamoros #333 Col. Centro ||  correo@example.com</p>
    
    <div>
      <ul>
        <li>Contactanos</li>
        <li>Sobre Nosotros</li>
        <li>Sobre nuestros productos</li>
      </ul>
    </div>
      
   </div>
    </>
  )
}

export default FirstNavBar

