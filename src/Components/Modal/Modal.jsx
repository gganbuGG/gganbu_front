import styled from "styled-components";
import React from "react";
import IntroPage from "../../Routes/IntroPage/IntroPage";
import HeaderSrc from "../../images/intro.jpg";

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
        <IntroPage />
        {/* <span>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione
          labore sint impedit, optio mollitia quae soluta possimus itaque
          obcaecati unde expedita laudantium ducimus distinctio quasi
          rerumddddddddddddddddddddddddddddd molestiae velit, quibusdam cum.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione
        </span> */}
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
