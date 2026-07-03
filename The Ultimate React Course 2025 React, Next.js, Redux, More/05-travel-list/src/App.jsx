import { useState } from 'react'
import './App.css'



function Logo() {
  return (
    <div>
      <h1>🏝️ Far Away 💼 </h1>
    </div>
  )
}

function Form() {
  return (
    <div className="add-form">
    <h3> What do you need for your 😍 trip? </h3>
  </div>
  )
}

function PackList() {
  return <div className="list">LIST</div>
}

function Stats() {
  return <footer className="stats">
    <em>💼 You have x items on your list, and you already packed X (X%)</em>
  </footer>
}

function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackList />
      <Stats />
    </div>
  );
}



export default App
