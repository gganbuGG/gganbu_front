import styled from "styled-components";
import React from "react";
import IntroPage from "../../Routes/IntroPage/IntroPage";

function Modal({ closeModal, closeModalUntilExpires }) {
  return (
    <Container>
      <ModalBackground />
      <ModalContainer>
        <ModalContent>
          {/* <IntroPage /> */}
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione
          labore sint impedit, optio mollitia quae soluta possimus itaque
          obcaecati unde expedita laudantium ducimus distinctio quasi
          rerumddddddddddddddddddddddddddddd molestiae velit, quibusdam cum.
        </ModalContent>
        <ModalCloseWrapper>
          <p onClick={closeModalUntilExpires}>오늘 하루 더 이상 보지 않기</p>
          <p onClick={closeModal}>닫기</p>
        </ModalCloseWrapper>
      </ModalContainer>
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
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 1000;
`;

const ModalContainer = styled.div`
  z-index: 1001;
`;

const ModalContent = styled.div`
  width: 100%;
  background-color: #fff;
`;

const ModalCloseWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    cursor: pointer;
  }
`;
