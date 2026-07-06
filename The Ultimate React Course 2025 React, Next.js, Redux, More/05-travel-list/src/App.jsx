import { useState } from 'react'
import './App.css'



const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 3, description: "Charger", quantity: 1, packed: false },
];


function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

function Logo() {
  return (
    <div>
      <h1>🏝️ Far Away 💼 </h1>
    </div>
  )
}

function Form() {

  function handleSubmit(e) {
    e.preventDefault()
    console.log(e);
  }


  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3> What do you need for your 😍 trip? </h3>
      <select>
        {Array.from({ length: 20 }, (_, i) => i + 1).map(num => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input type="text" placeholder="Item..." />
      <button> + Add </button>
  </form>
  );
} 


function PackingList() {
  return (
  <div className="list">
    <ul> 
      {initialItems.map(item => (
        <Item key={item.id} item={item} />
      ))}
    </ul>
  </div>
  )
}

function Item({ item }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {" "}
        {item.quantity} {item.description}
        <button>❌</button>
      </span>
    </li>
  ) 
}

function Stats() {
  return <footer className="stats">
    <em>💼 You have x items on your list, and you already packed X (X%)</em>
  </footer>
}




export default App
