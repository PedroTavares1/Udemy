import { useState } from 'react'
import './App.css'

function App() {
  return (
    <div>
      <h1>Tip Calculator</h1>
      <Menu />

    </div>
  )
}
  function Menu() {   
    
    const [bill, setBill] = useState("")
    return (
      <div>
        <BillInput />
        <Perguntas />
        <Respostas />
        <Button />
      </div>
      
    )
  }
  
function BillInput() {
  
  }

  function Perguntas() {
    
  }

  function Respostas() {


    
  }

  function Button() {
    
  }



export default App
