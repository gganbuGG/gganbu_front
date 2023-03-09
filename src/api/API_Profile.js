import axios from "axios";

export const BASE_URL = "http://localhost:8083";

export const SUMMONER_BASE_URL =
  "https://gganbuback1.pythonanywhere.com/api/summoner/";

export const CHAMPION_BASE_URL =
  "https://gganbuback1.pythonanywhere.com/api/champion/";

export const DECK_BASE_URL =
  "https://gganbuback1.pythonanywhere.com/api/onedeck/";

export const DECK_DOUBLE_BASE_URL =
  "https://gganbuback1.pythonanywhere.com/api/doubledeck/";

// 랭커 100명
export const getLeaderBoard = async () => {
  try {
    const res = await axios.get(`${SUMMONER_BASE_URL}`);
    // console.log(res.data);
    return res.data;
  } catch (error) {
    return error.message;
  }
};

//챔피언 기물 통계 및 아이템
export const getChampion = async () => {
  try {
    const res = await axios.get(`${CHAMPION_BASE_URL}`);
    return res.data;
  } catch (error) {
    return error.message;
  }
};

// 단일 덱 통계 -승률
export const getDeckWinRate = async () => {
  try {
    const res = await axios.get(`${DECK_BASE_URL}winrate/`);
    console.log(res.data);
    return res.data;
  } catch (error) {
    return error.message;
  }
};

// 단일 덱 통계 -승방률
export const getDeckWindefenceRate = async () => {
  try {
    const res = await axios.get(`${DECK_BASE_URL}windefencerate/`);
    return res.data;
  } catch (error) {
    return error.message;
  }
};

// 단일 덱 통계 -평균등수
export const getDeckAvgplace = async () => {
  try {
    const res = await axios.get(`${DECK_BASE_URL}avgplace/`);
    return res.data;
  } catch (error) {
    return error.message;
  }
};

export const getDoubleDeck = async () => {
  try {
    const res = await axios.get(`${DECK_DOUBLE_BASE_URL}`);
    // console.log(res.data);
    return res.data;
  } catch (error) {
    return error.message;
  }
};

// 더미파일(navbar에 삭제시 같이 삭제할 것)
export const getProfile = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/profile`);
    return res.data;
  } catch (error) {
    return error.message;
  }
};
