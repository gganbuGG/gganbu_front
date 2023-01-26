import { useEffect, useState } from "react";
import { getLeaderBoard } from "../../api/API_Profile";
import LeaderBoardsTr from "./LeaderBoardsTr";

const Board = () => {
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
    <div className=" container mx-auto h-screen max-w-screen-lg">
      <table className="min-w-full table-auto bg-slate-500 text-black">
        <thead className="justify-between">
          <th className="px-4 py-3 text-white">순위</th>
          <th className="px-4 py-3 text-white">소환사</th>
          <th className="px-4 py-3 text-white">티어</th>
          <th className="px-4 py-3 text-white">LP</th>
          <th className="px-4 py-3 text-white">승률</th>
          <th className="px-4 py-3 text-white">승</th>
          <th className="px-4 py-3 text-white">패</th>
        </thead>
        <LeaderBoardsTr key={info["data"]} info={info} />
      </table>
    </div>
  );
};

export default Board;
