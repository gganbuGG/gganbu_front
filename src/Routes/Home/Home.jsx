import React from "react";
import Header from "../../Components/Header/Header";
import { Outlet } from "react-router-dom";
import Board from "../../Components/Board/Board";
import MetaForm from "../../Components/MetaForm/MetaForm";

const Home = () => {
  return (
    <main>
      <Header />
      <Outlet />
      <MetaForm />
      <div>
        <div className="container text-left text-5xl font-bold">
          <span>글로벌 TOP 10</span>
        </div>
        <Board />
      </div>
    </main>
  );
};

export default Home;
