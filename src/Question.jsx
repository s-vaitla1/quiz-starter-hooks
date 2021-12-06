import "./Question.css";
import { useState } from "react";

export default function Question({questionId, question, subQuestion, answers, correctAnswers, totalQ}) {
    
  const [playerAnswers, setPlayerAnswers] = useState([{ qId: " ", userAnswer: " "},]);
  const [showResults, setShowResults] = useState(false);

  const questions = [];
  function handleOnClick(id) {
    let copy = [...playerAnswers];

    if (!questions.includes(questionId)) {
      questions.push(questionId);
      copy.push({ qId: questionId, userAnswer: id });
      setPlayerAnswers(copy);
    }

    let uniqueCopy = copy.filter((i) => i.qId !== questionId);
    uniqueCopy.push({ qId: questionId, userAnswer: id });
    setPlayerAnswers(uniqueCopy);
  }

  function finalPlayerAnswers() {
    let playerAnswerValues = [];
    for (var i = 1; i < playerAnswers.length; i++) {
      playerAnswerValues.push(playerAnswers[i].userAnswer);
    }
    return playerAnswerValues;
  }

  function handleScore() {
    var score = 0;
    if (questionId === 5) {
      for (var i = 0; i < totalQ; i++) {
        console.log(
          finalPlayerAnswers()[i] == correctAnswers()[i],
          "is it true"
        );
        if (finalPlayerAnswers()[i] == correctAnswers()[i]) {
          score++;
        }
      }
    }
    return `You scored ${score} out of ${totalQ}`;
  }

  const displayScore = handleScore();
  return (
    <div className="question">
      {!showResults ? (
        <section>
        <p> Question {questionId} of {totalQ} </p>
          <h3>Category: {question}</h3>
          {subQuestion}
          <div className="answers">
            {answers.map((item) => (
              <div key={item.id}>
                <button className="answer-button" onClick={() => handleOnClick(item.id)}>
                  {item.answer}
                </button>
              </div>
            ))}
            {questionId === totalQ ? (
              <button onClick={() => setShowResults(true)}>Submit</button>
            ) : null}
          </div>
        </section>
      ) : (
        displayScore
      )}
    </div>
  );
}
