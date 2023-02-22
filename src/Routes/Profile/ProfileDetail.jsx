import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { USERINFO_BASE_URL } from "../../api/API_User";
import SynergyImg from "../../utils/SynergyImg";
import ChampionStatsTierStar from "../../utils/Star";
import 블랙타일 from "../../images/Synergy/Tile/black.svg";
import { ProfileChampionBorderColor } from "../../utils/ChampionBorderColor";

const ProfileDetail = () => {
  const [productList, setProductList] = useState({});
  const [query, setQuery] = useSearchParams();

  const getProduct = async () => {
    let searchQuery = query.get("q") || "";
    console.log("쿼리 값: ", searchQuery);
    let url = `${USERINFO_BASE_URL}${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();

    setProductList(data);
  };

  useEffect(() => {
    getProduct();
  }, [query]);

  return (
    <div>
      {productList.length > 0 &&
        productList.slice(0, 10).map((match, i) => (
          <Main>
            <MainContent>
              <MainBox>
                <ProfileGroup>
                  {/* 1. #등수 */}
                  <Rank>
                    <DeckName>
                      <P>
                        <DeckSpan>#{match.Rank}</DeckSpan>
                      </P>
                    </DeckName>
                  </Rank>
                  {/* #등수 */}
                  {/* 2. 아이콘 이미지 */}
                  <Icons>
                    <img
                      className="h-24 w-24 rounded-full border-2 border-slate-400"
                      src={match.Pet_Img}
                      alt="Pet_Img"
                    />
                  </Icons>
                  {/* 아이콘 이미지 */}

                  {/*3. 시너지 */}
                  <Traits>
                    {Object.keys(match.Traits).map((e, i) => (
                      <SynergyMain>
                        {SynergyImg(
                          Object.keys(match.Traits)[i] +
                            Object.values(match.Traits)[i]
                        )}
                        <SynergyName>
                          {Object.keys(match.Traits)[i]}(
                          {Object.values(match.Traits)[i]})
                        </SynergyName>
                      </SynergyMain>
                    ))}
                  </Traits>
                  {/* 시너지 */}
                  {/* 4. 증강체 */}

                  <BoxAugmentsBody>
                    {Object.keys(match.Augments).map((e, i) => (
                      <AugmentsBody>
                        <BoxSiderAugmentsBodyImg>
                          <DarkTile>
                            <img
                              className="flex h-8 w-8 items-center justify-center rounded-3xl"
                              src={Object.values(match.Augments)[i]}
                              alt="Augments None"
                            />
                          </DarkTile>
                        </BoxSiderAugmentsBodyImg>
                        <AugmentsName>
                          {Object.keys(match.Augments)[i]}
                        </AugmentsName>
                      </AugmentsBody>
                    ))}
                  </BoxAugmentsBody>

                  {/* 증강체 */}

                  {/*5. 챔피언 */}
                  <div className="py-9">
                    {match.Units.map((e, i) => (
                      <BoxChampionMain>
                        <BoxChampionImgAndItems>
                          <div className="relative inline-flex text-xs">
                            {ChampionStatsTierStar(
                              match.Units[i].tier,
                              match.Units[i].rarity
                            )}
                          </div>
                          <BoxChampionImg>
                            <ChampionImgs
                              bdcolor={ProfileChampionBorderColor(
                                match.Units[i].rarity
                              )}
                              src={match.Units[i].champion_image}
                            />
                          </BoxChampionImg>
                        </BoxChampionImgAndItems>
                        <ChampionName>{match.Units[i].Champion}</ChampionName>
                      </BoxChampionMain>
                    ))}
                  </div>
                  {/* 챔피언 */}

                  {/* 6. 같이 플레이한인원 */}
                  <Participants>
                    <Participant>
                      {match.Participant.map((e, i) => (
                        <span>
                          <Link to={`/profile?q=${match.Participant[i]}`}>
                            {match.Participant[i]}
                          </Link>
                        </span>
                      ))}
                    </Participant>
                  </Participants>
                  {/* 같이 플레이한인원 */}
                </ProfileGroup>
              </MainBox>
            </MainContent>
          </Main>
        ))}
    </div>
  );
};

const AugmentsName = styled.span`
  position: absolute;
  background-color: #000;
  width: 130px;
  color: #fff;
  top: -30px;
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

const Main = styled.div`
  display: flex;
  align-items: center;
  min-height: 100px;
  border-width: 2px;
  border-color: lightgray;
  margin-bottom: 10px;
  object-fit: cover;
`;

const MainContent = styled.div``;

const MainBox = styled.div``;

const ProfileGroup = styled.div`
  display: grid;
  grid-template-columns: 3fr 3fr 7fr 2fr 30fr 15fr;
`;

const Rank = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DeckName = styled.div`
  font-size: 18px;
  font-weight: inherit;
`;

const P = styled.p``;

const DeckSpan = styled.span``;

const Traits = styled.div`
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  flex-shrink: 0;
  margin: 15px 5px;
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

const ChampionName = styled.span`
  position: absolute;
  background-color: #000;
  width: 100px;
  color: #fff;
  top: -30px;
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
  display: inline-block;
  flex-direction: column;
  margin-left: 8px;
  &:hover ${ChampionName} {
    opacity: 1;
    visibility: visible;
  }
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

const ChampionImgs = styled.img`
  position: relative;
  margin-right: 15px;
  height: 65px;
  width: 65px;
  border: 3px solid ${(props) => props.bdcolor};
  border-radius: 10px;
`;

const BoxAugmentsBody = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2px;
  gap: 1px;
  /* justify-content: flex-start; */
`;

const AugmentsBody = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  &:hover ${AugmentsName} {
    opacity: 1;
    visibility: visible;
  }
`;

const BoxSiderAugmentsBodyImg = styled.div`
  /* display: inline-flex; */

  position: relative;
  width: 35px;
  height: 35px;
`;

const DarkTile = styled.div`
  background: url(${블랙타일}) center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
  position: relative;
`;

const Participants = styled.div`
  margin-top: 10px;
  text-align: center;
  align-items: center;
  justify-content: center;
`;

const Participant = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-rows: repeat(4, minmax(0, 1fr));
  gap: 12px;
  font-size: 10px;
  font-weight: bolder;
`;
export default ProfileDetail;
