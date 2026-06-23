

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];


function App() { 
  
  return (
    <div className= 'container'>
            <Header />
            <Menu />    
            <Footer />
        </div>
    );
  }
  
  function Header() {
    // const style = {color: "red", fontSize: "48px", TextTransform: "uppercase"}
    const style = {}
    return (
      <header className="header">
            <h1 style={style}>Fast React Pizza Co.</h1>
        </header>
    );
  }
  
  function Menu() {
    return ( 
        <main className="menu">
            <h2>Our Menu</h2>
            [.....]
            <ul className = "pizzas"> 
                {pizzaData.map((pizza) => (
                    <Pizza pizzaObj={pizza} key={pizza.name} />
                ))}
            
            </ul>

            {/*<Pizza 
            name="Pizza Spinaci" 
            ingredients="Tomato, mozarella, spinach, and ricotta cheese" 
            photoName="pizzas/spinaci.jpg" 
            price={10}
            />

            <Pizza 
            name= "Pizza Funghi"
            ingredients="Tomato, mozarella, mushrooms, and onion"
            photoName="pizzas/funghi.jpg"
            price= {12}
            />*/}
        
        </main>
    )
}


function Pizza (props) { 
console.log(props);
  
    return (
        <li className="pizza">
            <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name} />
            <div>   
                <h3> {props.pizzaObj.name}</h3>
                <p> {props.pizzaObj.ingredients} </p>
                <span>{props.pizzaObj.price}</span>
            </div>        
        </li>
    );
}
  
function Footer() {
    const hour = new Date().getHours();
    const openHour = 10;
    const closeHour = 22;
    const isOpen = hour >= openHour && hour <= closeHour;
    //alert(isOpen ? "We're open" : "We'r e closed")

    return (
        <footer className="footer">
            {isOpen && (
                <div className="order">
                    <p>
                        We're currently open from {openHour}:00 to {closeHour}:00.
                    </p>
                    <button className="btn">Order</button>
                </div> 
            )}
        </footer>
    );
    
    
  // return React.createElement("footer", null, "we're currently open");
  
  //É o que o JSX vira por baixo dos panos depois de compilado!
  //  O Vite/Webpack transforma o JSX em createElement automaticamente.
  
  //Ninguém escreve React.createElement manualmente hoje em dia — 
  // o JSX existe exatamente para evitar isso! O professor está mostrando
  //  para você entender o que acontece por baixo do capô. 
 
}





export default App
