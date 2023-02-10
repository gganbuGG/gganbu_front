import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import postUserInfo from "../../api/API_User";

const SearchForm = () => {
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState([]);
  const [data, setData] = useState(null);
  const reqData = JSON.stringify({
    Name: "",
  });

  const url = "http://ggback2.pythonanywhere.com/user/info/";
  const onClick = async () => {
    navigate(`/profile?q=${searchText}`);
    try {
      const response = await axios.post(url, reqData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setData(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  const searchData = () => {
    navigate(`/profile?q=${searchText}`);
  };

  const searchEnter = (event) => {
    if (event.key === "Enter") {
      navigate(`/profile?q=${searchText}`);
    }
  };

  useEffect(() => {
    (async () => {
      try {
        const result = await postUserInfo();
        setSearchText(result);
      } catch (e) {
        console.error(e.message);
      }
    })();
  }, []);
  return (
    <SearchMain>
      <div className="container">
        <SearchFormContent>
          <SearchForms>
            <SearchElem>
              <Input
                type="text"
                placeholder="소환사 검색"
                onChange={(e) => setSearchText(e.target.value)}
                onKeyPress={(event) => searchEnter(event)}
                minLength="2"
              />
              <Button type="submit" minLength="2" onClick={onClick}>
                <FaSearch className="text-purple" size={32} />
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

// export default SearchForm;
export default SearchForm;
