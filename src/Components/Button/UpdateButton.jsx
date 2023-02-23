import React from "react";
import axios from "axios";
import styled from "styled-components";

function UpdateButton() {
  const searchParams = new URLSearchParams(window.location.search);
  const q = searchParams.get("q");

  const handleClick = () => {
    axios
      .post(`https://ggback2.pythonanywhere.com/user/info/${q}/`)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return <Button onClick={handleClick}>Update</Button>;
}

const Button = styled.button`
  margin-bottom: 5px;
  border-radius: 100px;
  width: 100px;
  height: 50px;
  border: 1px solid black;
  background-color: white;
`;

export default UpdateButton;
