import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { getChampion } from "../../api/API_Profile";
import ChampionImg from "../../utils/ChampionImg";
import ItemImg from "../../utils/ItemImg";

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

  const Star = (event) => {
    return "⭐".repeat(event);
  };

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
          : info["data"]
              .sort(function (a, b) {
                if (a.how_many > b.how_many) return -1;
                else if (b.how_many > a.how_many) return 1;
                else return 0;
              })
              .map((match, i) => (
                <ChampionGroup>
                  <ChapionGroupContents>
                    {/*  */}
                    <ChampionMain>
                      {/* 1번 grid - 순위*/}
                      <ChampionRanking>
                        <DeckName>
                          <Ranking>
                            {i + 1}. {match.how_many}번 사용됨
                          </Ranking>
                        </DeckName>
                      </ChampionRanking>
                      {/*  2번 grid  챔피언 이름& 챔피언 사진*/}
                      <ChampionName>
                        <Tiers>
                          <Tier>{Star(match.tier)}</Tier>
                        </Tiers>
                        <div>
                          <div>{ChampionImg(match.name)}</div>
                        </div>
                        <div>{match.name}</div>
                      </ChampionName>
                      {/*3번 grid  아이템 사진*/}
                      <ChampionItem>
                        <div>
                          {ItemImg(match.items[2])}
                          <span className="absolute text-base font-bold">
                            {match.items[2]}
                          </span>
                        </div>
                        <div>
                          {ItemImg(match.items[1])}
                          <span className="absolute text-base font-bold">
                            {match.items[1]}
                          </span>
                        </div>
                        <div>
                          {ItemImg(match.items[0])}
                          <span className="absolute text-base font-bold">
                            {match.items[0]}
                          </span>
                        </div>
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
  background-color: antiquewhite;
  margin-top: 40px;
  position: relative;
  min-height: 50vh;
`;

const ChampionGroup = styled.div`
  height: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
  border-width: 2px;
  border-color: red;
  margin-bottom: 10px;
`;

const ChapionGroupContents = styled.div``;

const ChampionMain = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 3fr 3fr;
`;

const ChampionRanking = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const ChampionName = styled.div`
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  flex-shrink: 0;
  gap: 2px;
  margin: 15px 0px;
`;

const ChampionItem = styled.div`
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  flex-shrink: 0;
  gap: 2px;
  margin: 15px 0px;
`;

const Tiers = styled.div`
  position: absolute;
  margin-bottom: 80px;
  display: flex;
  align-items: center;
`;

const Tier = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  text-align: center;
`;

const DeckName = styled.div`
  font-size: 18px;
  font-weight: inherit;
`;

const Ranking = styled.p`
  margin-left: 20px;
  font-size: 18px;
`;
