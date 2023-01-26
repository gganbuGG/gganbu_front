import Td from "./Td";

const Tr = ({ info }) => {
  return (
    <tbody>
      {/* {info.map((item) => {
        return <Td key={item} item={item} />;
      })} */}
      {info["data"].map((item) => (
        <Td item={item} key={item} />
      ))}
    </tbody>
  );
};

export default Tr;
