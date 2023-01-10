import Td from "./Td";

const Tr = ({ info }) => {
  return (
    <tbody>
      {info.slice(0, 10).map((item) => {
        return <Td key={item.id} item={item} />;
      })}
    </tbody>
  );
};

export default Tr;
