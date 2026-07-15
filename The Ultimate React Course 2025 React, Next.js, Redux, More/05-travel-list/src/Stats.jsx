
function Stats({ items }) {
  if (!items.length)
    return  (
    <p className="stats">
    <em>Start adding some items to your packing list 📝🚀</em> {/*//Se não houver itens, exibe uma mensagem*/}
    </p>
  ) 

  //derived state 
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

export default Stats