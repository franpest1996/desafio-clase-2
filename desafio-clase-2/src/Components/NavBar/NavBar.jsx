import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'

function NavBar() {
    return (
      <nav className='NavBar'>  
        <ul>
            <a href=""><li>Inicio</li></a>
            <a href=""><li>Productos</li></a>
            <a href=""><li>Contacto</li></a>
            <a href=""><li><CartWidget/></li></a>
        </ul>
      </nav>
    )
  }

export default NavBar