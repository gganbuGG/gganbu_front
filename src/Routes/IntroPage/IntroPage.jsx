import AOS from "aos";
import React, { useEffect } from "react";

import styled from "styled-components";
import "./aos.css";

export default function IntroPage() {
  const redirectToGoogle = () => {
    window.location.href = "/deck";
  };
  useEffect(() => {
    AOS.init();
  });
  return (
    <Wrapper>
      <ProjectBox data-aos="fade-up" data-aos-anchor-placement="top-bottom">
        <button onClick={redirectToGoogle}>프로젝트 소개</button>
      </ProjectBox>
      <TeamBox data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
        <button>팀원 소개</button>
      </TeamBox>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const ProjectBox = styled.div`
  border: 3px solid white;
  border-radius: 10px;
  padding: 4px;
  font-size: 60px;
  font-weight: bold;
`;

const TeamBox = styled.div`
  border: 3px solid white;
  border-radius: 10px;
  padding: 4px;
  font-size: 60px;
  font-weight: bold;
`;
