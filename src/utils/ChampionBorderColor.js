export default function ChampionBorderColor(event) {
  if (event === 1) {
    return "gray";
  } else if (event === 2) {
    return "green";
  } else if (event === 3) {
    return "blue";
  } else if (event === 4) {
    return "purple";
  } else {
    return "gold";
  }
}
