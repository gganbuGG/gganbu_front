import Moment from "react-moment";

export default function MomentDateChange() {
  const nowTime = Date.now();
  // Sun Aug 23 2020 15:43:49 GMT+0900
  return <Moment>{nowTime}</Moment>;
}
