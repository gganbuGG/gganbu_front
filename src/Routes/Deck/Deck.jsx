import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
// import "./Deck.css";
import Footer from "../../Components/Footer/Footer";
import Time from "../../utils/CurrentTime";
import styled from "styled-components";

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

const DeckHeaderH2 = styled.h2`
  margin-bottom: 16px;
  font-size: 24px;
  font-weight: 700;
  line-height: 1;
  --tw-text-opacity: 1;
  color: rgb(202 147 114 / var(--tw-text-opacity));
`;

const DeckHeaderP = styled.p`
  font-size: 12px;
  line-height: 130%;
  --tw-text-opacity: 1;
  color: rgb(214 214 214 / var(--tw-text-opacity));
`;

const DeckBody = styled.div`
  flex-direction: column;
  gap: 16px;
`;
const FirstBox = styled.div``;

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

const BoxHeaderReinForceMain = styled.div`
  display: inline-flex;
  flex-shrink: 0;
  gap: 22px;
`;

const BoxHeaderReinForceMain2 = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  gap: 2px;
`;

const BoxHeaderReinForceDummy = styled.div`
  background-image: url("https://cdn.dak.gg/tft/images2/tft/traits/background/gold.svg");
  width: 26px;
  height: 26px;
  position: relative;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
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
`;

const BoxChampionImgAndItems = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
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
  height: 40px;
  width: 40px;
  overflow: hidden;
  border-radius: 8px;
  border-width: 2px;
  border-color: yellow;
`;

const BoxChampionCoreItems = styled.div`
  display: inline-flex;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const BoxChampionCoreItem = styled.div`
  position: relative;
  height: 15px;
  width: 15px;
  overflow: hidden;
`;

const BoxSider = styled.div`
  margin-bottom: 20px;
  display: grid;
  width: 100%;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 4px;
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

const Deck = () => {
  return (
    <body>
      <Navbar />
      <DeckMain>
        <main class="container">
          <DeckHeader>
            <DeckHeaderText>
              <DeckHeaderH2>메타 통계</DeckHeaderH2>
              <DeckHeaderP>
                최종 업데이트: <Time />
              </DeckHeaderP>
            </DeckHeaderText>
          </DeckHeader>

          <DeckBody>
            <FirstBox>
              <BoxMain>
                <BoxHeader>
                  <BoxHeaderText>
                    <strong class="text-[16px] font-bold leading-none text-white">
                      사미라 세트
                    </strong>
                    <span class="text-[12px] leading-none text-[#999]"></span>
                  </BoxHeaderText>
                  <BoxHeaderReinForceMain>
                    <BoxHeaderReinForceMain2>
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
                    </BoxHeaderReinForceMain2>
                  </BoxHeaderReinForceMain>
                </BoxHeader>

                <BoxBody>
                  <BoxBodyImage>
                    <BoxBodyMain>
                      <BoxChampionBody>
                        <BoxChampionBody2>
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
                            </BoxChampionImgAndItems>
                            <div class="absolute top-0 left-1/2 flex -translate-x-1/2">
                              <div class="inline-flex items-center justify-center rounded-[4px] bg-purple-500 p-[2px] text-center lg:h-[18px] lg:w-[38px]">
                                <strong class="text-[9px] font-bold leading-none text-white lg:text-[11px]">
                                  CORE
                                </strong>
                              </div>
                            </div>
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
                        </BoxChampionBody2>
                      </BoxChampionBody>

                      <div class="mb-[20px] grid w-full grid-cols-2 gap-[4px] sm:w-auto lg:mb-0 lg:flex lg:items-center">
                        <div class="flex h-[98px] flex-col justify-between rounded-[4px] bg-[#1D1D1D] py-[12px] sm:w-[126px] sm:px-[6px] lg:w-[130px]">
                          <div class="flex justify-center gap-[2px]">
                            <span class="text-[12px] leading-none text-[#999]">
                              상위 증강체
                            </span>
                          </div>
                          <div class="flex justify-center gap-[2px] lg:py-[8px] lg:px-[6px]">
                            <div class="inline-flex-center relative h-12 w-12 overflow-hidden rounded-[4px]">
                              <img
                                class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                                src="//cdn.lolchess.gg/upload/images/items/Galio2HeroAugment_1668223910-Galio.jpg"
                                alt=""
                                width="34"
                                height="34"
                              />
                            </div>
                            <div class="inline-flex-center relative h-12 w-12 overflow-hidden">
                              <img
                                class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                                src="//cdn.lolchess.gg/upload/images/items/Ascension_1655945403.png"
                                alt=""
                                width="34"
                                height="34"
                              />
                            </div>
                            <div class="inline-flex-center relative h-12 w-12 overflow-hidden">
                              <img
                                class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                                src="//cdn.lolchess.gg/upload/images/items/standunited1.tft_set6.png"
                                alt=""
                                width="34"
                                height="34"
                              />
                            </div>
                          </div>
                        </div>
                        <div class=" h-[98px] rounded-[4px] bg-[#1D1D1D] py-[12px] sm:w-[126px]">
                          <p class=" justify-center  gap-[4px] text-center text-[12px] leading-none">
                            <span class="mr-2 text-[#999]">
                              평균 등수 #2.16
                            </span>
                          </p>
                        </div>
                        <div class="flex h-[98px] flex-col justify-between rounded-[4px] bg-[#1D1D1D] py-[12px] px-[16px] sm:w-[126px] sm:px-[24px]">
                          <dl class="flex justify-between">
                            <dt class="mr-5 text-[12px] leading-none text-[#999]">
                              TOP4
                            </dt>
                            <dt class=" mr-2 text-[12px] leading-none text-white">
                              <span>62.1%</span>
                            </dt>
                          </dl>
                          <dl class="flex justify-between">
                            <dt class="mr-5 text-[12px] leading-none text-[#999]">
                              승률
                            </dt>
                            <dt class="text-[12px] leading-none text-white">
                              <span>27.2%</span>
                            </dt>
                          </dl>
                          <dl class="flex justify-between">
                            <dt class="mr-5 text-[12px] leading-none text-[#999]">
                              픽률
                            </dt>
                            <dt class="text-[12px] leading-none text-white">
                              <span>1.07%</span>
                            </dt>
                          </dl>
                        </div>
                      </div>
                    </BoxBodyMain>
                  </BoxBodyImage>
                </BoxBody>
              </BoxMain>
            </FirstBox>
          </DeckBody>
        </main>
      </DeckMain>
      <Footer />
    </body>
  );
};

export default Deck;
