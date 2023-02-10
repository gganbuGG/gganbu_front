import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
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
              <ProfileHeader>
                <ProfileHeaderText>
                  <ProfileHeaderTitle>
                    {productList.Name}asdf
                  </ProfileHeaderTitle>
                </ProfileHeaderText>
              </ProfileHeader>

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
                            <IconsImg>
                              <Span>{match.PetID}</Span>
                            </IconsImg>
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
                          <div>
                            <BoxAugmentsBody>
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
                            </BoxAugmentsBody>
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
                          <Participants>
                            <Participant>
                              <span>
                                <Link to={`/profile?q=${match.Participant1}`}>
                                  {match.Participant1}
                                </Link>
                              </span>
                              <span>
                                <Link to={`/profile?q=${match.Participant2}`}>
                                  {match.Participant2}
                                </Link>
                              </span>
                              <span>
                                <Link to={`/profile?q=${match.Participant3}`}>
                                  {match.Participant3}
                                </Link>
                              </span>
                              <span>
                                <Link to={`/profile?q=${match.Participant4}`}>
                                  {match.Participant4}
                                </Link>
                              </span>
                              <span>
                                <Link to={`/profile?q=${match.Participant5}`}>
                                  {match.Participant5}
                                </Link>
                              </span>
                              <span>
                                <Link to={`/profile?q=${match.Participant6}`}>
                                  {match.Participant6}
                                </Link>
                              </span>
                              <span>
                                <Link to={`/profile?q=${match.Participant7}`}>
                                  {match.Participant7}
                                </Link>
                              </span>
                              <span>
                                <Link to={`/profile?q=${match.Participant8}`}>
                                  {match.Participant8}
                                </Link>
                              </span>
                            </Participant>
                          </Participants>
                          {/* 같이 플레이한인원 */}
                        </ProfileGroup>
                      </MainBox>
                    </MainContent>
                  </Main>
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

const ProfileHeader = styled.div`
  margin-top: 100px;
  min-height: 20vh;
  margin-bottom: 20px;
  background-color: black;
  display: flex;
  flex-direction: column;
  padding: 0 12px;
`;

const ProfileHeaderText = styled.div`
  position: relative;
  display: flex;
  height: 230px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ProfileHeaderTitle = styled.h2`
  margin-bottom: 16px;
  font-size: 24px;
  font-weight: 700;
  line-height: 1;
  color: white;
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

const Main = styled.div`
  display: flex;
  align-items: center;
  min-height: 100px;
  border-width: 2px;
  border-color: lightgray;
  margin-bottom: 10px;
`;

const MainContent = styled.div``;

const MainBox = styled.div``;

const ProfileGroup = styled.div`
  display: grid;

  grid-template-columns: 3fr 3fr 7fr 2fr 25fr 15fr;
`;

const Rank = styled.div`
  display: flex;
  padding: 22px 14px;
  flex-direction: column;
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const IconsImg = styled.div`
  width: 60px;
  height: 60px;

  border-radius: 100px;
  border: 2px solid black;
`;
const Span = styled.span`
  font-size: 10px;
  text-align: center;
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

const BoxAugmentsBody = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 13px;
  gap: 1px;
  justify-content: center;
  @media (min-width: 1024px) {
    padding-top: 8px;
    padding-bottom: 8px;
  }
  @media (min-width: 1024px) {
    padding-left: 6px;
    padding-right: 6px;
  }
`;

const AugmentsBody = styled.div`
  position: relative;
  display: inline-flex;
  flex-direction: column;

  /* padding-top: 9px; */
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
  width: 35px;
  height: 35px;
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
  /* border: 1px solid black; */
`;

export default Profile;
