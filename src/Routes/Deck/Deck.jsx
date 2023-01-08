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
    .lg\:min-h-\[50px\] {
      min-height: 50px;
    }
  }
  @media (min-width: 1024px) {
    .lg\:flex-row {
      flex-direction: row;
    }
  }
  @media (min-width: 1024px) {
    .lg\:items-center {
      align-items: center;
    }
  }
  @media (min-width: 1024px) {
    .lg\:py-\[12px\] {
      padding-top: 12px;
      padding-bottom: 12px;
    }
  }
  @media (min-width: 1024px) {
    .lg\:pr-\[16px\] {
      padding-right: 16px;
    }
  }
`;

const BoxHeaderText = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  @media (min-width: 768px) {
    .md\:flex-row {
      flex-direction: row;
    }
  }
  @media (min-width: 768px) {
    .md\:items-center {
      align-items: center;
    }
  }
  @media (min-width: 768px) {
    .md\:gap-\[4px\] {
      gap: 4px;
    }
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
                    <div class="flex min-h-[150px] flex-col items-center bg-[#27282E] py-[16px] lg:flex-row lg:gap-[33px] lg:bg-transparent lg:py-[0px] lg:px-[8px] xl:pl-[164px] xl:pr-[24px]">
                      <div class="mb-[16px] max-w-[342px] lg:mb-0 lg:w-full lg:max-w-[456px] lg:flex-shrink-0">
                        <div class="inline-flex flex-wrap gap-2">
                          <div class="relative inline-flex flex-col pt-[9px]">
                            <div class="inline-flex flex-col items-center gap-1">
                              <div class="relative inline-flex flex-col overflow-hidden">
                                <div class="border-radius border-3 relative inline-flex h-16 w-16 overflow-hidden rounded-md border-gray-700">
                                  <img
                                    src="//cdn.lolchess.gg/upload/images/champions/Galio_1668167832-Galio.jpg"
                                    class="h-full w-full object-cover object-center"
                                    alt=""
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="relative inline-flex flex-col pt-[9px]">
                            <div class="inline-flex flex-col items-center gap-1">
                              <div class="relative inline-flex flex-col overflow-hidden">
                                <div class="border-radius border-3 relative inline-flex h-16 w-16 overflow-hidden rounded-md border-gray-700">
                                  <img
                                    src="//cdn.lolchess.gg/upload/images/champions/Galio_1668167832-Galio.jpg"
                                    class="h-full w-full object-cover object-center"
                                    alt=""
                                  />
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="relative inline-flex flex-col pt-[9px]">
                            <div class="inline-flex flex-col items-center gap-1">
                              <div class="relative inline-flex flex-col overflow-hidden">
                                <div class="border-radius relative inline-flex h-16 w-16 overflow-hidden rounded-md border-2 border-yellow-400">
                                  <img
                                    src="//cdn.lolchess.gg/upload/images/champions/Galio_1668167832-Galio.jpg"
                                    class="h-full w-full object-cover object-center"
                                    alt=""
                                  />
                                </div>
                              </div>
                              <div class="inline-flex w-full items-center justify-center">
                                <div class="relative h-6 w-6 overflow-hidden">
                                  <img
                                    src="//cdn.lolchess.gg/upload/images/items/LastWhisper_1642015257.png"
                                    width="3"
                                    height="3"
                                    alt=""
                                  />
                                </div>
                                <div class="relative h-6 w-6  overflow-hidden">
                                  <img
                                    src="//cdn.lolchess.gg/upload/images/items/GiantSlayer_1670462997-giant_slayer.png"
                                    width="12"
                                    height="12"
                                    alt=""
                                  />
                                </div>
                                <div class="relative h-6 w-6 overflow-hidden">
                                  <img
                                    src="//cdn.lolchess.gg/upload/images/items/InfinityEdge_ljmJbkViyMGC8IKr50os4jC8Ccl1ro2JbqXuvHqT.png"
                                    width="12"
                                    height="12"
                                    alt=""
                                  />
                                </div>
                              </div>
                            </div>
                            <div class="absolute top-0 left-1/2 flex -translate-x-1/2">
                              <div class="inline-flex items-center justify-center rounded-[4px] bg-purple-500 p-[2px] text-center lg:h-[18px] lg:w-[38px]">
                                <strong class="text-[9px] font-bold leading-none text-white lg:text-[11px]">
                                  CORE
                                </strong>
                              </div>
                            </div>
                          </div>

                          <div class="relative inline-flex flex-col pt-[9px]">
                            <div class="inline-flex flex-col items-center gap-1">
                              <div class="relative inline-flex flex-col overflow-hidden">
                                <div class="border-radius border-3 relative inline-flex h-16 w-16 overflow-hidden rounded-md border-gray-700">
                                  <img
                                    src="//cdn.lolchess.gg/upload/images/champions/Galio_1668167832-Galio.jpg"
                                    class="h-full w-full object-cover object-center"
                                    alt=""
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="relative inline-flex flex-col pt-[9px]">
                            <div class="inline-flex flex-col items-center gap-1">
                              <div class="relative inline-flex flex-col overflow-hidden">
                                <div class="border-radius border-3 relative inline-flex h-16 w-16 overflow-hidden rounded-md border-gray-700">
                                  <img
                                    src="//cdn.lolchess.gg/upload/images/champions/Galio_1668167832-Galio.jpg"
                                    class="h-full w-full object-cover object-center"
                                    alt=""
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="relative inline-flex flex-col pt-[9px]">
                            <div class="inline-flex flex-col items-center gap-1">
                              <div class="relative inline-flex flex-col overflow-hidden">
                                <div class="border-radius border-3 relative inline-flex h-16 w-16 overflow-hidden rounded-md border-gray-700">
                                  <img
                                    src="//cdn.lolchess.gg/upload/images/champions/Galio_1668167832-Galio.jpg"
                                    class="h-full w-full object-cover object-center"
                                    alt=""
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="relative inline-flex flex-col pt-[9px]">
                            <div class="inline-flex flex-col items-center gap-1">
                              <div class="relative inline-flex flex-col overflow-hidden">
                                <div class="border-radius border-3 relative inline-flex h-16 w-16 overflow-hidden rounded-md border-gray-700">
                                  <img
                                    src="//cdn.lolchess.gg/upload/images/champions/Galio_1668167832-Galio.jpg"
                                    class="h-full w-full object-cover object-center"
                                    alt=""
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="relative inline-flex flex-col pt-[9px]">
                            <div class="inline-flex flex-col items-center gap-1">
                              <div class="relative inline-flex flex-col overflow-hidden">
                                <div class="border-radius border-3 relative inline-flex h-16 w-16 overflow-hidden rounded-md border-gray-700">
                                  <img
                                    src="//cdn.lolchess.gg/upload/images/champions/Galio_1668167832-Galio.jpg"
                                    class="h-full w-full object-cover object-center"
                                    alt=""
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="relative inline-flex flex-col pt-[9px]">
                            <div class="inline-flex flex-col items-center gap-1">
                              <div class="relative inline-flex flex-col overflow-hidden">
                                <div class="border-radius border-3 relative inline-flex h-16 w-16 overflow-hidden rounded-md border-gray-700">
                                  <img
                                    src="//cdn.lolchess.gg/upload/images/champions/Galio_1668167832-Galio.jpg"
                                    class="h-full w-full object-cover object-center"
                                    alt=""
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

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
                    </div>
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
