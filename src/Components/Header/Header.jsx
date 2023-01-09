import React from "react";
import styled from "styled-components";
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import HeaderSrc from "../../images/header.jpg";

const Header = () => {
  return (
    <Wrapper>
      <Navbar />
      <HeaderContent>
        <HeaderTitle>GGanbu.GG</HeaderTitle>
        <Br />
        <SearchForm />
      </HeaderContent>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const Br = styled.br``;
const HeaderContent = styled.div`
  min-height: 60vh;
  background: url(${HeaderSrc}) center/cover no-repeat;
  flex-direction: column;
  align-items: center;
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
