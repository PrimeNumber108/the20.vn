import { Link } from "@/i18n/routing";
import React from "react";

const PhoneFixed = () => {
  return (
    <div className="fixed bottom-5 right-2.5 z-30 cursor-pointer">
      <Link href="tel:0833800110">
        <div className="flex items-center">
          <div className="w-[44px] h-[44px] bg-main flex-center rounded-full border-[4px] border-white z-30 drop-shadow-light">
            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="29" viewBox="0 0 21 29" fill="none">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M1.15021 4.57031C1.84556 1.62109 8.01778 -0.683626 8.91179 2.16269L10.3956 6.63925C10.531 8.66323 8.47879 9.83671 6.91886 11.1949C8.05565 14.587 9.6015 17.4306 11.8327 20.2274C13.8214 19.6548 15.92 18.5702 17.5462 19.7831L20.4983 23.4617C22.4024 25.7593 17.1133 29.6873 14.2601 28.6691C6.00781 25.7241 -0.859506 13.0977 1.15021 4.57031Z"
                fill="#FBFBFB"
              />
            </svg>
          </div>
          <p className="text-[20px] font-semibold bg-white text-shade60 pr-2.5 pl-4 rounded-r-[20px] -ml-2.5 z-20 drop-shadow-light">
            0833800110
          </p>
        </div>
      </Link>
    </div>
  );
};

export default PhoneFixed;
