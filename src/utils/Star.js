import { FaStar } from "react-icons/fa";

export default function TierStar(event, rarity) {
  //   return "⭐".repeat(event);
  if (rarity === 0) {
    return Array(event).fill(<FaStar size="18" color="var(--cost1-color)" />);
  } else if (rarity === 1) {
    return Array(event).fill(<FaStar size="18" color="var(--cost2-color)" />);
  } else if (rarity === 2) {
    return Array(event).fill(<FaStar size="18" color="var(--cost3-color)" />);
  } else if (rarity === 4) {
    return Array(event).fill(<FaStar size="18" color="var(--cost4-color)" />);
  } else {
    return Array(event).fill(<FaStar size="18" color="var(--cost5-color)" />);
  }
}

// function StarColor(rarity){
//     if(rarity===0){

//     }
// }
