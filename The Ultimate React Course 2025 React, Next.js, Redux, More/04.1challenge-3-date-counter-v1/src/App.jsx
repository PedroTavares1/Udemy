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
        <button onClick={() => setStep((s) => s - 1)}>-</button>
        <span>Step:{step}</span>
        <button onClick={() => setStep((s) => s + 1)}>+</button>
      </div>    
      <div>
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <span>Count: {count}</span>
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

