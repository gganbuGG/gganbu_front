import { Link } from "react-router-dom";
import CHALLENGER from "../../images/TierImg/CHALLENGER.png";
import GRANDMASTER from "../../images/TierImg/GRANDMASTER.png";
import MASTER from "../../images/TierImg/MASTER.png";

const Td = ({ item, i }) => {
  function changeTierImg(event) {
    switch (event) {
      case "CHALLENGER":
        return (
          <img className="mr-3 h-16 w-16" src={CHALLENGER} alt="CHALLENGER" />
        );
      case "GRANDMASTER":
        return (
          <img className="mr-3 h-16 w-16" src={GRANDMASTER} alt="GRANDMASTER" />
        );
      case "MASTER":
        return <img className="mr-3 h-16 w-16" src={MASTER} alt="MASTER" />;

      default:
        break;
    }
  }

  return (
    <>
      <tr className=" border-2 border-gray-200 bg-white">
        <td className=" bg-slate-300 px-4 py-3 text-center">{i}</td>
        <td className="items-center bg-slate-300 px-4 py-3 text-center ">
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
