import styled from "styled-components";

const Span = styled.div`
  height: 70px;
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
  align-items: center;
  margin-bottom: 5px;
`;

function Footer() {
  return (
    <Span>
      <Copyright>© GGanBu.GG. All Rights Reserved.</Copyright>
    </Span>
  );
}
export default Footer;
