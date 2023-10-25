import RoomIcon from '@mui/icons-material/Room';
import '../first-navbar/first-navbar.css'

const FirstNavBar = () => {
  return (
    <>
    <div className='first-navbar'>

      <section className='section-left'>
        <RoomIcon className='ub-icon'/>
        <p className='adress'>Matamoros #333 Col. Centro | correo@example.com</p>
      </section>
      
      <ul >
        <li>Contactanos</li>
        <li>Nosotros</li>
        <li>Productos</li>
      </ul>
      </div>
    </>
  )
}

export default FirstNavBar
