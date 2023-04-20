import React from "react";
import { Outlet } from "react-router";

const QuestionLayout = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default QuestionLayout;
