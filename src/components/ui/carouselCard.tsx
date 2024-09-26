'use client'
import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

type Props = {
  title: string,
  slides: any,
  radiant1: string,
  radiant2: string,
}

export const CarouselCard = () => {

  const plugin: any = React.useRef(
    Autoplay({ delay: 1000, stopOnInteraction: true })
  )

  return (
    <>
      <div className='px-2 overflow-x-hidden' >
        <Carousel
          plugins={[plugin.current]}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.play}
          opts={{
            align: "center",
          }}
          className="w-full px-4 sm:px-0"
        >
          <CarouselContent>
            <CarouselItem className="basis-1/1 xl:basis-1/3">
              <div className='flex flex-col items-start justify-evenly w-[300px] sm:w-[430px] h-[270px] sm:h-[260px] rounded-3xl bg-[#0B7289] p-6 py-8' >
                <h4 className='text-[#ffffff] text-xl sm:text-2xl font-semibold my-1 drop-shadow-lg'>Feeling lonely, or simply want to talk? <br />We’re here for you. </h4>
                <p className='text-[#ffffff] text-lg sm:text-xl w-[290px] my-3 drop-shadow-lg'>Talk anonymously with
                  a listener!!</p>
              </div>
            </CarouselItem>
            <CarouselItem className="basis-1/1 xl:basis-1/3">
              <div className='flex flex-col items-center justify-evenly w-[300px] sm:w-[430px] h-[270px] sm:h-[260px] rounded-3xl  bg-gradient-to-r from-[#CD7D04] to-[#DF9149] p-6' >
                <h4 className='text-[#fff] text-xl sm:text-2xl font-semibold my-1 mt-2'> End Loneliness with a Listening   <br />
                  Ear: </h4>
                <p className='text-[#ffffff] text-xl sm:text-2xl my-1'>Connect with
                  Listeners on Call.</p>
              </div>
            </CarouselItem>
            <CarouselItem className="basis-1/1 xl:basis-1/3">
              <div className='flex flex-col items-start justify-evenly w-[300px] sm:w-[430px] h-[270px] sm:h-[260px] rounded-3xl bg-[#748570] p-6' >
                <h4 className='text-[#fff] text-xl sm:text-2xl font-semibold my-1 mt-2'> Unlock the Secrets of Love    <br />
                  Compatibility! </h4>
                <p className='text-[#ffffff] text-xl sm:text-2xl my-1'>Talk to Our Astrologers.</p>
              </div>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
    </>
  )
}