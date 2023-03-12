import Td from "./Td";

const Tr = ({ info }) => {
  return (
    <tbody className=" sm:text-base">
      {info["data"] &&
        info["data"].slice(0, 10).map((item, i) => {
          return <Td key={item.id} item={item} i={i + 1} />;
        })}
    </tbody>
  );
};

export default Tr;
