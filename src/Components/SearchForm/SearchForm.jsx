import axios from "axios";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const SearchForm = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [info, setInfo] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleClick = async (event) => {
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

  const searchEnter = async (event) => {
    if (event.key === "Enter") {
      navigate(`/profile?q=${name}`);
    }
  };

  return (
    <SearchMain>
      <div className="container">
        <SearchFormContent className="sm:px-10 sm:py-2">
          <SearchForms className="sm:px-10 sm:py-2">
            <SearchElem className="sm:px-10 sm:py-2">
              <Input
                type="text"
                placeholder="소환사 검색"
                onChange={handleNameChange}
                onKeyPress={(event) => searchEnter(event)}
                minLength="2"
                className="sm:w-2 sm:py-2"
                autoFocus
              />
              <Button type="submit" minLength="2" onClick={handleClick}>
                <FaSearch className="text-purple sm:w-8" size={32} />
              </Button>
            </SearchElem>
          </SearchForms>
        </SearchFormContent>
      </div>
    </SearchMain>
  );
};

const SearchMain = styled.div`
  width: 100%;
  max-width: 680px;
`;

const SearchFormContent = styled.div``;
const SearchForms = styled.div``;

const SearchElem = styled.div`
  padding: 0.8rem 2.8rem;
  border-radius: 3.8rem;
  display: flex;
  background-color: white;
  justify-content: space-between;
`;

const Input = styled.input`
  padding: 1px;
  font-size: 24px;
  line-height: 36px;
  --tw-text-opacity: 1;
  color: rgb(0 0 0 / var(--tw-text-opacity));
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default SearchForm;
