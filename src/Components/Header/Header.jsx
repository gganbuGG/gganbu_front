import React from "react";
import styled from "styled-components";

import SearchForm from "../SearchForm/SearchForm";
import HeaderSrc from "../../images/header.jpg";

const Header = () => {
  return (
    <Wrapper>
      <HeaderContent>
        <HeaderTitle>GGanBu.GG</HeaderTitle>
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
  font-size: 80px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: bold;
`;

export default Header;
