"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRouter } from "next/navigation";

type Props = {
  title: string;
  slides: Array<{ image: string; name: string; [key: string]: any }>;
  radiant1: string;
  radiant2: string;
  viewAllId?: any;
  content_type: number;
};

export const Slides = ({
  title,
  slides,
  radiant1,
  radiant2,
  viewAllId,
  content_type,
}: Props) => {
  const router = useRouter();

  const plugin: any = React.useRef(
    content_type === 2
      ? Autoplay({ delay: 1577700, stopOnInteraction: true })
      : null
  );

  const roles = [" View All", <img src="/view_all.png" className="w-6 h-6 " />];
  const [currentIcon, setCurrentIcon] = useState(roles[0]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % roles.length);
      setCurrentIcon(roles[(index + 1) % roles.length]);
    }, 2000);
    return () => clearInterval(interval);
  }, [index]);

  return (
    <>
      {title && content_type == 1 ? (
        <div className="flex justify-between py-4 px-4 sm:px-0">
          <h3 className=" text-[24px]  font-semibold sm:text-[38px]  text-[#ffffffcc] font-serif">
            {title}
          </h3>
          <button
            className="text-[#fff] text-[18px] sm:text-[20px]"
            onClick={() => {
              router.push(
                `/consultant/astrologer?category_id=${viewAllId}&title=${title}`
              );
            }}
          >
            {currentIcon}
          </button>
        </div>
      ) : (
        <></>
      )}
      <Carousel
        plugins={content_type === 2 ? [plugin.current] : []}
        onMouseEnter={content_type === 2 ? plugin.current?.stop : undefined}
        onMouseLeave={content_type === 2 ? plugin.current?.play : undefined}
        opts={{
          align: "center",
        }}
        className="w-full px-4 sm:px-0"
      >
        <CarouselContent>
          {slides?.map((slide, index: number) => (
            <CarouselItem
              key={index}
              className={` ${
                content_type === 2 ? "w-full" : "sm:w-auto sm:basis-1/1"
              }`}
            >
              {content_type == 1 ? (
                <div
                  key={index}
                  className={`h-[145px] w-[120px] sm:h-60 sm:w-56 flex items-center justify-center rounded-2xl pt-7 overflow-hidden `}
                  style={{
                    backgroundImage: `radial-gradient(${radiant1}, ${radiant1})`,
                  }}
                  onClick={() =>
                    router.push(`/consultant/astrologer/${slide.id}`)
                  }
                >
                  <div className="w-[160px] sm:w-[230px]">
                    <Image
                      src={slide?.image}
                      width={300}
                      height={300}
                      style={{ width: "100%" }}
                      alt=""
                    ></Image>
                  </div>
                  <div
                    className="p-2 w-[160px] sm:w-[225px] text-center absolute bottom-[0.01px] rounded-2xl"
                    style={{
                      background:
                        "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 90%)",
                    }}
                  >
                    <p className="text-white text-[14px] sm:text-[20px]  ">
                      {slide?.name}
                    </p>
                  </div>
                </div>
              ) : content_type == 2 ? (
                <>
                  {/* <Image
                    src={slide?.image}
                    width={311}
                    height={230}
                    className="w-[311px]  sm:w-full sm:max-w-[384px] object-contain"
                    alt=""
                    quality={90}
                    onClick={() => {
                      if (slide?.is_clickable) {
                        router.push(
                          `/consultant/listeners?category_id=${slide?.category_id}&consultant_type=3&title=Listeners`
                        );
                      }
                    }}
                  /> */}
                  {/* <div className="image-class">
                    <img
                      src={slide?.image}
                      width={311}
                      height={230}
                      className="w-[311px] sm:w-full sm:max-w-[384px] object-contain"
                      alt=""
                      onClick={() => {
                        if (slide?.is_clickable) {
                          router.push(
                            `/consultant/listeners?category_id=${slide?.category_id}&consultant_type=3&title=Listeners`
                          );
                        }
                      }}
                    />
                  </div> */}

                  <div className="image-class">
                    <img
                      src={slide?.image}
                      // width={311}
                      height={230}
                      className="w-[] sm:w-full sm:max-w-[384px] object-contain"
                      alt=""
                      onClick={() => {
                        if (slide?.is_clickable) {
                          router.push(
                            `/consultant/listeners?category_id=${slide?.category_id}&consultant_type=3&title=Listeners`
                          );
                        }
                      }}
                    />
                  </div>
                </>
              ) : (
                <></>
              )}
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </>
  );
};
