import React, { useState } from "react";
import axios from "axios";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const API_KEY = "RGAPI-56cd37e9-6c32-4a22-a6ae-918ec5321c1f"; //하루마다 바꿔야됨.

const SearchForm = () => {
  const [searchText, setSearchText] = useState("");
  const [playerData, setPlayerData] = useState({});

  const navigate = useNavigate();
  function searchForPlayer() {
    let APICallString =
      "https://kr.api.riotgames.com/tft/summoner/v1/summoners/by-name/" +
      searchText +
      "?api_key=" +
      API_KEY;
    axios
      .get(APICallString)
      .then(function (response) {
        //Success
        setPlayerData(response.data);
      })
      .catch(function (error) {
        //Error
        console.log(error);
      });
    navigate(`/profile/${searchText}`);
  }
  return (
    <SearchMain>
      <div className="container">
        <SearchFormContent>
          <SearchForms>
            <SearchElem>
              <Input
                type="text"
                placeholder="소환사 검색"
                onChange={(e) => setSearchText(e.target.value)}
              />
              <Button type="submit" onClick={(e) => searchForPlayer(e)}>
                <FaSearch className="text-purple" size={32} />
              </Button>
            </SearchElem>
          </SearchForms>
        </SearchFormContent>
      </div>
    </SearchMain>
  );
};

const SearchMain = styled.div`
  width: 100%;
  max-width: 680px;
`;

const SearchFormContent = styled.div``;
const SearchForms = styled.div``;

const SearchElem = styled.div`
  padding: 0.8rem 2.8rem;
  border-radius: 3.8rem;
  display: flex;
  background-color: white;
  justify-content: space-between;
`;

const Input = styled.input`
  padding: 1px;
  font-size: 24px;
  line-height: 36px;
  --tw-text-opacity: 1;
  color: rgb(0 0 0 / var(--tw-text-opacity));
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default SearchForm;
