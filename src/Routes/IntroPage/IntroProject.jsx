import React from "react";
import { SectionsContainer, Section } from "react-fullpage";
import { Link } from "react-router-dom";

import styled from "styled-components";
import HeaderSrc1 from "../../images/Background/IntroBackground/FirstPage.jpg";
import HeaderSrc2 from "../../images/Background/IntroBackground/SecondPage.jpg";
import HeaderSrc3 from "../../images/Background/IntroBackground/ThirdPage.png";

export default function IntroProject() {
  let options = {
    anchors: ["sectionOne", "sectionTwo", "sectionThree"],
  };
  return (
    <SectionsContainer {...options}>
      <div>
        <Section>
          <FirstPage>
            <FirstHeaderText>깐부지지에 오신 것을 환영합니다.</FirstHeaderText>
            <FirstPageBody>
              <div>소중한 사람들과 추억을 남겨보세요!</div>
              <div>D-Day를 더 특별하게 만들어 드립니다.</div>
            </FirstPageBody>
          </FirstPage>
        </Section>
        <Section>
          <SecondPage></SecondPage>
        </Section>
        <Section>
          <ThirdPage>
            <CancleButton>
              <Link to="/">❌</Link>
            </CancleButton>
          </ThirdPage>
        </Section>
      </div>
    </SectionsContainer>
  );
}

const FirstPage = styled.div`
  width: 100%;
  height: 100vh;
  background: url(${HeaderSrc1}) center/cover no-repeat;
  z-index: 1000;
  color: white;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
`;

const FirstHeaderText = styled.h1`
  font-size: 48px;
  text-align: center;
  padding-top: 50px;
  padding-bottom: 50px;
`;

const FirstPageBody = styled.div`
  display: flex;
  height: 70vh;
  font-size: 24px;
  font-family: Arial, Helvetica, sans-serif;
  /* justify-content: center; */
  align-items: flex-start;
  flex-direction: column;
`;

const SecondPage = styled.div`
  width: 100%;
  height: 100vh;
  background: url(${HeaderSrc2}) center/cover no-repeat;
  z-index: 1000;
`;
const ThirdPage = styled.div`
  width: 100%;
  height: 100vh;
  background: url(${HeaderSrc3}) center/cover no-repeat;
  z-index: 1000;
`;

const CancleButton = styled.div`
  font-size: 40px;
  display: flex;
  justify-content: flex-end;
`;
