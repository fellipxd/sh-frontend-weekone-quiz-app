import React, { useState } from "react";
import AppContext from "./context";

const AppProvider = (props) => {
  const [count, setCount] = useState(60);
  const [score, setScore] = useState(0)
  const [isCounting, setIsCounting] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [questions, setQuestions] = useState([]);
  const [answerResult, setAnswerResult] = useState("");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const decrementCount = () => {
    setCount(count - 1);
  };
  const increaseScore = () => {
    setScore(score + 10)
  }

  const updateCount = () => {
    setCount(count - 5)
  }


  const handleClick = () => {
    setIsCounting(true);
  };


  if (isCounting && count > 0) {
    setTimeout(decrementCount, 1000);
  }





  return (
    <AppContext.Provider value={{ score, setScore, increaseScore, count, setCount, updateCount, decrementCount, isCounting, setIsCounting, handleClick, selectedOption, setSelectedOption, questions, setQuestions, answerResult, setAnswerResult, currentQuestionIndex, setCurrentQuestionIndex }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppProvider;
