import React from "react";

const ArrowDown = () => {
  return (
    <div className="absolute -z-10 top-0 left-[-1px]">
      <div className="flex-col flex-center">
        <div className="w-[1px] h-[170px] bg-[#747474] -mb-2"></div>
        <svg width="14" height="9" viewBox="0 0 18 9" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M9 8.80001C8.3 8.80001 7.6 8.53001 7.07 8.00001L0.550004 1.48001C0.260004 1.19001 0.260004 0.710015 0.550004 0.420015C0.840004 0.130015 1.32 0.130015 1.61 0.420015L8.13 6.94001C8.61 7.42001 9.39001 7.42001 9.87 6.94001L16.39 0.420015C16.68 0.130015 17.16 0.130015 17.45 0.420015C17.74 0.710015 17.74 1.19001 17.45 1.48001L10.93 8.00001C10.4 8.53001 9.7 8.80001 9 8.80001Z"
            fill="#747474"
          />
        </svg>
      </div>
    </div>
  );
};

export default ArrowDown;
