import React, { useState } from "react";
import axios from "axios";
import { FaSearch } from "react-icons/fa";
import "./SearchForm.css";
import { useNavigate } from "react-router-dom";

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
    //Handle the API Call
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

  // const onClickURL = () => {
  //   navigate(`/profile/${searchText}`);
  // };
  return (
    <div className="search-form">
      <div className="container">
        <div className="search-form-content">
          <form className="search-form">
            <div className="search-form-elem flex-sb flex bg-white">
              <input
                type="text"
                className="form-control text-black"
                placeholder="소환사 검색"
                onChange={(e) => setSearchText(e.target.value)}
              />
              <button
                type="submit"
                className="flex-c flex"
                onClick={(e) => searchForPlayer(e)}
              >
                <FaSearch className="text-purple" size={32} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
