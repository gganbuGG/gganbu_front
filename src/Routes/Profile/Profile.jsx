import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "./ProfileDetail";
import Navbar from "../../Components/Navbar/Navbar";
import { USERINFO_BASE_URL } from "../../api/API_User";
import styled from "styled-components";
import SynergyImg from "../../utils/SynergyImg";
import ChampionImg from "../../utils/ChampionImg";
import AugmentsImg from "../../utils/AugmentsImg";

const Profile = () => {
  const [productList, setProductList] = useState({});
  const [query, setQuery] = useSearchParams();
  let [error, setError] = useState("");

  const getProduct = async () => {
    let searchQuery = query.get("q") || "";
    console.log("쿼리 값: ", searchQuery);
    let url = `${USERINFO_BASE_URL}${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();

    if (data.length < 1) {
      setError(`${searchQuery}와 일치하는 소환사가 없습니다.`);
    } else {
      setProductList(data);
    }

    setProductList(data);
  };

  useEffect(() => {
    getProduct();
  }, [query]);

  return (
    <div>
      <Navbar />

      <Wrapper>
        <div>
          {error ? (
            <h2>{error}</h2>
          ) : (
            <div>
              <DeckHeader>
                <DeckHeaderText>
                  <DeckHeaderTitle>{productList.name}</DeckHeaderTitle>
                </DeckHeaderText>
              </DeckHeader>

              {/* <MetaForm /> */}
              {productList.length > 0 &&
                productList.slice(0, 8).map((match, i) => (
                  <MetaGroup>
                    <MetaGroupContent>
                      <MetaGroupDeckBox>
                        <MetaGroupDeck>
                          {/* 1. #등수 */}
                          <MetaDeckName>
                            <DeckName>
                              <P>
                                <DeckSpan>#{match.Rank}</DeckSpan>
                              </P>
                            </DeckName>
                          </MetaDeckName>
                          {/* #등수 */}
                          {/* 2. 아이콘 이미지 */}
                          <div>
                            <div className="flex h-20 w-20 items-center justify-center rounded-full border-2">
                              원
                            </div>
                          </div>
                          {/* 아이콘 이미지 */}

                          {/*3. 시너지 */}
                          <MetaDeckTraits>
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
                          </MetaDeckTraits>
                          {/* 시너지 */}
                          {/* 4. 증강체 */}
                          <div>
                            <BoxSiderAugmentsBody>
                              {match.Augments.map((e, i) => (
                                <AugmentsBody>
                                  <BoxSiderAugmentsBodyImg>
                                    {AugmentsImg(match.Augments[i])}
                                  </BoxSiderAugmentsBodyImg>
                                  <AugmentsName>
                                    {match.Augments[i]}
                                  </AugmentsName>
                                </AugmentsBody>
                              ))}
                            </BoxSiderAugmentsBody>
                          </div>
                          {/* 증강체 */}

                          {/*5. 챔피언 */}
                          <div>
                            {match.Units.map((e, i) => (
                              <BoxChampionMain>
                                <BoxChampionImgAndItems>
                                  <BoxChampionImg>
                                    {ChampionImg(
                                      Object.values(match.Units[i].Champion)
                                    )}
                                  </BoxChampionImg>
                                </BoxChampionImgAndItems>
                                <ChampionName>
                                  {Object.values(match.Units[i].Champion)}
                                </ChampionName>
                              </BoxChampionMain>
                            ))}
                          </div>
                          {/* 챔피언 */}

                          {/* 6. 같이 플레이한인원 */}
                          <MetaDeckExplain>
                            <div className="grid grid-flow-col grid-rows-4 gap-4 text-xs">
                              <span>{match.Participant1}</span>
                              <span>{match.Participant2}</span>
                              <span>{match.Participant3}</span>
                              <span>{match.Participant4}</span>
                              <span>{match.Participant5}</span>
                              <span>{match.Participant6}</span>
                              <span>{match.Participant7}</span>
                              <span>{match.Participant8}</span>
                            </div>
                          </MetaDeckExplain>
                          {/* 같이 플레이한인원 */}
                        </MetaGroupDeck>
                      </MetaGroupDeckBox>
                    </MetaGroupContent>
                  </MetaGroup>
                ))}
            </div>
          )}
        </div>
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  height: 200vh;
`;

const DeckHeader = styled.div`
  margin-top: 100px;
  min-height: 20vh;
  margin-bottom: 20px;
  background-color: blanchedalmond;
  display: flex;
  flex-direction: column;
  padding: 0 12px;
`;

const DeckHeaderText = styled.div`
  position: relative;
  display: flex;
  height: 230px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const DeckHeaderTitle = styled.h2`
  margin-bottom: 16px;
  font-size: 24px;
  font-weight: 700;
  line-height: 1;
  --tw-text-opacity: 1;
  color: rgb(202 147 114 / var(--tw-text-opacity));
`;

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
  grid-template-columns: 3fr 3fr 7fr 2fr 25fr 15fr;
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
  display: inline-flex;
  flex-direction: column;
  padding-top: 28px;
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

const BoxSiderAugmentsBody = styled.div`
  display: flex;
  margin-left: 13px;
  justify-content: center;
  gap: 2px;
  @media (min-width: 1024px) {
    padding-top: 8px;
    padding-bottom: 8px;
  }
  @media (min-width: 1024px) {
    padding-left: 6px;
    padding-right: 6px;
  }
`;
// const BoxChampionImgDetail = styled.div`
//   position: relative;
//   display: inline-flex;
//   height: 45px;
//   width: 45px;
//   overflow: hidden;
//   border-radius: 8px;
//   border-width: 2px;
//   border-color: ${(props) => props.bdColor};
// `;

// const BoxChampionCoreItems = styled.div`
//   position: absolute;
//   display: inline-flex;
//   width: 100%;
//   align-items: center;
//   justify-content: center;
//   padding-top: 50px;
// `;

// const BoxChampionCoreItem = styled.div`
//   position: relative;

//   height: 15px;
//   width: 15px;
//   overflow: hidden;
// `;

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

const AugmentsBody = styled.div`
  position: relative;
  display: inline-flex;
  flex-direction: column;
  padding-top: 9px;
  &:hover ${AugmentsName} {
    opacity: 1;
    visibility: visible;
  }
`;

const BoxSiderAugmentsBodyImg = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 35px;
  width: 35px;
`;

export default Profile;
