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

const FluteTestimonial = () => {
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
    <div className="w-screen flex flex-col justify-center bg-[#181c23] py-8 sm:py-9 px-1 sm:px-16 text-black">
      <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold text-[#FFFFFF] leading-[58px] ">
        TESTIMONIAL
      </h2>
      <div className=" w-40 sm:w-56 md:w-68 rounded container h-[4px] my-3 mb-3 bg-[#ffffffbb]"></div>
      <div className="mt-8">
        <Carousel
          opts={{
            align: "center",
          }}
          setApi={setApi}
          className="w-full custom-style sm:px-0"
        >
          <CarouselContent>
            {[...data]?.map((slide, index: number) => (
              <CarouselItem
                key={index}
                className="sm:basis-full flex  justify-center"
              >
                <div
                  className="bg-cover bg-center relative text-white  items-center rounded-lg overflow-hidden"
                  style={{
                    backgroundImage: 'url("test-back.png")',
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
                      src="Test_icon.png"
                      style={{
                        width: "40px",
                        height: "40px",
                        padding: "14px 0px 0px 8px",
                      }}
                      alt="Test Icon"
                    />

                    <h2 className="font-charter text-[32px] px-6 leading-[30px] text-[#E0E0E0] mb-8 text-center">
                      {slide.title}
                    </h2>

                    {/* Content */}
                    <div className="mb-6 font-charter text-[24px] px-6 leading-[38px] text-[#E0E0E0] flex-grow font-normal text-justify">
                     

                      <div
                        dangerouslySetInnerHTML={{
                          __html: `${slide.content}`,
                        }}
                      />
                    </div>

                    {/* Author */}
                    <p className="font-charter text-[22px] leading-[28px] text-[#E0E0E0] font-normal text-center absolute bottom-6 w-[92%]">
                      {slide.author}
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:inline-flex" />
          <CarouselNext className="hidden sm:inline-flex" />
        </Carousel>
      </div>

      <div className="mt-[40px] flex justify-center">
        <button
          className="bg-[#31363f] hover:[#222222] text-[#acacac] text-xl sm:text-2xl font-bold py-2 px-12 rounded-xl"
          onClick={() => {
            router.push("/testimonial/list");
          }}
        >
          Show More
        </button>
      </div>
    </div>
  );
};

export default FluteTestimonial;
