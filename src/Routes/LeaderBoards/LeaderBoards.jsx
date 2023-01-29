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

      <p className=" mt-20 flex justify-center text-center font-sans text-6xl font-bold">
        🎅전체 순위
      </p>
      <p className=" mx-96 mt-20 flex justify-center bg-slate-50 text-center font-sans font-bold">
        최종 업데이트 : {info["updated_time"]}
      </p>

      <div className="mt-20 mb-44">
        <Board />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: var(--main-bg-color);
`;

export default LeaderBoards;
