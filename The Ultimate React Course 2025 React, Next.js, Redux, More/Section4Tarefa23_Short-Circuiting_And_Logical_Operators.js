const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

// Descructuring objects and arrays

const book = getBook(2);

//const title = book.title;
//const author = book.author;

const { title, author, pages, publicationDate, genres, hasMovieAdaptation } = book; // Destruturação de objetos: 
// extrai as propriedades 'title' e 'author' do objeto 'book' 
// e as atribui a variáveis com os mesmos nomes.

console.log(author, title, genres);

//const primaryGenre = genres[0]; // Acessando o primeiro gênero do array 'genres'
//  usando indexação
//const secondaryGenre = genres[1]; // Acessando o segundo gênero do array 'genres'
// usando indexação

const [primaryGenre, secondaryGenre, ...restGenres] = genres; // Destruturação de arrays: 
// extrai os elementos do array 'genres' e os atribui a variáveis 
// 'primary' e 'secondary' respectivamente.

console.log(primaryGenre, secondaryGenre, restGenres); // 'restGenres' 
// contém o restante dos gêneros após os dois primeiros.

const newGenres = [...genres, "epic fantasy"]; // Usando o operador spread para
//  criar um novo array de gêneros

const updatedBook = { 
  ...book, // Usando o operador spread para criar um novo objeto 'updatedBook'
  // Adding a new property 'movieAdaptation' with the value "2021-12-19"
  movieAdaptation: "2021-12-19",

  //Overwring an existing property 'pages' with a new value
  pages: 1210,
}; 

console.log(updatedBook);

const summary = `${title}, a ${pages}-page long book, was written by ${author} and published in ${
  publicationDate.split("-")[0]
}. The book has ${hasMovieAdaptation ? 'been' : 'not been'} adapted as a movie.`

summary; 

const pagesRange = pages > 1000 ? 'over a thousand pages' : 'less than 1000 pages'; 
// Exemplo de operador ternário: avalia a condição 'pages > 1000' e retorna 
// 'over a thousand pages' se for verdadeira, // ou 'less than 1000 pages' se for falsa.

pagesRange;

console.log(`The Book has ${pagesRange} pages.`); 
// Usando template literals para incluir a variável 'pagesRange' em uma string.

// function getYear(str) {
//   return str.split("-")[0];
// }


//(str) => str.split("-")[0] 
// Arrow function: uma forma mais concisa de escrever funções anônimas.

// const getYear = (str) => {
//    return str.split("-")[0]
//};
// Arrow function: uma forma mais concisa de escrever funções anônimas.



//       && → "se A for verdadeiro, então B" — útil para condicionar exibição
//       || → "A ou, se não tiver, B" — útil para valores padrão



const getYear = (str) => str.split("-")[0]

console.log(getYear(publicationDate));

console.log(true && "some value"); // Retorna  "some value" porque o primeiro operando é true
//Na prática você usaria uma condição em vez de true fixo:

console.log(false && "some value");// Retorna false porque o primeiro operando é false
//Na prática você usaria uma condição em vez de false fixo:

console.log(hasMovieAdaptation && "This book has a movie adaptation."); 
// Retorna "This book has a movie adaptation."


// falsy: 0, "", null, undefined, NaN, false
console.log('jonas' && 'Some string'); 
// Retorna "Some string" porque ambos os operandos são truthy
console.log(0 && 'Some string');
// Retorna 0 porque o primeiro operando é falsy


console.log(true || 'Some string');
// Retorna true porque o primeiro operando é truthy
console.log(false || 'Some string');
// Retorna "Some string" porque o primeiro operando é falsy


console.log(book.translations.spanish);


const spanishTranslation = book.translations.spanish || "No Spanish translation";
// Retorna "No Spanish translation" porque book.translations.spanish é falsy (uma string vazia)

console.log(spanishTranslation);

console.log(book.reviews.librarything.reviewsCount);
const countWrong = book.reviews.librarything.reviewsCount || "No data";
countWrong; // Retorna 0, que é falsy, então o resultado é "No data"

const count = book.reviews.librarything.reviewsCount ?? "No data";
count; 
// Retorna 0, porque o operador de coalescência nula (??) só considera null e undefined como falsy, 
// e não 0 ou outras falsy values.

