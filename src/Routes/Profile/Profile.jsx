import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import { USER_BASE_URL } from "../../api/API_User";
import { getUser } from "../../api/API_User";
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
                    {Object.values(productList).map((e) => (
                      <div>
                        <div className="mb-4">{e.name}</div>
                        <div>레벨: {e.Level}</div>
                      </div>
                    ))}
                  </ProfileHeaderTitle>
                </ProfileHeaderText>
                {/* 미구현 버튼 */} <Button>업데이트</Button>
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
  height: 20vh;
  margin-bottom: 50px;
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
  justify-content: flex-end;
  align-items: flex-start;
`;

const ProfileHeaderTitle = styled.div`
  margin-bottom: 16px;
  font-size: 24px;
  font-weight: 700;
  line-height: 1;
  color: white;
`;

const Button = styled.button`
  margin-bottom: 5px;
  border-radius: 100px;
  width: 100px;
  height: 50px;
  border: 1px solid black;
`;

export default Profile;
