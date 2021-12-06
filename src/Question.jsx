import "./Question.css";
import { useState } from "react";

export default function Question({questionId, question, subQuestion, answers, correctAnswer }) {

  const [playerAnswers, setPlayerAnswers] = useState([])

  const [isClicked, setIsClicked] = useState(false)
  const [isVisited, setIsVisted] = useState([1])

  function handleOnClick(aId) {
     // setIsVisted(true)
     //setIsClicked(true)
     let copy = [...playerAnswers]
      if(!copy.includes(questionId)) {
          
      }
      setPlayerAnswers(copy)
      console.log(playerAnswers)
  };

//   const handleNotVisited = (qid) => {
//       setIsClicked(false)
//       let copy = [...isVisited]
//       copy.push(qid)
//       setIsVisted(copy)
//   }


//   function storePlayerAnswers(clickedId) {
//       let copy = [...playerAnswers]
//       if(!isClicked) {
//           copy.push([questionId, clickedId])
//       } 
//       setPlayerAnswers(copy)
//       console.log(playerAnswers)
//   }

  return (
    <div className="question">
      <h3>Category: {question}</h3>
      {subQuestion}
      
      <div className="answers">
        {answers.map((item) => (
          <div key={item.id}>
            <button className="answer-button" onClick={() => handleOnClick(item.id)} disabled={isClicked}>{item.answer}</button>
          </div>
        ))}
      </div>
    </div>
  );
}
