import { FaStar } from "react-icons/fa";

export default function ChampionStatsTierStar(event, rarity) {
  if (rarity === 0) {
    return Array(event).fill(<FaStar size="16" color="var(--cost0-color)" />);
  } else if (rarity === 1) {
    return Array(event).fill(<FaStar size="16" color="var(--cost1-color)" />);
  } else if (rarity === 2) {
    return Array(event).fill(<FaStar size="16" color="var(--cost2-color)" />);
  } else if (rarity === 4) {
    return Array(event).fill(<FaStar size="16" color="var(--cost4-color)" />);
  } else {
    return Array(event).fill(<FaStar size="16" color="var(--cost6-color)" />);
  }
}
