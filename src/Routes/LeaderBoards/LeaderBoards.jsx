import React from "react";

import Board from "../../Components/Board/LeaderBoardsBoard";
import Navbar from "../../Components/Navbar/Navbar";

const LeaderBoards = () => {
  return (
    <main>
      <Navbar />
      <p className=" mt-20 flex justify-center text-center font-sans text-6xl font-bold">
        전체 순위
      </p>
      <div className="mt-20 mb-44">
        <Board />
      </div>
    </main>
  );
};

export default LeaderBoards;
