import React, { useState } from "react";
import AppContext from "./context";

const AppProvider = (props) => {
  const [count, setCount] = useState(60);
  const [isCounting, setIsCounting] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [questions, setQuestions] = useState([]);
  const [answerResult, setAnswerResult] = useState("");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const decrementCount = () => {
    setCount(count - 1);
  };

  const updateCount = (count) => {
    setCount(count - 5)
  }


  const handleClick = () => {
    setIsCounting(true);
  };

  if (isCounting && count > 0) {
    setTimeout(decrementCount, 1000);
  }

  if (count === 0) {
    window.location.href = '/score';
  }



  return (
    <AppContext.Provider value={{ count, updateCount, decrementCount, isCounting, setIsCounting, handleClick, selectedOption, setSelectedOption, questions, setQuestions, answerResult, setAnswerResult, currentQuestionIndex, setCurrentQuestionIndex }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppProvider;
