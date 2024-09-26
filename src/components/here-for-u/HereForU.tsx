import React from 'react'
import bg1 from "../../../public/images/hereforu/Red Ribbon to Golden Glow.png"
import Image from 'next/image'
import img1 from '../../../public/images/hereforu/close-up-red-broken-heart 1.png'
import img2 from '../../../public/images/hereforu/137509508_10322513 1.png'
import img3 from '../../../public/images/hereforu/issue 1.png'
type Props = {}

const HereForU = (props: Props) => {

    return (
        // bg-[#C9E2E5]
        <div className="container flex flex-col bg-[#242424] py-6 sm:py-6 px-2 sm:px-16">
            <h4 className='text-white text-2xl sm:text-4xl font-bold'>We are here for you...</h4>
            <div className='flex w-full flex-row flex-wrap lg:flex-nowrap gap-9 my-6 justify-between overflow-x-hidden' >
                <div className='flex flex-col items-center w-1/3 min-w-[100%] lg:min-w-[30%] bg-white rounded-3xl bg-gradient-to-bl from-[#ffdc92] to-[#fe2848] p-4' >
                    <h4 className='text-[#111111] text-2xl sm:text-3xl font-bold '>Feeling <span className='text-[#FFA643] text-2xl sm:text-3xl font-bold'>Sad?</span> </h4>
                    <div className='flex flex-row justify-between gap-9 my-7 '>
                        <Image src={img1} style={{ width: "105px", height: '93px' }} alt=''>
                        </Image>
                        <p className='text-[#111111] text-lg'>Get Emotional Support on anonymous <br/> <b>Chat</b>, <b>Call</b> or <b>Video Call</b></p>
                    </div>
                    <button className='self-end bg-[#111111] text-[18px] text-[#ffffff] py-2 px-6 mx-2 rounded-full'>
                        Talk Now
                    </button>
                </div>
                <div className='flex flex-col items-center w-1/3 min-w-[100%] lg:min-w-[30%] bg-white rounded-3xl bg-gradient-to-bl from-[#d5ee4c] to-[#50acdb] p-4' >
                    <h4 className='text-[#111111] text-2xl sm:text-3xl font-bold '>Had A Breakup! </h4>
                    <div className='flex flex-row justify-between gap-7 my-7 '>
                        <Image src={img2} style={{ width: "100px", height: '90px' }} alt=''>
                        </Image>
                        <p className='text-[#111111] text-lg '>1 out of every 4 people has faced a BREAKUP <br /><b>You Are Not Alone</b></p>
                    </div>
                    <button className='self-end bg-[#111111] text-[18px] text-[#ffffff] py-2 px-6 mx-2 rounded-full'>
                        Talk Now
                    </button>
                </div>
                <div className='flex flex-col items-center w-1/3 min-w-[100%] lg:min-w-[30%] bg-white rounded-3xl bg-gradient-to-bl from-[#8dcfab] to-[#0e1f31] p-4' >
                    <h4 className='text-[#111111] text-2xl sm:text-3xl font-bold '>Relationship Issues </h4>
                    <div className='flex flex-row justify-between gap-7 my-7 '>
                        <Image src={img3} style={{ width: "140px", height: '70px' }} alt=''>
                        </Image>
                        <p className='text-[#111111] text-lg'>1 out of every 4 people has faced Relationship Issues<br /><b>You Are Not Alone</b></p>
                    </div>
                    <button className='self-end bg-[#111111] text-[18px] text-[#ffffff] py-2 px-6 mx-2 rounded-full'>
                        Talk Now
                    </button>
                </div>
            </div>
        </div>
    )
}

export default HereForU