import Footer from "@/components/footer/footer";
import MainHeader from "@/components/headers/MainHeader";
import React from "react";
import { Montserrat_Alternates } from "next/font/google";

const montserratAlternates = Montserrat_Alternates({
  weight: "400", // Specify the font weights you need
  subsets: ["latin"], // Include any subsets you need
  display: "swap", // Controls how the font is displayed while loading
});

export default function Notificaiton() {
  return (
    <>
      <div className="py-4 sm:py-8 px-2 sm:px-16 bg-black text-white">

        {/* NotificationHead */}
        <div className="flex  justify-between flex-row items-center space-x-2 pb-3 py-2">
          <div></div>
          <h1 className="text-4xl font-extrabold  ">NOTIFICATION</h1>
          <button
            type="submit"
            className=" border-[0.9px] text-xl border-white rounded-full font-['Poppins'] py-2 px-6 "
          >
            <svg
              className="inline mr-2"
              width="14"
              height="28"
              viewBox="0 0 14 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3.90007 14L12.1496 22.2495L10.4999 23.8992L1.42557 14.8248C1.20685 14.606 1.08398 14.3094 1.08398 14C1.08398 13.6906 1.20685 13.3939 1.42557 13.1752L10.4999 4.10083L12.1496 5.7505L3.90007 14Z"
                fill="white"
              />
            </svg>
            Back
          </button>
        </div>
        {/*Maincontainer*/}
        <div className="bg-[#242424] border-t-[0.9px] font-['Poppins'] p-6">
          {" "}
          <div className="bg-[#1A1C1E] tracking-wider relative ml-4 mb-4 px-6 py-3 rounded-[16px] ">
            <h1 className="text-2xl font-bold">Lost Sex?</h1>
            <span className="w-[16px] h-[16px]  cursor-pointer absolute top-[1rem] right-[1.2rem]">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path
                  fill="#ffa643"
                  d="M170.5 51.6L151.5 80l145 0-19-28.4c-1.5-2.2-4-3.6-6.7-3.6l-93.7 0c-2.7 0-5.2 1.3-6.7 3.6zm147-26.6L354.2 80 368 80l48 0 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-8 0 0 304c0 44.2-35.8 80-80 80l-224 0c-44.2 0-80-35.8-80-80l0-304-8 0c-13.3 0-24-10.7-24-24S10.7 80 24 80l8 0 48 0 13.8 0 36.7-55.1C140.9 9.4 158.4 0 177.1 0l93.7 0c18.7 0 36.2 9.4 46.6 24.9zM80 128l0 304c0 17.7 14.3 32 32 32l224 0c17.7 0 32-14.3 32-32l0-304L80 128zm80 64l0 208c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-208c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0l0 208c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-208c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0l0 208c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-208c0-8.8 7.2-16 16-16s16 7.2 16 16z"
                />
              </svg>
            </span>
            <p className="text-[#A0A0A0] mt-2 ">
              {" "}
              Connect with intimacy coach.
            </p>
            <p className="text-[#A0A0A0] mt-2 ">12 May, 2024 10:13 AM</p>
          </div>
          <div className="bg-black relative tracking-wider ml-4 mb-4 px-6 py-3 rounded-[16px] ">
            <h1 className="text-2xl font-bold">Partner vs Family?</h1>
            <span className="w-[16px] h-[16px] absolute top-[1rem] cursor-pointer right-[1.2rem]">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path
                  fill="#ffa643"
                  d="M170.5 51.6L151.5 80l145 0-19-28.4c-1.5-2.2-4-3.6-6.7-3.6l-93.7 0c-2.7 0-5.2 1.3-6.7 3.6zm147-26.6L354.2 80 368 80l48 0 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-8 0 0 304c0 44.2-35.8 80-80 80l-224 0c-44.2 0-80-35.8-80-80l0-304-8 0c-13.3 0-24-10.7-24-24S10.7 80 24 80l8 0 48 0 13.8 0 36.7-55.1C140.9 9.4 158.4 0 177.1 0l93.7 0c18.7 0 36.2 9.4 46.6 24.9zM80 128l0 304c0 17.7 14.3 32 32 32l224 0c17.7 0 32-14.3 32-32l0-304L80 128zm80 64l0 208c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-208c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0l0 208c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-208c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0l0 208c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-208c0-8.8 7.2-16 16-16s16 7.2 16 16z"
                />
              </svg>
            </span>
            <p className="text-[#A0A0A0] mt-2 ">
              {" "}
              Will your family love your partner?
            </p>
            <p className="text-[#A0A0A0] mt-2 ">12 May, 2024 10:13 AM</p>
          </div>
        </div>
      </div>
    </>
  );
}
