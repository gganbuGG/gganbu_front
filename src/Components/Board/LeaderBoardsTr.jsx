import Td from "./Td";

const Tr = ({ info }) => {
  return (
    <tbody>
      {info.map((item) => {
        return <Td key={item["data"].id} item={item} />;
      })}
    </tbody>
  );
};

export default Tr;
