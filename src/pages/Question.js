import React, { useContext, useEffect } from "react";
import AppContext from "../state/context";
import ScoreCard from "./ScoreCard";

const Question = () => {
  const { increaseScore, count, updateCount, selectedOption, setSelectedOption, questions, setQuestions, answerResult, setAnswerResult, currentQuestionIndex, setCurrentQuestionIndex } = useContext(AppContext);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('http://localhost:4000/questions');
      const data = await response.json();
      setQuestions(data);
    }
    fetchData();
  }, [setQuestions]);

  const handleOptionSelect = (option) => {
    setSelectedOption(option.text);
    if (option.text === currentQuestion?.answer) {
      setAnswerResult("Success");
      increaseScore()
    } else {
      setAnswerResult("Failure");
      updateCount(count);
    }

    setTimeout(() => {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setAnswerResult("");
    }, 1000);

  };

  console.log("ques", count)
  console.log("quesvvv", currentQuestionIndex)
  const currentQuestion = questions[currentQuestionIndex];
  return (
    <div>
      {currentQuestionIndex === questions.length ? <ScoreCard /> : <div>
        {currentQuestion && (
          <div>
            <h2>Question {currentQuestion.id}</h2>
            <p>{currentQuestion.questionText}</p>
            <ul>
              {currentQuestion.options.map((option) => (
                <li key={option.id} className={selectedOption === option.text ? "selected" : ""}
                  onClick={() => handleOptionSelect(option)}>{option.text}</li>
              ))}
            </ul>
            {answerResult && <p>{answerResult}</p>}
          </div>
        )}
      </div>}
    </div>

  );
};

export default Question;
