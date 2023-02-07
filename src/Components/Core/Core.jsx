import styled from "styled-components";

function Core() {
  return (
    <Wrapper>
      <CoreHeader>
        <CoreSpan>CORE</CoreSpan>
      </CoreHeader>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: absolute;
  top: 0px;
  left: 50%;
  z-index: 20;
  display: flex;
  transform: translateX(-50%);
`;

const CoreHeader = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  background-color: orange;
  padding: 2px;
  text-align: center;
  @media (min-width: 1024px) {
    width: 38px;
    height: 18px;
  }
`;

const CoreSpan = styled.strong`
  font-size: 9px;
  font-weight: bold;
  line-height: 1;
  color: white;
  @media (min-width: 1024px) {
    font-size: 11px;
  }
`;

export default Core;
