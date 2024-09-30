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
                                            <div className="ml-3 relative bottom-56 flex items-center justify-around bg-[#00000099] w-[74px] h-[32px] rounded-[28px]" >
                                                <svg width="24" height="17" viewBox="0 0 24 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M14.9936 8.84985C14.9936 9.69879 14.6845 10.513 14.1343 11.1133C13.5841 11.7135 12.8379 12.0508 12.0598 12.0508C11.2817 12.0508 10.5355 11.7135 9.98527 11.1133C9.43507 10.513 9.12598 9.69879 9.12598 8.84985C9.12598 8.00092 9.43507 7.18675 9.98527 6.58646C10.5355 5.98617 11.2817 5.64893 12.0598 5.64893C12.8379 5.64893 13.5841 5.98617 14.1343 6.58646C14.6845 7.18675 14.9936 8.00092 14.9936 8.84985Z" stroke="white" stroke-width="1.25735" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M0.976562 8.84969C2.54127 4.47829 7.49878 1.38086 12.0599 1.38086C16.621 1.38086 21.5785 4.47829 23.1432 8.84969C21.5785 13.2211 16.621 16.3185 12.0599 16.3185C7.49878 16.3185 2.54127 13.2211 0.976562 8.84969Z" stroke="white" stroke-width="1.25735" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                                <p> {item.viewer_count} </p>
                                            </div>
                                            <h2 className="ml-3 relative text-2xl text-white font-bold bottom-20" style={{ marginBottom: "-45px" }}>{item?.first_name} </h2>

                                            {/* <div className="relative right-[10px] flex items-center justify-around bg-[#00000099] w-[74px] h-[32px] rounded-[28px]" >
                                                <svg width="24" height="17" viewBox="0 0 24 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M14.9936 8.84985C14.9936 9.69879 14.6845 10.513 14.1343 11.1133C13.5841 11.7135 12.8379 12.0508 12.0598 12.0508C11.2817 12.0508 10.5355 11.7135 9.98527 11.1133C9.43507 10.513 9.12598 9.69879 9.12598 8.84985C9.12598 8.00092 9.43507 7.18675 9.98527 6.58646C10.5355 5.98617 11.2817 5.64893 12.0598 5.64893C12.8379 5.64893 13.5841 5.98617 14.1343 6.58646C14.6845 7.18675 14.9936 8.00092 14.9936 8.84985Z" stroke="white" stroke-width="1.25735" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M0.976562 8.84969C2.54127 4.47829 7.49878 1.38086 12.0599 1.38086C16.621 1.38086 21.5785 4.47829 23.1432 8.84969C21.5785 13.2211 16.621 16.3185 12.0599 16.3185C7.49878 16.3185 2.54127 13.2211 0.976562 8.84969Z" stroke="white" stroke-width="1.25735" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                                <p> {item.viewer_count} </p>
                                            </div> */}
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
                                                    <h4 className="text-black mt-0.5">{item?.rating_review?.avgRating}</h4>
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
