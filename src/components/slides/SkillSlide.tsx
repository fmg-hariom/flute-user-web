'use client'
import React from 'react'
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { useRouter } from 'next/navigation';
import { Card } from '../ui/card';

type Props = {
  slides: Array<{ [key: string]: any }>,
}

export const SkillSlide = ({ slides, }: Props) => {
  const router = useRouter();

  const plugin: any = React.useRef(
    Autoplay({ delay: 1000, stopOnInteraction: true })
  )

  return (
    <>
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
          {slides?.map((slide, index: number) => (
            <CarouselItem key={index} className="basis-1/1  select-none">

              <Card className={`mr-4 border-[2.359px] md:min-h-60 border-[#232323] bg-[#202020]/75 text-black text-center py-5 flex flex-col justify-center items-center rounded-[20px] min-w-32 md:min-w-40 overflow-x-scroll cursor-pointer`} onClick={() => {
                router.push(`/consultant/astrologer?skill_id=${slide.id}&title=${slide.skill_name}`)
              }} >
                {/* <category.Icon className='w-10 md:w-20 my-4' /> */}
                <img src={slide.icon} width="68" height="70" className='w-10 md:w-20 my-4' />
                <h3 className='text-[#E5E4DF]  text-sm' >
                  {slide.skill_name}
                </h3>
              </Card>

            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </>
  )
}