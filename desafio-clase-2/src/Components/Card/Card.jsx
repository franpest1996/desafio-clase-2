export default Card
import './Card.css'

function Card({title, talle, precio}){
    return(
        <div className="card">
            <h2>{title}</h2>
            <p>Talle: {talle}</p>
            <p>${precio}</p>
        </div>
    )
}


// Otra forma
/*export default function Title(props){
    const {title, talle, precio} = props
    
    return(
        <div>
            <h2>{props.title}</h2>
            <p>{props.talle}</p>
            <p>{props.precio}</p>
            
        </div>
    )
} 
*/