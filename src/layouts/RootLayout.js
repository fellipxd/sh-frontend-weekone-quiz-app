import React, { useState } from "react";
import Header from "../components/Header";
import { Outlet } from "react-router";

const RootLayout = () => {
  const [counter] = useState(60);

  return (
    <>
      <header>
        <Header counter={counter} />
      </header>

      <main>
        <div className="container">
          <Outlet />
        </div>
      </main>
    </>
  );
};

export default RootLayout;
