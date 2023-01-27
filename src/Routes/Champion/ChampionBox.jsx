import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { getChampion } from "../../api/API_Profile";
import Samira from "../../images/Champions/Samira.jpg";
import ChampionImg from "../../utils/ChampionImg";

export default function Card() {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const result = await getChampion();
        console.log(result);
        setInfo(result);
      } catch (e) {
        console.error(e.message);
      }
    })();
  }, []);
  // 1. name : 챔피언 이름
  // 2. items : 아이템 이름 => 사진으로 변경
  // 3. rarity : 챔피언 코스트(1코: 0, 2코: 1, 3코: 2, 4코: 4, 5코: 6)
  // 4. tier : 몇성인지 (별로 나타냄 1~3개(성))
  // 5. how_many : 빈도수(내림차순으로 정렬할 것.)
  return (
    <div class="container">
      <Wrapper>
        {info.length === 0
          ? "Loading..!!"
          : info["data"].map((match, i) => (
              <MetaGroup>
                <MetaGroupContent>
                  {/*  */}
                  <MetaGroupDeck>
                    {/* 1번 grid - 순위*/}
                    <MetaDeckRanking>
                      <DeckName>
                        <Ranking>{match.how_many}순위</Ranking>
                      </DeckName>
                    </MetaDeckRanking>
                    {/*  2번 grid  챔피언 이름& 챔피언 사진*/}
                    <MetaDeckTraits>
                      <div>{ChampionImg(match.name)}</div>
                      <div>{match.name}</div>
                    </MetaDeckTraits>
                    {/*3번 grid  아이템 사진*/}
                    <MetaDeckChampions>
                      <BoxChampionMain>
                        <BoxChampionImgAndItems>
                          <BoxChampionImg>
                            <BoxChampionImgDetail bdColor="var(--cost4-color)">
                              <img
                                src={Samira}
                                class="h-full w-full object-cover object-center"
                                alt="no img"
                              />
                            </BoxChampionImgDetail>
                          </BoxChampionImg>
                        </BoxChampionImgAndItems>
                        <BoxChampionCoreItems>
                          <BoxChampionCoreItem>
                            <img
                              src="//cdn.lolchess.gg/upload/images/items/LastWhisper_1642015257.png"
                              width="3"
                              height="3"
                              alt=""
                            />
                          </BoxChampionCoreItem>
                          <BoxChampionCoreItem>
                            <img
                              src="//cdn.lolchess.gg/upload/images/items/GiantSlayer_1670462997-giant_slayer.png"
                              width="12"
                              height="12"
                              alt=""
                            />
                          </BoxChampionCoreItem>
                          <BoxChampionCoreItem>
                            <img
                              src="//cdn.lolchess.gg/upload/images/items/InfinityEdge_ljmJbkViyMGC8IKr50os4jC8Ccl1ro2JbqXuvHqT.png"
                              width="12"
                              height="12"
                              alt=""
                            />
                          </BoxChampionCoreItem>
                        </BoxChampionCoreItems>
                      </BoxChampionMain>

                      <BoxChampionMain>
                        <BoxChampionImgAndItems>
                          <BoxChampionImg>
                            <BoxChampionImgDetail>
                              <img
                                src="//cdn.lolchess.gg/upload/images/champions/Galio_1668167832-Galio.jpg"
                                class="h-full w-full object-cover object-center"
                                alt=""
                              />
                            </BoxChampionImgDetail>
                          </BoxChampionImg>
                        </BoxChampionImgAndItems>
                      </BoxChampionMain>

                      <BoxChampionMain>
                        <BoxChampionImgAndItems>
                          <BoxChampionImg>
                            <BoxChampionImgDetail>
                              <img
                                src="//cdn.lolchess.gg/upload/images/champions/Galio_1668167832-Galio.jpg"
                                class="h-full w-full object-cover object-center"
                                alt=""
                              />
                            </BoxChampionImgDetail>
                          </BoxChampionImg>
                        </BoxChampionImgAndItems>
                      </BoxChampionMain>

                      <BoxChampionMain>
                        <BoxChampionImgAndItems>
                          <BoxChampionImg>
                            <BoxChampionImgDetail bdColor="var(--cost4-color)">
                              <img
                                src={Samira}
                                class="h-full w-full object-cover object-center"
                                alt=""
                              />
                            </BoxChampionImgDetail>
                          </BoxChampionImg>
                        </BoxChampionImgAndItems>
                        <BoxChampionCoreItems>
                          <BoxChampionCoreItem>
                            <img
                              src="//cdn.lolchess.gg/upload/images/items/LastWhisper_1642015257.png"
                              width="3"
                              height="3"
                              alt=""
                            />
                          </BoxChampionCoreItem>
                          <BoxChampionCoreItem>
                            <img
                              src="//cdn.lolchess.gg/upload/images/items/GiantSlayer_1670462997-giant_slayer.png"
                              width="12"
                              height="12"
                              alt=""
                            />
                          </BoxChampionCoreItem>
                          <BoxChampionCoreItem>
                            <img
                              src="//cdn.lolchess.gg/upload/images/items/InfinityEdge_ljmJbkViyMGC8IKr50os4jC8Ccl1ro2JbqXuvHqT.png"
                              width="12"
                              height="12"
                              alt=""
                            />
                          </BoxChampionCoreItem>
                        </BoxChampionCoreItems>
                      </BoxChampionMain>
                    </MetaDeckChampions>

                    {/*  */}
                  </MetaGroupDeck>
                </MetaGroupContent>
              </MetaGroup>
            ))}
      </Wrapper>
    </div>
  );
}
const Wrapper = styled.div`
  margin-top: 40px;
  position: relative;
  min-height: 50vh;
`;

const MetaGroup = styled.div`
  height: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
  border-width: 2px;
  border-color: red;
  margin-bottom: 10px;
`;

const MetaGroupContent = styled.div``;

// const MetaGroupDeckBox = styled.div``;

const MetaGroupDeck = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 3fr 3fr;
`;

const MetaDeckRanking = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const MetaDeckTraits = styled.div`
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  flex-shrink: 0;
  gap: 2px;
  margin: 15px 0px;
`;

const DeckName = styled.div`
  font-size: 18px;
  font-weight: inherit;
`;

const Ranking = styled.p`
  margin-left: 20px;
  font-size: 20px;
`;

const MetaDeckChampions = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  gap: 4px;
`;

const BoxChampionMain = styled.div`
  position: relative;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 9px;
`;

const BoxChampionImgAndItems = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
`;

const BoxChampionImg = styled.div`
  position: relative;
  display: inline-flex;
  flex-direction: column;
  overflow: hidden;
`;

const BoxChampionImgDetail = styled.div`
  position: relative;
  display: inline-flex;
  height: 45px;
  width: 45px;
  overflow: hidden;
  border-radius: 8px;
  border-width: 2px;
  border-color: ${(props) => props.bdColor};
`;

const BoxChampionCoreItems = styled.div`
  position: absolute;
  display: inline-flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding-top: 50px;
`;

const BoxChampionCoreItem = styled.div`
  position: relative;

  height: 15px;
  width: 15px;
  overflow: hidden;
`;

const MetaDeckExplain = styled.div``;

const BoxHeaderReinForceDummy = styled.div`
  background-image: url("https://cdn.dak.gg/tft/images2/tft/traits/background/gold.svg");
  width: 26px;
  height: 26px;
  position: relative;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
