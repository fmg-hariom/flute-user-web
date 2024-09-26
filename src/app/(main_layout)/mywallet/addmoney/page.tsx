"use client";
import React, { useState } from "react";
import { Inter, Montserrat, Poppins, } from "next/font/google";
import Footer from "@/components/footer/footer";
import MainHeader from "@/components/headers/MainHeader";

const montserrat = Montserrat({
    weight: ['400', '500', '600', '700',],
    subsets: ["latin"],
    display: "swap",
});
const poppins = Poppins({
    weight: ['400', '500', '600', '700',],
    subsets: ["latin"],
    display: "swap",
});
const inter = Inter({
    weight: ['400', '500', '600', '700',],
    subsets: ["latin"],
    display: "swap",
});
const ReceiptBox = () => {
    return (
        <>
            <div className="fixed inset-0 p-2 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto ">
                <div className={poppins.className + " bg-[#25282E] flex flex-col items-center text-center w-[40rem] text-white p-12 rounded-[19px]  mx-auto z-[1001] shadow-lg"}>
                    <div className="flex justify-center mb-4">
                        <div className="rounded-full flex items-center justify-center">
                            <svg width="87" height="87" viewBox="0 0 87 87" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="43.4997" cy="43.7331" r="42.9333" fill="#10B9EA" fill-opacity="0.12" />
                                <path d="M43.5333 23.0889C32.2684 23.0889 23.0889 32.2684 23.0889 43.5333C23.0889 54.7982 32.2684 63.9778 43.5333 63.9778C54.7982 63.9778 63.9778 54.7982 63.9778 43.5333C63.9778 32.2684 54.7982 23.0889 43.5333 23.0889ZM53.3058 38.8311L41.7138 50.4231C41.4275 50.7093 41.0391 50.8729 40.6302 50.8729C40.2213 50.8729 39.8329 50.7093 39.5466 50.4231L33.7609 44.6373C33.168 44.0444 33.168 43.0631 33.7609 42.4702C34.3538 41.8773 35.3351 41.8773 35.928 42.4702L40.6302 47.1724L51.1386 36.664C51.7315 36.0711 52.7129 36.0711 53.3058 36.664C53.8986 37.2569 53.8986 38.2178 53.3058 38.8311Z" fill="#10B9EA" />
                            </svg>

                        </div>
                    </div>
                    <p className="text-[1.5rem] text-[#FFFFFFB8] p-2 font-normal">
                        Payment success!
                    </p>
                    <p className="text-[2.3rem] p-2 font-normal">
                        ₹ 200
                    </p>
                    <div className="border-b border-[#484A4F] my-8 w-full"></div>
                    <div className="flex justify-between w-full items-center my-2">
                        <p className="text-[#FFFFFFB8] text-[1.25rem] font-normal">Trans. ID</p>
                        <p className="text-white text-[1.25rem] font-medium">000085752257</p>
                    </div>
                    <div className="flex justify-between w-full items-center my-2">
                        <p className="text-[#FFFFFFB8] text-[1.25rem] font-normal">Payment Time</p>
                        <p className="text-white text-[1.25rem] font-medium">25-02-2023, 13:22:16</p>
                    </div>
                    <div className="flex justify-between w-full items-center my-2">
                        <p className="text-[#FFFFFFB8] text-[1.25rem] font-normal">Payment Method</p>
                        <p className="text-white text-[1.25rem] font-medium">UPI</p>
                    </div>
                    <div className="flex justify-between w-full items-center my-2">
                        <p className="text-[#FFFFFFB8] text-[1.25rem] font-normal">Sender Name</p>
                        <p className="text-white text-[1.25rem] font-medium">Flute</p>
                    </div>

                    <div className="border-b border-[#484A4F] border-dashed  my-4 w-full"></div>
                    <div className="flex justify-between w-full items-center my-2">
                        <p className="text-[#FFFFFFB8] text-[1.25rem] font-normal">Amount</p>
                        <p className="text-white text-[1.25rem] font-medium">₹ 200</p>
                    </div>

                </div>

            </div>
        </>
    )
}
export default function AddMoneyToWallet() {

    return (
        <>
            {/* <ReceiptBox></ReceiptBox> */}
            <div className="">
                <div className="w-screen h-[20%] py-6 flex justify-center items-center px-8 bg-[#242424] text-white">
                    <h1 className={montserrat.className + " text-[2rem] font-bold"}>Add Money To Your Wallet</h1>
                </div>

                <div className={montserrat.className + " h-full w-full py-4 px-24 bg-black"}>
                    <h3 className="text-white text-center mb-4 text-[2rem] font-bold">Available Balance: <span className={poppins.className + " text-[#10B9EA] font-normal"}>₹500</span></h3>
                    <div className="h-full w-full bg-[#242424] rounded-2xl px-8 py-4">
                        <div className="flex justify-center gap-6 text-white items-center p-8 flex-wrap" >
                            <div className={poppins.className + " w-40 h-36 bg-gray-800 rounded-lg shadow-lg flex flex-col"} style={{
                                background: `
                                linear-gradient(180deg, rgba(217, 217, 217, 0.1) 0%, rgba(115, 115, 115, 0) 100%),
                                linear-gradient(0deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))
                                `,
                            }}>
                                <div className="flex-1 flex items-center justify-center text-white text-[2rem] font-medium">
                                    ₹50
                                </div>
                                <div className=" bg-[#10B9EA33] rounded-b-lg py-2 flex items-center justify-center text-[#10B9EA] text-[1.2rem] font-normal">
                                    10% Extra
                                </div>
                            </div>
                            <div className={poppins.className + " w-40 h-36 bg-gray-800 rounded-lg shadow-lg flex flex-col"} style={{
                                background: `
                                linear-gradient(180deg, rgba(217, 217, 217, 0.1) 0%, rgba(115, 115, 115, 0) 100%),
                                linear-gradient(0deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))
                                `,
                            }}>
                                <div className="flex-1 flex items-center justify-center text-white text-[2rem] font-medium">
                                    ₹50
                                </div>
                                <div className=" bg-[#10B9EA33] rounded-b-lg py-2 flex items-center justify-center text-[#10B9EA] text-[1.2rem] font-normal">
                                    10% Extra
                                </div>
                            </div>
                            <div className={poppins.className + " w-40 h-36 bg-gray-800 rounded-lg shadow-lg flex flex-col"} style={{
                                background: `
                                linear-gradient(180deg, rgba(217, 217, 217, 0.1) 0%, rgba(115, 115, 115, 0) 100%),
                                linear-gradient(0deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))
                                `,
                            }}>
                                <div className="flex-1 flex items-center justify-center text-white text-[2rem] font-medium">
                                    ₹50
                                </div>
                                <div className=" bg-[#10B9EA33] rounded-b-lg py-2 flex items-center justify-center text-[#10B9EA] text-[1.2rem] font-normal">
                                    10% Extra
                                </div>
                            </div>
                            <div className={poppins.className + " w-40 h-36 bg-gray-800 rounded-lg shadow-lg flex flex-col"} style={{
                                background: `
                                linear-gradient(180deg, rgba(217, 217, 217, 0.1) 0%, rgba(115, 115, 115, 0) 100%),
                                linear-gradient(0deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))
                                `,
                            }}>
                                <div className="flex-1 flex items-center justify-center text-white text-[2rem] font-medium">
                                    ₹50
                                </div>
                                <div className=" bg-[#10B9EA33] rounded-b-lg py-2 flex items-center justify-center text-[#10B9EA] text-[1.2rem] font-normal">
                                    10% Extra
                                </div>
                            </div>
                            <div className={poppins.className + " w-40 h-36 bg-gray-800 rounded-lg shadow-lg flex flex-col"} style={{
                                background: `
                                linear-gradient(180deg, rgba(217, 217, 217, 0.1) 0%, rgba(115, 115, 115, 0) 100%),
                                linear-gradient(0deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))
                                `,
                            }}>
                                <div className="flex-1 flex items-center justify-center text-white text-[2rem] font-medium">
                                    ₹50
                                </div>
                                <div className=" bg-[#10B9EA33] rounded-b-lg py-2 flex items-center justify-center text-[#10B9EA] text-[1.2rem] font-normal">
                                    10% Extra
                                </div>
                            </div>
                            <div className={poppins.className + " w-40 h-36 bg-gray-800 rounded-lg shadow-lg flex flex-col"} style={{
                                background: `
                                linear-gradient(180deg, rgba(217, 217, 217, 0.1) 0%, rgba(115, 115, 115, 0) 100%),
                                linear-gradient(0deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))
                                `,
                            }}>
                                <div className="flex-1 flex items-center justify-center text-white text-[2rem] font-medium">
                                    ₹50
                                </div>
                                <div className=" bg-[#10B9EA33] rounded-b-lg py-2 flex items-center justify-center text-[#10B9EA] text-[1.2rem] font-normal">
                                    10% Extra
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center gap-6 text-white items-center p-8 flex-wrap" >
                            <div className={poppins.className + " w-40 h-36 bg-gray-800 rounded-lg shadow-lg flex flex-col"} style={{
                                background: `
                                linear-gradient(180deg, rgba(217, 217, 217, 0.1) 0%, rgba(115, 115, 115, 0) 100%),
                                linear-gradient(0deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))
                                `,
                            }}>
                                <div className="flex-1 flex items-center justify-center text-white text-[2rem] font-medium">
                                    ₹50
                                </div>
                                <div className=" bg-[#10B9EA33] rounded-b-lg py-2 flex items-center justify-center text-[#10B9EA] text-[1.2rem] font-normal">
                                    10% Extra
                                </div>
                            </div>
                            <div className={poppins.className + " w-40 h-36 bg-gray-800 rounded-lg shadow-lg flex flex-col"} style={{
                                background: `
                                linear-gradient(180deg, rgba(217, 217, 217, 0.1) 0%, rgba(115, 115, 115, 0) 100%),
                                linear-gradient(0deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))
                                `,
                            }}>
                                <div className="flex-1 flex items-center justify-center text-white text-[2rem] font-medium">
                                    ₹50
                                </div>
                                <div className=" bg-[#10B9EA33] rounded-b-lg py-2 flex items-center justify-center text-[#10B9EA] text-[1.2rem] font-normal">
                                    10% Extra
                                </div>
                            </div>
                            <div className={poppins.className + " w-40 h-36 bg-gray-800 rounded-lg shadow-lg flex flex-col"} style={{
                                background: `
                                linear-gradient(180deg, rgba(217, 217, 217, 0.1) 0%, rgba(115, 115, 115, 0) 100%),
                                linear-gradient(0deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))
                                `,
                            }}>
                                <div className="flex-1 flex items-center justify-center text-white text-[2rem] font-medium">
                                    ₹50
                                </div>
                                <div className=" bg-[#10B9EA33] rounded-b-lg py-2 flex items-center justify-center text-[#10B9EA] text-[1.2rem] font-normal">
                                    10% Extra
                                </div>
                            </div>
                            <div className={poppins.className + " w-40 h-36 bg-gray-800 rounded-lg shadow-lg flex flex-col"} style={{
                                background: `
                                linear-gradient(180deg, rgba(217, 217, 217, 0.1) 0%, rgba(115, 115, 115, 0) 100%),
                                linear-gradient(0deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))
                                `,
                            }}>
                                <div className="flex-1 flex items-center justify-center text-white text-[2rem] font-medium">
                                    ₹50
                                </div>
                                <div className=" bg-[#10B9EA33] rounded-b-lg py-2 flex items-center justify-center text-[#10B9EA] text-[1.2rem] font-normal">
                                    10% Extra
                                </div>
                            </div>
                            <div className={poppins.className + " w-40 h-36 bg-gray-800 rounded-lg shadow-lg flex flex-col"} style={{
                                background: `
                                linear-gradient(180deg, rgba(217, 217, 217, 0.1) 0%, rgba(115, 115, 115, 0) 100%),
                                linear-gradient(0deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))
                                `,
                            }}>
                                <div className="flex-1 flex items-center justify-center text-white text-[2rem] font-medium">
                                    ₹50
                                </div>
                                <div className=" bg-[#10B9EA33] rounded-b-lg py-2 flex items-center justify-center text-[#10B9EA] text-[1.2rem] font-normal">
                                    10% Extra
                                </div>
                            </div>
                            <div className={poppins.className + " w-40 h-36 bg-gray-800 rounded-lg shadow-lg flex flex-col"} style={{
                                background: `
                                linear-gradient(180deg, rgba(217, 217, 217, 0.1) 0%, rgba(115, 115, 115, 0) 100%),
                                linear-gradient(0deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))
                                `,
                            }}>
                                <div className="flex-1 flex items-center justify-center text-white text-[2rem] font-medium">
                                    ₹50
                                </div>
                                <div className=" bg-[#10B9EA33] rounded-b-lg py-2 flex items-center justify-center text-[#10B9EA] text-[1.2rem] font-normal">
                                    10% Extra
                                </div>
                            </div>

                        </div>
                        <p className={montserrat.className + " text-sm text-[#FFFFFFB2] text-center"}>
                            <span className="text-[#10B9EA]">Tip: </span>90% users recharge for 10 mins or more
                        </p>
                        {/* Payment section */}
                        <div className="text-white">

                        </div>
                    </div>
                    <div className={montserrat.className + " bg-black min-h-screen flex justify-center mt-8"}>
                        <div className="w-full flex justif-between  gap-8">
                            <div className="w-full">
                                <h2 className="text-white text-lg font-bold mb-4 text-[1.5rem]">Select your preferred payment method</h2>
                                <div className="w-full flex justify-between items-stretch gap-16">
                                    <div className="w-1/2 pr-16" >
                                        <div className="space-y-4 mb-8 mt-6">
                                            <label className="block bg-transparent border border-white p-2 rounded-xl pl-24 pr-6 text-[1.7rem] text-white flex items-center justify-between">
                                                UPI
                                                <input type="radio" name="payment" className="form-radio text-white custom-radio" />
                                            </label>
                                            <label className="block bg-transparent border border-white p-2 rounded-xl pl-24 pr-6 text-[1.7rem] text-white flex items-center justify-between">
                                                Debit/Credit Cards
                                                <input type="radio" name="payment" className="form-radio text-white custom-radio" />
                                            </label>
                                            <label className="block bg-transparent border border-white p-2 rounded-xl pl-24 pr-6 text-[1.7rem] text-white flex items-center justify-between">
                                                Net Banking
                                                <input type="radio" name="payment" className="form-radio text-white custom-radio" />
                                            </label>
                                            <label className="block bg-transparent border border-white p-2 rounded-xl pl-24 pr-6 text-[1.7rem] text-white flex items-center justify-between">
                                                Wallets
                                                <input type="radio" name="payment" className="form-radio text-white custom-radio" />
                                            </label>
                                        </div>
                                        <h3 className="text-white text-lg font-semibold mb-2">Available Offer</h3>
                                        <span className="bg-[#5DFF8B] text-xs p-2 mb-4  pb-8 rounded-xl mr-2">
                                            <svg width="18" height="18" className="inline" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M11.6764 8.52863C11.6764 9.93336 10.5413 11.0685 9.13654 11.0685C7.73181 11.0685 6.59668 9.93336 6.59668 8.52863C6.59668 7.1239 7.73181 5.98877 9.13654 5.98877C10.5413 5.98877 11.6764 7.1239 11.6764 8.52863Z" stroke="black" stroke-width="1.7027" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M9.13542 14.3954C11.6398 14.3954 13.9739 12.9197 15.5986 10.3656C16.2371 9.36529 16.2371 7.68388 15.5986 6.68354C13.9739 4.12948 11.6398 2.65381 9.13542 2.65381C6.63103 2.65381 4.29691 4.12948 2.67224 6.68354C2.03373 7.68388 2.03373 9.36529 2.67224 10.3656C4.29691 12.9197 6.63103 14.3954 9.13542 14.3954Z" stroke="black" stroke-width="1.7027" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                            {" "}BEST OFFER</span>
                                        <div className="bg-cyan-500 p-4 rounded-xl relative z-[100] text-black flex items-center justify-between">
                                            <div>
                                                <div className="text-[1.5rem] flex items-center mb-2">
                                                    50% extra on recharge of ₹200
                                                </div>
                                                <div className="text-lg">₹100 Cashback in Flute wallet with this recharge</div>
                                            </div>
                                            <button className="text-black text-lg font-bold">Remove</button>
                                        </div>
                                    </div>
                                    <div className="bg-[#242424] p-8 w-1/2 rounded-2xl p-16">
                                        <h3 className="text-white text-[1.6rem] font-[600] text-center mb-4">Payment Information</h3>
                                        <div className="border-b border-gray-700 mb-4"></div>
                                        <div className={poppins.className + " space-y-4 mb-8 p-8 "}>
                                            <div className="flex justify-between text-white text-[1.4rem]">
                                                <span>Recharge Amount</span>
                                                <span>₹200</span>
                                            </div>
                                            <div className="flex justify-between text-white text-[1.4rem]">
                                                <span>GST (18%)</span>
                                                <span>₹36</span>
                                            </div>
                                            <div className="border-b border-gray-700 mb-4"></div>
                                            <div className="flex justify-between text-white text-[1.4rem] font-semibold">
                                                <span>Payable Amount</span>
                                                <span>₹236</span>
                                            </div>
                                        </div>
                                        <div className="flex justify-center items-center">
                                            <button className="p-8 bg-white text-black rounded-2xl py-4 text-[1.5rem] font-semibold mb-4">Proceed to Pay</button>

                                        </div>
                                        <p className="text-xs text-gray-400 text-center">
                                            By confirming this payment, you agree to our <a href="#" className="text-blue-500">Privacy Policy</a> and <a href="#" className="text-blue-500">Terms Of Use</a>.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}
