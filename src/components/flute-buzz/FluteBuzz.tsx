'use client'
import React from 'react'
import {
    Carousel,
    CarouselApi,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import useBuzzStore from '@/services/buzz/buzz.service'

type Props = {}

const FluteBuzz = (props: Props) => {
    const buzzStore = useBuzzStore();

    const [api, setApi] = React.useState<CarouselApi>();
    const [current, setCurrent] = React.useState(0);

    React.useEffect(() => {
        if (!api) {
            return
        }

        setCurrent(api.selectedScrollSnap() + 1)

        api.on("select", (e) => {
            setCurrent(api.selectedScrollSnap())
        })
    }, [api])
    const slides: any = [
        {
            image: '/images/flute/image4.png',
            text: "Decoding Flute’s Fortunes: How The Startup Hit 4X Profit Growth ",
        },
        {
            image: '/images/flute/image5.png',
            text: "EXCLUSIVE: Rs 37k salary to Rs 600 cr company - How an astrology prediction pushed Vineet to start Flute",
        },
        {
            image: '/images/flute/image6.png',
            text: "Flute taps PE funds to raise $40 million in pre-IPO round",
        },
        {
            image: '/images/flute/image4.png',
            text: "Decoding Flute’s Fortunes: How The Startup Hit 4X Profit Growth ",
        },
    ]


    return (
        <div className="w-screen flex flex-col justify-center h-[680px] bg-[#82BBBE] py-8 sm:py-9 px-2 sm:px-16 text-black">
            <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold text-[#302C28] ">Flute Buzz</h2>
            <div className=" w-48 sm:w-56 md:w-72 rounded container h-[4px] my-3 bg-[#302C28]"></div>
            <div className='my-6 mx-2 md:mx-12'>
                <Carousel
                    opts={{
                        align: "start",
                    }}
                    className="w-full"
                    setApi={setApi}
                >
                    <CarouselContent>
                        {
                            buzzStore?.buzz?.list?.length ?
                                buzzStore?.buzz?.list?.map((slide: any, index: number) => (
                                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 xl:basis-1/3">
                                        <div className="p-1 flex justify-center">
                                            <div className="max-w-[470px] rounded-[30px] overflow-hidden">
                                                <div className="h-60">
                                                    <img
                                                        className="object-cover h-full w-full"
                                                        src={slide?.image}
                                                        alt="Card image"
                                                    />
                                                </div>
                                                <div className="p-6 py-3 bg-[#111111] h-32">

                                                    <p className="text-[#959393] text-[14px] line-clamp-2">{slide?.title}</p>

                                                    <div className='flex justify-end pt-2 px-1 '>
                                                        <p className='text-[#959393] text-[14px]' >{slide?.date}</p>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </CarouselItem>
                                )) : <></>
                        }
                    </CarouselContent>
                    <CarouselPrevious className='hidden md:inline-flex' />
                    <CarouselNext className='hidden md:inline-flex' />
                </Carousel>
                <div className="flex sm:hidden justify-center w-full py-2 gap-2">
                    {buzzStore?.buzz?.list?.length ? buzzStore?.buzz?.list.map((_, index) => (
                        <button
                            key={index}
                            className={`h-2 rounded-full transition-all ${index == current
                                ? "w-4 bg-black"
                                : "w-2 bg-black"
                                }`}
                            onClick={() => {
                                api?.scrollTo(index);
                            }}
                        />
                    )) : <></>}
                </div>
            </div>
            <div className='my-6 flex justify-center'>
                <button className="bg-[#302C28] hover:[#222222] text-[#82BBBE] text-xl sm:text-2xl font-bold py-2 px-12 rounded-xl">
                    Show More
                </button>
            </div>
        </div>
    )
}

export default FluteBuzz