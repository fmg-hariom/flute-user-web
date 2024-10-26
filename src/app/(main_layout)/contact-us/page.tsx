"use client";

import React, { useState, useEffect } from "react";
import MapComponent from "@/components/mapComponent/MapComponent";

const ContactUs = () => {
  return (
    <>
      <div className="w-screen flex flex-col justify-between bg-[#000] py-4 sm:py-6 px-4 sm:px-10 lg:px-20 text-[#D9D9D9]">
        <div className="w-full flex flex-col justify-center items-center mb-8">
          <div className="text-[30px] sm:text-[40px] leading-[56px] tracking-[1px] text-[#c1cfe3] font-bold mb-4">
            Contact Us
          </div>
          <div className="w-[100%] rounded pr-20 h-[1px] my-3 bg-[#fffccc]"></div>

          <div className="flex flex-col items-center rounded-lg w-full sm:w-[100%] mt-8">
            <div className="w-full flex relative">
              {/* Blue Section */}
              <div className="w-[65%] bg-[#193A4B]/70 text-white p-4 rounded-l-[40px] backdrop-blur-sm pl-[125px]">
                <div className=" font-urbanist">
                  <h2 className="text-[20px] leading-[24px] mb-[20px] sm:text-[48px] sm:leading-[58px] font-bold  sm:pt-[40px]">
                    Get in
                    <span className="text-[#FFA643]"> Touch</span>
                  </h2>
                  <p className="text-[16px] leading-[25px] sm:font-[500] text-[#ffffffcc] sm:text-[24px] sm:leading-[33px] w-[50%]">
                    Our executives are standing by for your assistance 24/7
                  </p>
                </div>
                <div className="my-[40px] w-[50%]  font-urbanist bg-[#000]  p-4 rounded-[30px] pl-8">
                  <h2 className="text-[20px] leading-[24px] mb-[10px] text-white sm:text-[22px] sm:leading-[35px] font-bold ">
                    Phone Call
                  </h2>

                  <p className="text-[16px] leading-[25px] text-[#A0A0A0] sm:text-[20px] sm:leading-[29px] font-normal">
                    Call us 24*7, we will answer you!
                  </p>

                  <p className="text-[16px] leading-[25px]  text-[#FFA643] sm:text-[20px] sm:leading-[29px] font-normal">
                    +91 7850098500
                  </p>
                </div>
                <div className="my-[40px] w-[50%]  font-urbanist bg-[#000]  p-4 rounded-[30px] pl-8">
                  <h2 className="text-[20px] leading-[24px] mb-[10px] text-white sm:text-[22px] sm:leading-[35px] font-bold ">
                    Email
                  </h2>

                  <p className="text-[16px] leading-[25px] text-[#A0A0A0] sm:text-[20px] sm:leading-[29px] font-normal">
                    Get solutions beamed to your inbox!
                  </p>

                  <p className="text-[16px] leading-[25px]  text-[#FFA643] sm:text-[20px] sm:leading-[29px] font-normal">
                    support@fluteconnect.com
                  </p>
                </div>
              </div>

              {/* Yellow Section */}
              <div className="w-[35%] bg-[#FFA643] text-white p-4 rounded-r-[40px] flex justify-center items-center">
                {/* Placeholder Content */}
              </div>

              {/* Center Card */}
              <div className="absolute top-7 left-[65%] transform -translate-x-1/2 w-[460px] h-[90%]  bg-white text-black rounded-lg z-10 shadow-lg flex flex-col items-center">
                <div className="w-full h-full rounded-lg overflow-hidden">
                  <MapComponent />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
