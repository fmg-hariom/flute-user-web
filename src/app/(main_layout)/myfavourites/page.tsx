"use client"
import Footer from "@/components/footer/footer";
import MainHeader from "@/components/headers/MainHeader";
import React, { useState } from "react";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
    weight: ['400', '500', '600', '700',],
    subsets: ["latin"],
    display: "swap",
});

export default function MyFavourites() {
    const [favouritesList, updateFavouritesList] = useState([
        {
            name: "Reyansh"
        },
        {
            name: "Devadarshini"
        },
        {
            name: "Hritik"
        },
        {
            name: "Reyansh"
        },
        {
            name: "Devadarshini"
        },
        {
            name: "Hritik"
        },
        {
            name: "Hritik"
        },
        {
            name: "Hritik"
        },
        {
            name: "Hritik"
        },
        {
            name: "Hritik"
        },
    ])
    return (
        <>
            <div className="py-4 sm:py-8 px-2 sm:px-16 bg-black text-white">

                <div className={montserrat.className + " flex justify-center relative flex-row items-center space-x-2 pb-3 py-2"}>
                    <h1 className="text-4xl font-extrabold  ">My Favourites</h1>
                    <button
                        type="submit"
                        className=" absolute top-0 right-0 border-[0.9px] text-xl border-white rounded-full font-['Poppins'] py-2 px-6 "
                    >
                        <svg
                            className="inline mr-2"
                            width="14"
                            height="28"
                            viewBox="0 0 14 28"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M3.90007 14L12.1496 22.2495L10.4999 23.8992L1.42557 14.8248C1.20685 14.606 1.08398 14.3094 1.08398 14C1.08398 13.6906 1.20685 13.3939 1.42557 13.1752L10.4999 4.10083L12.1496 5.7505L3.90007 14Z"
                                fill="white"
                            />
                        </svg>
                        Back
                    </button>
                </div>

                <div className="bg-black border-t-[0.9px]  font-['Poppins'] p-6 ">
                    {" "}
                    <p className="text-center text-[1.34rem] tracking-wider font-normal">Streamline your favourites for quick access and instant connections.</p>
                    <div className="flex flex-wrap justify-center w-full mt-8 gap-4">
                        {
                            favouritesList.map((item) => {
                                return (
                                    <div className="rounded-3xl w-[15.20rem] relative h-[15.20rem] card-with-vignette">
                                        <svg width="25" height="25" className="absolute top-3 cursor-pointer right-3" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="12.125" cy="12.125" r="12.125" fill="white" fill-opacity="0.4" />
                                            <path d="M6.75342 17.5251L17.74 6.72559" stroke="black" stroke-width="2.13883" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M17.74 17.5251L6.75342 6.72559" stroke="black" stroke-width="2.13883" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        <div className="absolute bottom-3 left-3 w-full p-3 b z-40">
                                            <h3 className="text-white text-[1.5rem]">{item.name}</h3>
                                        </div>
                                        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
            </div>
        </>
    );
}
