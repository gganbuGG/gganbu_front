import React from "react";

import Board from "../../Components/Board/LeaderBoardsBoard";

const LeaderBoards = () => {
  return (
    <main>
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
