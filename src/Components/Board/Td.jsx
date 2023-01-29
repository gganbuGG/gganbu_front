import { Link } from "react-router-dom";

import changeTierImg from "../../utils/TierImg";

const Td = ({ item, i }) => {
  return (
    <>
      <tr className=" border-2 border-gray-200 bg-white">
        <td className=" bg-slate-300 px-4 py-3 text-center">{i}</td>
        <td className="items-center bg-slate-300 px-4 py-3 text-center font-semibold ">
          <Link to={`/profile?q=${item.name}`}>{item.name}</Link>
        </td>
        <td className="flex items-center justify-center bg-slate-300 px-4 py-3 text-center">
          {changeTierImg(item.tier)}
          <span>{item.tier}</span>
        </td>
        <td className="bg-slate-300 px-4 py-3 text-center">{item.LP}</td>
        <td className="bg-slate-300 px-4 py-3 text-center">{item.winrate}</td>
        <td className="bg-slate-300 px-4 py-3 text-center">{item.win}</td>
        <td className=" bg-slate-300 px-4 py-3 text-center">{item.lose}</td>
      </tr>
    </>
  );
};

export default Td;
