import { useState } from 'react'
import './App.css'

{/* 
  O useState não é só sobre "não recarregar a página" — isso é característica de qualquer SPA (Single Page Application). 
  O que o useState faz de específico é:
  Quando o estado muda, o React re-renderiza apenas o componente que possui aquele estado — recalculando o JSX e atualizando só o que mudou no DOM.
  
  Uma variável comum não faz isso. Você pode mudar o valor de uma let dentro de um componente, mas o React não vai perceber — a tela não atualiza.
  
  O useState é o mecanismo que faz o React "observar" aquela variável e reagir quando ela muda.
  
  Guarda essa distinção: variável comum = React não vê. Estado = React observa e reage.
*/}


const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];


function App() {
  consr step = 1;

  return (
    <div className="steps">
      <div className="numbers">
        <div className="active">1</div>
        <div>2</div>
        <div>3</div>
      </div>
    
      <p className="message">
        Step {step}: {messages[step - 1]}
      </p>

      <div className="buttons"> 
        <button style={{backgroundColor: "#7950f2", color:"#fff"}} className="previous">Previous</button>
        <button style={{backgroundColor: "#7950f2", color:"#fff"}} className="next">Next</button>
      </div>
    </div>

  );
}





export default App
