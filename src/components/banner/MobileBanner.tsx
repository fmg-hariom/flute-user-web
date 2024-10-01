import React, { useEffect } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import useDashboardStore from "@/services/dashboard/dqshboard.service";

type Props = {};

const MobileBanner = (props: Props) => {
  const store = useDashboardStore();

  const plugin: any = React.useRef(
    Autoplay({ delay: 100000, stopOnInteraction: true })
  );

  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <>
      <Carousel
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.play}
        opts={{
          align: "center",
        }}
        setApi={setApi}
        onChange={(e) => {
          console.log(e);
        }}
        className="w-full px-4 sm:px-0"
      >
        <CarouselContent className="">
          {store.dashboard.banners?.length ? (
            store.dashboard.banners.map((slide, index: number) => (
              <CarouselItem key={index} className="">
                <div className="w-[320px]  ">
                  <Image
                    src={slide?.mobile_media}
                    alt="Banner Image"
                    layout="responsive"
                    className="w-full h-full  object-cover rounded-lg"
                    width={1}
                    height={1}
                  />
                </div>
              </CarouselItem>
            ))
          ) : (
            <></>
          )}
        </CarouselContent>
      </Carousel>
      <div className="flex justify-center w-full py-2 gap-2 ">
        {store.dashboard.banners?.length ? (
          store.dashboard.banners.map((_, index) => (
            <button
              key={index}
              className={`h-2 rounded-full transition-all ${
                index === current ? "w-4 bg-[#FFFFFF80]" : "w-2 bg-[#FFFFFF80]"
              }`}
              onClick={() => {
                api?.scrollTo(index);
              }}
            />
          ))
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default MobileBanner;
