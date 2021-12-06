import logo from './logo.svg';
import './App.css';
import questions from './api/multipleChoice.json';
import Question from "./Question.jsx"
import { useState } from "react";

function App() {

  const fetchData = questions.options;
  const totalQuestions = fetchData.length;

  const [questionId, setQuestionId] = useState(1);
  const correctAnswers = [];

  const display = fetchData.find(i => i.questionID === questionId)

  function storeCorrectAnswers() {
    for (var i = 0; i < totalQuestions; i++) {
      correctAnswers.push([fetchData[i].correctAnswerID])
    }
  }

  function onNext() {
    setQuestionId(questionId + 1)
  }

  function onPrev() {
    setQuestionId(questionId - 1)
  }

  

  return (
    <div className="App">
      <h1> Welcome to a random quiz </h1>
      <p> Question {display.questionID} of {totalQuestions} </p>
      <div className="Question">
        <Question questionId={display.questionID} question={display.question} subQuestion={display.subQuestion} answers={display.answers} correctAnswer={storeCorrectAnswers} />
      </div>
      <button onClick={() => onPrev()} disabled={questionId === 1} className="quiz-buttons">Prev</button>
      <button onClick={() => onNext()} disabled={questionId === totalQuestions + 1} className="quiz-buttons">Next</button>
      {questionId === 5 ? <button>Submit</button> : null}
    </div>
  );
}

export default App;
