import { Link } from "react-router-dom";
import changeTierImg from "../../utils/TierImg";

const Td = ({ item, i }) => {
  return (
    <>
      <tr className="border-2 border-gray-200 bg-white">
        <td className="bg-slate-300 px-4 py-3 text-center">{i}</td>
        <td className="items-center bg-slate-300 px-4 py-3 text-center font-semibold sm:text-base">
          <img
            className="ml-18 absolute h-12 w-12 rounded-full sm:hidden"
            src={item.profileIcon}
            alt="none"
          />
          <Link to={`/profile?q=${item.name}`}>{item.name}</Link>
        </td>
        <td className="sm:text- flex items-center justify-center bg-slate-300 px-4 py-3 text-center ">
          <div className="hidden">{changeTierImg(item.tier)}</div>
          <span>{item.tier}</span>
        </td>
        <td className="bg-slate-300 px-4 py-3 text-center sm:text-base">
          {item.LP}
        </td>
        <td className="bg-slate-300 px-4 py-3 text-center sm:text-base">
          {item.winrate}
        </td>
        <td className="bg-slate-300 px-4 py-3 text-center sm:text-base">
          {item.win}
        </td>
        <td className="bg-slate-300 px-4 py-3 text-center sm:text-base">
          {item.lose}
        </td>
      </tr>
    </>
  );
};

export default Td;
