import { useEffect, useState } from "react";
import styled from "styled-components";
import { getDeckWinRate } from "../../api/API_Profile";
import HeaderSrc from "../../images/newjeans.jpg";

function ModalBasic({ setModalOpen }) {
  const closeModal = () => {
    setModalOpen(false);
  };
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
    <Wrapper>
      <ModalBackground>
        <Button onClick={closeModal}>❌</Button>
        <ModalHeader>뉴진스 하입보이요~</ModalHeader>
      </ModalBackground>
    </Wrapper>
  );
}

function ModalMetaForm() {
  const [modalOpen, setModalOpen] = useState(false);

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
  width: 620px;
  height: 750px;
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

const ModalBackground = styled.div`
  background: url(${HeaderSrc}) center/cover no-repeat;
  width: 620px;
  height: 750px;
  z-index: 0;
`;

const ModalHeader = styled.div`
  font-size: 32px;
  font-weight: bold;
  color: red;
  display: flex;
  text-align: center;
  justify-content: center;
`;

export default ModalMetaForm;
