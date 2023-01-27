import { useEffect, useState } from "react";
import styled from "styled-components";
import { getDeck } from "../../api/API_Profile";
import Samira from "../../images/Champions/Samira.jpg";

const MetaForm = () => {
  const [info, setInfo] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const result = await getDeck();
        setInfo(result);
      } catch (e) {
        console.error(e.message);
      }
    })();
  }, []);
  return (
    <div class="container">
      <Wrapper>
        <Version>V12.23b(시즌8) 추천 메타</Version>
        {info?.map((match) => (
          <MetaGroup>
            <MetaGroupContent>
              <MetaGroupDeckBox1>
                <MetaGroupDeck>
                  <MetaDeckName>
                    <DeckName>
                      <span>선의 조이{match.name}</span>
                    </DeckName>
                    <DeckNameHot>
                      <span>❤️Hot</span>
                    </DeckNameHot>
                  </MetaDeckName>
                  {/*챔피언, 시너지등과 갯수를 받아서 적용하자.*/}
                  <MetaDeckTraits>
                    <BoxHeaderReinForceDummy>
                      <img
                        src="//cdn.lolchess.gg/upload/images/traits/Arsenal_black_1668169947-Arsenal.svg"
                        alt=""
                        class="absolute top-1/2 left-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 object-cover object-center"
                      />
                    </BoxHeaderReinForceDummy>
                    <BoxHeaderReinForceDummy>
                      <img
                        src="//cdn.lolchess.gg/upload/images/traits/Arsenal_black_1668169947-Arsenal.svg"
                        alt=""
                        class="absolute top-1/2 left-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 object-cover object-center"
                      />
                    </BoxHeaderReinForceDummy>
                    <BoxHeaderReinForceDummy>
                      <img
                        src="//cdn.lolchess.gg/upload/images/traits/Arsenal_black_1668169947-Arsenal.svg"
                        alt=""
                        class="absolute top-1/2 left-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 object-cover object-center"
                      />
                    </BoxHeaderReinForceDummy>
                    <BoxHeaderReinForceDummy>
                      <img
                        src="//cdn.lolchess.gg/upload/images/traits/Arsenal_black_1668169947-Arsenal.svg"
                        alt=""
                        class="absolute top-1/2 left-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 object-cover object-center"
                      />
                    </BoxHeaderReinForceDummy>
                    <BoxHeaderReinForceDummy>
                      <img
                        src="//cdn.lolchess.gg/upload/images/traits/Arsenal_black_1668169947-Arsenal.svg"
                        alt=""
                        class="absolute top-1/2 left-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 object-cover object-center"
                      />
                    </BoxHeaderReinForceDummy>
                    <BoxHeaderReinForceDummy>
                      <img
                        src="//cdn.lolchess.gg/upload/images/traits/Arsenal_black_1668169947-Arsenal.svg"
                        alt=""
                        class="absolute top-1/2 left-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 object-cover object-center"
                      />
                    </BoxHeaderReinForceDummy>
                    <BoxHeaderReinForceDummy>
                      <img
                        src="//cdn.lolchess.gg/upload/images/traits/Arsenal_black_1668169947-Arsenal.svg"
                        alt=""
                        class="absolute top-1/2 left-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 object-cover object-center"
                      />
                    </BoxHeaderReinForceDummy>
                    <BoxHeaderReinForceDummy>
                      <img
                        src="//cdn.lolchess.gg/upload/images/traits/Arsenal_black_1668169947-Arsenal.svg"
                        alt=""
                        class="absolute top-1/2 left-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 object-cover object-center"
                      />
                    </BoxHeaderReinForceDummy>
                  </MetaDeckTraits>
                  {/*  */}
                  <MetaDeckChampions>
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
                  <MetaDeckExplain>
                    <div class="flex items-center justify-center border-2 ">
                      <span>덱 자세히 보기</span>
                    </div>
                  </MetaDeckExplain>
                </MetaGroupDeck>
              </MetaGroupDeckBox1>
            </MetaGroupContent>
          </MetaGroup>
        ))}
        {/* 
        <MetaGroup>
          <MetaGroupContent>
            <MetaGroupDeckBox1>
              <MetaGroupDeck>
                <MetaDeckName>
                  <DeckName>
                    <span>선의 조이</span>
                  </DeckName>
                  <DeckNameHot>
                    <span>❤️Hot</span>
                  </DeckNameHot>
                </MetaDeckName>
                <MetaDeckTraits>
                  <BoxHeaderReinForceDummy>
                    <img
                      src="//cdn.lolchess.gg/upload/images/traits/Arsenal_black_1668169947-Arsenal.svg"
                      alt=""
                      class="absolute top-1/2 left-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 object-cover object-center"
                    />
                  </BoxHeaderReinForceDummy>
                  <BoxHeaderReinForceDummy>
                    <img
                      src="//cdn.lolchess.gg/upload/images/traits/Arsenal_black_1668169947-Arsenal.svg"
                      alt=""
                      class="absolute top-1/2 left-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 object-cover object-center"
                    />
                  </BoxHeaderReinForceDummy>
                  <BoxHeaderReinForceDummy>
                    <img
                      src="//cdn.lolchess.gg/upload/images/traits/Arsenal_black_1668169947-Arsenal.svg"
                      alt=""
                      class="absolute top-1/2 left-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 object-cover object-center"
                    />
                  </BoxHeaderReinForceDummy>
                  <BoxHeaderReinForceDummy>
                    <img
                      src="//cdn.lolchess.gg/upload/images/traits/Arsenal_black_1668169947-Arsenal.svg"
                      alt=""
                      class="absolute top-1/2 left-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 object-cover object-center"
                    />
                  </BoxHeaderReinForceDummy>
                  <BoxHeaderReinForceDummy>
                    <img
                      src="//cdn.lolchess.gg/upload/images/traits/Arsenal_black_1668169947-Arsenal.svg"
                      alt=""
                      class="absolute top-1/2 left-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 object-cover object-center"
                    />
                  </BoxHeaderReinForceDummy>
                  <BoxHeaderReinForceDummy>
                    <img
                      src="//cdn.lolchess.gg/upload/images/traits/Arsenal_black_1668169947-Arsenal.svg"
                      alt=""
                      class="absolute top-1/2 left-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 object-cover object-center"
                    />
                  </BoxHeaderReinForceDummy>
                  <BoxHeaderReinForceDummy>
                    <img
                      src="//cdn.lolchess.gg/upload/images/traits/Arsenal_black_1668169947-Arsenal.svg"
                      alt=""
                      class="absolute top-1/2 left-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 object-cover object-center"
                    />
                  </BoxHeaderReinForceDummy>
                  <BoxHeaderReinForceDummy>
                    <img
                      src="//cdn.lolchess.gg/upload/images/traits/Arsenal_black_1668169947-Arsenal.svg"
                      alt=""
                      class="absolute top-1/2 left-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 object-cover object-center"
                    />
                  </BoxHeaderReinForceDummy>
                  <BoxHeaderReinForceDummy>
                    <img
                      src="//cdn.lolchess.gg/upload/images/traits/Arsenal_black_1668169947-Arsenal.svg"
                      alt=""
                      class="absolute top-1/2 left-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 object-cover object-center"
                    />
                  </BoxHeaderReinForceDummy>
                  <BoxHeaderReinForceDummy>
                    <img
                      src="//cdn.lolchess.gg/upload/images/traits/Arsenal_black_1668169947-Arsenal.svg"
                      alt=""
                      class="absolute top-1/2 left-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 object-cover object-center"
                    />
                  </BoxHeaderReinForceDummy>
                  <BoxHeaderReinForceDummy>
                    <img
                      src="//cdn.lolchess.gg/upload/images/traits/Arsenal_black_1668169947-Arsenal.svg"
                      alt=""
                      class="absolute top-1/2 left-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 object-cover object-center"
                    />
                  </BoxHeaderReinForceDummy>
                </MetaDeckTraits>
                <MetaDeckChampions>
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
                </MetaDeckChampions>
                <MetaDeckExplain></MetaDeckExplain>
              </MetaGroupDeck>
            </MetaGroupDeckBox1>
          </MetaGroupContent>
        </MetaGroup> */}
      </Wrapper>
    </div>
  );
};
const Wrapper = styled.div`
  margin-top: 40px;
  position: relative;
  min-height: 50vh;
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
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
  margin-bottom: 10px;
`;

const MetaGroupContent = styled.div``;

const MetaGroupDeckBox1 = styled.div``;

// const MetaGroupDeckBox2 = styled.div``;

const MetaGroupDeck = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1.7fr 3fr 1fr;
`;

const MetaDeckName = styled.div`
  display: flex;
  padding: 22px 13px;
  flex-direction: column;
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

const DeckNameHot = styled.div`
  font-size: 10px;
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
export default MetaForm;
