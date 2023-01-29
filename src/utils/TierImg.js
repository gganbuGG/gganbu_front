import CHALLENGER from "../images/TierImg/CHALLENGER.png";
import GRANDMASTER from "../images/TierImg/GRANDMASTER.png";
import MASTER from "../images/TierImg/MASTER.png";
export default function changeTierImg(event) {
  switch (event) {
    case "CHALLENGER":
      return (
        <img className="mr-3 h-16 w-16" src={CHALLENGER} alt="CHALLENGER" />
      );
    case "GRANDMASTER":
      return (
        <img className="mr-3 h-16 w-16" src={GRANDMASTER} alt="GRANDMASTER" />
      );
    case "MASTER":
      return <img className="mr-3 h-16 w-16" src={MASTER} alt="MASTER" />;

    default:
      break;
  }
}
