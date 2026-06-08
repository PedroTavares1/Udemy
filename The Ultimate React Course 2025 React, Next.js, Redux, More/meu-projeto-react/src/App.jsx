import { useState } from 'react'
import './App.css'

function App() {
 
  const [advice, setAdvice] = useState('') // Estado para armazenar o conselho recebido da API
  const [id, setId] = useState(0) // Estado para armazenar o ID do conselho recebido da API

  async function getAdvice() {
    const res = await fetch('https://api.adviceslip.com/advice')
    const data = await res.json()
    console.log(data.slip.advice)
    setId(data.slip.id)
    setAdvice(data.slip.advice)
  }
  
 return (
    <div>
      <h1>Meu Projeto React</h1>
      <button onClick={getAdvice}>Get advice</button>
      <h2>{id} - {advice}</h2>
    </div>
  )
  
}

export default App
