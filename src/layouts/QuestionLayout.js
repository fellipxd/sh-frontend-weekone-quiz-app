import React from "react";
import { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { Outlet, useLoaderData } from "react-router";
import { NavLink } from "react-router-dom";

const QuestionLayout = () => {
  const questions = useLoaderData();
  const id = questions.id;

  const [prev, setPrev] = useState(id);
  const [next, setNext] = useState(id);

  const handlePrevClick = () => {
    const newPrev = +prev - 1;
    setPrev(newPrev.toString());
  };

  const handleNextClick = () => {
    const newNext = +next + 1;
    setNext(newNext.toString());
  };

  return (
    <div>
      <Outlet />
    </div>
  );
};

export default QuestionLayout;
