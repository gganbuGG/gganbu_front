import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import { USER_BASE_URL } from "../../api/API_User";
import styled from "styled-components";
import ProfileDetail from "./ProfileDetail";

const Profile = () => {
  const [productList, setProductList] = useState({});
  const [query, setQuery] = useSearchParams();
  let [error, setError] = useState("");

  const getProduct = async () => {
    let searchQuery = query.get("q") || "";
    console.log("쿼리 값: ", searchQuery);
    let url = `${USER_BASE_URL}${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();

    if (data.length < 1) {
      setError(`${searchQuery}와 일치하는 소환사가 없습니다.`);
    } else {
      setProductList(data);
    }

    setProductList(data);
  };

  useEffect(() => {
    getProduct();
  }, [query]);

  return (
    <div>
      <Navbar />

      <Wrapper>
        <div>
          {error ? (
            <h2>{error}</h2>
          ) : (
            <div>
              <ProfileHeader>
                <ProfileHeaderText>
                  <ProfileHeaderTitle>
                    {productList.map((match) => (
                      <div>
                        <div>소환사 명 : {match.name}</div>
                        <div>Level : {match.Level}</div>
                      </div>
                    ))}
                  </ProfileHeaderTitle>
                </ProfileHeaderText>
                {/* 미구현 버튼 */}
                <button>업데이트</button>
              </ProfileHeader>
              <ProfileDetail />
            </div>
          )}
        </div>
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  height: 200vh;
`;

const ProfileHeader = styled.div`
  margin-top: 100px;
  min-height: 20vh;
  margin-bottom: 20px;
  background-color: gray;
  display: flex;
  flex-direction: column;
  padding: 0 12px;
`;

const ProfileHeaderText = styled.div`
  position: relative;
  display: flex;
  height: 230px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ProfileHeaderTitle = styled.h2`
  margin-bottom: 16px;
  font-size: 24px;
  font-weight: 700;
  line-height: 1;
  color: white;
`;

const AugmentsName = styled.span`
  position: absolute;
  background-color: #000;
  width: 130px;
  color: #fff;
  top: -30px;
  text-align: center;
  padding-top: 3px;
  padding-bottom: 3px;
  border-radius: 5px;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
  transition: 0.5s;
  visibility: hidden;
  &::after {
    content: "";
    position: absolute;
    background-color: #000;
    width: 5px;
    height: 5px;
    transform: rotate(45deg) translateX(-50%);
    bottom: -5px;
    left: 50%;
  }
`;

export default Profile;
