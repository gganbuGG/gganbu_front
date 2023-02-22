import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getDeckAvgplace } from "../../api/API_Profile";
import Core from "../../Components/Core/Core";
import ChampionBackgroundImg from "../../utils/ChampionBackgroundImg";
import { ChampionBorderColor } from "../../utils/ChampionBorderColor";

const AvgPlace = () => {
  const [info, setInfo] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const result = await getDeckAvgplace();
        setInfo(result);
      } catch (e) {
        console.error(e.message);
      }
    })();
  }, []);

  return (
    <body>
      <h2 className="mb-10 text-6xl text-white">평균 등수</h2>
      {info["data"]?.map((match) => (
        <DeckBody>
          <FirstBox>
            <BoxMain>
              {/* 헤더 */}
              <BoxHeader>
                <BoxHeaderText>
                  {/* 덱 이름 */}
                  <p class="font-bold leading-none text-white">
                    <span>{match.name}</span>덱
                  </p>
                  {/* 덱 이름 */}
                </BoxHeaderText>
                <BoxHeaderSynergyMain>
                  <BoxHeaderSynergyMain2>
                    {/* 시너지 */}
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
                    {/* 시너지 */}
                  </BoxHeaderSynergyMain2>
                </BoxHeaderSynergyMain>
              </BoxHeader>
              {/* 헤더 */}
              {/* 바디 */}
              <BoxBody>
                <BoxBodyImage>
                  {ChampionBackgroundImg(match.core[0].name)}
                  <BoxBodyMain>
                    <BoxChampionBody>
                      <BoxChampionBody2>
                        {/* 챔피언 사진? */}

                        {match.units.map((e, i) => (
                          <BoxChampionMain>
                            {/* <Core /> */}

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
                                <img
                                  className="mr-5"
                                  src={match.augments[i].img}
                                  alt="augments"
                                />
                              </BoxSiderAugmentsBodyImg>
                              <AugmentsName>
                                {match.augments[i].name}
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
                          <BoxSiderTopRateIndex>순방률</BoxSiderTopRateIndex>
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
    </body>
  );
};

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

const Tile = styled.div`
  background: url(${(props) => props.bgimg}) center/cover no-repeat;
  width: 26px;
  height: 26px;
  position: relative;
`;

const Synergy = styled.img`
  position: relative;
  top: 13%;
  left: 13%;
  height: 20px;
  width: 20px;
  object-fit: cover;
  object-position: center;
`;

const BoxBody = styled.div``;

const BoxBodyImage = styled.div`
  /* background: url("https://cdn.dak.gg/tft/images2/tft/meta/champions/TFT8_Viego.jpg")
    center/cover no-repeat; */
  flex-direction: column;
  overflow: visible;
  position: relative;
`;

const BoxBodyMain = styled.div`
  position: relative;
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
  width: 150px;
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

const Champions = styled.img`
  position: relative;
  margin-right: 15px;
  height: 65px;
  width: 65px;
  border: 3px solid ${(props) => props.bdcolor};
  border-radius: 10px;
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

export default AvgPlace;
