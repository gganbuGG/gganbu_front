import { useEffect, useState } from "react";
import { getLeaderBoard } from "../../api/API_Profile";
import Tr from "./Tr";

const Board = () => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const result = await getLeaderBoard();
        setInfo(result);
      } catch (e) {
        console.error(e.message);
      }
    })();
  }, []);
  return (
    <div className=" container mx-auto sm:min-h-screen sm:text-sm ">
      <table className="mb-10 w-full overflow-x-scroll bg-slate-500 text-black sm:w-10 sm:overflow-x-auto">
        <thead className="justify-between">
          <th className="px-4 py-3 text-white">순위</th>
          <th className="px-4 py-3 text-white">소환사</th>
          <th className="px-4 py-3 text-white">티어</th>
          <th className="px-4 py-3 text-white">LP</th>
          <th className="px-4 py-3 text-white">승률</th>
          <th className="px-4 py-3 text-white">승</th>
          <th className="px-4 py-3 text-white">패</th>
        </thead>
        <Tr info={info} />
      </table>
    </div>
  );
};

export default Board;
