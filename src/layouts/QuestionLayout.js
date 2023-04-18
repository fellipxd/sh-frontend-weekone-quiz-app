import React from "react";
import { Outlet } from "react-router";

const QuestionLayout = () => {
  return (
    <div>
      <h2>Questions</h2>
      
      <Outlet />
    </div>
  );
};

export default QuestionLayout;
