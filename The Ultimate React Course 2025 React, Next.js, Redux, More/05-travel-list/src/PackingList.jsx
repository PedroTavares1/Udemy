import { useState } from 'react'
import Item from './Item'


function PackingList({ items, onDeleteItem, onToggleItem, onClearList }) {
  const [sortBy, setSortBy] = useState("input") //Estado para armazenar o valor selecionado pelo usuário

  let sortedItems;
  if (sortBy === "input") //Se o usuário escolher "input", não faz nada, mantém a ordem original
    sortedItems = items;

  if (sortBy === "description") //Se o usuário escolher "description", ordena os itens por descrição
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed") //Se o usuário escolher "packed", ordena os itens por status
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
      <button onClick={() => onClearList()}>Clear list</button>
      {/* <button onClick={onClearList}>Clear list</button> 
      //Outra forma de chamar a função onClearList, sem precisar criar uma arrow function.
      // Mas nesse caso, não é possível passar argumentos para a função. */} 
    </div>

  </div>
  )
}

export default PackingList