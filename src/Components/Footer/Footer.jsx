import styled from "styled-components";

const Span = styled.div`
  position: relative;
  transform: translateY(-100%);
  padding: 0px 150px;
  font-size: 14px;
  background-color: gray;
  text-align: left;
`;
const Copyright = styled.div`
  float: left;
  margin-bottom: 5px;
`;
const Text = styled.div`
  float: left;
  align-items: center;
`;

function Footer() {
  return (
    <Span>
      <Copyright>
        © LoLCHESS.GG. All Rights Reserved. <a href="#">TFT@LoLCHESS.GG</a>
      </Copyright>
      <Text>
        lolchess.gg is hosted by PlayXP Inc. lolchess.gg isn’t endorsed by Riot
        Games and doesn’t reflect the views or opinions of Riot Games or anyone
        officially involved in producing or managing League of Legends. League
        of Legends and Riot Games are trademarks or registered trademarks of
        Riot Games, Inc. League of Legends © Riot Games, Inc.
      </Text>
    </Span>
  );
}
export default Footer;
