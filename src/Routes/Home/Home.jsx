import React from "react";
import Header from "../../Components/Header/Header";
import { Outlet } from "react-router-dom";
import Board from "../../Components/Board/Board";
import MetaForm from "../../Components/MetaForm/MetaForm";
import Footer from "../../Components/Footer/Footer";

const Home = () => {
  return (
    <main>
      <Header />
      <Outlet />
      <MetaForm />
      <Board />
      <Footer />
    </main>
  );
};

export default Home;
