import "./App.css";
import { useState } from "react";


function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  
  const date = new Date();
  date.setDate(date.getDate() + count);


  return (
    <div>
      <div>
        <input type="range" min="0" max="10" 
        value={step} onChange={(e) => setStep(Number(e.target.value))} />
        <span>Step:{step}</span>
        
      </div>    
      <div>
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <input 
          type="number" 
          value={count} 
          onChange={(e) => setCount(Number(e.target.value))} 
        />
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>
      
      
      <p>
        <span>  
          {count === 0 //condição 1 (se↴ )
          ? "Today is: " //resultado 1 (faça isso)
          : count > 0 //condição 2 (Se não, se↴ )
          ? "In " + count + " days, it will be: "  //resultado 2 (faça isso, se não↴ )
          : Math.abs(count) + " days ago, it was: "} {/*//resultado 3 else final (Faça isso)*/}
        </span>
        <span>  
          {date.toDateString()}
        </span>
      </p>
    </div>
  );
}
     

export default App

