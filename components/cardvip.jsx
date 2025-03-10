"use client";
import "@/styles/cardvip.css";
export default function Cardvip({ progress = 80.00, username = "douglas" }) {
  return (
    <div className="cardvip w-full max-w-[450px] p-2 m-1 border-1 border-solid border-[var(--logo-color)] rounded-lg">
      <div className="flex items-center w-full mb-4 md:mb-0 ">
        <img src="images/badges/rank1.webp" alt="icon" className="w-8 h-8 mr-2" />
        <span className="text-lg md:text-2lg truncate RatioSemiBold">{username}</span>
      </div>
      <div className="flex flex-col items-start justify-center w-full mt-2">
        <span className="mb-2 RatioSemiBold text-white text-sm">Your VIP Progress</span>
        <div className="w-full bg-gray-300 rounded-full h-1.5 dark:bg-gray-700 relative">
          <div className="bg-[#00cd73] h-1.5 rounded-full" style={{ width: `${progress}%` }}></div>
          <span className="absolute right-0 -top-6 text-sm" >{`${progress}%`}</span>
        </div>
      </div>
      <div className="flex flex-row justify-between w-full mt-2 RatioRegular text-gray-500">
        <div className="flex items-center mb-2">
          <img src="images/badges/rank1.webp" alt="Apex" className="w-8 h-8 mr-2" />
          <span>Rank 1</span>
        </div>
        <div className="flex items-center mb-2 ml-auto">
          <img src="images/badges/rank2.webp" alt="Apex" className="w-8 h-8 mr-2" />
          <span>Rank 2</span>
        </div>
      </div>
    </div>
  );
}
