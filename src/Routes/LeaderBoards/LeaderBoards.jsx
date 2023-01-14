import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Board from "../../Components/Board/LeaderBoardsBoard";
const LeaderBoards = () => {
  return (
    <main>
      <Navbar />
      <div className="my-32">
        <Board />
      </div>
    </main>
  );
};

export default LeaderBoards;
