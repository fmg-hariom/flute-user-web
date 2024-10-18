"use client";

import React, { useState, useEffect } from "react";
import { Logo } from "../ui/Logo";
import useSocialIcons from "@/services/footer/footer.service";

type Props = {};

const Footer = (props: Props) => {
  const roles = ["a Coach", "an Astrologer", "a Listener"];
  const [currentRole, setCurrentRole] = useState(roles[0]);
  const [index, setIndex] = useState(0);
  const iconsStore = useSocialIcons();

  useEffect(() => {
    iconsStore.get.list();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % roles.length);
      setCurrentRole(roles[(index + 1) % roles.length]);
    }, 2000);
    return () => clearInterval(interval);
  }, [index]);

  const data = iconsStore?.SocialIcon?.list;

  return (
    <>
      <div className="w-screen flex flex-col sm:flex-row  justify-between bg-[#000] py-6 sm:py-9  px-4 sm:px-10 lg:px-32  text-[#D9D9D9]">
        <div>
          <div className="w-full flex flex-col items-center sm:items-start ">
            {/* <Logo width={98} height={99} /> */}

            {/* <img src="flute_white.png" width={99} height={98} /> */}
            <img
              src="/flute_white.png"
              className="w-20 h-20 sm:w-[99px] sm:h-[98px]"
              alt="flute"
            />

            <div className="flex flex-col justify-evenly gap-3 text-[#D9D9D9] mt-3 sm:mt-5  ">
              <h3 className="cursor-pointer">Your Way to Love & Happiness</h3>
            </div>
          </div>
          <div className="hidden sm:block">
            <p className="cursor-pointer">
              Show us some
              <svg
                className="inline-flex mt-[18px] ml-[10px]"
                width="39"
                height="37"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.44 0.991c-2.24 0 -3.367 0.966 -4.48 2.24 -1.113 -1.274 -2.24 -2.24 -4.48 -2.24S0 2.485 0 6.965c0 2.24 2.24 6.72 8.96 10.455C15.68 13.685 17.92 9.205 17.92 6.965c0 -4.48 -2.24 -5.974 -4.48 -5.974"
                  fill="red"
                />
              </svg>
              <span className="ml-[-10px]">on</span>
            </p>

            <div className="flex flex-row gap-2">
              {data.map((item) => (
                <a
                  key={item.id}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={item.image_url}
                    alt={`icon-${item.id}`}
                    style={{ width: "39px", height: "39px" }}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile view: Show these divs in mobile, hide in sm */}
        <div className="flex sm:hidden">
          <div className="flex flex-col justify-evenly gap-4 text-[#D9D9D9] mt-10">
            <h3 className="cursor-pointer">About us</h3>
            <h3 className="cursor-pointer w-[200px]">
              Join as <span className="text-[#FFA643]">{currentRole}</span>
            </h3>
            <h3 className="cursor-pointer">Work with us</h3>
            <h3 className="cursor-pointer">Contact us</h3>
          </div>
          <div className="flex flex-col justify-evenly gap-4 text-[#D9D9D9] mt-10">
            <h3 className="cursor-pointer">The App</h3>
            <h3 className="cursor-pointer">FAQs</h3>
            <h3 className="cursor-pointer">Terms of Service</h3>
            <h3 className="cursor-pointer">Privacy Policy</h3>
          </div>
        </div>

        {/* this is for desktop view  */}

        <div className="hidden sm:flex flex-col justify-evenly gap-4 sm:gap-1 text-[#D9D9D9] mt-10 sm:px-10">
          <h3 className="cursor-pointer">About us</h3>
          <h3 className="cursor-pointer w-[200px]">
            Join as <span className="text-[#FFA643]">{currentRole}</span>
          </h3>
          <h3 className="cursor-pointer">Work with us</h3>
          <h3 className="cursor-pointer">Contact us</h3>
        </div>
        <div className="hidden sm:flex  flex-col justify-evenly gap-4 sm:gap-1 text-[#D9D9D9] mt-10 sm:px-10">
          <h3 className="cursor-pointer">The App</h3>
          <h3 className="cursor-pointer">FAQs</h3>
          <h3 className="cursor-pointer">Terms of Service</h3>
          <h3 className="cursor-pointer">Privacy Policy</h3>
        </div>

        <div className="hidden sm:block sm:mt-8">
          <svg
            className="cursor-pointer"
            width="39"
            height="37"
            viewBox="0 0 41 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M25.4056 20.9408L27.8211 18.5252L20.5727 11.275L13.3242 18.5235L15.7415 20.9391L18.8643 17.8179V30.6936H22.281V17.8179L25.4056 20.9408Z"
              fill="#D9D9D9"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M33.7881 7.2125C26.4491 -0.126498 14.5522 -0.126498 7.21323 7.2125C-0.125766 14.5515 -0.125766 26.4483 7.21323 33.7873C14.5522 41.1263 26.4491 41.1263 33.7881 33.7873C41.1271 26.4483 41.1271 14.5515 33.7881 7.2125ZM31.3725 9.62809C28.4891 6.7447 24.5784 5.12482 20.5007 5.12482C16.4229 5.12482 12.5122 6.7447 9.62882 9.62809C6.74543 12.5115 5.12556 16.4222 5.12556 20.4999C5.12556 24.5776 6.74543 28.4884 9.62882 31.3718C12.5122 34.2551 16.4229 35.875 20.5007 35.875C24.5784 35.875 28.4891 34.2551 31.3725 31.3718C34.2559 28.4884 35.8757 24.5776 35.8757 20.4999C35.8757 16.4222 34.2559 12.5115 31.3725 9.62809Z"
              fill="#D9D9D9"
            />
          </svg>
        </div>

        <div className="sm:hidden mt-8">
          <p className="cursor-pointer">
            Show us some
            <svg
              className="inline-flex mt-[18px] ml-[10px]"
              width="39"
              height="37"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.44 0.991c-2.24 0 -3.367 0.966 -4.48 2.24 -1.113 -1.274 -2.24 -2.24 -4.48 -2.24S0 2.485 0 6.965c0 2.24 2.24 6.72 8.96 10.455C15.68 13.685 17.92 9.205 17.92 6.965c0 -4.48 -2.24 -5.974 -4.48 -5.974"
                fill="red"
              />
            </svg>
            <span className="ml-[-10px]">on</span>
          </p>

          <div className="flex flex-row gap-2">
            {data.map((item) => (
              <a
                key={item.id}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={item.image_url}
                  alt={`icon-${item.id}`}
                  style={{ width: "32px", height: "32x" }}
                />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="h-px bg-[#A0A0A0]"></div>
      <div className="bg-[#131313] text-center p-2 ">
        <h3 className="text-[#D9D9D9] font-workSans text-[13px] sm:text-[20px] leading-[30px]  sm:my-2">
          @2024 FluteConnect Pvt Ltd. All rights reserved.
        </h3>
      </div>
    </>
  );
};

export default Footer;
