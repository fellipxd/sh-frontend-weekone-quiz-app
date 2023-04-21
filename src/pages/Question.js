import React, { useContext, useEffect, useState } from "react";
import AppContext from "../state/context";
import ScoreCard from "./ScoreCard";

const Question = () => {
  const {
    increaseScore,
    count,
    setCount,
    updateCount,
    selectedOption,
    setSelectedOption,
    questions,
    setQuestions,
    answerResult,
    setAnswerResult,
    currentQuestionIndex,
    setCurrentQuestionIndex,
  } = useContext(AppContext);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://quipapp.000webhostapp.com/question.php"
      );
      const data = await response.json();
      setQuestions(data);
      setIsLoading(false);
    }
    fetchData();
  }, [setQuestions]);

  const handleOptionSelect = (option) => {
    setSelectedOption(option.text);
    if (option.text === currentQuestion?.answer) {
      setAnswerResult("Correct!");
      increaseScore();
    } else {
      setAnswerResult("Incorrect!");
      // updateCount();
    }

    setTimeout(() => {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setAnswerResult("");
    }, 1000);
  };

  const currentQuestion = questions[currentQuestionIndex];

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (currentQuestionIndex === questions.length) {
    setCount(0)
  }

  return (
    <div>
      {currentQuestionIndex === questions.length || count === 0 ? (
        <ScoreCard />
      ) : (
        <div>
          {currentQuestion && (
            <div>
              <h2>Question {currentQuestion.id}</h2>
              <p>{currentQuestion.question}</p>
              <ul>
                {currentQuestion.options.map((option) => (
                  <li
                    key={option.id}
                    className={selectedOption === option.text ? "selected" : ""}
                    onClick={() => handleOptionSelect(option)}
                  >
                    {option.text}
                  </li>
                ))}
              </ul>
              {answerResult && <p className="answer">{answerResult}</p>}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Question;
