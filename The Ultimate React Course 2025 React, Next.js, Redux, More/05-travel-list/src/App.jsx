import { useState } from 'react'
import './App.css'
import Form from './Form'
import PackingList from './PackingList'
import Stats from './Stats'
import Logo from './Logo'

function App() {

  const [items, setItems] = useState([]) //Estado do array de itens, usado para armazenar os itens adicionados à lista
  
  //Lifting state up é mover o estado para o componente pai comum quando dois irmãos precisam do mesmo dado.
  // No Far Away, movemos items do Form para o App porque tanto o Form quanto o PackingList precisavam acessar esse estado.

  function handleAddItems(item) {
    setItems((items) => [...items, item]) //Atualiza o estado items adicionando o novo item ao array existente
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id)) //Atualiza o estado items removendo o item com o id correspondente
  }

  function handleToggleItem(id) {
    setItems((items) => 
      items.map((item) => 
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    )
  }

  function handleClearList() { 
  const confirmed = window.confirm("Are you sure you want to delete all items?") //Confirma se o usuário realmente deseja limpar a lista
  if (confirmed) setItems([]) //Se o usuário confirmar, limpa a lista
  
  /*
    Outra forma de fazer a mesma coisa, sem criar a variável confirmed:
    window.confirm("Are you sure you want to delete all items?") 
    && 
    setItems([])
  */
}

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems}  />
      <PackingList items={items} onDeleteItem={handleDeleteItem} onToggleItem={handleToggleItem} onClearList={handleClearList} />
      <Stats items={items} />
    </div>
  );
}

export default App
