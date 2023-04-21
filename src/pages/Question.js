import React, { useContext, useEffect } from "react";
import AppContext from "../state/context";
import ScoreCard from "./ScoreCard";

const Question = () => {
  const {
    increaseScore,
    count,
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

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://quizapp.topdatanig.com/question.php"
      );
      const data = await response.json();
      setQuestions(data);
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
      updateCount(count);
    }

    setTimeout(() => {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setAnswerResult("");
    }, 1000);
  };
  
  const currentQuestion = questions[currentQuestionIndex];
  return (
    <div>
      {currentQuestionIndex === questions.length ? (
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
