'use client'
import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { useRouter } from 'next/navigation'
import useConsultantProfileStore from '@/services/consultant_profile/consultant_profile.service'
import DownloadAppDialog from '../common/dialogs/DownloadAppDialog'
import useLiveConsultantProfileStore from '@/services/consultant_profile/live_consultant.service'

type Props = {}

const LiveSession = (props: Props) => {
    const router = useRouter();
    const liveConsultantProfileStore = useLiveConsultantProfileStore()

    const slides: any = [
        {
            image: '/images/live/unsplash_0mN84vxigL0.png',
            name: "Sophie Turner",
            role: "Tarrot Reading"
        },
        {
            image: '/images/live/unsplash_AxqT51VT8mw.png',
            name: "Maise Williams",
            role: "Astrologer"
        },
        {
            image: '/images/live/unsplash_ra9IMT4b7IM.png',
            name: "Hiral Soni",
            role: "Dating Advice"
        },
        {
            image: '/images/live/unsplash_CE_1ZBQ__Ns.png',
            name: "Utkarsha Das",
            role: "Life Coaching"
        },
        {
            image: '/images/live/unsplash_mEZ3PoFGs_k.png',
            name: "Samiksha Jain",
            role: "Breakup Support"
        },
    ]

    return (
        <div className="w-screen flex flex-col justify-center h-[680px] bg-[#C9E2E5] py-8 sm:py-9 px-2 sm:px-16 text-black">
            <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold text-[#302C28] ">Live Sessions</h2>
            <div className=" w-48 sm:w-56 md:w-72 rounded container h-[4px] my-3 bg-[#302C28]"></div>
            <h6 className="text-center text-sm sm:text-lg md:text-xl w-full px-8 sm:px-1 font-bold text-[#302C28] ">Connect with top-rated Astrologers through live sessions for instant solutions.</h6>
            <div className='my-6 mx-20 md:mx-12'>
                <Carousel
                    opts={{
                        align: "start",
                    }}
                    className="w-full"
                >
                    <CarouselContent>
                        {liveConsultantProfileStore?.live_consultant_profile?.list?.length ? liveConsultantProfileStore?.live_consultant_profile?.list?.map((slide, index: number) => (
                            <CarouselItem key={index} className="md:basis-1/3 xlg:basis-1/6">
                                <DownloadAppDialog trigger={
                                    <div className="p-1 flex justify-center">
                                        <div className="relative flex h-[314px] w-[209px] flex-col text-center h-40 items-center justify-center rounded-3xl duration-300 ease-in-out bg-cover" style={{ backgroundImage: index == 0 ? ` linear-gradient( to bottom,rgba(0, 0, 0, 0) 0%,rgba(0, 0, 0, 0.8) 100%),url('${slide?.profile_image}')` : `url('${slide?.profile_image}') ` }}>
                                            <span className="absolute w-4 h-4 rounded-full right-6 top-3">
                                                <svg width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="15.5986" cy="15" r="15" fill="black" fill-opacity="0.5" />
                                                    <circle cx="16.6869" cy="14.0882" r="10.2353" stroke="#33C004" stroke-width="1.70588" />
                                                    <circle cx="16.6872" cy="14.0871" r="4.7521" fill="#33C004" />
                                                </svg>

                                            </span>
                                            <span className="absolute left-0 bottom-0 p-3 flex flex-col items-start">
                                                <p className='text-[16px] text-[#ffffff]'>{slide?.first_name}</p>
                                                <p className='text-[13px] text-[#FFA643] line-clamp-1'>{slide.categories_name}</p>
                                            </span>
                                        </div>
                                    </div>
                                } />
                            </CarouselItem>
                        )) : <></>}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
            <div className='mt-2 flex justify-center'>
                <button className="bg-[#302C28] hover:[#222222] text-[#C9E2E5] text-xl sm:text-2xl font-bold py-2 px-12 rounded-xl" onClick={() => {
                    router.push("/consultant/live")
                }} >
                    Show More
                </button>
            </div>
        </div>
    )
}

export default LiveSession