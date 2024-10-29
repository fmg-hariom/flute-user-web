"use client";

import React, { useState, useEffect } from "react";

import FluteCareer from "@/components/workWithUs/fluteCareer";

interface ContentSectionProps {
  title: string;
  description: string;
  imageSrc: string;
}

const ContentSection: React.FC<ContentSectionProps> = ({
  title,
  description,
  imageSrc,
}) => {
  const [imageWidth, setImageWidth] = useState<string>("auto");

  return (
    <div className="mb-[40px]  sm:mt-[150px] font-urbanist flex flex-col  sm:flex-row items-center  w-full">
      <div className="text-[16px] leading-[25px] sm:font-[500]  sm:text-[30px] sm:leading-[42px] sm:w-[50%] w-full sm:mr-[20px]">
        <div className="flex flex-col items-start mb-8 text-[#ffffffcc] font-bold sm:text-[70px] sm:leading-[91px]">
          <h2>{title}</h2>
        </div>
        <span className="sm:text-[30px] sm:leading-[39px] text-[##ffffffcc]  sm:font-[500] ">
          {description}
        </span>
      </div>
      <div className="w-[35%] sm:w-[50%] h-full flex justify-center   ">
        <img src={imageSrc} alt="FLUTE logo" className="   object-contain" />
      </div>
    </div>
  );
};

const WorkWithUs = () => {
  return (
    <>
      <div className="w-screen flex flex-col  justify-between bg-[#000] py-4 sm:py-6  px-4 sm:px-10 lg:px-20   text-[#D9D9D9]">
        <div className="  font-urbanist flex flex-col sm:flex-row items-center sm:my-10 w-full">
          <div className="text-[16px] leading-[25px] sm:font-[400] text-[#ffffffcc] sm:text-[36px] sm:leading-[54px] sm:w-[50%] w-full sm:mr-[20px] font-charter">
            <h2 className="text-[100px] leading-[120px] font-bold font-urbanist tracking-[2px]">
              Create a Career you Love
            </h2>

            <p className=" text-[30px] leading-[42px] font-[500] mt-[40px]">
              Join the team Behind Flute & Help shape a more positive World for
              Users EveryWhere
            </p>
          </div>
          <div className="w-[35%] sm:w-[50%] h-[400px] flex justify-center ">
            <img
              src="work-with-us.png"
              // controls
              className="w-  object-cover rounded-[40px]"
            />
          </div>
        </div>

        <ContentSection
          title="Meet Astha Pruthi,Flute Founder & CEO"
          description="“At Flute, we’re not just creating an app—we’re driving a movement. A movement that demonstrates how guiding people in love, personal growth, and healing is not only a meaningful mission but also a smart business strategy. We believe that authentic connections and supportive guidance can impact lives, transform relationships, and even reshape industries. By becoming part of our team, you’ll contribute to something truly impactful—a chance to shape the future of love and life journeys. Together, let’s create a world that thrives on compassion and connection.”"
          imageSrc="work-with-us-astha.png"
        />

        <ContentSection
          title="Join the Flute Family—Empowering Love & Life Journeys Together"
          description="At Flute, we believe in creating opportunities that not only allow you to make an impact but also inspire continuous personal and professional growth. Whether you're working from the office or remotely, every role is designed to help you expand your skills, connect with others, and be part of something truly meaningful. Never. Stop. Growing.Explore a career where you can make a real difference in people's lives, fostering love, wellness, and positive transformation."
          imageSrc="work-with-us-2.png"
        />

        {/* <div className="mt-20 flex justify-center">
          <button className="bg-black border border-[#D9D9D9] text-white text-[40px] leading-[50px] font-semibold py-[20px] px-[140px] rounded-full">
            Join Now
          </button>
        </div> */}

        {/* <div className="mt-20 flex justify-center">
          <button className="bg-black border border-[#D9D9D9] text-white text-[40px] leading-[50px] font-semibold py-[20px] px-[140px] rounded-full transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-gray-800 hover:shadow-lg">
            Join Now
          </button>
        </div> */}

        <div className="mt-20 flex justify-center">
          <button className="bg-black border border-[#D9D9D9] text-white text-[40px] leading-[50px] font-semibold py-[20px] px-[140px] rounded-full transition-transform duration-300 ease-in-out hover:scale-105">
            Join Now
          </button>
        </div>

        <FluteCareer />
      </div>
    </>
  );
};

export default WorkWithUs;
