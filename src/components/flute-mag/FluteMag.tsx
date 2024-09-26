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
import { useRouter } from 'next/navigation'
import useMagazineStore from '@/services/magazine/magazine.service'

type Props = {}

const FluteMag = (props: Props) => {
    const router = useRouter();
    const store = useMagazineStore();

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


    return (
        <div className="w-screen flex flex-col justify-center h-[680px] bg-[#E7F59A] py-8 sm:py-9 px-2 sm:px-16 text-black">
            <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold text-[#302C28] ">Flute Magazine</h2>
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
                        {[...store.magazine.home_list]?.map((slide, index: number) => (
                            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 xl:basis-1/3" onClick={() => {
                                router.push(`/magazine/${slide.id}`)
                            }} >
                                <div className="p-1 flex justify-center">
                                    <div className="max-w-[480px] rounded-[30px] overflow-hidden">
                                        <div className="h-60">
                                            <img
                                                className="object-cover h-full w-full"
                                                src={slide?.featured_image_web}
                                                alt="Card image"
                                            />
                                        </div>
                                        <div className="p-6 py-3 bg-[#111111] h-30 flex flex-col items-start justify-between">
                                            <h2 className="text-[16px] text-[#959393] mb-2 line-clamp-1">{slide?.title}</h2>
                                            <p className="text-[#959393] text-[13px] line-clamp-2">{slide?.sub_title}</p>

                                            {/* <div className='w-full flex justify-between pt-2 px-1 '>
                                                <div className='flex  gap-3 justify-between'>
                                                    <div className='flex' >

                                                        <svg width="25" height="24" viewBox="0 0 25 24" fill="#959393" className='mr-1' xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M16.6284 22.0051H12.9734C12.4348 22.0051 11.2613 21.8416 10.6361 21.2164L7.72177 18.9657L8.60666 17.8211L11.5884 20.1295C11.8288 20.3604 12.4348 20.5527 12.9734 20.5527H16.6284C17.4941 20.5527 18.4271 19.8602 18.6194 19.0811L20.9471 12.0116C21.101 11.5884 21.0721 11.2037 20.8701 10.9247C20.6585 10.6265 20.2738 10.4534 19.8025 10.4534H15.9551C15.455 10.4534 14.9933 10.2418 14.6759 9.87631C14.3489 9.50119 14.2046 9.00104 14.2815 8.48164L14.7624 5.39413C14.8779 4.8555 14.5124 4.24954 13.993 4.07641C13.5217 3.90328 12.9157 4.15336 12.7041 4.46115L8.76055 10.3284L7.56787 9.53005L11.5114 3.66282C12.1174 2.75869 13.4447 2.32586 14.4835 2.72021C15.6858 3.11457 16.4553 4.44191 16.186 5.67307L15.7147 8.70287C15.705 8.77019 15.705 8.86638 15.7724 8.94333C15.8205 8.99142 15.8878 9.02027 15.9647 9.02027H19.8121C20.7547 9.02027 21.5723 9.41463 22.0532 10.0975C22.5245 10.7612 22.6207 11.6365 22.3129 12.4829L20.0141 19.4851C19.6582 20.8798 18.177 22.0051 16.6284 22.0051Z" fill="#959393" />
                                                            <path d="M6.14499 20.9473H5.18315C3.40374 20.9473 2.53809 20.1105 2.53809 18.3984V8.97234C2.53809 7.26026 3.40374 6.42346 5.18315 6.42346H6.14499C7.9244 6.42346 8.79005 7.26026 8.79005 8.97234V18.3984C8.79005 20.1105 7.9244 20.9473 6.14499 20.9473ZM5.18315 7.86622C4.13474 7.86622 3.98085 8.1163 3.98085 8.97234V18.3984C3.98085 19.2544 4.13474 19.5045 5.18315 19.5045H6.14499C7.1934 19.5045 7.34729 19.2544 7.34729 18.3984V8.97234C7.34729 8.1163 7.1934 7.86622 6.14499 7.86622H5.18315Z" fill="#959393" />
                                                        </svg>
                                                        <p className='text-[#959393]' >421</p>
                                                    </div>
                                                    <div className='flex' >
                                                        <svg width="27" height="21" viewBox="0 0 27 21" fill="#959393" className='mr-1' xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M23.8866 11.9391C23.9971 12.314 24.337 12.558 24.7025 12.558V12.5493C24.8348 12.5506 24.9656 12.5199 25.0843 12.4598C25.203 12.3996 25.3062 12.3117 25.3856 12.2031C25.465 12.0945 25.5184 11.9683 25.5415 11.8346C25.5646 11.7009 25.5567 11.5635 25.5184 11.4335C25.492 11.3464 22.6789 2.09766 13.6546 2.09766C4.63028 2.09766 1.81964 11.3464 1.79414 11.4423C1.65816 11.9043 1.91313 12.3837 2.36358 12.5232C2.81403 12.6626 3.28998 12.4011 3.42596 11.9391C3.5186 11.6079 5.91533 3.84105 13.6554 3.84105C21.3938 3.84105 23.782 11.6018 23.8866 11.9391ZM8.55939 12.558C8.55939 11.1709 9.09665 9.84058 10.053 8.85973C11.0093 7.87888 12.3064 7.32784 13.6588 7.32784C15.0113 7.32784 16.3083 7.87888 17.2647 8.85973C18.221 9.84058 18.7582 11.1709 18.7582 12.558C18.7582 13.9452 18.221 15.2755 17.2647 16.2563C16.3083 17.2372 15.0113 17.7882 13.6588 17.7882C12.3064 17.7882 11.0093 17.2372 10.053 16.2563C9.09665 15.2755 8.55939 13.9452 8.55939 12.558Z" fill="#959393" />
                                                        </svg>
                                                        <p className='text-[#959393]' >{slide?.views || 0}</p>
                                                    </div>
                                                </div>

                                                <p className='text-[#959393]' >
                                                    {slide?.date}
                                                </p>
                                            </div> */}
                                        </div>
                                    </div>
                                    {/* <div className="relative flex h-[314px] w-[209px] flex-col text-center h-40 items-center justify-center rounded-3xl duration-300 ease-in-out" style={{ backgroundImage: index == 0 ? ` linear-gradient( to bottom,rgba(0, 0, 0, 0) 0%,rgba(0, 0, 0, 0.8) 100%),url('${slide?.image}')` : `url('${slide?.image}')` }}>
                                    <span className="absolute w-4 h-4 rounded-full right-6 top-3">
                                        <svg width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="15.5986" cy="15" r="15" fill="black" fill-opacity="0.5" />
                                            <circle cx="16.6869" cy="14.0882" r="10.2353" stroke="#33C004" stroke-width="1.70588" />
                                            <circle cx="16.6872" cy="14.0871" r="4.7521" fill="#33C004" />
                                        </svg>

                                    </span>
                                    <span className="absolute left-0 bottom-0 p-3">
                                        <p className='text-[16px] text-[#ffffff]'>{slide?.name}</p>
                                        <p className='text-[13px] text-[#FFA643]'>{slide?.role}</p>
                                    </span>
                                </div> */}
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className='hidden md:inline-flex' />
                    <CarouselNext className='hidden md:inline-flex' />
                </Carousel>
                <div className="flex sm:hidden justify-center w-full py-2 gap-2">
                    {store.magazine.home_list?.length ? store.magazine.home_list.map((_, index) => (
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
                <button className="bg-[#302C28] hover:[#222222] text-[#E7F59A] text-xl sm:text-2xl font-bold py-2 px-12 rounded-xl" onClick={() => {
                    router.push('/magazine/list?category_id=all')
                }} >
                    Show More
                </button>
            </div>
        </div>
    )
}

export default FluteMag