import Contador from "../ItemCount/ItemCount"


const Item = ({producto}) =>{
    return(
        <div className="prod" >
            <h2>{producto.Producto}</h2>
            <p>{producto.Talle}</p>
            <p>{producto.Precio}</p>
            <button>Información del Prodcuto</button>
            <Contador stock={producto.Stock} initial={1}/>
        </div>
    )
}

export default Item