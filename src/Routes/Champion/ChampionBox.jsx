import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { getChampion } from "../../api/API_Profile";
import ChampionBackgroundImg from "../../utils/ChampionBackgroundImg";
import ChampionImg from "../../utils/ChampionImg";
import ChampionStatsTierStar from "../../utils/Star";

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

  return (
    <div class="container">
      <Wrapper>
        {info.length === 0
          ? "Loading..!!"
          : info["data"]
              .sort(function (a, b) {
                if (a.how_many > b.how_many) return -1;
                else if (b.how_many > a.how_many) return 1;
                else return 0;
              })
              .map((match, i) => (
                <ChampionGroup>
                  {ChampionBackgroundImg(match.name)}

                  <ChapionGroupContents>
                    {/*  */}
                    <ChampionMain>
                      {/* 1번 grid - 순위*/}
                      <ChampionRanking>
                        <DeckName>
                          <Ranking>{i + 1}.</Ranking>
                        </DeckName>
                      </ChampionRanking>
                      {/*  2번 grid  챔피언 이름& 챔피언 사진*/}
                      <ChampionName>
                        {/* 추후 추가할지 말지 논의 */}
                        {/* <Tiers>
                          <Tier>
                            {ChampionStatsTierStar(
                              Object.keys(match.tier),
                              match.rarity
                            )}
                          </Tier>
                        </Tiers> */}
                        <div>
                          <div>{ChampionImg(match.name)}</div>
                        </div>
                        <div>{match.name}</div>
                      </ChampionName>
                      {/* 3번 별 rate */}
                      <div className="relative flex">
                        <div>
                          {Object.keys(match.tier).map((e, i) => (
                            <div>
                              <div className=" flex flex-row justify-between">
                                <div className="mr-10 flex ">
                                  {ChampionStatsTierStar(
                                    parseInt(Object.keys(match.tier)[i]),
                                    match.rarity
                                  )}
                                </div>
                                <span>{Object.values(match.tier)[i]}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      {/*4번 grid  아이템 사진*/}
                      <ChampionItem>
                        {Object.keys(match.items).map((e, i) => (
                          <div>
                            <img
                              className="mr-5 h-20 w-20"
                              src={Object.values(match.items)[i]}
                              alt="items"
                            />
                            <span className="flex justify-start text-xs">
                              {Object.keys(match.items)[i].slice(0, 8)}
                            </span>
                          </div>
                        ))}
                      </ChampionItem>

                      {/*  */}
                    </ChampionMain>
                  </ChapionGroupContents>
                </ChampionGroup>
              ))}
      </Wrapper>
    </div>
  );
}
const Wrapper = styled.div`
  margin-top: 40px;
  position: relative;
  min-height: 50vh;
  color: white;
`;

const ChampionGroup = styled.div`
  background: url(${(props) => props.imgUrl}) center/cover no-repeat;
  --tw-bg-opacity: 1;
  position: relative;
  background-color: rgb(50 50 50 / var(--tw-bg-opacity));
  height: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
  border-width: 2px;
  border-color: rgb(61, 60, 60);
  margin-bottom: 30px;
`;

const ChapionGroupContents = styled.div``;

const ChampionMain = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr 3fr 5fr;
`;

const ChampionRanking = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const ChampionName = styled.div`
  display: inline-flex;
  position: relative;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  flex-shrink: 0;
  gap: 2px;
  margin: 15px 0px;
`;

const ChampionItem = styled.div`
  position: relative;
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  flex-shrink: 0;
  gap: 2px;
  margin: 15px 0px;
`;

// const Tiers = styled.div`
//   position: absolute;
//   margin-bottom: 90px;
//   display: flex;
//   align-items: center;
// `;

// const Tier = styled.div`
//   display: inline-flex;
//   align-items: center;
//   justify-content: center;
//   font-size: 16px;
//   text-align: center;
//   font-weight: bold;
// `;

const DeckName = styled.div`
  font-size: 18px;
  font-weight: inherit;
`;

const Ranking = styled.p`
  position: relative;
  margin-left: 20px;
  font-size: 30px;
`;
