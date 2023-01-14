import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Board from "../../Components/Board/Board";
const LeaderBoards = () => {
  return (
    <main>
      <Navbar />
      <div className="mt-24">
        <Board />
      </div>
    </main>
  );
};

export default LeaderBoards;
