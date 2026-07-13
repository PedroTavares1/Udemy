import { useState } from 'react'
import './App.css'



const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 3, description: "Charger", quantity: 1, packed: false },
];


function App() {

  const [items, setItems] = useState([]) //Estado do array de itens, usado para armazenar os itens adicionados à lista

  function handleAddItems(item) {
    setItems((items) => [...items, item]) //Atualiza o estado items adicionando o novo item ao array existente
  }


  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList items={items} />
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

function Form({ onAddItems }) {

  const [description, setDescription] = useState("") //Estado do <input> controlado, usado para armazenar o valor digitado pelo usuário
  const [quantity, setQuantity] = useState(1) //Estado do <select> controlado, usado para armazenar o valor selecionado pelo usuário
  
  

  function handleSubmit(e) { //função para lidar com o envio do formulário
    e.preventDefault() //previne o comportamento padrão do formulário, que é recarregar a página
    console.log(e);

    if (!description) return //se description estiver vazio, retorna e não faz nada
    //!description → "description está vazio"
    //!description não → "diferente de description"
    //Se description estiver vazio, executa o return — que aqui não retorna nenhum valor, só interrompe a função. Nada mais abaixo é executado.

    const newItem = { description, quantity, packed: false, id: Date.now() } 
    //Cria um objeto novo com os valores capturados. Date.now() gera um id único baseado no timestamp atual — simples e eficaz para evitar duplicatas.
    console.log(newItem);

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


function PackingList({ items }) {
  return (
  <div className="list">
    <ul> 
      {items.map((item) => (
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
