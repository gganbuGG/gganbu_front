import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import "./Deck.css";

const Deck = () => {
  return (
    <main>
      <Navbar />
      <div class="main relative min-h-screen w-full py-[80px] lg:min-h-[1300px]">
        <main class="container">
          <header class=" meta-header-content  flex flex-col px-[12px] sm:px-[32px]">
            <div class="relative flex h-[230px] flex-col justify-center lg:h-[140px]">
              <h2 class="mb-[16px] text-[24px] font-bold leading-none text-[#CA9372]">
                메타 통계
              </h2>
              <p class="text-[12px] leading-[130%] text-[#D6D6D6] lg:text-[#999]">
                최종 업데이트: 2023-01-05 20:25:54
              </p>
            </div>
          </header>

          <div class="flex flex-col gap-[16px] "></div>
        </main>
      </div>
    </main>
  );
};

export default Deck;
