import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import NavBar from './Components/NavBar/NavBar'
import ListaProductos from './Components/ListaProductos/Lista.Productos'


function App() {
  return (
    <>
      <NavBar/> 
      <ListaProductos>
        <p>Productos</p>
      </ListaProductos>
    </>
  )
}

export default App
