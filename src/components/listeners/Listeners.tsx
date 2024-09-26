'use client'
import React from 'react'
import { Slides } from '../slides/Slides'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import listeners1 from '../../../public/images/listenerscoaches/Rectangle 123.png'
import listeners2 from '../../../public/images/listenerscoaches/unsplash_W7b3eDUb_2I.png'
import listeners3 from '../../../public/images/listenerscoaches/image 80.png'
import listeners4 from '../../../public/images/listenerscoaches/image 83.png'
import listeners5 from '../../../public/images/listenerscoaches/Rectangle 123.png'
import listeners6 from '../../../public/images/listenerscoaches/unsplash_W7b3eDUb_2I.png'

type Props = {}

const Listeners = (props: Props) => {

  const plugin: any = React.useRef(
    Autoplay({ delay: 1000, stopOnInteraction: true })
  )

  const listenersSlides: any = [
    {
      image: listeners1,
      name: "Radhika",
    },
    {
      image: listeners2,
      name: "Pooja",
    },
    {
      image: listeners3,
      name: "Aastha",
    },
    {
      image: listeners4,
      name: "Rose",
    },
    {
      image: listeners5,
      name: "Radhika",
    },
    {
      image: listeners6,
      name: "Pooja",
    },
  ]

  return (
    <div className="flex flex-col">
      <h4 className='pt-6 pb-2 px-7 sm:px-16 text-white text-2xl sm:text-4xl font-bold bg-gradient-to-b from-[#111111] to-[#0A3F39]'>Listeners</h4>
      <div className=' px-6 sm:px-16 overflow-x-hidden bg-gradient-to-b from-[#0A413B] to-[#072b27]' >
        <Carousel
          plugins={[plugin.current]}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.play}
          opts={{
            align: "start",
          }}
          className="w-full"
        >
          <CarouselContent>
            <CarouselItem className="basis-1/1 xl:basis-1/3">
              <div className='flex flex-col items-start justify-between w-[300px] sm:w-[430px] h-[270px] sm:h-[260px] rounded-3xl bg-[#0B7289] p-6 py-8' >
                <h4 className='text-[#ffffff] text-2xl sm:text-3xl font-semibold my-1'>Feeling <span className='text-[#FFA643] text-2xl sm:text-3xl font-bold'>Broken?</span> </h4>
                <p className='text-[#ffffff] text-lg w-[290px] my-3'>Get Emotional Support on anonymous <br /> <b>Chat</b>, <b>Call</b> or <b>Video Call</b></p>
                <button className=' bg-[#111111] text-[18px] text-[#ffffff] py-2 px-6 mx-2 rounded-full my-1'>
                  Talk Now
                </button>
              </div>
            </CarouselItem>
            <CarouselItem className="basis-1/1 xl:basis-1/3">
              <div className='flex flex-col items-start justify-between w-[300px] sm:w-[430px] h-[270px] sm:h-[260px] rounded-3xl bg-gradient-to-b from-[#E77740] to-[#AD462A] p-6' >
                <p className='text-[#111111] text-lgmy-1'> 1 out of every 2 person has faced a </p>
                <h4 className='text-[#fff] text-2xl sm:text-3xl font-bold my-1 mt-2'>Breakup! </h4>
                <p className='text-[#111111] text-lg my-1'>Its okay to face a breakup</p>
                <p className='text-[#ffffff] text-lg my-2 font-bold'>You Are Not Alone</p>
                <button className=' bg-[#111111] text-[18px] text-[#ffffff] py-2 px-6 mx-2 rounded-full my-1'>
                  Talk Now
                </button>
              </div>
            </CarouselItem>
            <CarouselItem className="basis-1/1 xl:basis-1/3">
              <div className='flex flex-col items-start justify-evenly w-[300px] sm:w-[430px] h-[270px] sm:h-[260px] rounded-3xl bg-gradient-to-b from-[#8EB13D] to-[#89AD33] p-6' >
                <p className='text-[#ffffff] text-lg my-1'> 1 out of every 2 person has faced a  </p>
                <h4 className='text-[#111111] text-2xl sm:text-3xl font-bold my-1 mt-2'>Lonelyness! </h4>
                <p className='text-[#ffffff] text-lg my-1'>Its okay to face a lonelyness</p>
                <p className='text-[#111111] text-lg my-2 font-bold'>You Are Not Alone</p>
                <button className=' bg-[#111111] text-[18px] text-[#ffffff] py-2 px-6 mx-2 rounded-full my-1'>
                  Talk Now
                </button>
              </div>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
      <div className=" py-4 sm:py-8 px-2 sm:px-16 bg-gradient-to-b from-[#072b27] to-[#0A413B]">
        <Slides content_type={1} title={"Listeners"} slides={listenersSlides} radiant1={"#95AAA5"} radiant2={"#95AAA5"} />
      </div>
      <h4 className='py-4 px-7 sm:px-16 text-white text-xl sm:text-2xl font-semibold bg-[#094A44]'>View All</h4>
    </div>
  )
}

export default Listeners