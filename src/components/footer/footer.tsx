"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { Logo } from "../ui/Logo";
import logo1 from "../../../public/images/footer/Group 788.png";
import logo2 from "../../../public/images/footer/Group 787.png";
import logo3 from "../../../public/images/footer/Ellipse 48.png";
import logo4 from "../../../public/images/footer/Ellipse 49.png";
import logo5 from "../../../public/images/footer/Ellipse 50.png";
import logo6 from "../../../public/images/footer/Ellipse 51.png";

import useSocialIcons from "@/services/footer/footer.service";
type Props = {};

const Footer = (props: Props) => {
  const iconsStore = useSocialIcons();

  useEffect(() => {
    iconsStore.get.list();
  }, []);

  console.log("social icon from api", iconsStore);
  return (
    <>
      <div className="w-screen flex flex-row flex-wrap justify-between bg-[#131313] py-6 sm:py-9 px-4 sm:px-16">
        <div>
          <Logo width={98} height={99} />
        </div>
        <div className="flex justify-evenly gap-12 text-[#A0A0A0] p-10 px-10 sm:px-24">
          <h3>FAQs</h3>
          <h3>Terms of Service</h3>
          <h3>Privacy Policy</h3>
        </div>
        <div className="flex flex-col gap-2">
          {/* <button>
                        <svg className='ml-56' width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M25.4056 20.9408L27.8211 18.5252L20.5727 11.275L13.3242 18.5235L15.7415 20.9391L18.8643 17.8179V30.6936H22.281V17.8179L25.4056 20.9408Z" fill="#FFA643" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M33.7881 7.2125C26.4491 -0.126498 14.5522 -0.126498 7.21323 7.2125C-0.125766 14.5515 -0.125766 26.4483 7.21323 33.7873C14.5522 41.1263 26.4491 41.1263 33.7881 33.7873C41.1271 26.4483 41.1271 14.5515 33.7881 7.2125ZM31.3725 9.62809C28.4891 6.7447 24.5784 5.12482 20.5007 5.12482C16.4229 5.12482 12.5122 6.7447 9.62882 9.62809C6.74543 12.5115 5.12556 16.4222 5.12556 20.4999C5.12556 24.5776 6.74543 28.4884 9.62882 31.3718C12.5122 34.2551 16.4229 35.875 20.5007 35.875C24.5784 35.875 28.4891 34.2551 31.3725 31.3718C34.2559 28.4884 35.8757 24.5776 35.8757 20.4999C35.8757 16.4222 34.2559 12.5115 31.3725 9.62809Z" fill="#FFA643" />
                        </svg>
                    </button> */}
          <h3 className="ml-40 text-white text-2xl font-bold">Follow Us</h3>
          <div className="flex flex-row gap-2">
            <Image
              src={logo1}
              style={{ width: "39px", height: "39px" }}
              alt=""
            ></Image>
            <Image
              src={logo2}
              style={{ width: "39px", height: "39px" }}
              alt=""
            ></Image>
            <Image
              src={logo3}
              style={{ width: "39px", height: "39px" }}
              alt=""
            ></Image>
            <Image
              src={logo4}
              style={{ width: "39px", height: "39px" }}
              alt=""
            ></Image>
            <Image
              src={logo5}
              style={{ width: "39px", height: "39px" }}
              alt=""
            ></Image>
            <Image
              src={logo6}
              style={{ width: "39px", height: "39px" }}
              alt=""
            ></Image>
          </div>
        </div>
      </div>
      <div className="h-px bg-[#A0A0A0]"></div>
      <div className="bg-[#131313] text-center p-2">
        <h3 className="text-[#A0A0A0]">
          @2019 Fun Max Games Private Ltd. All rights reserved
        </h3>
      </div>
    </>
  );
};

export default Footer;
