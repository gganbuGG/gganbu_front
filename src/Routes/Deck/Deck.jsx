import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import "./Deck.css";

const Deck = () => {
  return (
    <main>
      <Navbar />
      <div class="main relative min-h-screen w-full py-[80px] lg:min-h-[1300px]">
        <main class="container">
          {/* <header className="header-content mb-5 flex flex-col bg-center bg-no-repeat px-3 sm:px-8">
            <div className="relative  flex h-56 flex-col justify-center lg:h-36">
              <h2 className=" mb-4 text-2xl font-bold leading-none text-white">
                메타 통계
              </h2>
            </div>
          </header> */}
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
        </main>
      </div>
    </main>
  );
};

export default Deck;
