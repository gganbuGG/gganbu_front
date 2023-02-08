import styled from "styled-components";
import React from "react";
import HeaderSrc from "../../images/intromain.jpg";
import { Link } from "react-router-dom";

function Modal({ closeModal, closeModalUntilExpires }) {
  return (
    <Container>
      <ModalBackground>
        <Buttons>
          <Button onClick={closeModalUntilExpires}>
            오늘 하루 더 이상 보지 않기
          </Button>
          <Button onClick={closeModal}>닫기</Button>
        </Buttons>
        {/* <IntroPage /> */}
        <Wrapper>
          <ProjectBox>
            <ProjectButton onClick={closeModal}>
              <Link to="/project">프로젝트 소개</Link>
            </ProjectButton>
          </ProjectBox>
          <TeamBox>
            <ProjectButton onClick={closeModal}>
              <Link to="/team">팀원 소개</Link>
            </ProjectButton>
          </TeamBox>
        </Wrapper>
      </ModalBackground>
    </Container>
  );
}

export default Modal;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
`;

const ModalBackground = styled.div`
  background: url(${HeaderSrc}) center/cover no-repeat;
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: var(--main-bg-color);
  z-index: 1000;
`;
const Buttons = styled.div`
  display: flex;
  gap: 10px;
  justify-content: end;
`;

const Button = styled.button`
  border: 2px solid black;
  border-radius: 10px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
`;

const ProjectBox = styled.div`
  margin-top: 20%;
  border: 3px solid white;
  border-radius: 10px;
  padding: 4px;
  font-size: 60px;
  font-weight: bold;
  &:hover {
    transform: scale(1.2);
  }
`;
const ProjectButton = styled.button``;

const TeamBox = styled.div`
  margin-top: 20%;
  border: 3px solid white;
  border-radius: 10px;
  padding: 4px;
  font-size: 60px;
  font-weight: bold;
  &:hover {
    transform: scale(1.2);
  }
`;
