import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PostButton() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [info, setInfo] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleClick = async () => {
    try {
      const response = await axios.post(
        `https://ggback2.pythonanywhere.com/user/info/${name}/`
      );

      setInfo(response.data);
      navigate(`/profile?q=${name}`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <input type="text" value={name} onChange={handleNameChange} />
      <button onClick={handleClick}>이름 정보 보내기</button>
      {/* {info && <div>{info}</div>} */}
    </div>
  );
}
