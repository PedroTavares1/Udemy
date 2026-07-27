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
        <BillInput /> {/*<input que o usuário digite o valor da conta>*/}
        <Perguntas texto="How did you like the service?" />
        <Perguntas texto="How did your friend like the service?" /> 
        <Respostas />
        <Button />
      </div>
      
    )
  }
  
 
function BillInput() {
  return (
    <div>
      <label> How much was the bill? </label>
      <input type="number" />
    </div>
  )
}

  function Perguntas({ texto }) {
    const [pergunta, setPergunta] = useState("")

    
    return (

      <div>
        <label>
          {texto} 
        </label>
        
        <select>
          <option value="0">Dissatisfied (0%)</option>
          <option value="5">It was okay (5%)</option>
          <option value="10">It was good (10%)</option>
          <option value="20">Absolutely amazing! (20%)</option>
        </select>
      
      </div>
    )
  }

  function Respostas() {


    
  }

  function Button() {
    
  }



export default App
