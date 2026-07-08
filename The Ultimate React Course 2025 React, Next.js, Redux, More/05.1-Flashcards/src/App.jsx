import { useState } from 'react'
import './App.css'

 
const questions = [
  {
    id: 3457,
    question: "What language is React based on?",
    answer: "JavaScript"
  },
  {
    id: 7336,
    question: "What are the building blocks of React apps?",
    answer: "Components"
  },
  {
    id: 8832,
    question: "What's the name of the syntax we use to describe a UI in React?",
    answer: "JSX"
  },
  {
    id: 1297,
    question: "How to pass data from parent to child components?",
    answer: "Props"
  },
  {
    id: 9103,
    question: "How to give components memory?",
    answer: "useState hook"
  },
  {
    id: 2002,
    question:
      "What do we call an input element that is completely synchronised with state?",
    answer: "Controlled element"
  }
];

function App() {
  return (
    <div>
      <FlashCards />
    </div>
  );
}

function FlashCards() {
  
  
  return <div className="flashcards">
    {questions.map((question) => {
      return <FlashCard key={question.id} question={question} />;
    })}
  </div>;
}


function FlashCard({ question }) {
  const [showAnswer, setShowAnswer] = useState(false);

  function handleClick() {
    setShowAnswer(!showAnswer);
  }
  
  return (
    <div className={`flashcard ${showAnswer ? "selected" : ""}`} onClick={handleClick}>
         <p>{showAnswer ? question.answer : question.question}</p>   
    </div>
  );
  /*
  Errado: 
    <div className="flashcard" onClick={handleClick}
         className={showAnswer ? "selected" : ""}
      >
    </div>
  */
}


{/* 
 *** VERSÃO DO PROFESSOR ***
 
 // A diferença central: na sua versão cada cartão guarda seu próprio estado
 //  — eles são independentes e não se "enxergam". Na versão do professor,
 //  o estado fica no pai (FlashCards) e ele decide qual cartão está ativo
 //  — os filhos apenas recebem essa informação via props.

  function FlashCards() {
  const [selectedId, setSelectedId] = useState(null);

  function handleClick(id) {
    setSelectedId(id !== selectedId ? id : null);
  }

  return (
    <div className="flashcards">
      {questions.map((question) => (
        <div
          key={question.id}
          onClick={() => handleClick(question.id)}
          className={question.id === selectedId ? "selected" : ""}
        >
          <p>
            {question.id === selectedId ? question.answer : question.question}
          </p>
        </div>
      ))}
    </div>
  );
}
*/}
export default App
