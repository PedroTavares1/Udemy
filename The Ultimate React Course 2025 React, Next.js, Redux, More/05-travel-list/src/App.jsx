import { useState } from 'react'
import './App.css'






function App() {

  const [items, setItems] = useState([]) //Estado do array de itens, usado para armazenar os itens adicionados à lista
  

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


  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList items={items} onDeleteItem={handleDeleteItem} onToggleItem={handleToggleItem} />
      <Stats items={items} />
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

function Form({ onAddItems }) {

  const [description, setDescription] = useState("") //Estado do <input> controlado, usado para armazenar o valor digitado pelo usuário
  const [quantity, setQuantity] = useState(1) //Estado do <select> controlado, usado para armazenar o valor selecionado pelo usuário
  
  

  function handleSubmit(e) { //função para lidar com o envio do formulário
    e.preventDefault() //previne o comportamento padrão do formulário, que é recarregar a página
    //console.log(e);

    if (!description) return //se description estiver vazio, retorna e não faz nada
    //!description → "description está vazio"
    //!description não → "diferente de description"
    //Se description estiver vazio, executa o return — que aqui não retorna nenhum valor, só interrompe a função. Nada mais abaixo é executado.

    const newItem = { description, quantity, packed: false, id: Date.now() } 
    //Cria um objeto novo com os valores capturados. Date.now() gera um id único baseado no timestamp atual — simples e eficaz para evitar duplicatas.
    //console.log(newItem);

    onAddItems(newItem) //chama a função handleAddItems passando o novo item como argumento

    setDescription("") //limpa o input após o envio do formulário
    setQuantity(1) //reseta o select para 1 após o envio do formulário
  }

    /*
      Tudo que fica fora do return no componente são:

      **Declarações de estado (useState)
      **Funções auxiliares (handleSubmit)
      **Variáveis calculadas
    */


  return (
    <form className="add-form" onSubmit={handleSubmit}> {/* handleSubmit dispara quando o formulário é enviado */}
      <h3> What do you need for your 😍 trip? </h3>
      <select 
        value={quantity} //value={quantity} → o select mostra o que está em quantity
        onChange={(e) => { //quando usuário escolhe um número, onChange dispara
          setQuantity(Number(e.target.value)) //e.target.value captura o número escolhido (como string)
          //Number() converte para número //setQuantity() atualiza o estado
        }}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map(num => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input 
        type="text" 
        placeholder="Item..." 
        value={description}
        onChange={(e) => {
          //console.log(e.target.value, "Input value is empty");
          setDescription(e.target.value) //aqui é string, então não precisa converter para number
        }}
      />
      <button> + Add </button>
  </form>
  );
} 


function PackingList({ items, onDeleteItem, onToggleItem }) {
  const [sortBy, setSortBy] = useState("input") //Estado para armazenar o valor selecionado pelo usuário

  let sortedItems;
  if (sortBy === "input") 
    sortedItems = items;

  if (sortBy === "description") 
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed") 
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
 
  return (
  <div className="list">
    <ul> 
      {sortedItems.map((item) => (
        <Item 
            item={item} 
            onDeleteItem={onDeleteItem} 
            onToggleItem={onToggleItem} 
            key={item.id} />
      ))}
    </ul>

    <div className="actions">
      <select value ={sortBy} onChange={(e) => setSortBy(e.target.value)}>
        <option value="input">Sort by input order</option>
        <option value="description">Sort by description</option>
        <option value="packed">Sort by packed status</option>
      </select>
      <button>Clear list</button>
    </div>

  </div>
  )
}

function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li>
      <input type="checkbox" value={item.packed} onChange={() => onToggleItem(item.id)} />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {" "}
        {item.quantity} {item.description}
        <button onClick={() => onDeleteItem(item.id)}> ❌</button>
      </span>
    </li>
  ) 
}

function Stats({ items }) {
  if (!items.length)
    return  (
    <p className="stats">
    <em>Start adding some items to your packing list 📝🚀</em> {/*//Se não houver itens, exibe uma mensagem*/}
    </p>
  ) 

  const numItems = items.length //Número total de itens na lista
  const numPacked = items.filter(i => i.packed).length //Número de itens marcados como "packed" (empacotados)
  const percentage = Math.round((numPacked / numItems) * 100) //Calcula a porcentagem de itens empacotados em relação ao total

  return (


    <footer className="stats">
      <em>
        {percentage === 100 
        ? "You got everything! Ready to go ✈️" 
        : `💼 You have ${numItems} items on your list, and you already packed ${numPacked} (${percentage}%)`
        } 
      </em>
    </footer>
  )
}




export default App
