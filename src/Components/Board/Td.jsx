import { Link } from "react-router-dom";

const Td = ({ item }) => {
  return (
    <>
      <tr className=" border-2 border-gray-200 bg-white">
        <td className=" bg-slate-300 px-4 py-3 text-center">1</td>
        <td className="items-center bg-slate-300 px-4 py-3 text-center ">
          <Link to={`/profile?q=${item.name}`}>{item.name}</Link>
        </td>
        <td className="flex items-center justify-center bg-slate-300 px-4 py-3 text-center">
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
