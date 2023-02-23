import React, { useState } from "react";
import axios from "axios";
import { CircleLoader } from "react-spinners";
import styled from "styled-components";

function UpdateButton() {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);

    // Extract "q" parameter from current URL
    const searchParams = new URLSearchParams(window.location.search);
    const q = searchParams.get("q");

    // Send POST request to PythonAnywhere with "q" parameter
    axios
      .post(`https://ggback2.pythonanywhere.com/user/info/${q}/`)
      .then((response) => {
        // Handle response
        console.log(response.data);
        setLoading(false);
      })
      .catch((error) => {
        // Handle error
        console.error(error);
        setLoading(false);
      });
  };

  return (
    <div>
      <Button onClick={handleClick} disabled={loading}>
        {loading ? <CircleLoader size={24} color={"#000000"} /> : "Update"}
      </Button>
    </div>
  );
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
