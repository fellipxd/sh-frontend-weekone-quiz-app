import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router";

const RootLayout = () => {
  return (
    <>
      <header>
        <Header />
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
