import Td from "./Td";

const Tr = ({ info }) => {
  return (
    <tbody>
      {info["data"] &&
        info["data"].map((item, i) => <Td item={item} key={item} i={i + 1} />)}
    </tbody>
  );
};

export default Tr;
