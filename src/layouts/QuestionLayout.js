import React from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { Outlet } from "react-router";
import { NavLink } from "react-router-dom";

const QuestionLayout = () => {
  // const questions = useLoaderData();

  return (
    <div>
      {/* <div className="questions">
        <NavLink to="4">
          <span>{<BsArrowLeftCircleFill className="arrows" />}</span>
        </NavLink>
        <NavLink to="2">
          <span>{<BsArrowRightCircleFill className="arrows" />}</span>
        </NavLink>
      </div> */}
      <Outlet />
    </div>
  );
};

export default QuestionLayout;
