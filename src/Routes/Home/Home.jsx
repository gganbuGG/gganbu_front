import React from "react";
import Header from "../../Components/Header/Header";
import { Outlet } from "react-router-dom";
import Board from "../../Components/Board/Board";
import MetaForm from "../../Components/MetaForm/MetaForm";
import styled from "styled-components";
import Navbar from "../../Components/Navbar/Navbar";

const Home = () => {
  return (
    <Wrapper>
      <Navbar />
      <Header />
      <Outlet />
      <MetaForm />
      <GlobalTop>
        <GlobalSpan>Global Top 10</GlobalSpan>
      </GlobalTop>
      <Board />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: var(--main-bg-color);
`;
const GlobalTop = styled.div`
  display: flex;
  font-size: 32px;
  font-weight: bold;
  max-width: 1200px;
  margin: 0 auto;
  margin-bottom: 10px;
`;

const GlobalSpan = styled.span`
  display: flex;
  margin-left: 20px;
`;

export default Home;
