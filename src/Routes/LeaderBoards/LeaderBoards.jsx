import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { getLeaderBoard } from "../../api/API_Profile";
import Board from "../../Components/Board/LeaderBoardsBoard";
import Navbar from "../../Components/Navbar/Navbar";

const LeaderBoards = () => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const result = await getLeaderBoard();
        console.log(result);
        setInfo(result);
      } catch (e) {
        console.error(e.message);
      }
    })();
  }, []);
  return (
    <Wrapper>
      <Navbar />
      <TotalRate>🎅전체 순위</TotalRate>
      <LastUpdate>최종 업데이트 : {info["updated_time"]}</LastUpdate>
      <Boards>
        <Board />
      </Boards>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 670vh;
  background-color: var(--main-bg-color);
`;

const TotalRate = styled.p`
  display: flex;
  justify-content: center;
  text-align: center;
  margin-top: 100px;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-size: 40px;
  line-height: 0px;
  font-weight: bold;
`;

const LastUpdate = styled.p`
  margin: 0px 400px;
  margin-top: 90px;
  margin-bottom: 40px;
  display: flex;
  justify-content: center;
  text-align: center;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-size: 20px;
  line-height: 0px;
  font-weight: bold;
`;

const Boards = styled.div`
  margin: 20px 0px;
`;

export default LeaderBoards;
