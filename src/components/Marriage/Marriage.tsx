'use client'
import React from 'react'
import { Slides } from '../slides/Slides'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import premarital1 from '../../../public/images/premaritalcoaches/image 86.png'
import premarital2 from '../../../public/images/premaritalcoaches/adult-hispanic-man-over-isolated-260nw-1201334188.png'
import premarital3 from '../../../public/images/premaritalcoaches/image 82.png'
import premarital4 from '../../../public/images/premaritalcoaches/image 81.png'
import premarital5 from '../../../public/images/premaritalcoaches/image 86.png'
import premarital6 from '../../../public/images/premaritalcoaches/adult-hispanic-man-over-isolated-260nw-1201334188.png'
import marriage1 from '../../../public/images/marriagecoaches/unsplash_W7b3eDUb_2I.png'
import marriage2 from '../../../public/images/marriagecoaches/image 58.png'
import marriage3 from '../../../public/images/marriagecoaches/Rectangle 121.png'
import marriage4 from '../../../public/images/marriagecoaches/image 87.png'
import marriage5 from '../../../public/images/marriagecoaches/unsplash_W7b3eDUb_2I.png'
import marriage6 from '../../../public/images/marriagecoaches/image 58.png'
import divorce1 from '../../../public/images/divorcecoach/image 72.png'
import divorce2 from '../../../public/images/divorcecoach/image 57.png'
import divorce3 from '../../../public/images/divorcecoach/image 67.png'
import divorce4 from '../../../public/images/divorcecoach/image 71.png'
import divorce5 from '../../../public/images/divorcecoach/image 72.png'
import divorce6 from '../../../public/images/divorcecoach/image 57.png'
import Image from 'next/image'

type Props = {
  slides: Array<{ image: string; name: string, [key: string]: any }>,
}

const Marriage = (props: Props) => {

  const plugin: any = React.useRef(
    Autoplay({ delay: 1000, stopOnInteraction: true })
  )



  return (
    <>
      <div className='h-3 pt-6 pb-2 px-7 sm:px-16 bg-gradient-to-b from-[#111111] to-[#281951]'></div>
      <div className="flex flex-col bg-gradient-to-b from-[#281951] to-[#2B2340]">
        <h4 className='pt-6 pb-2 px-7 sm:px-16 text-white text-2xl sm:text-4xl font-bold '>Marriage Matters</h4>
        <div className=' px-6 sm:px-16 overflow-x-hidden' >
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
                {/* <div className='w-[160px] sm:w-[230px]' > */}
                <Image src={"https://user-profile-dating.s3.eu-north-1.amazonaws.com/MetadataService/9ca03fd8-9be2-4136-95f3-95f717fa94c5_Group_282%5B1%5D.jpg"} width={300} height={300} style={{ width: "100%" }} alt=''>
                </Image>
                {/* </div> */}
              </CarouselItem>
            </CarouselContent>
          </Carousel>
        </div>
      </div>
      <div className='h-3 pt-6 pb-2 px-7 sm:px-16 bg-gradient-to-b from-[#2B2340] to-[#111111]'></div>
    </>
  )
}

export default Marriage