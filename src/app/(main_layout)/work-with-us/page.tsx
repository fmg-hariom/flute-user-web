"use client";

import React from "react";
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
  return (
    <div className="mb-10 sm:mb-[40px] sm:mt-[150px] font-urbanist flex flex-col sm:flex-row items-center w-full">
      <div className="text-[14px] leading-[22px] sm:leading-[25px] sm:font-[500] sm:text-[30px] sm:w-[50%] w-full sm:mr-[20px] px-4">
        <div className="flex flex-col items-start mb-6 text-[#ffffffcc] font-bold text-[28px] sm:text-[70px] sm:leading-[91px]">
          <h2>{title}</h2>
        </div>
        <span className="text-[16px] leading-[24px] sm:text-[30px] sm:leading-[39px] text-[#ffffffcc] sm:font-[500]">
          {description}
        </span>
      </div>
      <div className="w-[80%] sm:w-[50%] h-auto flex justify-center mt-6 sm:mt-0">
        <img src={imageSrc} alt="FLUTE logo" className="object-contain" />
      </div>
    </div>
  );
};

const WorkWithUs = () => {
  return (
    <div className="w-screen flex flex-col justify-between bg-[#000] py-4 sm:py-6 px-4 sm:px-10 lg:px-20 text-[#D9D9D9]">
      <div className="font-urbanist flex flex-col sm:flex-row items-center sm:my-10 w-full">
        <div className="text-[18px] leading-[26px] sm:font-[400] text-[#ffffffcc] sm:text-[36px] sm:leading-[54px] sm:w-[50%] w-full sm:mr-[20px] font-charter px-4">
          <h2 className="text-[30px] leading-[36px] sm:text-[100px] sm:leading-[120px] font-bold tracking-[2px]">
            Create a Career you Love
          </h2>
          <p className="text-[18px] leading-[26px] sm:text-[30px] sm:leading-[42px] font-[500] mt-4 sm:mt-[40px]">
            Join the team Behind Flute & Help shape a more positive World for
            Users Everywhere
          </p>
        </div>
        <div className="w-[80%] sm:w-[50%] h-[250px] sm:h-[400px] flex justify-center mt-6 sm:mt-0">
          <img
            src="work-with-us.png"
            className="object-cover rounded-[20px] sm:rounded-[40px]"
          />
        </div>
      </div>

      <ContentSection
        title="Meet Astha Pruthi, Flute Founder & CEO"
        description="At Flute, we’re not just creating an app—we’re driving a movement. A movement that demonstrates how guiding people in love, personal growth, and healing is not only a meaningful mission but also a smart business strategy. We believe that authentic connections and supportive guidance can impact lives, transform relationships, and even reshape industries. By becoming part of our team, you’ll contribute to something truly impactful—a chance to shape the future of love and life journeys. Together, let’s create a world that thrives on compassion and connection."
        imageSrc="work-with-us-astha.png"
      />

      <ContentSection
        title="Join the Flute Family—Empowering Love & Life Journeys Together"
        description="At Flute, we believe in creating opportunities that not only allow you to make an impact but also inspire continuous personal and professional growth. Whether you're working from the office or remotely, every role is designed to help you expand your skills, connect with others, and be part of something truly meaningful.

Never. Stop. Growing.

Explore a career where you can make a real difference in people's lives, fostering love, wellness, and positive transformation."
        imageSrc="work-with-us-2.png"
      />

      <div className="mt-10 sm:mt-20 flex justify-center">
        <button className="bg-black border border-[#D9D9D9] text-white text-[20px] sm:text-[40px] leading-[30px] sm:leading-[50px] font-semibold py-[10px] sm:py-[20px] px-[70px] sm:px-[140px] rounded-full transition-transform duration-300 ease-in-out hover:scale-105">
          Join Now
        </button>
      </div>

      <FluteCareer />
    </div>
  );
};

export default WorkWithUs;
