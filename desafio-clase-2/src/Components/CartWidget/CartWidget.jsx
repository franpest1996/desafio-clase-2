import carrito from '../Assets/Carrito.png'
import '../CartWidget/CartWidget.css'

function CartWidget(){
    return (
        <div className="carrito">
            <img src={carrito}/>
        </div>
    )
  }

export default CartWidget