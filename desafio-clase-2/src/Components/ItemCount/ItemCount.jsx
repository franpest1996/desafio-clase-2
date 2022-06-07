import { useState } from 'react'

function Contador({stock, initial, onAdd}) {
    const [count, setCount] = useState(initial);
    //const [date, setDate] = useState(Date());

    function suma() {
        if( count < stock ) {
            setCount(count + 1);
            //setDate(Date());
        }
    }

    function resta() {
        if( count > initial) {
            setCount(count - 1);
            //setDate(Date());
        }
    }

    function agregar() {
        console.log('Se agregaron ' + count + ' artículos al carrito')
    } 

    //<p>Fecha: {date}</p>

    return (
        <div>
            <h2>Cantidad: {count}</h2>
            <button onClick={suma}>+</button>
            <button onClick={resta}>-</button>
            <button onClick={agregar}>Agregar al carrito</button>
        </div>
    )
}

export default Contador

