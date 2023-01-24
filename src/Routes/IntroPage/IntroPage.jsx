import AOS from "aos";
import React from "react";

import styled from "styled-components";
import "./aos.css";

export default function IntroPage() {
  const redirectToGoogle = () => {
    window.location.href = "/deck";
    console.log("end");
    console.log("end2");
  };
  return (
    <Wrapper>
      <ProjectBox>
        <button onClick={redirectToGoogle}>프로젝트 소개</button>
      </ProjectBox>
      <TeamBox>팀원 소개</TeamBox>
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
