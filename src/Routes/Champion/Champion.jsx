import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { getChampion } from "../../api/API_Profile";
import Navbar from "../../Components/Navbar/Navbar";
import ChampionBox from "./ChampionBox";

export default function Champion() {
  return (
    <Wrapper>
      <Navbar />
      <h1 className="mt-48 mb-48 flex items-center justify-center text-7xl">
        Challenger Champion Pick Rate
      </h1>
      <ChampionBox />
    </Wrapper>
  );
}
const Wrapper = styled.div`
  background-color: var(--main-bg-color);
`;
