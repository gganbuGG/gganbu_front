import React, { useState, useContext, useEffect } from "react";
import { useCallback } from "react";
const URL = "https://kr.api.riotgames.com/tft/summoner/v1/summoners/by-name/";
const API_KEY = "RGAPI-fa416971-5450-46b3-8d10-82712a2fba16";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [searchText, setSearchText] = useState("");
  const [playerData, setPlayerData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [resultTitle, setResultTitle] = useState("");

  const searchForPlayer = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`${URL}${searchText}?api_key=${API_KEY}`);
      const data = await response.json();
      const { docs } = data;

      if (docs) {
        const newBooks = docs.map((data) => {
          const {
            id,
            accountId,
            puuid,
            name,
            profileIconId,
            revisionDate,
            summonerLevel,
          } = data;

          return {
            id: id,
            accountId: accountId,
            puuid: puuid,
            name: name,
            profileIconId: profileIconId,
            revisionDate: revisionDate,
            summonerLevel: summonerLevel,
          };
        });

        setPlayerData(newBooks);

        if (newBooks.length > 1) {
          setResultTitle("Your Search Result");
        } else {
          setResultTitle("No Search Result Found!");
        }
      } else {
        setPlayerData([]);
        setResultTitle("No Search Result Found!");
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [searchText]);

  useEffect(() => {
    searchForPlayer();
  }, [searchText, searchForPlayer]);

  return (
    <AppContext.Provider
      value={{
        loading,
        playerData,
        setSearchText,
        resultTitle,
        setResultTitle,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
