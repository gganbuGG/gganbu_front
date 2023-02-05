import { useState } from "react";
import styled from "styled-components";

function ModalBasic({ setModalOpen }) {
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <Wrapper>
      <Button onClick={closeModal}>❌</Button>
      <p>모달창입니다.</p>
    </Wrapper>
  );
}

// 모달을 노출하는 페이지
function ModalMetaForm() {
  // 모달창 노출 여부 state
  const [modalOpen, setModalOpen] = useState(false);

  // 모달창 노출
  const showModal = () => {
    setModalOpen(true);
  };

  return (
    <div>
      <button onClick={showModal}>자세히 보기</button>
      {modalOpen && <ModalBasic setModalOpen={setModalOpen} />}
    </div>
  );
}

const Wrapper = styled.div`
  width: 800px;
  height: 600px;
  z-index: 999;
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: gray;
  border: 1px solid black;
  border-radius: 8px;
`;

const Button = styled.button`
  position: absolute;
  right: 10px;
  top: 10px;
  font-size: 24px;
`;

export default ModalMetaForm;
