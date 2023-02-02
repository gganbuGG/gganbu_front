import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getDeckWinRate } from "../../api/API_Profile";
import Navbar from "../../Components/Navbar/Navbar";
import AugmentsImg from "../../utils/AugmentsImg";
import ChampionImg from "../../utils/ChampionImg";
import SynergyImg from "../../utils/SynergyImg";

const Deck = () => {
  const [info, setInfo] = useState([]);
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
    <body>
      <Navbar />
      <DeckMain>
        <main class="container">
          <DeckHeader>
            <DeckHeaderText>
              <DeckHeaderTitle>덱 개인 통계</DeckHeaderTitle>
              <DeckHeaderUpdatedTime>
                최종 업데이트: {info["updated_time"]}
              </DeckHeaderUpdatedTime>
            </DeckHeaderText>
          </DeckHeader>
          {info["data"]?.map((match) => (
            <DeckBody>
              <FirstBox>
                <BoxMain>
                  {/* 헤더 */}
                  <BoxHeader>
                    <BoxHeaderText>
                      {/* 덱 이름 */}
                      <p class="font-bold leading-none text-white">
                        <span>
                          {Object.keys(match.traits)[0]} {match.core[0]}
                        </span>
                        {/* {match.core.map((e, i) => (
                          <span>{match.core[i]}</span>
                        ))} */}
                        덱
                      </p>
                      <span class="text-[12px] leading-none text-[#999]"></span>
                      {/* 덱 이름 */}
                    </BoxHeaderText>
                    <BoxHeaderSynergyMain>
                      <BoxHeaderSynergyMain2>
                        {/* 시너지 */}
                        {Object.keys(match.traits).map((e, i) => (
                          <SynergyMain>
                            {SynergyImg(
                              Object.keys(match.traits)[i] +
                                Object.values(match.traits)[i]
                            )}
                            <SynergyName>
                              {Object.keys(match.traits)[i]}(
                              {Object.values(match.traits)[i]})
                            </SynergyName>
                          </SynergyMain>
                        ))}
                        {/* 시너지 */}
                      </BoxHeaderSynergyMain2>
                    </BoxHeaderSynergyMain>
                  </BoxHeader>
                  {/* 헤더 */}
                  {/* 바디 */}
                  <BoxBody>
                    <BoxBodyImage>
                      <BoxBodyMain>
                        <BoxChampionBody>
                          <BoxChampionBody2>
                            {/* 챔피언 사진? */}

                            {match.units.map((e, i) => (
                              <BoxChampionMain>
                                {match.units[i] === match.core[i] ? (
                                  <div class="absolute top-0 left-1/2 z-20 flex -translate-x-1/2">
                                    <div class="inline-flex items-center justify-center rounded-[4px] bg-orange-300 p-[2px] text-center lg:h-[18px] lg:w-[38px]">
                                      <strong class="text-[9px] font-bold leading-none text-white lg:text-[11px]">
                                        CORE
                                      </strong>
                                    </div>
                                  </div>
                                ) : (
                                  ""
                                )}
                                <BoxChampionImgAndItems>
                                  {/* 코어 챔피언 손봐야함 */}

                                  {/* 코어 챔피언 손봐야함 */}
                                  <BoxChampionImg>
                                    {ChampionImg(match.units[i])}
                                  </BoxChampionImg>
                                </BoxChampionImgAndItems>
                                <ChampionName>{match.units[i]}</ChampionName>
                              </BoxChampionMain>
                            ))}

                            {/* 챔피언 사진?  */}
                          </BoxChampionBody2>
                        </BoxChampionBody>

                        <BoxSider>
                          <BoxSiderAugments>
                            <BoxSiderAugmentsHeader>
                              <BoxSiderAugmentsHeaderText>
                                상위 증강체
                              </BoxSiderAugmentsHeaderText>
                            </BoxSiderAugmentsHeader>
                            {/* 증강체 */}
                            <BoxSiderAugmentsBody>
                              {match.augments.map((e, i) => (
                                <AugmentsBody>
                                  <BoxSiderAugmentsBodyImg>
                                    {AugmentsImg(match.augments[i])}
                                  </BoxSiderAugmentsBodyImg>
                                  <AugmentsName>
                                    {match.augments[i]}
                                  </AugmentsName>
                                </AugmentsBody>
                              ))}
                            </BoxSiderAugmentsBody>
                            {/* 증강체 */}
                          </BoxSiderAugments>
                          <BoxSiderAvg>
                            <BoxSiderAvgText>
                              <div>평균 등수</div>
                              <div>#{match.avgplace}</div>
                            </BoxSiderAvgText>
                          </BoxSiderAvg>
                          <BoxSiderTopRate>
                            <BoxSiderTopRateTwoIndex>
                              <BoxSiderTopRateIndex>
                                순방률
                              </BoxSiderTopRateIndex>
                              <BoxSiderTopRateRate>
                                <span>{match.windefencerate}%</span>
                              </BoxSiderTopRateRate>
                            </BoxSiderTopRateTwoIndex>
                            <BoxSiderTopRateTwoIndex>
                              <BoxSiderTopRateIndex>승률</BoxSiderTopRateIndex>
                              <BoxSiderTopRateRate>
                                <span>{match.winrate}%</span>
                              </BoxSiderTopRateRate>
                            </BoxSiderTopRateTwoIndex>
                          </BoxSiderTopRate>
                        </BoxSider>
                      </BoxBodyMain>
                    </BoxBodyImage>
                  </BoxBody>
                  {/* 바디 */}
                </BoxMain>
              </FirstBox>
            </DeckBody>
          ))}
        </main>
      </DeckMain>
    </body>
  );
};

const DeckMain = styled.div`
  position: relative;
  min-height: 150vh;
  width: 100%;
  --tw-bg-opacity: 1;
  background-color: rgb(34 34 34 / var(--tw-bg-opacity));
  padding-bottom: 80px;
`;
const DeckHeader = styled.div`
  min-height: 20vh;
  margin-bottom: 20px;
  background: url("https://cdn.dak.gg/tft/images2/tft/bg/meta-stats.jpeg?20221208")
    center/cover no-repeat;
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

const DeckHeaderUpdatedTime = styled.p`
  font-size: 12px;
  line-height: 130%;
  --tw-text-opacity: 1;
  color: rgb(214 214 214 / var(--tw-text-opacity));
`;

const DeckBody = styled.div`
  flex-direction: column;
  gap: 16px;
`;
const FirstBox = styled.div`
  margin-bottom: 50px;
`;

const BoxMain = styled.div`
  flex-direction: column;
  gap: 1px;
  border-width: 1px;
  --tw-border-opacity: 1;
  border-color: rgb(50 50 50 / var(--tw-border-opacity));
  --tw-bg-opacity: 1;
  background-color: rgb(50 50 50 / var(--tw-bg-opacity));
`;

const BoxHeader = styled.div`
  position: relative;
  display: flex;
  flex-direction: col;
  justify-content: space-between;
  gap: 16px;
  --tw-bg-opacity: 1;
  background-color: rgb(45 47 55 / var(--tw-bg-opacity));
  padding-top: 16px;
  padding-bottom: 14px;
  padding-left: 16px;
  padding-right: 54px;
  @media (min-width: 1024px) {
    min-height: 50px;
  }
  @media (min-width: 1024px) {
    flex-direction: row;
  }
  @media (min-width: 1024px) {
    align-items: center;
  }
  @media (min-width: 1024px) {
    padding-top: 12px;
    padding-bottom: 12px;
  }
  @media (min-width: 1024px) {
    padding-right: 16px;
  }
`;

const BoxHeaderText = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  @media (min-width: 768px) {
    flex-direction: row;
  }
  @media (min-width: 768px) {
    align-items: center;
  }
  @media (min-width: 768px) {
    gap: 4px;
  }
`;

const BoxHeaderSynergyMain = styled.div`
  display: inline-flex;
  flex-shrink: 0;
  gap: 22px;
`;

const BoxHeaderSynergyMain2 = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
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

const BoxBody = styled.div``;

const BoxBodyImage = styled.div`
  background: url("https://cdn.dak.gg/tft/images2/tft/meta/champions/TFT8_Samira.jpg");
  background-size: cover;
  flex-direction: column;
  background-position: center;
  background-repeat: no-repeat;
  overflow: visible;
`;

const BoxBodyMain = styled.div`
  display: flex;
  min-height: 150px;
  flex-direction: column;
  align-items: center;
  --tw-bg-opacity: 1;
  background-color: rgb(39 40 46 / var(--tw-bg-opacity));
  padding-top: 16px;
  padding-bottom: 16px;
  @media (min-width: 1024px) {
    flex-direction: row;
  }
  @media (min-width: 1024px) {
    gap: 33px;
  }
  @media (min-width: 1024px) {
    background-color: transparent;
  }
  @media (min-width: 1024px) {
    padding-top: 0px;
    padding-bottom: 0px;
  }
  @media (min-width: 1024px) {
    padding-left: 8px;
    padding-right: 8px;
  }
  @media (min-width: 1280px) {
    padding-left: 164px;
  }
  @media (min-width: 1280px) {
    padding-right: 24px;
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

const BoxChampionBody = styled.div`
  margin-bottom: 16px;
  max-width: 342px;
  @media (min-width: 1024px) {
    margin-bottom: 0px;
  }
  @media (min-width: 1024px) {
    width: 100%;
  }
  @media (min-width: 1024px) {
    max-width: 456px;
  }
  @media (min-width: 1024px) {
    flex-shrink: 0;
  }
`;

const BoxChampionBody2 = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  gap: 6px;
`;

const BoxChampionMain = styled.div`
  position: relative;
  display: inline-flex;
  flex-direction: column;
  padding-top: 9px;
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

const BoxSider = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 5px;
  @media (min-width: 640px) {
    width: auto;
  }
  @media (min-width: 1024px) {
    display: flex;
  }
  @media (min-width: 1024px) {
    align-items: center;
  }
`;

const BoxSiderAugments = styled.div`
  display: flex;
  height: 98px;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 4px;
  --tw-bg-opacity: 1;
  background-color: rgb(29 29 29 / var(--tw-bg-opacity));
  padding-top: 12px;
  padding-bottom: 12px;
  @media (min-width: 640px) {
    width: 126px;
  }
  @media (min-width: 640px) {
    padding-left: 6px;
    padding-right: 6px;
  }
  @media (min-width: 1024px) {
    width: 130px;
  }
`;

const BoxSiderAugmentsHeader = styled.div`
  display: flex;
  justify-content: center;
  gap: 2px;
`;

const BoxSiderAugmentsHeaderText = styled.span`
  font-size: 12px;
  line-height: 1;
  --tw-text-opacity: 1;
  color: rgb(153 153 153 / var(--tw-text-opacity));
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

const BoxSiderAugmentsBodyImg = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 35px;
  width: 35px;
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

const BoxSiderAvg = styled.div`
  //**text */
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  //**text */
  height: 98px;
  border-radius: 4px;
  --tw-bg-opacity: 1;
  background-color: rgb(29 29 29 / var(--tw-bg-opacity));
  padding-top: 12px;
  padding-bottom: 12px;
  @media (min-width: 640px) {
    width: 126px;
  }
`;

const BoxSiderAvgText = styled.span`
  color: white;
`;

const BoxSiderTopRate = styled.div`
  display: flex;
  height: 98px;
  flex-direction: column;
  justify-content: center;

  border-radius: 4px;
  --tw-bg-opacity: 1;
  background-color: rgb(29 29 29 / var(--tw-bg-opacity));
  padding: 12px 16px;
  @media (min-width: 640px) {
    width: 126px;
  }
  @media (min-width: 640px) {
    padding-left: 24px;
    padding-right: 24px;
  }
`;

const BoxSiderTopRateTwoIndex = styled.dl`
  display: flex;
  padding-top: 10px;
  margin-bottom: 10px;
  justify-content: space-between;
`;

const BoxSiderTopRateIndex = styled.dt`
  font-size: 12px;
  line-height: 1;
  --tw-text-opacity: 1;
  color: rgb(153 153 153 / var(--tw-text-opacity));
`;

const BoxSiderTopRateRate = styled.dt`
  font-size: 12px;
  line-height: 1;
  color: white;
`;

export default Deck;
