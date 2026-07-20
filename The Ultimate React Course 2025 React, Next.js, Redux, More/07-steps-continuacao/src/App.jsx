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
  "Learn React ⚛️", //posição 0
  "Apply for jobs 💼", //posição 1
  "Invest your new income 🤑", //posição 2
];

// Variáveis que não precisam re-renderizar o componente 
// Para esses, usa const normal — sem useState

function App() {
  return <div>
    <Steps />
    <StepMessage step={1}>
      <p>Pass in content</p>
      <p>✌️</p>
    </StepMessage>
    <StepMessage step={2}>
      <p>Read children prop</p>
      <p>😎</p>
    </StepMessage>
    {/* <Steps />*/}
  </div>
}

function Steps() {
  const [step, setStep] = useState(1);
  const[isOpen, setIsOpen] = useState(true);

  //Analogia simples:

  // step é uma caixa que guarda um número
  // setStep é a função que troca o número dentro da caixa
  // useState(1) criou a caixa e colocou o número 1 dentro dela no início

  // Quando você chama setStep(2), você está pedindo para trocar o conteúdo da caixa de 1 para 2. O step continua sendo a caixa — só o conteúdo muda.


  //const [test, setTest] = useState({ name: "Jonas"});
  
  function handlePrevious() {
    if (step > 1) {
      setStep((s) => s - 1);
    }

  }
  
  function handleNext() {
    if (step < 3) {
      setStep((s) => s + 1);

      //O React agrupa os dois — mas com valor direto ele só guarda o valor final.
      //  Com função ele encadeia as funções em sequência, cada uma recebendo o resultado da anterior.
      // Por isso a função garante que cada chamada use o valor mais atualizado, mesmo dentro do mesmo evento.
    }
  }

  //BAD PRACTICE
  // test.name = "Fred";
  //setTest({name: "Fred"}); //Boa prática


  return ( 
    <div>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>

 
      {isOpen && (    

        <div className="steps">
          <div className="numbers">
            <div className={step == 1 ? "active" : ""}>1</div>
            <div className={step == 2 ? "active" : ""}>2</div>
            <div className={step == 3 ? "active" : ""}>3</div>
          </div>
        
          <p className="message">
            Step {step}: 
            {/* {test.name} */} 
          </p>

          <StepMessage step={step}>
            {messages[step - 1]} {/* o -1 é porque o array comeca em 0 e o step começa em 1 */}
            {/*messages vai ser = valor de Step - 1 para alinhar com o array. => messages = 1 - 1 = 0 buscar o primeiro item do array */}
            <Button
             bgColor="#e7e7e7" textColor="#333" onClick={()=>alert(`Learn more about ${messages[step - 1]}`)}
            > 
              Learn now
            </Button>
          </StepMessage>

          <div className="buttons"> 
            <Button 
              bgColor= "#7950f2"
              textColor="#fff"
              onClick={handlePrevious}>
              <span>⬅️</span> Previous              
            </Button>            

            <Button 
              bgColor= "#7950f2"
              textColor="#fff"
              onClick={handleNext}>
              Next <span>➡️</span> 
              </Button> 
          </div>
        </div>
      )}
    </div>
  );
}

function StepMessage ({step, children}) {
  return (
    <div className="message">
      <h3> Step {step} </h3>
      {children}
    </div>
  );
}


function Button({ bgColor, textColor,onClick, children }) {
  return ( 
    <button
      style={{backgroundColor: bgColor, color: textColor}} 
      onClick={(onClick)}
    >
      {children}
    </button>
    
  )
}



export default App
