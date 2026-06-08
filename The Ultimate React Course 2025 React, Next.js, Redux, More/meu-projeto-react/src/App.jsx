import { useEffect, useState } from 'react'
import './App.css'

function App() {
 
  const [advice, setAdvice] = useState('') // Estado para armazenar o conselho recebido da API
  const [id, setId] = useState(0) // Estado para armazenar o ID do conselho recebido da API
  const [count, setCount] = useState(0) // Estado para contar quantos conselhos foram lidos


  async function getAdvice() {
    const res = await fetch('https://api.adviceslip.com/advice')
    const data = await res.json()
    console.log(data.slip.advice)
    setId(data.slip.id)
    setAdvice(data.slip.advice)
    setCount((c) => c + 1)
  }
  
  useEffect(function() {
    getAdvice()
  }, []) // O array vazio [] garante que a função seja executada apenas uma vez, quando o componente for montado.

 return (
    <div>
      <h1>Meu Projeto React</h1>
      <button onClick={getAdvice}>Get advice</button>
      <h2>{id} - {advice}</h2>
      <Message count={count} />
    </div>
  )
  
  function Message(props) {
    return (
      <p>
        You have read <strong>{props.count}</strong> advices so far.
      </p>
    )
  }



}

export default App
