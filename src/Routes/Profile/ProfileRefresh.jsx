import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PostButton() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate(`/profile?q=${searchQuery}`);
    fetch(`https://ggback2.pythonanywhere.com/user/info/${searchQuery}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ search: searchQuery }),
    })
      .then((response) => response.json())
      .then((data) => {
        
      })
      .catch((error) => {
      
      });
  };

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div>
      <input type="text" value={searchQuery} onChange={handleInputChange} />
      <button onClick={handleButtonClick}>Post</button>
    </div>
  );
}
