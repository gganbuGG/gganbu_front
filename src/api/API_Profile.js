import axios from "axios";

export const BASE_URL = "http://localhost:8083";

export const SUMMONER_BASE_URL =
  "https://gganbuback1.pythonanywhere.com/api/summoner/";

export const CHAMPION_BASE_URL =
  "https://gganbuback1.pythonanywhere.com/api/champion/";

export const getLeaderBoard = async () => {
  try {
    const res = await axios.get(`${SUMMONER_BASE_URL}`);
    // console.log(res.data);
    return res.data;
  } catch (error) {
    return error.message;
  }
};

export const getChampion = async () => {
  try {
    const res = await axios.get(`${CHAMPION_BASE_URL}`);
    // console.log(res.data);
    return res.data;
  } catch (error) {
    return error.message;
  }
};

export const getProfile = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/profile`);
    return res.data;
  } catch (error) {
    return error.message;
  }
};

export const getDeck = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/deck`);
    return res.data;
  } catch (error) {
    return error.message;
  }
};
