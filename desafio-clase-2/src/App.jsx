import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import NavBar from './Components/NavBar/NavBar'
import ListaProductos from './Components/ListaProductos/Lista.Productos'
import ItemDetailContainer from './Components/Containers/ItemDetailsContainers/ItemDetailContainer'


function App() {
  return (
    <>
      <NavBar/> 
      <ListaProductos>
        <p>Productos</p>
      </ListaProductos>
      <ItemDetailContainer/>
    </>
  )
}

export default App
