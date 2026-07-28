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
    
    const [bill, setBill] = useState("") // Estado para armazenar o valor da conta
    const [percentage1, setPercentage1] = useState(0) // Estado para armazenar a porcentagem 1
    const [percentage2, setPercentage2] = useState(0) // Estado para armazenar a porcentagem 2


    return (
      <div>
        <BillInput /> {/*<input que o usuário digite o valor da conta>*/}
        <Perguntas 
          texto="How did you like the service?" 
          percentage={percentage1} 
          onSelect={setPercentage1} 
        />
        <Perguntas 
          texto="How did your friend like the service?" 
          percentage={percentage2} 
          onSelect={setPercentage2} 
        /> 
        <Respostas />
        <ButtonReset />
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

  function Perguntas({ texto, percentage, onSelect }) {

    
    return (

      <div>
        <label>
          {texto} 
        </label>
        
        
          <select value={percentage} onChange={(e) => onSelect(Number(e.target.value))}>
         {/* 
            value={percentage} — roda sempre que a tela desenha, nem precisa o usuário clicar em nada.
              Diz pro <select>: "a opção marcada agora é essa: 0, 5, 10 ou 20"
              value nunca "atualiza" nada. Ele só lê e mostra o estado atual, passivo.

            onChange={(e) => onSelect(Number(e.target.value))} — só roda quando o usuário muda a seleção.
              1. e.target.value é o valor do <option> que o usuário acabou de clicar, lido direto do <select> na tela.
                Chega como string.
              2. Number(e.target.value) — converte essa string "10" no número 10 antes de guardar no estado.
              3. onSelect(...) manda esse número pro pai, que é quem de fato muda o estado.

            Resumindo o ciclo completo:
              Usuário clica → onChange dispara → setPercentage1(10) → estado no Menu muda pra 10
              React redesenha o Perguntas → value={percentage} roda de novo → agora percentage é 10 → <select> mostra "10" marcado

            onChange é sempre: primeiro pega o valor bruto (e.target.value),
            depois converte (Number(...)), 
            só então chama onSelect com o resultado já pronto. 
            onSelect é sempre o último passo dessa cadeia.
          
          */}

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

  function ButtonReset() {
    
  }



export default App
