import './App.css';
import questions from './api/multipleChoice.json';
import Question from "./Question.jsx"
import { useState } from "react";

function App() {

  const fetchData = questions.options;
  const totalQuestions = fetchData.length;

  const [questionId, setQuestionId] = useState(1);

  const display = fetchData.find(i => i.questionID === questionId)

  function correctAnswers() {
    let foo = []
    for (var i = 0; i < totalQuestions; i++) {
      foo.push(fetchData[i].correctAnswerID)
    }
    return foo
  }

  function onNext() {
    setQuestionId(questionId + 1)
  }

  function onPrev() {
    setQuestionId(questionId - 1)
  }

  // console.log(correctAnswers())
  // console.log(questionFunc)
  //console.log(Question.handleScore())
  return (
    <div className="App">
      <h1> Welcome to a random quiz </h1>
      <div className="Question">
        <Question questionId={display.questionID} question={display.question} subQuestion={display.subQuestion} answers={display.answers} correctAnswers={correctAnswers} totalQ={totalQuestions} />
      </div>
      <button onClick={() => onPrev()} disabled={questionId === 1} className="quiz-buttons">Prev</button>
      <button onClick={() => onNext()} disabled={questionId === totalQuestions} className="quiz-buttons">Next</button>
    </div>
  );
}

export default App;
