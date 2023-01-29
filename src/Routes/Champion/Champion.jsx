import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { getChampion } from "../../api/API_Profile";
import Navbar from "../../Components/Navbar/Navbar";
import ChampionBox from "./ChampionBox";
import HeaderSrc from "../../images/championHeader.jpg";

export default function Champion() {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const result = await getChampion();
        console.log(result);
        setInfo(result);
      } catch (e) {
        console.error(e.message);
      }
    })();
  }, []);

  return (
    <Wrapper>
      <Navbar />
      <DeckHeader className="container">
        <DeckHeaderText>
          <DeckHeaderH2>Challenger Champion Pick Rate</DeckHeaderH2>
          <DeckHeaderP>최종 업데이트: {info["updated_time"]}</DeckHeaderP>
        </DeckHeaderText>
      </DeckHeader>

      <ChampionBox />
    </Wrapper>
  );
}
const Wrapper = styled.div`
  --tw-bg-opacity: 1;
  background-color: rgb(34 34 34 / var(--tw-bg-opacity));
`;
const DeckHeader = styled.div`
  min-height: 20vh;
  margin-bottom: 20px;
  background: url(${HeaderSrc}) center/cover no-repeat;
  display: flex;
  flex-direction: column;
`;

const DeckHeaderText = styled.div`
  position: relative;
  display: flex;
  height: 230px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const DeckHeaderH2 = styled.h2`
  margin-bottom: 16px;
  font-size: 32px;
  font-weight: 700;
  line-height: 1;
  --tw-text-opacity: 1;
  color: rgb(202 147 114 / var(--tw-text-opacity));
`;

const DeckHeaderP = styled.p`
  font-size: 12px;
  line-height: 130%;
  --tw-text-opacity: 1;
  color: rgb(214 214 214 / var(--tw-text-opacity));
`;
