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
import { useRouter } from "next/navigation";
import useMagazineStore from "@/services/magazine/magazine.service";
import { Montserrat } from "next/font/google";

type Props = {};

const Montserrats = Montserrat({
  weight: "600", // Specify the font weights you need
  subsets: ["latin"], // Include any subsets you need
  display: "swap", // Controls how the font is displayed while loading
});

const FluteMag = (props: Props) => {
  const router = useRouter();
  const store = useMagazineStore();

  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", (e) => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className="w-screen flex flex-col justify-center h-[680px] bg-[#E7F59A] py-8 sm:py-9 px-2 sm:px-16 text-black">
      <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold text-[#302C28] ">
        Flute Magazine 
      </h2>
      <div className=" w-48 sm:w-56 md:w-72 rounded container h-[4px] my-3 bg-[#302C28]"></div>
      <div className="my-6 mx-2 md:mx-12 h-">
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full"
          setApi={setApi}
        >
          <CarouselContent>
            {[...store.magazine.home_list]?.map((slide, index: number) => (
              <CarouselItem
                key={index}
                className="md:basis-1/2 lg:basis-1/3 xl:basis-1/3"
                onClick={() => {
                  router.push(`/magazine/${slide.id}`);
                }}
              >
                <div className="p-1 flex justify-center ">
                  <div className="rounded-[30px] overflow-hidden w-[320px] lg:w-[500px]">
                    <div className="h-60 w-full flex items-center justify-center bg-gray-200 relative overflow-hidden">
                      <img
                        className="h-full max-h-full w-full max-w-full"
                        src={slide?.featured_image_web}
                        alt="Card image"
                        style={{
                          objectFit: "cover",
                          height: "100%",
                          width: "100%",
                        }}
                      />
                    </div>
                    <div className="p-6 py-3 bg-[#111111] h-[140px] flex flex-col items-start justify-between">
                      <h2
                        className={`text-[20px] text-[#959393] font-bold mb-2 line-clamp-2  ${Montserrats.className} `}
                      >
                        {slide?.title}
                      </h2>
                      <p className="text-[#959393] text-[16px] line-clamp-2">
                        {slide?.sub_title}
                      </p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:inline-flex" />
          <CarouselNext className="hidden md:inline-flex" />
        </Carousel>
        <div className="flex sm:hidden justify-center w-full py-2 gap-2">
          {store.magazine.home_list?.length ? (
            store.magazine.home_list.map((_, index) => (
              <button
                key={index}
                className={`h-2 rounded-full transition-all ${
                  index == current ? "w-4 bg-black" : "w-2 bg-black"
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
      </div>

      <div className="my-6 flex justify-center">
        <button
          className="bg-[#302C28] hover:[#222222] text-[#E7F59A] text-xl sm:text-2xl font-bold py-2 px-12 rounded-xl"
          onClick={() => {
            router.push("/magazine/list?category_id=all");
          }}
        >
          Show More
        </button>
      </div>
    </div>
  );
};

export default FluteMag;
