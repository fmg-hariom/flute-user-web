"use client";
import MainHeader from "@/components/headers/MainHeader";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { Montserrat_Alternates } from "next/font/google";
import useConsultantProfileStore, {
  Feature,
} from "@/services/consultant_profile/consultant_profile.service";
import { ChangeEventHandler, useEffect } from "react";
import Link from "next/link";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import DownloadAppDialog from "@/components/common/dialogs/DownloadAppDialog";
import React, { useState } from "react";

const montserratAlternates = Montserrat_Alternates({
  weight: "400", // Specify the font weights you need
  subsets: ["latin"], // Include any subsets you need
  display: "swap", // Controls how the font is displayed while loading
});

export default function ViewAll(props: any) {
  // Store
  const store = useConsultantProfileStore();

  useEffect(() => {
    store.get.paginate({ ...props?.searchParams, page: 1 });
  }, [props?.searchParams]);

  const handleSearch: ChangeEventHandler<HTMLInputElement> = (e) => {
    store.get.paginate({
      ...props?.searchParams,
      search: e.target.value,
    });
  };

  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

  // Detect mobile view on mount and resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 600); // Assuming mobile is <= 600px
    };

    handleResize(); // Check on component mount
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handler for search input focus
  const handleSearchFocus = () => {
    if (isMobileView) {
      setIsSearchFocused(true);
    }
  };

  // Handler for resetting search input
  const handleSearchReset = () => {
    setIsSearchFocused(false);
  };

  return (
    <div className="py-4 sm:py-8 px-0 bg-black text-white">
      <main>
        <div className="relative isolate overflow-hidden bg-light-blue py-22 ">
          <div className="mx-auto  lg:px-8">
            <div className="mx-auto  lg:mx-0 text-center">
              <h2 className="  heading-2  md:!text-[40px]  text-dark  ">
                {props?.searchParams?.title || "Astrologers"}
              </h2>
              <div className=" w-[150px]  rounded container h-[4px] my-3 mb-3 bg-[#302c28]"></div>

              <p className="mt-14 text-[19px] header-p font-[600]  sm:text-[28px] font-workSans text-[#302c28]">
                Connect with the Best{" "}
                {props?.searchParams?.title || "Astrologers"}, anytime &
                anywhere
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className="container px-[10px] md:px-[36px] py-33 mx-auto">
            <form action="">
              <div
                className={`flex sm:justify-between gap-x-4  place-items-center`}
              >
                <div>
                  <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 ">
                      {isSearchFocused && isMobileView ? (
                        <div
                          className="absolute inset-y-0 start-0 flex items-center ps-3 cursor-pointer"
                          onClick={handleSearchReset}
                        >
                          <svg
                            className="w-5 h-5 text-[#dddddd] dark:text-gray-400 mr-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 1024 1024"
                            stroke="currentColor"
                          >
                            <path
                              fill="currentColor"
                              d="M224 480h640a32 32 0 110 64H224a32 32 0 010-64z"
                            />
                            <path
                              fill="currentColor"
                              d="M237.248 512l265.408 265.344a32 32 0 01-45.312 45.312l-288-288a32 32 0 010-45.312l288-288a32 32 0 1145.312 45.312L237.248 512z"
                            />
                          </svg>
                        </div>
                      ) : (
                        <svg
                          className="w-4 h-4 text-gray-500 dark:text-gray-400"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 20 20"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                          />
                        </svg>
                      )}
                    </div>
                    <input
                      type="text"
                      id="default-search"
                      // className="search-input outline-none border-0 bg-transparent py-1.5 pl-1 text-white placeholder:text-gray-400 w-[70px] sm:w-[380px]"
                      className={`block w-full ${
                        isSearchFocused && isMobileView
                          ? "w-[330px]"
                          : "sm:w-[400px]"
                      } pt-[15px] pr-[8px] pb-[15px] pl-[34px] md:pl-[60px] sm:p-4  ps-10 text-sm text-white border border-[#7d7d7dfd] rounded-xl bg-transparent`}
                      placeholder={
                        isMobileView
                          ? "Search"
                          : "Search by name, country, language or gender"
                      }
                      required
                      onFocus={handleSearchFocus}
                      onChange={handleSearch}
                    />
                  </div>
                </div>

                {/* Conditionally hide Categories and Sort only in mobile view */}
                {(!isSearchFocused || !isMobileView) && (
                  <div>
                    <div className="flex items-center   justify-center lg:justify-end">
                      <div className="sm:me-3 mb-3 mr-3 sm:mb-0 w-full sm:w-fit">
                        <Dialog>
                          <DialogTrigger asChild>
                            <button
                              type="button"
                              className="rounded-full w-full sm:w-[99px] h-[49px] custom-select border px-2 ps-10 bg-icon sort-icon filter-select border-white bg-transparent"
                            >
                              Sort
                            </button>
                          </DialogTrigger>

                          <DialogContent className="w-[95%] sm:max-w-md">
                            <DialogHeader>
                              <DialogTitle>Sort</DialogTitle>
                            </DialogHeader>
                            <hr className="bg-[#5B5B5B]" />
                            <div className="flex items-center">
                              <RadioGroup value={store.consultant_profile.sort}>
                                {[
                                  {
                                    label: "Popularity",
                                    value: "",
                                  },
                                  {
                                    label: "Price : Low to High",
                                    value: "",
                                  },
                                  {
                                    label: "Price : High to Low",
                                    value: "",
                                  },
                                  {
                                    label: "Rating : Low to High",
                                    value: "",
                                  },
                                  {
                                    label: "Rating : High to Low",
                                    value: "",
                                  },
                                  {
                                    label: "Exp : Low to High",
                                    value: "",
                                  },
                                  {
                                    label: "Exp : High to Low",
                                    value: "",
                                  },
                                ].map((item) => {
                                  return (
                                    <DialogClose asChild>
                                      <div className="flex items-center space-x-2">
                                        <RadioGroupItem
                                          value={item.value}
                                          id="r1"
                                          onClick={(e) =>
                                            store.get.sort("desc")
                                          }
                                        />
                                        <Label
                                          htmlFor="r1"
                                          className="text-white text-lg font-normal"
                                        >
                                          {item.label}
                                        </Label>
                                      </div>
                                    </DialogClose>
                                  );
                                })}
                              </RadioGroup>
                            </div>
                          </DialogContent>
                        </Dialog>
                      </div>
                      <div className="sm:me-3 w-full mb-3 sm:mb-0 sm:w-fit">
                        <Dialog>
                          <DialogTrigger asChild>
                            <button
                              type="button"
                              className="rounded-full w-full sm:w-[99px] h-[49px] custom-select border px-2 ps-10 bg-icon filter-icon filter-select border-white bg-transparent"
                            >
                              Filter
                            </button>
                          </DialogTrigger>

                          <DialogContent className="w-[95%] sm:max-w-md">
                            <DialogHeader>
                              <DialogTitle>Filters</DialogTitle>
                            </DialogHeader>
                            <hr className="bg-[#5B5B5B]" />
                            <div className="">
                              <div className="mb-2">
                                <h4 className="text-[#CBCBCB] mb-2">
                                  Who would you like to talk to?
                                </h4>
                                <div className="flex items-center">
                                  {[
                                    {
                                      value: "1",
                                      label: "Male",
                                    },
                                    {
                                      value: "1",
                                      label: "Female",
                                    },
                                    {
                                      value: "1",
                                      label: "Other",
                                    },
                                  ].map((item) => {
                                    return (
                                      <button
                                        type="button"
                                        className="rounded-full w-full sm:w-[99px] h-[45px] border px-2  border-[#FFA643] bg-transparent text-[#FFA643] mr-2 mb-2"
                                      >
                                        {item.label}
                                      </button>
                                    );
                                  })}
                                </div>
                              </div>

                              <div className="mb-2">
                                <h4 className="text-[#CBCBCB] mb-2">
                                  Who would you like to talk to?
                                </h4>
                                <div className="flex items-center flex-wrap flex-grow">
                                  {[
                                    {
                                      value: "1",
                                      label: "21-30 yrs",
                                    },
                                    {
                                      value: "1",
                                      label: "31-40 yrs",
                                    },
                                    {
                                      value: "1",
                                      label: ">40 yrs",
                                    },
                                    {
                                      value: "1",
                                      label: "Any",
                                    },
                                  ].map((item) => {
                                    return (
                                      <button
                                        type="button"
                                        className="rounded-full w-full sm:w-[99px] max-w-[99px] h-[45px] border px-2  border-[#FFA643] bg-transparent text-[#FFA643] mr-2 mb-2"
                                      >
                                        {item.label}
                                      </button>
                                    );
                                  })}
                                </div>
                              </div>

                              <div className="mb-2">
                                <h4 className="text-[#CBCBCB] mb-2">
                                  Country?
                                </h4>
                                <div className="flex items-center">
                                  {[
                                    {
                                      value: "1",
                                      label: "India",
                                    },
                                    {
                                      value: "1",
                                      label: "Outside India",
                                    },
                                  ].map((item) => {
                                    return (
                                      <button
                                        type="button"
                                        className="rounded-full w-full  h-[45px] border px-2  border-[#FFA643] bg-transparent text-[#FFA643] mr-2 mb-2"
                                      >
                                        {item.label}
                                      </button>
                                    );
                                  })}
                                </div>
                              </div>

                              <div className="flex items-center justify-between w-full">
                                <button className="w-full sm:w-[99px] max-w-[99px] h-[45px] border-none px-2  bg-transparent text-[#CBCBCB] mr-2 mb-2">
                                  Reset
                                </button>

                                <button className=" h-[45px] border-none px-8  bg-[#FFA643] text-black rounded-[8.97px] mr-2 mb-2">
                                  Apply Filters
                                </button>
                              </div>
                            </div>
                          </DialogContent>
                        </Dialog>
                      </div>
                      {/* <div className="flex items-center">
                      <span className="me-2 inline-block">
                        <svg
                          width="28"
                          height="27"
                          viewBox="0 0 28 27"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g opacity="0.8">
                            <path
                              d="M20.1304 25.5938H7.21535C4.4141 25.5938 2.1416 23.3212 2.1416 20.52V12.9488C2.1416 10.1475 4.4141 7.875 7.21535 7.875H20.1304C22.9316 7.875 25.2041 10.1475 25.2041 12.9488V14.5688C25.2041 15.03 24.8216 15.4125 24.3603 15.4125H22.0878C21.6941 15.4125 21.3341 15.5588 21.0753 15.8288L21.0641 15.84C20.7491 16.1438 20.6028 16.56 20.6366 16.9875C20.7041 17.73 21.4128 18.3262 22.2229 18.3262H24.3603C24.8216 18.3262 25.2041 18.7087 25.2041 19.17V20.5087C25.2041 23.3212 22.9316 25.5938 20.1304 25.5938ZM7.21535 9.5625C5.34785 9.5625 3.8291 11.0813 3.8291 12.9488V20.52C3.8291 22.3875 5.34785 23.9062 7.21535 23.9062H20.1304C21.9978 23.9062 23.5166 22.3875 23.5166 20.52V20.025H22.2229C20.5241 20.025 19.0841 18.765 18.9491 17.145C18.8591 16.2225 19.1966 15.3113 19.8716 14.6475C20.4566 14.0513 21.2441 13.725 22.0878 13.725H23.5166V12.9488C23.5166 11.0813 21.9978 9.5625 20.1304 9.5625H7.21535Z"
                              fill="white"
                            />
                            <path
                              d="M2.98535 14.805C2.5241 14.805 2.1416 14.4225 2.1416 13.9613V8.82007C2.1416 7.14382 3.1991 5.62501 4.76285 5.02876L13.6954 1.65376C14.6179 1.30501 15.6416 1.42881 16.4404 1.99131C17.2504 2.55381 17.7229 3.46505 17.7229 4.4438V8.71879C17.7229 9.18004 17.3404 9.56254 16.8791 9.56254C16.4179 9.56254 16.0354 9.18004 16.0354 8.71879V4.4438C16.0354 4.0163 15.8329 3.62254 15.4729 3.37504C15.1129 3.12754 14.6854 3.07128 14.2804 3.22878L5.34785 6.60378C4.4366 6.95253 3.81785 7.84132 3.81785 8.82007V13.9613C3.8291 14.4338 3.4466 14.805 2.98535 14.805Z"
                              fill="white"
                            />
                            <path
                              d="M22.2229 20.0246C20.5241 20.0246 19.0841 18.7646 18.9491 17.1446C18.8591 16.2108 19.1966 15.2996 19.8716 14.6359C20.4454 14.0509 21.2329 13.7246 22.0766 13.7246H24.4166C25.5304 13.7584 26.3854 14.6358 26.3854 15.7158V18.0334C26.3854 19.1134 25.5304 19.9908 24.4504 20.0246H22.2229ZM24.3941 15.4121H22.0879C21.6941 15.4121 21.3341 15.5584 21.0754 15.8284C20.7491 16.1434 20.5916 16.5708 20.6366 16.9983C20.7041 17.7408 21.4129 18.3371 22.2229 18.3371H24.4279C24.5741 18.3371 24.7091 18.2021 24.7091 18.0334V15.7158C24.7091 15.5471 24.5741 15.4234 24.3941 15.4121Z"
                              fill="white"
                            />
                            <path
                              d="M15.9229 14.3438H8.04785C7.5866 14.3438 7.2041 13.9612 7.2041 13.5C7.2041 13.0387 7.5866 12.6562 8.04785 12.6562H15.9229C16.3841 12.6562 16.7666 13.0387 16.7666 13.5C16.7666 13.9612 16.3841 14.3438 15.9229 14.3438Z"
                              fill="white"
                            />
                          </g>
                        </svg>
                      </span>
                      <span className="text-indigo-600 me-2 inline-block">
                        ₹ 500
                      </span>
                      <span className="border-solid p-1  inline-block rounded-sm text-indigo-600 border-2 border-indigo-600">
                        Recharge
                      </span>
                    </div> */}
                    </div>
                  </div>
                )}
              </div>
            </form>

            <div className=" mt-12 gap-x-4 grid grid-cols-1 lg:grid-cols-2">
              {store.consultant_profile.list.length ? (
                store.consultant_profile.list.map((item) => {
                  return (
                    <Link
                      href={`/consultant/${props?.params?.type}/${item.id}`}
                      onClick={(e: any) => {
                        if (
                          e.target.tagName.includes("svg") ||
                          e.target.tagName.includes("path")
                        ) {
                          e.preventDefault();
                        }
                      }}
                    >
                      <div className="flex mb-4 modal-cards p-1 lg:p-2 rounded-md">
                        <div className="flex-none w-32 md:w-40 h-[15rem]">
                          <img
                            src={
                              item.profile_photo?.url ||
                              "/images/avatars/modal-img.png"
                            }
                            className=" rounded-md h-full  object-center object-cover"
                            width={"100%"}
                            alt="..."
                          />
                        </div>
                        <div className="grow p-2 xl:p-4">
                          <div className="card-body flex flex-col justify-between h-full">
                            <div className="flex items-center justify-between">
                              <div>
                                <h2 className="card-title text-[16px] xl:text-[24px]">
                                  {item.first_name + " " + item.last_name}
                                </h2>
                              </div>
                              {item.is_live ? (
                                <div className="bg-black badges rounded-full px-4 py-1">
                                  <span className="circle-dot text-[14px] xl:text-[16px]">
                                    Live
                                  </span>
                                </div>
                              ) : (
                                <></>
                              )}
                            </div>
                            <div className="mb-3">
                              <span className="inline-block align-middle text-[14px] xl:text-[16px]">
                                <svg
                                  className="inline me-2 w-[23px] h-[23px]"
                                  viewBox="0 0 23 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M13.4917 2.5886L15.4275 6.49216C15.6915 7.03556 16.3954 7.55677 16.9893 7.65658L20.4979 8.24433C22.7417 8.62138 23.2696 10.2627 21.6528 11.8817L18.9251 14.632C18.4632 15.0978 18.2102 15.996 18.3532 16.6392L19.1341 20.0437C19.75 22.7385 18.3312 23.781 15.9664 22.3726L12.6778 20.4097C12.0839 20.0548 11.105 20.0548 10.5 20.4097L7.2114 22.3726C4.85766 23.781 3.42782 22.7274 4.04375 20.0437L4.82467 16.6392C4.96765 15.996 4.71468 15.0978 4.25273 14.632L1.52503 11.8817C-0.0807915 10.2627 0.436152 8.62138 2.6799 8.24433L6.18852 7.65658C6.77145 7.55677 7.47537 7.03556 7.73934 6.49216L9.67513 2.5886C10.731 0.470468 12.4468 0.470468 13.4917 2.5886Z"
                                    fill="#FFA643"
                                    stroke="#FFA643"
                                    stroke-width="0.785714"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                </svg>
                                {item?.rating_review?.avgRating}
                              </span>
                              <span className="inline-block align-middle mx-5">
                                <svg
                                  width="2"
                                  height="25"
                                  viewBox="0 0 2 25"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M1 1L0.999999 24"
                                    stroke="#D9D9D9"
                                    stroke-linecap="round"
                                  />
                                </svg>
                              </span>
                              <span className="inline-block align-middle">
                                {item.session_count} sessions
                              </span>
                            </div>

                            <p className="card-text text-[14px] xl:text-[16px]">
                              {item.languages.join(", ")}, <br />{" "}
                              {item.categories_name.join(", ")}
                            </p>
                            <div className="flex justify-between mt-3	items-center">
                              <div>
                                <span className="inline-block green-color align-middle me-3 text-xs md:text-lg">
                                  @ ₹{" "}
                                  {item.chat_price
                                    ? item.chat_price?.discount_price
                                    : ""}
                                </span>
                                <span className="inline-block align-middle text-xs md:text-lg">
                                  <del>
                                    ₹{" "}
                                    {item.chat_price
                                      ? item.chat_price?.current_price
                                      : ""}
                                    /min
                                  </del>
                                </span>
                              </div>
                              <div className="z-10">
                                <DownloadAppDialog
                                  trigger={
                                    <span className="xl:ps-3 inline-block align-middle">
                                      <svg
                                        width="51"
                                        height="50"
                                        viewBox="0 0 51 50"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-[30px] h-[30px]  xl:w-[50px] xl:h-[50]"
                                      >
                                        <g clip-path="url(#clip0_2_6285)">
                                          <path
                                            d="M18.2993 21.8745H32.8827"
                                            stroke="#33C004"
                                            stroke-width="2.81439"
                                            stroke-miterlimit="10"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                          />
                                          <path
                                            d="M15.1745 38.3958H23.5078L32.7787 44.5625C34.1537 45.4792 36.0078 44.5 36.0078 42.8333V38.3958C42.2578 38.3958 46.4245 34.2292 46.4245 27.9792V15.4792C46.4245 9.22917 42.2578 5.0625 36.0078 5.0625H15.1745C8.92448 5.0625 4.75781 9.22917 4.75781 15.4792V27.9792C4.75781 34.2292 8.92448 38.3958 15.1745 38.3958Z"
                                            stroke="#33C004"
                                            stroke-width="2.81439"
                                            stroke-miterlimit="10"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                          />
                                        </g>
                                        <defs>
                                          <clipPath id="clip0_2_6285">
                                            <rect
                                              width="50"
                                              height="50"
                                              fill="white"
                                              transform="translate(0.591309)"
                                            />
                                          </clipPath>
                                        </defs>
                                      </svg>
                                    </span>
                                  }
                                />

                                <DownloadAppDialog
                                  trigger={
                                    <span className="px-2 xl:px-3 inline-block align-middle">
                                      <svg
                                        viewBox="0 0 51 50"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-[30px] h-[30px]  xl:w-[50px] xl:h-[50]"
                                      >
                                        <path
                                          d="M46.6503 38.1873C46.6503 38.9373 46.4836 39.7082 46.1295 40.4582C45.7753 41.2082 45.317 41.9165 44.7128 42.5832C43.692 43.7082 42.567 44.5207 41.2961 45.0415C40.0461 45.5623 38.692 45.8332 37.2336 45.8332C35.1086 45.8332 32.8378 45.3332 30.442 44.3123C28.0461 43.2915 25.6503 41.9165 23.2753 40.1873C20.8795 38.4373 18.6086 36.4998 16.442 34.354C14.2961 32.1873 12.3586 29.9165 10.6295 27.5415C8.92114 25.1665 7.54614 22.7915 6.54614 20.4373C5.54614 18.0623 5.04614 15.7915 5.04614 13.6248C5.04614 12.2082 5.29614 10.854 5.79614 9.604C6.29614 8.33317 7.08781 7.1665 8.19198 6.12484C9.52531 4.81234 10.9836 4.1665 12.5253 4.1665C13.1086 4.1665 13.692 4.2915 14.2128 4.5415C14.7545 4.7915 15.2336 5.1665 15.6086 5.70817L20.442 12.5207C20.817 13.0415 21.0878 13.5207 21.2753 13.979C21.4628 14.4165 21.567 14.854 21.567 15.2498C21.567 15.7498 21.4211 16.2498 21.1295 16.729C20.8586 17.2082 20.4628 17.7082 19.9628 18.2082L18.3795 19.854C18.1503 20.0832 18.0461 20.354 18.0461 20.6873C18.0461 20.854 18.067 20.9998 18.1086 21.1665C18.1711 21.3332 18.2336 21.4582 18.2753 21.5832C18.6503 22.2707 19.2961 23.1665 20.2128 24.2498C21.1503 25.3332 22.1503 26.4373 23.2336 27.5415C24.3586 28.6457 25.442 29.6665 26.5461 30.604C27.6295 31.5207 28.5253 32.1457 29.2336 32.5207C29.3378 32.5623 29.4628 32.6248 29.6086 32.6873C29.7753 32.7498 29.942 32.7707 30.1295 32.7707C30.4836 32.7707 30.7545 32.6457 30.9836 32.4165L32.567 30.854C33.0878 30.3332 33.5878 29.9373 34.067 29.6873C34.5461 29.3957 35.0253 29.2498 35.5461 29.2498C35.942 29.2498 36.3586 29.3332 36.817 29.5207C37.2753 29.7082 37.7545 29.979 38.2753 30.3332L45.1711 35.229C45.7128 35.604 46.0878 36.0415 46.317 36.5623C46.5253 37.0832 46.6503 37.604 46.6503 38.1873Z"
                                          stroke="#8F63EC"
                                          stroke-width="2.81439"
                                          stroke-miterlimit="10"
                                        />
                                        <path
                                          d="M39.4213 18.7497C39.4213 17.4997 38.4421 15.583 36.9838 14.0205C35.6505 12.583 33.8796 11.458 32.1296 11.458"
                                          stroke="#8F63EC"
                                          stroke-width="2.81439"
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                        />
                                        <path
                                          d="M46.713 18.7498C46.713 10.6873 40.1921 4.1665 32.1296 4.1665"
                                          stroke="#8F63EC"
                                          stroke-width="2.81439"
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                        />
                                      </svg>
                                    </span>
                                  }
                                />
                                <DownloadAppDialog
                                  trigger={
                                    <span className="px-2 xl:px-3 inline-block align-middle">
                                      <span className=" inline-block align-middle">
                                        <svg
                                          className="w-[30px] h-[30px]  xl:w-[50px] xl:h-[50]"
                                          viewBox="0 0 51 50"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M26.271 42.5418H13.1043C6.521 42.5418 4.3335 38.1668 4.3335 33.771V16.2293C4.3335 9.646 6.521 7.4585 13.1043 7.4585H26.271C32.8543 7.4585 35.0418 9.646 35.0418 16.2293V33.771C35.0418 40.3543 32.8335 42.5418 26.271 42.5418Z"
                                            stroke="#11B9E9"
                                            stroke-width="2.81439"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                          />
                                          <path
                                            d="M40.8334 35.6253L35.0417 31.5628V18.4169L40.8334 14.3544C43.6667 12.3753 46.0001 13.5836 46.0001 17.0628V32.9378C46.0001 36.4169 43.6667 37.6253 40.8334 35.6253Z"
                                            stroke="#11B9E9"
                                            stroke-width="2.81439"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                          />
                                          <path
                                            d="M24.1255 22.9165C25.8514 22.9165 27.2505 21.5174 27.2505 19.7915C27.2505 18.0656 25.8514 16.6665 24.1255 16.6665C22.3996 16.6665 21.0005 18.0656 21.0005 19.7915C21.0005 21.5174 22.3996 22.9165 24.1255 22.9165Z"
                                            stroke="#11B9E9"
                                            stroke-width="2.81439"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                          />
                                        </svg>
                                      </span>
                                    </span>
                                  }
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  );
                })
              ) : (
                <></>
              )}
            </div>
            {store.consultant_profile.show_more ? (
              <div className="text-center">
                <button
                  type="button"
                  className="text-[#ecedef] mt-10 !text-[18px] md:!text-[36px] show-more-btn bg-semi-dark bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-10 py-5  dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                  onClick={() => {
                    store.get.paginate({
                      page: store.consultant_profile.page + 1,
                      paginate: true,
                      ...props?.searchParams,
                    });
                  }}
                >
                  Show More
                </button>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
