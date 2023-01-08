import React from "react";
import styled from "styled-components";
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";
import HeaderSrc from "../../images/header.jpg";

const Header = () => {
  return (
    <div className="holder">
      <header className="header">
        <Navbar />
        <div className="header-content flex-c flex text-center text-white">
          <HeaderTitle>GGanbu.GG</HeaderTitle>
          <br />
          <SearchForm />
        </div>
      </header>
    </div>
  );
};

const HeaderContent = styled.div`
  min-height: 60vh;
  background: url(${HeaderSrc}) center/cover no-repeat;
  flex-direction: column;
  display: flex;
  text-align: center;
  color: white;
  justify-content: center;
`;

const HeaderTitle = styled.div`
  text-transform: capitalize;
  font-size: 4.2rem;
`;

export default Header;
