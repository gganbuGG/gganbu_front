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
        <div className="search-form-content">
          <form className="search-form">
            <SearchElem>
              <input
                type="text"
                className=" p-2 text-3xl text-black"
                placeholder="소환사 검색"
                onChange={(e) => setSearchText(e.target.value)}
              />
              <button
                type="submit"
                className="flex justify-center"
                onClick={(e) => searchForPlayer(e)}
              >
                <FaSearch className="text-purple" size={32} />
              </button>
            </SearchElem>
          </form>
        </div>
      </div>
    </SearchMain>
  );
};

const SearchMain = styled.div`
  width: 100%;
  max-width: 680px;
`;

const SearchElem = styled.div`
  padding: 0.8rem 2.8rem;
  border-radius: 3.8rem;
  display: flex;
  background-color: white;
  justify-content: space-between;
`;

export default SearchForm;
