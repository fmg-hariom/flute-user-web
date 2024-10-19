"use client";
import React, { useEffect, useState } from "react";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import useTestominalStore from "@/services/testimonial/testimonial.service";
import { useRouter } from "next/navigation";

const TestimonialList = () => {
  const store = useTestominalStore();

  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const router = useRouter();

  useEffect(() => {
    store.get.list();
    if (!api) {
      return;
    }
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const data = store?.testo?.list;
  console.log("Testimonial Store Data:", data);

  return (
    <div className="py-4 sm:py-4  bg-black text-white">
      <main>
        {data?.length ? (
          <>
            <div className="relative isolate overflow-hidden bg-[linear-gradient(142.13deg,_#FEF8FF21_1.8%,_#FEF8FF00_99.75%)] py-22">
              <div className="mx-auto px-6 lg:px-8">
                <div className="mx-auto  lg:mx-0 text-center">
                  <h2 className="  heading-2 md:text-[40px]  text-[#ffffff99]  ">
                    WHAT OUT CLIENTS SAY ABOUT US
                  </h2>
                  {/* <span className="x-arrow"></span> */}
                  <div className=" sm:w-[550px]  rounded container h-[4px] my-3 mb-3 bg-[#ffffffbb]"></div>
                  <p className="mt-14 text-[20px] header-p font-[600]  sm:text-[28px] font-workSans 	 text-[#ffffff99]">
                    All the Fresh bits About the Flute
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              {[...data]?.map((slide, index: number) => (
                <div
                  key={index}
                  className="sm:basis-full flex justify-center mb-8"
                >
                  <div
                    className="bg-cover bg-center relative text-white  items-center rounded-lg overflow-hidden"
                    style={{
                      backgroundImage: 'url("/test-back.png")',
                      backgroundPosition: "center",
                      backgroundSize: "contain",
                      backgroundRepeat: "no-repeat",
                      width: "1138px",
                      height: "603px",
                    }}
                  >
                    {/* Overlay for readability */}
                    <div className="relative py-6 px-10 w-full h-full  ">
                      {/* Title */}
                      <img
                        src="/Test_icon.png"
                        style={{
                          width: "40px",
                          height: "40px",
                          padding: "14px 0px 0px 8px",
                        }}
                        alt="Test Icon"
                      />

                      <h2 className="font-charter text-[32px] px-6 leading-[27px] text-[#E0E0E0] mb-8 text-center">
                        {slide.title}
                      </h2>

                      {/* Content */}
                      <div className="mb-6 font-charter text-[25px] px-6 leading-[40px] text-[#E0E0E0] flex-grow font-normal text-justify">
                        {/* <p>{slide.content}</p> */}

                        <div
                          dangerouslySetInnerHTML={{
                            __html: `${slide.content}`,
                          }}
                        />
                      </div>

                      {/* Author */}
                      <p className="font-charter text-[24px] leading-[38px] text-[#E0E0E0] font-bold text-center absolute bottom-6 w-[92%] tracking-[0.82px]">
                        {slide.author}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="w-full flex items-center justify-center h-svh">
            <div className="loader">
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </div>
          </div>
        )}
      </main>

      <div className="mt-[40px] flex justify-center">
        <button className="bg-[#31363f] hover:[#222222] text-[#acacac] text-xl sm:text-2xl font-bold py-2 px-12 rounded-xl">
          Show More
        </button>
      </div>
    </div>
  );
};

export default TestimonialList;
