import RoomIcon from '@mui/icons-material/Room';
import '../first-navbar/first-navbar.css'

const FirstNavBar = () => {
  return (
    <>
    <div className='first-navbar'>
      <RoomIcon />
      <p>Matamoros #333 Col. Centro | correo@example.com</p>
      <ul>
        <li>Contactanos</li>
        <li>Sobre Nosotros</li>
        <li>Sobre nuestros productos</li>
      </ul>
      </div>
    </>
  )
}

export default FirstNavBar
