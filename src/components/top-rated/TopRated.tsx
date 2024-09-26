'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import top1 from '../../../public/images/toprated/1 (2).png'
import top2 from '../../../public/images/toprated/1 (6).png'
import top3 from '../../../public/images/toprated/IMG.png'
import top4 from '../../../public/images/toprated/Profile Picture.png'

type Props = {}

const TopRated = (props: Props) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [slidesToShow, setSlidesToShow] = useState(2.5);
    const gap = 16;

    const slides: any = [
        {
            image: top1,
            name: "Ghanshyam",
            color:"#F1EDB4"
        },
        {
            image: top2,
            name: "Devadarshini",
            color:"#C9E2E5"
        },
        {
            image: top3,
            name: "Hritik",
            color:"#F1EDB4"
        },
    ]

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === slides.length - Math.ceil(slidesToShow) ? 0 : prevIndex + 1
            );
        }, 3000);

        return () => clearInterval(interval);
    }, [slides.length, slidesToShow]);

    return (
        <div className="container flex flex-col bg-[#242424] py-6 sm:py-6 px-2 sm:px-16">
            <h4 className='text-white text-2xl sm:text-4xl font-bold'>Top Rated</h4>
            <div className="relative w-full max-w-full mx-auto overflow-hidden"></div>
            <div className="relative w-full max-w-full mx-auto overflow-hidden my-4">
                <div
                    className="flex transition-transform duration-500"
                    style={{
                        transform: `translateX(-${(currentIndex * (100 / slidesToShow))}%)`,
                        width: `${(slides.length / slidesToShow) * 100}%`,
                    }}
                >
                    {slides.map((slide: any, index: any) => (
                        <div
                            key={index}
                            className={`flex h-56 overflow-hidden rounded-2xl flex items-center justify-center bg-gray-200 ${slidesToShow === 2.5 ? 'w-[calc(40% - 16px)]' :
                                slidesToShow === 2 ? 'w-[calc(50% - 16px)]' :
                                    'w-full'
                                }`}
                            style={{ marginRight: gap }}
                        >
                            <Image src={slide?.image} style={{ width: "240px" }} alt=''>
                            </Image>
                            <div className={`flex flex-col p-3 bg-[${slide?.color}]`}>
                                <div className='flex flex-row gap-3 py-3'>
                                    <Image src={top4} style={{ width: "40px", height: "40px" }} alt=''>
                                    </Image>
                                    <div className='flex flex-col'>
                                        <h4>Amanda Patt</h4>
                                        <h4 className='text-sm text-[#939599]'>Relationship Coach</h4>
                                    </div>
                                </div>
                                <h4 className='text-sm'>
                                    It if sometimes furnished unwilling as additions so. Blessing resolved peculiar fat graceful ham. Sussex...
                                </h4>
                                <button className='bg-[#111111] text-white p-1 mx-6 my-2 rounded-full'>
                                    Read More
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TopRated