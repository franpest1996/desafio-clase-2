import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import NavBar from './Components/NavBar/NavBar'
import Card from './Components/Card/Card'

function App() {
  return (
    <>
      <NavBar/>
      <Card title='Remera' talle='M' precio={300} />    
    </>
  )
}

export default App
