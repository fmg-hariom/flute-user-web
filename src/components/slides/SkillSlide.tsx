"use client";
import React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRouter } from "next/navigation";
import { Card } from "../ui/card";

type Props = {
  slides: Array<{ [key: string]: any }>;
};

export const SkillSlide = ({ slides }: Props) => {
  const router = useRouter();

  const plugin: any = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <>
      <Carousel
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.play}
        opts={{
          align: "center",
        }}
        className="w-full px-2 sm:px-0"
      >
        <CarouselContent>
          {slides?.map((slide, index: number) => (
            <CarouselItem
              key={index}
              className="w-1/3  sm:w-auto sm:basis-1/1  select-none"
            >
              <Card
                className={` border-[2.359px] border-[#232323] bg-[#202020]/75 text-black text-center py-5 flex flex-col justify-center items-center rounded-[20px] px-4 h-[140px] md:min-w-[200px] md:min-h-[240px] cursor-pointer`}
                onClick={() => {
                  router.push(
                    `/consultant/astrologer?skill_id=${slide.id}&title=${slide.skill_name}`
                  );
                }}
              >
                <div className="flex justify-center items-center w-[53px] h-[55px] md:w-[80px] md:h-[80px] my-4">
                  <img
                    src={slide.icon}
                    className="w-full h-full object-contain"
                    alt={slide.skill_name}
                  />
                </div>
                <h3 className="text-[#E5E4DF] text-sm break-words ">
                  {slide.skill_name}
                </h3>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </>
  );
};
