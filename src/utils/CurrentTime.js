import Moment from "react-moment";

export default function MomentDateChange() {
  const nowTime = Date.now();
  return <Moment>{nowTime}</Moment>;
}
