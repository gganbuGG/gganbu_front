export function ChampionBorderColor(event) {
  if (event === 1) {
    return "var(--cost0-color)";
  } else if (event === 2) {
    return "var(--cost1-color)";
  } else if (event === 3) {
    return "var(--cost2-color)";
  } else if (event === 4) {
    return "var(--cost4-color)";
  } else {
    return "var(--cost6-color)";
  }
}

export function ProfileChampionBorderColor(event) {
  if (event === 0) {
    return "var(--cost0-color)";
  } else if (event === 1) {
    return "var(--cost1-color)";
  } else if (event === 2) {
    return "var(--cost2-color)";
  } else if (event === 4) {
    return "var(--cost4-color)";
  } else {
    return "var(--cost6-color)";
  }
}
