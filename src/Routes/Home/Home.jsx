import React from "react";
import Header from "../../Components/Header/Header";
import { Outlet } from "react-router-dom";
import Board from "../../Components/Board/Board";
import MetaForm from "../../Components/MetaForm/MetaForm";
import styled from "styled-components";

const Home = () => {
  return (
    <Wrapper>
      <Header />
      <Outlet />
      <MetaForm />
      <div className=" container text-5xl font-bold">
        <span>글로벌 Top 10</span>
      </div>
      <Board />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: var(--main-bg-color);
`;

export default Home;
