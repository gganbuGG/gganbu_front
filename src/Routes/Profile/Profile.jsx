import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import ProductCard from "./ProfileDetail";
import { BASE_URL } from "../../api/API_Profile";

const Profile = () => {
  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams();
  let [error, setError] = useState("");

  const getProduct = async () => {
    let searchQuery = query.get("q") || "";
    console.log("쿼리 값: ", searchQuery);
    let url = `${BASE_URL}/profile?q=${searchQuery}`;
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
      <div>
        {error ? (
          <h2>{error}</h2>
        ) : (
          <div>
            {productList.length > 0 &&
              productList.map((menu) => (
                <div>
                  <ProductCard item={menu}></ProductCard>
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
