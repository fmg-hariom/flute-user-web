import React from 'react'
import Image from 'next/image'
import front from '../../../public/images/getapp/front@2x.png'
import back from '../../../public/images/getapp/back.png'
import get1 from '../../../public/images/getapp/pngegg 1.png'
import get2 from '../../../public/images/getapp/pngegg 2.png'
type Props = {}

const GetApp = (props: Props) => {

    return (
        // bg-[#C9E2E5]
        <div className="w-screen flex flex-row flex-wrap justify-evenly bg-[#E9DBEC] py-6 sm:py-9 px-4 sm:px-16">
            <div className='flex py-3'>
                <div style={{ marginRight: "-110px" }}>
                    <Image src={back} style={{ width: "183px", height: "358px", marginTop: "33px" }} alt=''></Image>
                </div>
                <Image src={front} style={{ width: "217px", height: "391px" }} alt=''></Image>
            </div>
            <div className='flex flex-col w-[450px] py-3'>
                <h2 className='text-5xl  font-Secular_One font-bold p-1'>Get the Flute app</h2>
                <h3 className='text-2xl p-3 pr-[20px]'>We will send you a link,open it on your phone to download the app</h3>
                <div className='flex gap-12 p-2 pl-3'>
                    <div>
                        <input type="radio" name="radio" id="radio" className="h-4 w-4 form-radio accent-[#FF2C20]" />
                        <label htmlFor="email" className='p-2 text-lg'>Email</label>
                    </div>
                    <div>
                        <input type="radio" name="radio" id="radio" className="h-4 w-4 form-radio accent-[#FF2C20]" />
                        <label htmlFor="phone" className='p-2 text-lg'>Phone</label>
                    </div>
                </div>
                <div className='flex flex-wrap sm:flex-nowrap gap-4 p-2 '>
                    <div >
                        <input type="email" name="email" id="email" placeholder='Email' className='rounded-xl p-1 px-4 border border-[#555]' />
                    </div>
                    <button className='bg-[#FF2C20] h-9 rounded-xl text-white text-sm px-4'> Share App Link</button>
                </div>
                <div className='p-3'>
                    <h4 className='text-2xl'>Download app from</h4>
                </div>
                <div className='flex p-2 gap-2'>
                    <button>
                        <Image src={get1} style={{ width: "173px", height: "53px" }} alt=''></Image>
                    </button>
                    <button>
                        <Image src={get2} style={{ width: "173px", height: "53px" }} alt=''></Image>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default GetApp