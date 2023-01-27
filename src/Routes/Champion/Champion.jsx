import React, { useState, useEffect } from "react";
import { getChampion } from "../../api/API_Profile";
import Navbar from "../../Components/Navbar/Navbar";
import ChampionBox from "./ChampionBox";

export default function Champion() {
  return (
    <div>
      <Navbar />
      <h1 className="mt-48 mb-48 flex items-center justify-center text-7xl">
        챔피언 통계
      </h1>
      <ChampionBox />
    </div>
  );
}
