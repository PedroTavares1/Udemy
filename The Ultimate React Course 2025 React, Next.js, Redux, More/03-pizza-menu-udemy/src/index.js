import React from "react"; 
import ReactDOM from "react-dom/client";
import './index.css'; 

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
        <div className="container">
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
    const pizzas = pizzaData; //numero de pizzas é o tamanho do array
    //const pizzas = [];
    const numPizzas = pizzas.length; //quantidade de pizzas

    return ( 
        <main className="menu">
            <h2>Our Menu</h2>

            {numPizzas > 0 ? (
                <ul className = "pizzas"> 
                    {pizzas.map((pizza) => (
                        <Pizza pizzaObj={pizza} key={pizza.name} />
                    ))}
                </ul>
            ) : <p>We're still working on our menu. Please come back later :)</p>}


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


function Pizza ( {pizzaObj : {photoName, name, ingredients, price, soldOut} })  { 
 //conole.log(pizzaObj);
  
    if(soldOut) return null;

    return (
        <li className="pizza">
            <img src={photoName} alt={name} />
            <div>   
                <h3> {name}</h3>
                <p> {ingredients} </p>
                <span>{price}</span>
            </div>        
        </li>
    );
}


function Footer() {
    const hour = new Date().getHours();
    const openHour = 10;
    const closeHour = 22;
    const isOpen = hour >= openHour && hour <= closeHour;
    console.log(isOpen);

    // if (hour >= openHour && hour <= closeHour) alert("We're open"); 
    //else alert("We're closed");       
    //alert(isOpen ? "We're open" : "We'r e closed")

    // if(!isOpen) return (
    //     <p>
    //         We're currently open from {openHour}:00 to {closeHour}:00.
    //     </p>
    // );

    return (
        <footer className="footer">
            {isOpen ?  (
                <Order openHour={openHour} closeHour={closeHour}/>
                ) : (
                <p>
                    We're currently open from {openHour}:00 to {closeHour}:00.
                </p>
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


function Order({ openHour, closeHour }) {
    return (
    <div className="order">
                    <p>
                        We're currently open from {openHour}:00 to {closeHour}:00.
                    </p>
                    <button className="btn">Order</button>
                </div> 
    );
}





//React v18
const root = ReactDOM.createRoot(document.getElementById
("root"));
root.render(  
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

// React before 18
// React.render App />, document.getElementById("root")); 

