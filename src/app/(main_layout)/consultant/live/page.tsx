"use client"
import DownloadAppDialog from "@/components/common/dialogs/DownloadAppDialog"
import Footer from "@/components/footer/footer"
import MainHeader from "@/components/headers/MainHeader"
import useConsultantProfileStore from "@/services/consultant_profile/consultant_profile.service"
import useLiveConsultantProfileStore from "@/services/consultant_profile/live_consultant.service"
import React, { useEffect } from "react"

export default function LiveSession() {
    const consultantProfileStore = useLiveConsultantProfileStore();

    useEffect(() => {
        consultantProfileStore.get.paginate({ paginate: false })
    }, [])

    return (
        <>

            <div className="w-screen flex flex-col justify-center bg-[#C9E2E5] py-8 sm:py-9 px-2 sm:px-16 text-black">
                <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold text-[#302C28] ">Live Sessions</h2>
                <div className=" w-48 sm:w-56 md:w-72 rounded container h-[4px] my-3 bg-[#302C28]"></div>
                <h6 className="text-center text-sm sm:text-lg md:text-xl w-full px-8 sm:px-1 font-bold text-[#302C28] ">Live Chat with the Best Astrologers, Advisors and Coaches.</h6>
            </div>
            <div className="py-5 sm:px-16 bg-black text-white">
                <div className="flex justify-center sm:justify-end items-center ">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search by name"
                            className="pl-10 pr-4 py-3 w-full max-w-md border border-gray-700 rounded-full bg-black text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
                            onChange={e => consultantProfileStore.get.paginate({ search: e.target.value })}
                        />
                        <svg className="absolute right-7 top-1/2 transform -translate-y-1/2 w-7 h-7 text-white" stroke="#ffffff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 101 101" id="search"><path d="M63.3 59.9c3.8-4.6 6.2-10.5 6.2-17 0-14.6-11.9-26.5-26.5-26.5S16.5 28.3 16.5 42.9 28.4 69.4 43 69.4c6.4 0 12.4-2.3 17-6.2l20.6 20.6c.5.5 1.1.7 1.7.7.6 0 1.2-.2 1.7-.7.9-.9.9-2.5 0-3.4L63.3 59.9zm-20.4 4.7c-12 0-21.7-9.7-21.7-21.7s9.7-21.7 21.7-21.7 21.7 9.7 21.7 21.7-9.7 21.7-21.7 21.7z"></path></svg>
                    </div>
                </div>
                <div className="flex flex-wrap gap-14 my-6 justify-center mx-auto">
                    {
                        consultantProfileStore?.live_consultant_profile?.list?.length ? consultantProfileStore?.live_consultant_profile?.list?.map(item => {
                            return <DownloadAppDialog
                                trigger={
                                    <div className="min-w-[300px] max-w-[300px] rounded-3xl overflow-hidden shadow-lg cursor-pointer">
                                        <div className="h-60 ">
                                            <img
                                                className="object-cover h-full w-full object-top"
                                                src={item?.profile_image}
                                                alt="Card image"
                                            />
                                            <svg className="ml-3 relative bottom-56" width="74" height="32" viewBox="0 0 74 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect x="0.36084" y="0.349609" width="72.9381" height="31" rx="15.5" fill="black" fill-opacity="0.6" />
                                                <path d="M26.6386 15.8494C26.6386 16.6983 26.3295 17.5125 25.7793 18.1128C25.2291 18.7131 24.4829 19.0503 23.7048 19.0503C22.9267 19.0503 22.1805 18.7131 21.6303 18.1128C21.0801 17.5125 20.771 16.6983 20.771 15.8494C20.771 15.0004 21.0801 14.1863 21.6303 13.586C22.1805 12.9857 22.9267 12.6484 23.7048 12.6484C24.4829 12.6484 25.2291 12.9857 25.7793 13.586C26.3295 14.1863 26.6386 15.0004 26.6386 15.8494Z" stroke="white" stroke-width="1.25735" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M12.6216 15.8497C14.1863 11.4783 19.1438 8.38086 23.7049 8.38086C28.266 8.38086 33.2235 11.4783 34.7882 15.8497C33.2235 20.2211 28.266 23.3185 23.7049 23.3185C19.1438 23.3185 14.1863 20.2211 12.6216 15.8497Z" stroke="white" stroke-width="1.25735" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M41.5103 18.6796C42.4063 17.9049 43.111 17.2703 43.6243 16.7756C44.147 16.2716 44.581 15.7489 44.9263 15.2076C45.2717 14.6663 45.4443 14.1249 45.4443 13.5836C45.4443 13.0236 45.309 12.5849 45.0383 12.2676C44.777 11.9503 44.3617 11.7916 43.7923 11.7916C43.2417 11.7916 42.8123 11.9689 42.5043 12.3236C42.2057 12.6689 42.047 13.1356 42.0283 13.7236H40.4883C40.5163 12.6596 40.8337 11.8476 41.4403 11.2876C42.0563 10.7183 42.8357 10.4336 43.7783 10.4336C44.7957 10.4336 45.589 10.7136 46.1583 11.2736C46.737 11.8336 47.0263 12.5803 47.0263 13.5136C47.0263 14.1856 46.8537 14.8343 46.5083 15.4596C46.1723 16.0756 45.7663 16.6309 45.2903 17.1256C44.8237 17.6109 44.2263 18.1756 43.4983 18.8196L42.8683 19.3796H47.3063V20.7096H40.5023V19.5476L41.5103 18.6796ZM48.4984 12.0996V10.6436H51.4104V20.8496H49.8004V12.0996H48.4984ZM56.8649 16.9996L60.4209 20.8496H58.2649L55.4089 17.5316V20.8496H53.8129V10.4896H55.4089V16.5096L58.2089 13.1356H60.4209L56.8649 16.9996Z" fill="white" />
                                            </svg>
                                            <h2 className="ml-3 relative text-2xl text-white font-bold bottom-20" style={{ marginBottom: "-45px" }}>{item?.first_name} </h2>
                                        </div>
                                        <div className="p-6 py-3 bg-white">
                                            <p className="text-black text-sm my-2 line-clamp-1">{item?.languages?.join(", ")}</p>
                                            <p className="text-black text-sm my-2 line-clamp-1">{item?.categories_name?.join(", ") || "-"}</p>

                                            <div className='flex justify-between pt-2  my-2'>
                                                <div className="flex gap-1">
                                                    <img
                                                        className="object-cover h-6 w-6"
                                                        src={"/images/live/icons8-star-48.png"}
                                                        alt="image"
                                                    />
                                                    <h4 className="text-black mt-0.5">5.0</h4>
                                                </div>

                                                <button className="p-1 px-4 font-bold bg-[#0DA738] text-[#fff] rounded-full">
                                                    Join Live
                                                </button>


                                            </div>
                                        </div>
                                    </div>}
                            />
                        })
                            : <></>
                    }

                </div>
                <div className="text-center">
                    <button
                        type="button"
                        className="text-white mt-10 !text-[18px] md:!text-[36px] show-more-btn bg-semi-dark bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-10 py-5  dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"

                        onClick={() => {
                            consultantProfileStore.get.paginate({ page: consultantProfileStore.live_consultant_profile.page + 1, paginate: true })
                        }}
                    >
                        Show More
                    </button>
                </div>
            </div>
        </>
    )
}
