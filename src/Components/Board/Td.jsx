const Td = ({ item }) => {
  return (
    <>
      <tr className="border-2 border-gray-200 bg-white">
        <td className="px-4 py-3 text-center">{item.rank}</td>
        <td className="px-4 py-3 text-center">
          <a href="#">{item.name}</a>
        </td>
        <td className="px-4 py-3 text-center">{item.tier}</td>
        <td className="px-4 py-3 text-center">{item.LP}</td>
        <td className="px-4 py-3 text-center">{item.rate}</td>
        <td className="px-4 py-3 text-center">{item.win}</td>
        <td className="px-4 py-3 text-center">{item.lose}</td>
      </tr>
    </>
  );
};

export default Td;
