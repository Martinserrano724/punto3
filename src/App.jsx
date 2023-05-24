import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Ejercicio3 from './components/Ejercicio3'

function App() {
  const [msjExtra,setMensaje] =useState('')
  function msj(){
    return (setMensaje('(from changed state)!'))
  }

  return (
    <>
   
    <Ejercicio3 tituloExtra='My friend' msj={msjExtra} className=" "/>
    <div className='d-flex justify-content-center'>
     <button className='btn btn-primary ' onClick={msj}>Click</button>
    
    </div>
          
    </>
  )
}

export default App
