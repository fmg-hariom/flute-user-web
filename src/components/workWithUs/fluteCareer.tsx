"use client";

import React, { useState, useEffect } from "react";
import { IoIosArrowForward } from "react-icons/io";
import useCareer from "@/services/career/career.service";

// Define interface for career post data structure
interface CareerPost {
  ID: number;
  title: string;
  location: string;
  date: string;
}

// Define interface for career service data
interface CareerService {
  Career: {
    list: {
      posts: CareerPost[];
    };
  };
  get: {
    list: (positionType: string) => void;
  };
}

const FluteCareer: React.FC = () => {
  const [positionType, setPositionType] = useState<"on_site" | "remote">(
    "on_site"
  );
  const [hoveredLetterIndex, setHoveredLetterIndex] = useState<number | null>(
    null
  );
  const letters: string[] = "CAREERS".split("");

  // Type assertion for careerStore
  const careerStore = useCareer() as unknown as CareerService;

  useEffect(() => {
    // Fetch data whenever positionType changes
    careerStore.get.list(positionType);
  }, [positionType]);

  const data: CareerPost[] = careerStore.Career.list.posts;

  const handleMouseEnter = (index: number) => {
    setHoveredLetterIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredLetterIndex(null);
  };

  const handlePositionChange = (type: string) => {
    setPositionType(type.toLowerCase() as "on_site" | "remote");
  };

  return (
    <div className="mb-[40px] sm:mt-[150px] font-urbanist flex flex-col items-center w-full">
      <div className="text-[30px] sm:text-[70px] leading-[66px] tracking-[1.5px] font-bold mb-4 text-[#6c6c6c] flex">
        {letters.map((letter, index) => (
          <span
            key={index}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            style={{
              background:
                hoveredLetterIndex === index
                  ? "linear-gradient(90deg, #10B9EA, #33C004)"
                  : "transparent",
              WebkitBackgroundClip:
                hoveredLetterIndex === index ? "text" : "none",
              color: hoveredLetterIndex === index ? "transparent" : "#6c6c6c",
              transition: "background 0.5s ease",
            }}
            className="relative cursor-pointer"
          >
            {letter}
          </span>
        ))}
      </div>

      <div className="flex mt-16 gap-x-20">
        <div
          onClick={() => handlePositionChange("on_site")}
          className={`leading-[52px] tracking-[1px] sm:text-[30px] font-bold cursor-pointer ${
            positionType === "on_site"
              ? "text-[#FFA643] sm:text-[40px] "
              : "text-[#ffffffca]"
          }`}
        >
          On Site
        </div>
        <div
          onClick={() => handlePositionChange("remote")}
          className={`leading-[52px] tracking-[1px] sm:text-[36px] font-bold cursor-pointer ${
            positionType === "remote"
              ? "text-[#FFA643] sm:text-[40px] "
              : "text-[#ffffffca]"
          }`}
        >
          Remote
        </div>
      </div>

      {data?.map((item) => (
        <div
          key={item.ID}
          className="text-[30px] text-[#ffffffcc] font-bold mb-4 border rounded-2xl flex justify-between w-[70%] py-4 px-6 mt-12"
        >
          <div>
            <div className="sm:text-[36px] leading-[43px] font-semibold">
              {item.title}
            </div>
            <div className="sm:text-[34px] leading-[40px] font-normal">
              {item.location}
            </div>
          </div>
          <div className="flex">
            <div className="sm:text-[32px] leading-[38px] font-normal mr-8 flex items-start">
              {item.date}
            </div>
            <div className="bg-[#d9d9d98d] border rounded-full w-14 h-14 mt-4 flex items-center justify-center">
              <IoIosArrowForward
                style={{ fontWeight: "bold", fontSize: "1.3em" }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FluteCareer;
