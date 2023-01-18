import { Link } from "react-router-dom";

const Td = ({ item }) => {
  return (
    <>
      <tr className=" border-2 border-gray-200 bg-white">
        <td className=" px-4 py-3 text-center">{item.rank}</td>
        <td className="items-center px-4 py-3 text-center ">
          <Link to={`/profile?q=${item.name}`}>{item.name}</Link>
        </td>
        <td className="flex items-center justify-center px-4 py-3 text-center">
          <img className="mr-3 h-16 w-16" src={item?.tierImg} alt="tierImg" />
          <span>{item.tier}</span>
        </td>
        <td className="px-4 py-3 text-center">{item.LP}</td>
        <td className="px-4 py-3 text-center">{item.rate}</td>
        <td className="px-4 py-3 text-center">{item.win}</td>
        <td className=" px-4 py-3 text-center">{item.lose}</td>
      </tr>
    </>
  );
};

export default Td;
