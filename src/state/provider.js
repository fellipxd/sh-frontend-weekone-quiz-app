import React, { useState } from "react";
import AppContext from "./context";

const AppProvider = (props) => {
  const [count, setCount] = useState(60);
  const [score, setScore] = useState(0);
  const [initial, setInitial] = useState("");
  const [submit, setSubmit] = useState("");
  const [isCounting, setIsCounting] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [questions, setQuestions] = useState([]);
  const [answerResult, setAnswerResult] = useState("");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const decrementCount = () => {
    setCount(count - 1);
  };
  const increaseScore = () => {
    setScore(score + 10);
  };

<<<<<<< HEAD
  const updateCount = (count) => {
    setCount(count - 5);
  };
=======
  const updateCount = () => {
    setCount(count - 5)
  }

>>>>>>> d6927db3e24fe83639c20ab4c6ac140d61b0a81c

  const handleClick = () => {
    setIsCounting(true);
  };


  if (isCounting && count > 0) {
    setTimeout(decrementCount, 1000);
  }

<<<<<<< HEAD
  if (count === 0) {
    window.location.href = "/score";
  }
=======

>>>>>>> d6927db3e24fe83639c20ab4c6ac140d61b0a81c

  return (
<<<<<<< HEAD
    <AppContext.Provider
      value={{
        score,
        setScore,
        increaseScore,
        count,
        updateCount,
        decrementCount,
        isCounting,
        setIsCounting,
        handleClick,
        selectedOption,
        setSelectedOption,
        questions,
        setQuestions,
        answerResult,
        setAnswerResult,
        currentQuestionIndex,
        setCurrentQuestionIndex,
        initial,
        setInitial,
        submit,
        setSubmit,
      }}
    >
=======
    <AppContext.Provider value={{ score, setScore, increaseScore, count, setCount, updateCount, decrementCount, isCounting, setIsCounting, handleClick, selectedOption, setSelectedOption, questions, setQuestions, answerResult, setAnswerResult, currentQuestionIndex, setCurrentQuestionIndex }}>
>>>>>>> d6927db3e24fe83639c20ab4c6ac140d61b0a81c
      {props.children}
    </AppContext.Provider>
  );
};

export default AppProvider;
