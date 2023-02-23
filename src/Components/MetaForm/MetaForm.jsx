import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { getDeckWinRate } from "../../api/API_Profile";
import { ChampionBorderColor } from "../../utils/ChampionBorderColor";
import ModalMetaForm from "../Modal/ModalMeta";
// import Core from "../Core/Core";

const MetaForm = ({ top }) => {
  const navigate = useNavigate();
  const [info, setInfo] = useState([]);
  const navigateDeck = () => {
    navigate("/deck");
  };
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
    <div class="container">
      <Wrapper>
        <Version>V13.4c(시즌8) 추천 메타</Version>
        {info["data"] &&
          info["data"].slice(0, 5).map((match) => (
            <MetaGroup>
              <MetaGroupContent>
                <MetaGroupDeckBox>
                  <MetaGroupDeck>
                    {/* 덱이름 */}
                    <MetaDeckName>
                      <DeckName>
                        <P>
                          <DeckSpan>
                            {match.traits[0].name}
                            {`  `}
                            {match.core[0].name}
                          </DeckSpan>
                          덱
                        </P>
                      </DeckName>
                      <DeckNameHot>
                        <DeckSpan>❤️Hot</DeckSpan>
                      </DeckNameHot>
                    </MetaDeckName>
                    {/* 덱이름 */}
                    {/* 시너지 */}
                    <MetaDeckTraits>
                      {match.traits.map((e, i) => (
                        <SynergyMain>
                          <Tile bgimg={match.traits[i].bgimg} alt="bg-traits">
                            <Synergy src={match.traits[i].img} alt="traits" />
                          </Tile>
                          <SynergyName>
                            {match.traits[i].name}({match.traits[i].count})
                          </SynergyName>
                        </SynergyMain>
                      ))}
                    </MetaDeckTraits>
                    {/* 시너지 */}
                    {/* 챔피언 */}
                    <MetaDeckChampions>
                      {match.units.map((e, i) => (
                        <BoxChampionMain>
                          {match.core.map((event, j) => (
                            <>
                              {match.core[j].name === match.units[i].name ? (
                                <>
                                  {/* <>
                                    <StyleCore top={-10} />
                                  </> */}
                                  <CoreItems>
                                    {event.items.map((item) => (
                                      <CoreItem src={item.img} />
                                    ))}
                                  </CoreItems>
                                </>
                              ) : (
                                ""
                              )}
                            </>
                          ))}
                          <BoxChampionImgAndItems>
                            <BoxChampionImg>
                              <Champions
                                bdcolor={ChampionBorderColor(
                                  match.units[i].cost
                                )}
                                src={match.units[i].img}
                                alt="Unit"
                              />
                            </BoxChampionImg>
                          </BoxChampionImgAndItems>
                          <ChampionName>{match.units[i].name}</ChampionName>
                        </BoxChampionMain>
                      ))}
                    </MetaDeckChampions>
                    {/* 챔피언 */}

                    <MetaDeckExplain>
                      <Explain>
                        <DeckSpan>
                          <ModalMetaForm />
                        </DeckSpan>
                      </Explain>
                    </MetaDeckExplain>
                  </MetaGroupDeck>
                </MetaGroupDeckBox>
              </MetaGroupContent>
            </MetaGroup>
          ))}
        <Button onClick={navigateDeck}>+더보기</Button>
      </Wrapper>
    </div>
  );
};
const Wrapper = styled.div`
  margin-top: 80px;
  position: relative;
  min-height: 50vh;
  margin-bottom: 50px;
`;

const Version = styled.span`
  color: black;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 150px;
`;

const MetaGroup = styled.div`
  min-height: 100px;
  border-width: 2px;
  border-color: lightgray;
  margin-bottom: 10px;
`;

const MetaGroupContent = styled.div``;

const MetaGroupDeckBox = styled.div``;

const MetaGroupDeck = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 2fr 3fr 1fr;
`;

const MetaDeckName = styled.div`
  display: flex;
  padding: 22px 14px;
  flex-direction: column;
`;

const DeckName = styled.div`
  font-size: 18px;
  font-weight: inherit;
`;

const DeckNameHot = styled.div`
  font-size: 10px;
`;

const P = styled.p``;

const DeckSpan = styled.span``;

const MetaDeckTraits = styled.div`
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  flex-shrink: 0;
  margin: 15px 0px;
`;

const SynergyName = styled.span`
  position: absolute;
  background-color: #000;
  width: 130px;
  color: #fff;
  top: -40px;
  text-align: center;
  padding-top: 3px;
  padding-bottom: 3px;
  border-radius: 5px;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
  transition: 0.5s;
  visibility: hidden;
  &::after {
    content: "";
    position: absolute;
    background-color: #000;
    width: 5px;
    height: 5px;
    transform: rotate(45deg) translateX(-50%);
    bottom: -5px;
    left: 50%;
  }
`;

const SynergyMain = styled.div`
  position: relative;
  display: inline-flex;
  flex-direction: column;
  &:hover ${SynergyName} {
    opacity: 1;
    visibility: visible;
  }
`;

const Tile = styled.div`
  background: url(${(props) => props.bgimg}) center/cover no-repeat;
  width: 26px;
  height: 26px;
  position: relative;
`;

const Synergy = styled.img`
  position: relative;
  top: 18%;
  left: 18%;
  height: 16px;
  width: 16px;
  object-fit: cover;
  object-position: center;
`;

const MetaDeckChampions = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  gap: 4px;
`;

const ChampionName = styled.span`
  position: absolute;
  background-color: #000;
  width: 100px;
  color: #fff;
  top: -15px;
  text-align: center;
  padding-top: 3px;
  padding-bottom: 3px;
  border-radius: 5px;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
  transition: 0.5s;
  visibility: hidden;
  &::after {
    content: "";
    position: absolute;
    background-color: #000;
    width: 5px;
    height: 5px;
    transform: rotate(45deg) translateX(-50%);
    bottom: -5px;
    left: 50%;
  }
`;

const BoxChampionMain = styled.div`
  position: relative;
  display: inline-flex;
  flex-direction: column;
  padding-top: 28px;
  &:hover ${ChampionName} {
    opacity: 1;
    visibility: visible;
  }
`;

const CoreItems = styled.div`
  position: absolute;
  margin-top: 40px;
  z-index: 10;
  display: inline-flex;
`;

const CoreItem = styled.img`
  width: 15px;
  height: 15px;
  flex-direction: row;
`;

const BoxChampionImgAndItems = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const BoxChampionImg = styled.div`
  position: relative;
  display: inline-flex;
  flex-direction: column;
  overflow: hidden;
  height: 45px;
  width: 45px;
`;

const Champions = styled.img`
  position: relative;
  margin-right: 15px;
  height: 65px;
  width: 65px;
  border: 3px solid ${(props) => props.bdcolor};
  border-radius: 10px;
`;
const MetaDeckExplain = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Explain = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px double black;
  border-radius: 12px;
  height: 50%;
  padding: 3px;
  margin-top: 10px;
`;

const Button = styled.button`
  width: 100%;
  align-items: center;
  border: 1px solid black;
`;

export default MetaForm;
