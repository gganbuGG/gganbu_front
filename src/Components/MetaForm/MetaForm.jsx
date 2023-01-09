import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 40px;
  margin-bottom: 100px;
`;

const Version = styled.span`
  color: black;
  font-size: 20px;
  font-weight: bold;
`;

const MetaGroup = styled.div`
  min-height: 90px;
  gap: 1px;
  border-width: 1px;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
`;

// const MetaGroupContent = styled.div``;

const MetaGroupDeckBox = styled.div``;

const MetaGroupDeck = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 2fr 3fr 1fr;
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
  gap: 5px;
`;

const DeckName = styled.div`
  font-size: 18px;
  font-weight: inherit;
`;

const DeckNameHot = styled.div`
  font-size: 10px;
`;
const MetaDeckChampions = styled.div``;
const MetaDeckExplain = styled.div``;

const MetaForm = () => {
  return (
    <div class="container">
      <Wrapper>
        <Version>V12.23b(시즌8) 추천 메타</Version>
        <MetaGroup>
          <MetaGroupDeckBox>
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
              </MetaDeckTraits>
              <MetaDeckChampions></MetaDeckChampions>
              <MetaDeckExplain></MetaDeckExplain>
            </MetaGroupDeck>
          </MetaGroupDeckBox>
        </MetaGroup>
      </Wrapper>
    </div>
  );
};

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
