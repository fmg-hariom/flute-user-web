import React, { useCallback, useEffect } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import useDashboardStore from "@/services/dashboard/dqshboard.service";

type Props = {};

const Banner = (props: Props) => {
  const store = useDashboardStore();

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
        className="hidden sm:block w-full   px-4 sm:px-0 "
      >
        <CarouselContent className="">
          {/* <CarouselContent className="h-[600px]"> */}
          {store.dashboard.banners?.length ? (
            store.dashboard.banners.map((slide, index: number) => (
              <CarouselItem key={index} className="w-full">
                <div className="w-full ">
                  <img src={slide?.media} />
                  {/* <Image
                    src={slide?.media}
                    alt={`${slide?.title}`}
                    layout="responsive"
                    
                    className="w-full h-full  object-cover rounded-lg"
                    width={1}
                    height={1}
                  /> */}
                </div>
              </CarouselItem>
            ))
          ) : (
            <></>
          )}
        </CarouselContent>
      </Carousel>
    </>
  );
};

export default Banner;
