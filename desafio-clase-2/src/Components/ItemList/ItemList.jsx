import { useEffect, useState } from "react"
import { getFetch } from "../../Helpers/getFetch"
import Contador from "../ItemCount/ItemCount"
import './ItemList.css'

const ItemList = ()=>{
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        getFetch()//Llamada a la Api
        .then((resp)=>setProductos(resp))
        .catch(error=>console.log(error)) 
        .finally(()=>setLoading(false))
    }, [])

console.log(productos)

    return(
        <div className="prodd">
            {loading ?
                <p>Cargando...</p>
            :    
             productos.map((producto)=><div className="prod" key={producto.Id}>
                                            <h2>{producto.Producto}</h2>
                                            <p>{producto.Talle}</p>
                                            <p>{producto.Precio}</p>
                                            <Contador stock={producto.Stock} initial={1}/>
                                        </div> ) }
        </div>
    )
}

export default ItemList