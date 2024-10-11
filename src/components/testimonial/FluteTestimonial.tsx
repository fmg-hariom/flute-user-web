"use client";
import React from "react";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import useTestominalStore from "@/services/testimonial/testimonial.service";

const FluteTestimonial = () => {
  const store = useTestominalStore();

  console.log("store", store);
  return (
    <div className="min-h-screen bg-[#181c23] flex flex-col items-center justify-center">
      <Carousel
        opts={{
          // align: "start",
          align: "center",
        }}
      >
        <CarouselContent>
          <CarouselItem>
            <div
              className="bg-cover bg-center relative text-white flex justify-center items-center rounded-lg overflow-hidden"
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
              <div className="relative py-6 px-10 w-full h-full flex flex-col">
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
                  Reassurance About My Senior Dog’s Well-Being
                </h2>

                {/* Content */}
                <div className="mb-6 font-charter text-[24px] px-6 leading-[30px] text-[#E0E0E0]  flex-grow">
                  <p>
                    My dog, Daisy, has been with me through so much, and now
                    that she's getting older, I worry constantly about her
                    health and happiness. I wanted to make sure she was
                    comfortable and at peace as she aged, so I turned to Flute's
                    pet psychics for some guidance. The psychic was able to
                    connect with Daisy and gave me insight into how she was
                    feeling. I learned that Daisy was content and that she felt
                    loved and safe, which was a huge relief. The psychic also
                    suggested some changes to make her more comfortable in her
                    final years. The reassurance I received was invaluable, and
                    I'm so grateful to Flute for helping me ensure Daisy's
                    remaining time is filled with love and care. My dog, Daisy,
                    has been with me through so much, and now that she's getting
                    older, I worry constantly about her health and happiness. I
                    wanted to make sure she was comfortable and at peace as she
                    aged, so I turned to Flute's pet psychics for some guidance.
                    The psychic was able to connect with Daisy and gave me
                    insight into how she was feeling.
                  </p>
                </div>

                {/* Author */}
                <p className="font-charter text-[22px] leading-[28px] text-[#E0E0E0] font-normal text-center absolute bottom-6 w-[92%]">
                  SARAH T
                </p>
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="hidden md:inline-flex" />
        <CarouselNext className="hidden md:inline-flex" />
      </Carousel>

      <div className="mt-[40px] flex justify-center">
        <button
          className="bg-[#31363f] hover:[#222222] text-[#acacac] text-xl sm:text-2xl font-bold py-2 px-12 rounded-xl"
          // onClick={() => {
          //   router.push("/magazine/list?category_id=all");
          // }}
        >
          Show More
        </button>
      </div>
    </div>
  );
};

export default FluteTestimonial;
