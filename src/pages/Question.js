import React, { useContext, useEffect } from "react";
import AppContext from "../state/context";
import ScoreCard from "./ScoreCard";

const Question = () => {
<<<<<<< HEAD
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
=======
  const { increaseScore, count, setCount, updateCount, selectedOption, setSelectedOption, questions, setQuestions, answerResult, setAnswerResult, currentQuestionIndex, setCurrentQuestionIndex } = useContext(AppContext);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('http://localhost:4000/questions/');
        const data = await response.json();
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        setQuestions(data);
        console.error('response', data);
      } catch (error) {
        console.error('Error fetching questions:', error);
      }
>>>>>>> d6927db3e24fe83639c20ab4c6ac140d61b0a81c
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
<<<<<<< HEAD
  
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
=======

  if (currentQuestionIndex === questions.length) {
    setCount(0)
  }

  const currentQuestion = questions[currentQuestionIndex];
  return (
    <div>
      {currentQuestionIndex === questions.length || count === 0 ? <ScoreCard /> : <div>
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
            {answerResult && <p className="answer">{answerResult}</p>}
          </div>
        )}
      </div>}
>>>>>>> d6927db3e24fe83639c20ab4c6ac140d61b0a81c
    </div>
  );
};

export default Question;
