import axios from "axios";
import React from "react";
import { Component } from "react";

export const USER_BASE_URL = "https://ggback2.pythonanywhere.com/user/";

export const USERINFO_BASE_URL = "http://ggback2.pythonanywhere.com/user/info/";

export default class postUserInfo extends Component {
  componentDidMount = async () => {
    const response = await fetch(
      "http://ggback2.pythonanywhere.com/user/info/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: { a: "react", b: 200 },
      }
    );
    const body = await response.json();
    alert(body.date);
  };
  render() {
    return <h1>fetch post</h1>;
  }
}

// export const postUserInfo = async () => {
//   try {
//     const res = await axios.post(`${USERINFO_BASE_URL}`);
//     // console.log(res.data);
//     return res.data;
//   } catch (error) {
//     return error.message;
//   }
// };

export const getUserInfo = async () => {
  try {
    const res = await axios.get(`${USERINFO_BASE_URL}`);
    // console.log(res.data);
    return res.data;
  } catch (error) {
    return error.message;
  }
};

export const getUser = async () => {
  try {
    const res = await axios.get(`${USER_BASE_URL}`);
    // console.log(res.data);
    return res.data;
  } catch (error) {
    return error.message;
  }
};
