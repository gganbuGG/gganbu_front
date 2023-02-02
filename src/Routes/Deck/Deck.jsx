import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getDeckWinRate } from "../../api/API_Profile";
import Navbar from "../../Components/Navbar/Navbar";
import AvgPlace from "./AvgPlaceBox";
import WindefenceRate from "./WindefencerateBox";
import WinRate from "./WinRateBox";

const Deck = () => {
  const [info, setInfo] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const result = await getDeckWinRate();
        setInfo(result);
      } catch (e) {
        console.error(e.message);
      }
    })();
  }, []);
  return (
    <body>
      <Navbar />
      <DeckMain>
        <main class="container">
          <DeckHeader>
            <DeckHeaderText>
              <DeckHeaderTitle>덱 개인 통계</DeckHeaderTitle>
              <DeckHeaderUpdatedTime>
                최종 업데이트: {info["updated_time"]}
              </DeckHeaderUpdatedTime>
            </DeckHeaderText>
          </DeckHeader>
          <WinRate />
          <WindefenceRate />
          <AvgPlace />
        </main>
      </DeckMain>
    </body>
  );
};

const DeckMain = styled.div`
  position: relative;
  min-height: 150vh;
  width: 100%;
  --tw-bg-opacity: 1;
  background-color: rgb(34 34 34 / var(--tw-bg-opacity));
  padding-bottom: 80px;
`;
const DeckHeader = styled.div`
  min-height: 20vh;
  margin-bottom: 20px;
  background: url("https://cdn.dak.gg/tft/images2/tft/bg/meta-stats.jpeg?20221208")
    center/cover no-repeat;
  display: flex;
  flex-direction: column;
  padding: 0 12px;
`;

const DeckHeaderText = styled.div`
  position: relative;
  display: flex;
  height: 230px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const DeckHeaderTitle = styled.h2`
  margin-bottom: 16px;
  font-size: 24px;
  font-weight: 700;
  line-height: 1;
  --tw-text-opacity: 1;
  color: rgb(202 147 114 / var(--tw-text-opacity));
`;

const DeckHeaderUpdatedTime = styled.p`
  font-size: 12px;
  line-height: 130%;
  --tw-text-opacity: 1;
  color: rgb(214 214 214 / var(--tw-text-opacity));
`;

// const CoreChampionMain = styled.div`
//   position: absolute;
//   display: flex;
//   top: 0px;
//   left: 50%;
//   z-index: 20;
//   margin-top: 20px;
//   --tw-translate-x: -50%;
//   transform: translate(var(--tw-translate-x), var(--tw-translate-y))
//     rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y))
//     scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
// `;

// const CoreChampionMainDiv = styled.div`
//   height: 18px;
//   width: 40px;
//   display: inline-flex;
//   align-items: center;
//   justify-content: center;
//   border-radius: 4px;
//   background-color: orange;
//   padding: 2px;
//   text-align: center;
// `;

export default Deck;
