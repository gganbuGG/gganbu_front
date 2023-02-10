import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { USERINFO_BASE_URL } from "../../api/API_User";

const MetaForm = () => {
  const [productList, setProductList] = useState({});
  const [query, setQuery] = useSearchParams();
  let [error, setError] = useState("");

  const getProduct = async () => {
    let searchQuery = query.get("q") || "";
    console.log("쿼리 값: ", searchQuery);
    let url = `${USERINFO_BASE_URL}${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();
    setProductList(data);
  };

  useEffect(() => {
    getProduct();
  }, [query]);

  return (
    <div class="container">
      {productList.slice(0, 5).map((match) => (
        <MetaGroup>
          <div>{match.Augments}</div>
        </MetaGroup>
      ))}
    </div>
  );
};
const Wrapper = styled.div`
  margin-top: 80px;
  position: relative;
  min-height: 50vh;
  margin-bottom: 50px;
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
  border-color: lightgray;
  margin-bottom: 10px;
`;

const MetaGroupContent = styled.div``;

const MetaGroupDeckBox = styled.div``;

const MetaGroupDeck = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 2fr 3fr 1fr;
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

export default MetaForm;
