import Td from "./Td";

const Tr = ({ info }) => {
  return (
    <tbody>
      {info["data"] &&
        info["data"].map((item) => <Td item={item} key={item} />)}
    </tbody>
  );
};

export default Tr;
