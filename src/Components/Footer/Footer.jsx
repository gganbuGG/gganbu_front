import styled from "styled-components";

function Footer() {
  return (
    <Span>
      <Copyright>© GGanBu.GG. All Rights Reserved.</Copyright>
    </Span>
  );
}

const Span = styled.div`
  position: relative;
  transform: translateY(0%);
  padding: 10px 150px;

  font-size: 14px;
  background-color: #2f2c2c;
  text-align: left;
  color: white;
`;
const Copyright = styled.div`
  display: flex;
  margin: 20px 0px;
  align-items: center;
`;
export default Footer;
