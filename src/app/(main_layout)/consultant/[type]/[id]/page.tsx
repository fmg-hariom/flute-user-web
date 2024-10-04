"use client";
import MainHeader from "@/components/headers/MainHeader";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { Montserrat_Alternates } from "next/font/google";
import { useEffect } from "react";
import useConsultantProfileStore from "@/services/consultant_profile/consultant_profile.service";
import DownloadAppDialog from "@/components/common/dialogs/DownloadAppDialog";

const montserratAlternates = Montserrat_Alternates({
  weight: "400", // Specify the font weights you need
  subsets: ["latin"], // Include any subsets you need
  display: "swap", // Controls how the font is displayed while loading
});

export default function Profile(props: any) {
  const {
    consultant_profile: { detail },
    get,
  } = useConsultantProfileStore();

  useEffect(() => {
    console.log(props?.params?.id);
    get.detail(props?.params?.id);
  }, []);
  return (
    <div className="py-4 sm:py-8 bg-black text-white">
      <main>
        <div className="modal-cards">
          <div className="container px-[10px] md:px-16  mx-auto">
            <div className="flex flex-wrap mb-4 modal-cards p-1 lg:p-2 ">
              <div className="rounded-md w-full lg:w-[265px] h-auto   md:h-[45rem] lg:h-[22rem]">
                <img
                  src={detail?.profile_photo?.url || ""}
                  className="rounded-md h-full w-full object-contain "
                  alt="..."
                />
              </div>

              <div className="grow p-2 xl:p-4 xl:ps-5">
                <div className="card-body">
                  <div className="flex flex-wrap  justify-between">
                    <div className="grow">
                      <div className="flex items-center grow h-14">
                        <h2 className="card-title text-[16px] xl:text-[46px] me-3">
                          {detail?.first_name}
                        </h2>
                        <span>
                          <svg
                            className="md:w-11 md:h-11 w-7 h-7"
                            viewBox="0 0 45 45"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M23.5475 38.8292C22.9131 39.0531 21.8682 39.0531 21.2338 38.8292C15.8227 36.982 3.73169 29.2758 3.73169 16.2145C3.73169 10.4489 8.37777 5.78418 14.1061 5.78418C17.502 5.78418 20.5061 7.42617 22.3907 9.96379C24.2752 7.42617 27.298 5.78418 30.6752 5.78418C36.4035 5.78418 41.0496 10.4489 41.0496 16.2145C41.0496 29.2758 28.9586 36.982 23.5475 38.8292Z"
                              stroke="white"
                              stroke-width="3.73179"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </span>
                      </div>
                      <p className="card-text text-[14px] xl:text-3xl">
                        {detail?.languages?.join(", ")}
                      </p>
                      <div className="border-b-2 my-6  border-indigo-[#fff]"></div>

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
                          {detail?.reviews_list?.avg_rating}
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
                          Reviews: {detail?.reviews_list?.total_user_count}
                        </span>
                      </div>
                      <p>
                        {/* {detail?.sessions} sessions */}
                        <br />
                        Exp: {detail?.experience} years
                      </p>
                    </div>
                    <div className="grow  md:ps-4">
                      <div className="text-end">
                        <svg
                          className=" inline-block md:w-11 md:h-11 w-7 h-7"
                          viewBox="0 0 38 38"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M2.32617 18.3194C2.32701 17.0442 2.71941 15.8016 3.44795 14.767C4.17648 13.7325 5.20432 12.9582 6.38625 12.5537C7.56818 12.1492 8.84446 12.1349 10.0348 12.5128C11.2251 12.8906 12.2693 13.6416 13.0198 14.6596L17.9306 11.7578L23.4074 8.52272C22.8095 7.0888 22.7689 5.47548 23.2938 4.01195C23.8188 2.54843 24.8698 1.34501 26.2324 0.647267C27.595 -0.0504756 29.1665 -0.189955 30.6262 0.257292C32.0859 0.704538 33.3237 1.7048 34.0872 3.05397C34.8507 4.40313 35.0822 5.99952 34.7345 7.51737C34.3868 9.03521 33.4861 10.3601 32.2163 11.2217C30.9464 12.0833 29.403 12.4167 27.9011 12.1538C26.3992 11.8909 25.052 11.0516 24.1343 9.8071L18.6574 13.0406L13.7446 15.9415C14.0931 16.7833 14.252 17.6946 14.2095 18.6078C14.1671 19.521 13.9244 20.4127 13.4995 21.217L24.1343 27.4992C24.3009 27.2733 24.4826 27.0595 24.6781 26.8593C25.7213 25.7944 27.1148 25.1652 28.5868 25.0944C30.0587 25.0236 31.5037 25.5162 32.64 26.4762C33.7763 27.4362 34.5224 28.7947 34.7328 30.287C34.9432 31.7792 34.6029 33.2982 33.7782 34.5476C32.9535 35.7971 31.7035 36.6875 30.2719 37.0452C28.8404 37.403 27.33 37.2024 26.0351 36.4826C24.7403 35.7629 23.7539 34.5755 23.2682 33.152C22.7826 31.7286 22.8325 30.1711 23.4083 28.7832L12.6528 22.4299C12.5949 22.4949 12.5356 22.5584 12.4747 22.6203C11.6433 23.4708 10.584 24.0499 9.43085 24.2845C8.2777 24.5191 7.08246 24.3986 5.99623 23.9383C4.91001 23.478 3.98158 22.6984 3.32833 21.6983C2.67507 20.6981 2.32632 19.5223 2.32617 18.3194Z"
                            fill="#ECEDEF"
                          />
                        </svg>
                      </div>
                      <div className="gap-2 mt-3 lg:mt-14 columns-3">
                        <DownloadAppDialog
                          trigger={
                            <div className="bg-[#393A3F] text-center py-3 px-3 lg:py-8 lg:px-5 rounded-[24px] border-[0.31px] border-slate-500 cursor-pointer">
                              <span className=" inline-block ">
                                <svg
                                  width="47"
                                  height="46"
                                  viewBox="0 0 47 46"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M16.8999 20.1221H30.2646"
                                    stroke="#33C004"
                                    stroke-width="2.2911"
                                    stroke-miterlimit="10"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                  <path
                                    d="M14.0362 35.2628H21.6732L30.1694 40.9142C31.4295 41.7543 33.1287 40.8569 33.1287 39.3295V35.2628C38.8564 35.2628 42.6749 31.4443 42.6749 25.7166V14.2611C42.6749 8.53334 38.8564 4.71484 33.1287 4.71484H14.0362C8.30848 4.71484 4.48999 8.53334 4.48999 14.2611V25.7166C4.48999 31.4443 8.30848 35.2628 14.0362 35.2628Z"
                                    stroke="#33C004"
                                    stroke-width="2.2911"
                                    stroke-miterlimit="10"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                </svg>
                              </span>
                              <h2 className="lg:text-[22px] text-[#ECEDEF] font-semibold">
                                Live chat{" "}
                              </h2>
                              <h2 className="lg:text-[21px] font-semibold">
                                <span className="inline-block me-1">
                                  <span className="text-[#33C004]">
                                    ₹{detail?.chat_price?.discount_price}/m {""}
                                  </span>
                                  <del className="border-[#FE0000]">
                                    ₹{detail?.chat_price?.current_price}
                                  </del>
                                </span>
                              </h2>
                              <h2 className="text-[#33C004] mt-5 lg:text-[21px] font-semibold">
                                Connect
                              </h2>
                            </div>
                          }
                        />

                        <DownloadAppDialog
                          trigger={
                            <div className="bg-[#393A3F] text-center py-3 px-3 lg:py-8 lg:px-5 rounded-[24px] border-[0.31px] border-slate-500 cursor-pointer">
                              <span className=" inline-block ">
                                <svg
                                  width="47"
                                  height="46"
                                  viewBox="0 0 47 46"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M42.3232 35.0716C42.3232 35.7589 42.1705 36.4653 41.8459 37.1526C41.5213 37.84 41.1013 38.4891 40.5476 39.1001C39.6121 40.1311 38.5811 40.8757 37.4164 41.353C36.2709 41.8303 35.0299 42.0785 33.6934 42.0785C31.746 42.0785 29.6649 41.6203 27.4693 40.6847C25.2736 39.7492 23.078 38.4891 20.9015 36.9044C18.7058 35.3007 16.6248 33.5251 14.6391 31.5585C12.6726 29.5729 10.897 27.4918 9.31234 25.3153C7.74676 23.1388 6.48665 20.9622 5.57021 18.8048C4.65378 16.6282 4.19556 14.5472 4.19556 12.5615C4.19556 11.2632 4.42467 10.0222 4.88289 8.87669C5.3411 7.71205 6.06662 6.64287 7.07852 5.68825C8.30044 4.48542 9.63691 3.89355 11.0498 3.89355C11.5843 3.89355 12.1189 4.00811 12.5962 4.23722C13.0926 4.46633 13.5318 4.80999 13.8754 5.3064L18.3049 11.5496C18.6486 12.0269 18.8968 12.4661 19.0686 12.8861C19.2404 13.287 19.3359 13.688 19.3359 14.0507C19.3359 14.509 19.2022 14.9672 18.9349 15.4063C18.6867 15.8454 18.324 16.3037 17.8658 16.7619L16.4147 18.2702C16.2047 18.4802 16.1093 18.7284 16.1093 19.0339C16.1093 19.1866 16.1283 19.3203 16.1665 19.473C16.2238 19.6257 16.2811 19.7403 16.3193 19.8549C16.6629 20.4849 17.2548 21.3059 18.0949 22.2987C18.954 23.2915 19.8705 24.3034 20.8633 25.3153C21.8943 26.3272 22.8871 27.2627 23.899 28.1219C24.8918 28.962 25.7128 29.5347 26.3619 29.8784C26.4574 29.9166 26.5719 29.9739 26.7056 30.0311C26.8583 30.0884 27.0111 30.1075 27.1829 30.1075C27.5075 30.1075 27.7557 29.993 27.9657 29.7829L29.4167 28.351C29.894 27.8737 30.3522 27.5109 30.7914 27.2818C31.2305 27.0145 31.6696 26.8809 32.1469 26.8809C32.5097 26.8809 32.8915 26.9573 33.3116 27.1291C33.7316 27.3009 34.1707 27.5491 34.648 27.8737L40.9676 32.3604C41.4641 32.7041 41.8077 33.105 42.0177 33.5823C42.2087 34.0597 42.3232 34.537 42.3232 35.0716Z"
                                    stroke="#8F63EC"
                                    stroke-width="2.2911"
                                    stroke-miterlimit="10"
                                  />
                                  <path
                                    d="M35.6982 17.258C35.6982 16.1125 34.8009 14.356 33.4644 12.9241C32.2425 11.6067 30.6196 10.5757 29.0159 10.5757"
                                    stroke="#8F63EC"
                                    stroke-width="2.2911"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                  <path
                                    d="M42.3806 17.2583C42.3806 9.8695 36.4047 3.89355 29.0159 3.89355"
                                    stroke="#8F63EC"
                                    stroke-width="2.2911"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                </svg>
                              </span>
                              <h2 className="lg:text-[22px] text-[#ECEDEF] font-semibold">
                                Audio call{" "}
                              </h2>
                              <h2 className="lg:text-[21px] font-semibold">
                                <span className="inline-block me-1">
                                  <span className="text-[#33C004]">
                                    ₹{detail?.audio_call_price?.discount_price}
                                    /m {""}
                                  </span>
                                  <del className="border-[#FE0000]">
                                    ₹{detail?.audio_call_price?.current_price}
                                  </del>
                                </span>
                              </h2>
                              <h2 className="text-[#8F63EC] mt-5 lg:text-[21px] font-semibold">
                                Connect
                              </h2>
                            </div>
                          }
                        />

                        <DownloadAppDialog
                          trigger={
                            <div className="bg-[#393A3F] text-center py-3 px-3 lg:py-8 lg:px-5 rounded-[24px] border-[0.31px] border-slate-500 cursor-pointer">
                              <span className=" inline-block ">
                                <svg
                                  width="46"
                                  height="46"
                                  viewBox="0 0 46 46"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M24.005 39.0624H11.9386C5.90534 39.0624 3.90063 35.0529 3.90063 31.0244V14.9486C3.90063 8.91535 5.90534 6.91064 11.9386 6.91064H24.005C30.0382 6.91064 32.0429 8.91535 32.0429 14.9486V31.0244C32.0429 37.0576 30.0191 39.0624 24.005 39.0624Z"
                                    stroke="#11B9E9"
                                    stroke-width="2.2911"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                  <path
                                    d="M37.3507 32.7234L32.043 29.0004V16.9531L37.3507 13.23C39.9473 11.4163 42.0856 12.5236 42.0856 15.7121V30.2605C42.0856 33.449 39.9473 34.5563 37.3507 32.7234Z"
                                    stroke="#11B9E9"
                                    stroke-width="2.2911"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                  <path
                                    d="M22.0384 21.0769C23.6201 21.0769 24.9023 19.7947 24.9023 18.213C24.9023 16.6313 23.6201 15.3491 22.0384 15.3491C20.4568 15.3491 19.1746 16.6313 19.1746 18.213C19.1746 19.7947 20.4568 21.0769 22.0384 21.0769Z"
                                    stroke="#11B9E9"
                                    stroke-width="2.2911"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                </svg>
                              </span>
                              <h2 className="lg:text-[22px] text-[#ECEDEF] font-semibold">
                                Video call
                              </h2>
                              <h2 className="lg:text-[21px] font-semibold">
                                {/* <span className="inline-block me-1">
                                  ₹{detail?.video_call_price?.current_price} / m
                                </span> */}
                                <span className="inline-block me-1">
                                  <span className="text-[#33C004]">
                                    ₹{detail?.video_call_price?.discount_price}
                                    /m {""}
                                  </span>
                                  <del className="border-[#FE0000]">
                                    ₹{detail?.video_call_price?.current_price}
                                  </del>
                                </span>
                              </h2>
                              <h2 className="text-[#11B9E9] mt-5 lg:text-[21px] font-semibold">
                                Connect
                              </h2>
                            </div>
                          }
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="container px-[10px] md:px-16  mx-auto py-33">
            <div className="bg-[#242424] lg:p-10 p-3 rounded-[20px]">
              <h2 className="lg:text-[36px] text-[22px] text-[#D9D9D9]">
                Specialization
              </h2>
              <p className="lg:text-[26px] text-[16px]">
                {detail?.category_name}
              </p>
              <div className="mt-5">
                <h2 className="lg:text-[36px] text-[22px] text-[#D9D9D9]">
                  Coach Services
                </h2>
                <p className="lg:text-[26px] text-[16px]">
                  {detail?.services}
                  {detail?.description}
                </p>
              </div>
              <div className="mt-5">
                <h2 className="lg:text-[36px] text-[22px] text-[#D9D9D9]">
                  Coach Experience & Qualification
                </h2>
                <p className="lg:text-[26px] text-[16px]">
                  {detail?.description}
                </p>
              </div>
              <div className="mt-5 gap-2 columns-2 xl:columns-5 ">
                <img
                  src="/images/avatars/squre-img.png"
                  className="w-full rounded-[8px] mb-2"
                  alt=""
                />
                <img
                  src="/images/avatars/squre-img.png"
                  className="w-full rounded-[8px] mb-2"
                  alt=""
                />
                <img
                  src="/images/avatars/squre-img.png"
                  className="w-full rounded-[8px] mb-2"
                  alt=""
                />
                <img
                  src="/images/avatars/squre-img.png"
                  className="w-full rounded-[8px] mb-2"
                  alt=""
                />
                <img
                  src="/images/avatars/squre-img.png"
                  className="w-full rounded-[8px] mb-2"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#242424]">
          <div className="container px-[10px] md:px-16  mx-auto py-33">
            <div>
              <h2 className="lg:text-[33px] text-[#D9D9D9]">
                Ratings & Reviews
              </h2>
              <div className="flex flex-wrap items-center">
                <div className="lg:w-[50%] mb-4 lg:mb-0  w-full xl:border-e-2 xl:border-[#373737]">
                  <div className="bg-[#373737] w-full lg:max-w-[473px] p-5  mt-3  flex flex-wrap items-center rounded-[18px]">
                    <div className="lg:w-[70%] w-full pe-3">
                      <div className="flex items-center mb-2">
                        <h2 className="text-[19px] me-1">5</h2>{" "}
                        <div className="h-[11px] bg-[#555555] w-full overflow-hidden rounded-[44px]  relative">
                          <div className="absolute left-0 top-0 bottom-0 bg-[#FFA643] w-full rounded-[44px]"></div>
                        </div>
                      </div>
                      <div className="flex items-center mb-2">
                        <h2 className="text-[19px] me-1">4</h2>{" "}
                        <div className="h-[11px] bg-[#555555] w-full overflow-hidden rounded-[44px]  relative">
                          <div className="absolute left-0 top-0 bottom-0 bg-[#FFA643] w-[75%] rounded-[44px]"></div>
                        </div>
                      </div>
                      <div className="flex items-center mb-2">
                        <h2 className="text-[19px] me-1">3</h2>{" "}
                        <div className="h-[11px] bg-[#555555] overflow-hidden w-full rounded-[44px]  relative">
                          <div className="absolute left-0 top-0 bottom-0 bg-[#FFA643] w-[65%] rounded-[44px]"></div>
                        </div>
                      </div>
                      <div className="flex items-center mb-2">
                        <h2 className="text-[19px] me-1">2</h2>{" "}
                        <div className="h-[11px] bg-[#555555] overflow-hidden w-full rounded-[44px]  relative">
                          <div className="absolute left-0 top-0 bottom-0 bg-[#FFA643] w-[45%] rounded-[44px]"></div>
                        </div>
                      </div>
                      <div className="flex items-center mb-2">
                        <h2 className="text-[19px] me-1">1</h2>{" "}
                        <div className="h-[11px] bg-[#555555] overflow-hidden rounded-[44px] w-full relative">
                          <div className="absolute left-0 top-0 bottom-0 bg-[#FFA643] w-[30%] rounded-[44px]"></div>
                        </div>
                      </div>
                    </div>
                    <div className="lg:w-[30%] w-full text-center">
                      <h2>
                        <span className="text-[44px] font-bold inline-block align-middle">
                          {" "}
                          4.5
                        </span>{" "}
                        <svg
                          className="inline-block"
                          width="26"
                          height="26"
                          viewBox="0 0 26 26"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M15.0443 4.28097L16.865 7.92236C17.1133 8.42926 17.7753 8.91547 18.334 9.00857L21.634 9.55685C23.7443 9.90857 24.2409 11.4396 22.7202 12.95L20.1547 15.5155C19.7202 15.95 19.4822 16.7879 19.6167 17.3879L20.3512 20.5638C20.9305 23.0776 19.596 24.05 17.3719 22.7362L14.2788 20.9052C13.7202 20.5741 12.7995 20.5741 12.2305 20.9052L9.13739 22.7362C6.92359 24.05 5.57876 23.0672 6.15807 20.5638L6.89255 17.3879C7.02704 16.7879 6.7891 15.95 6.35462 15.5155L3.7891 12.95C2.27875 11.4396 2.76496 9.90857 4.87531 9.55685L8.17532 9.00857C8.72359 8.91547 9.38566 8.42926 9.63394 7.92236L11.4546 4.28097C12.4477 2.30511 14.0615 2.30511 15.0443 4.28097Z"
                            fill="#FFA643"
                            stroke="#FFA643"
                            stroke-width="2.06897"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </h2>
                      <span className="text-[#A0A0A0]">273 Reviews</span>
                    </div>
                  </div>
                </div>

                <div className="flex-none lg:w-[50%] w-full">
                  <div className="flex flex-col justify-center items-center ">
                    <svg
                      width="53"
                      height="53"
                      viewBox="0 0 53 53"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M30.2729 7.94704L34.1256 15.6524C34.651 16.725 36.0519 17.7538 37.234 17.9508L44.217 19.111C48.6825 19.8553 49.7333 23.095 46.5154 26.291L41.0867 31.7197C40.1673 32.6391 39.6638 34.4122 39.9484 35.6819L41.5026 42.4021C42.7284 47.7214 39.9046 49.7791 35.1982 46.9991L28.6531 43.1245C27.471 42.424 25.5228 42.424 24.3188 43.1245L17.7737 46.9991C13.0892 49.7791 10.2435 47.6995 11.4693 42.4021L13.0235 35.6819C13.3081 34.4122 12.8046 32.6391 11.8852 31.7197L6.45647 26.291C3.26051 23.095 4.28935 19.8553 8.75493 19.111L15.7379 17.9508C16.8981 17.7538 18.299 16.725 18.8244 15.6524L22.6771 7.94704C24.7785 3.76602 28.1934 3.76602 30.2729 7.94704Z"
                        stroke="white"
                        stroke-width="4.37803"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <br />
                    <h2 className="text-[29px]">Rate Now</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-5 lg:pt-16">
              <h2 className="lg:text-[33px] border-b-2 mb-11 text-[#D9D9D9] pb-6">
                Summary
              </h2>
              <div className="lg:columns-2">
                <div className=" mb-8">
                  <div className="flex items-center">
                    <div className="shrink-0">
                      <img
                        src="/images/astrologers/djGCYIrB_400x400.png"
                        className="w-[71px] h-[71px] object-cover bg-[#373737] rounded-full"
                        alt=""
                      />
                    </div>
                    <div className="ms-2 grow lg:ms-6">
                      <h3 className="md:text-[25px] mb-1 font-bold">
                        Vachi Savadatti
                      </h3>
                      <div className="flex flex-wrap">
                        <svg
                          width="23"
                          height="22"
                          viewBox="0 0 23 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.0553 3.53407L14.632 6.68755C14.847 7.12653 15.4204 7.54759 15.9041 7.62822L18.762 8.10303C20.5896 8.40763 21.0196 9.73352 19.7026 11.0415L17.4809 13.2633C17.1046 13.6395 16.8986 14.3652 17.015 14.8848L17.6511 17.6351C18.1528 19.8121 16.9971 20.6542 15.071 19.5165L12.3923 17.9308C11.9085 17.6441 11.1112 17.6441 10.6185 17.9308L7.93981 19.5165C6.02264 20.6542 4.85801 19.8031 5.3597 17.6351L5.99577 14.8848C6.11223 14.3652 5.90618 13.6395 5.52991 13.2633L3.30814 11.0415C2.00017 9.73352 2.42123 8.40763 4.24881 8.10303L7.10665 7.62822C7.58146 7.54759 8.15482 7.12653 8.36983 6.68755L9.94657 3.53407C10.8066 1.82295 12.2042 1.82295 13.0553 3.53407Z"
                            fill="#FFA643"
                            stroke="#FFA643"
                            stroke-width="0.895874"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                        <svg
                          width="23"
                          height="22"
                          viewBox="0 0 23 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.0553 3.53407L14.632 6.68755C14.847 7.12653 15.4204 7.54759 15.9041 7.62822L18.762 8.10303C20.5896 8.40763 21.0196 9.73352 19.7026 11.0415L17.4809 13.2633C17.1046 13.6395 16.8986 14.3652 17.015 14.8848L17.6511 17.6351C18.1528 19.8121 16.9971 20.6542 15.071 19.5165L12.3923 17.9308C11.9085 17.6441 11.1112 17.6441 10.6185 17.9308L7.93981 19.5165C6.02264 20.6542 4.85801 19.8031 5.3597 17.6351L5.99577 14.8848C6.11223 14.3652 5.90618 13.6395 5.52991 13.2633L3.30814 11.0415C2.00017 9.73352 2.42123 8.40763 4.24881 8.10303L7.10665 7.62822C7.58146 7.54759 8.15482 7.12653 8.36983 6.68755L9.94657 3.53407C10.8066 1.82295 12.2042 1.82295 13.0553 3.53407Z"
                            fill="#FFA643"
                            stroke="#FFA643"
                            stroke-width="0.895874"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                        <svg
                          width="23"
                          height="22"
                          viewBox="0 0 23 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.0553 3.53407L14.632 6.68755C14.847 7.12653 15.4204 7.54759 15.9041 7.62822L18.762 8.10303C20.5896 8.40763 21.0196 9.73352 19.7026 11.0415L17.4809 13.2633C17.1046 13.6395 16.8986 14.3652 17.015 14.8848L17.6511 17.6351C18.1528 19.8121 16.9971 20.6542 15.071 19.5165L12.3923 17.9308C11.9085 17.6441 11.1112 17.6441 10.6185 17.9308L7.93981 19.5165C6.02264 20.6542 4.85801 19.8031 5.3597 17.6351L5.99577 14.8848C6.11223 14.3652 5.90618 13.6395 5.52991 13.2633L3.30814 11.0415C2.00017 9.73352 2.42123 8.40763 4.24881 8.10303L7.10665 7.62822C7.58146 7.54759 8.15482 7.12653 8.36983 6.68755L9.94657 3.53407C10.8066 1.82295 12.2042 1.82295 13.0553 3.53407Z"
                            fill="#FFA643"
                            stroke="#FFA643"
                            stroke-width="0.895874"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                        <svg
                          width="23"
                          height="22"
                          viewBox="0 0 23 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.0553 3.53407L14.632 6.68755C14.847 7.12653 15.4204 7.54759 15.9041 7.62822L18.762 8.10303C20.5896 8.40763 21.0196 9.73352 19.7026 11.0415L17.4809 13.2633C17.1046 13.6395 16.8986 14.3652 17.015 14.8848L17.6511 17.6351C18.1528 19.8121 16.9971 20.6542 15.071 19.5165L12.3923 17.9308C11.9085 17.6441 11.1112 17.6441 10.6185 17.9308L7.93981 19.5165C6.02264 20.6542 4.85801 19.8031 5.3597 17.6351L5.99577 14.8848C6.11223 14.3652 5.90618 13.6395 5.52991 13.2633L3.30814 11.0415C2.00017 9.73352 2.42123 8.40763 4.24881 8.10303L7.10665 7.62822C7.58146 7.54759 8.15482 7.12653 8.36983 6.68755L9.94657 3.53407C10.8066 1.82295 12.2042 1.82295 13.0553 3.53407Z"
                            fill="#FFA643"
                            stroke="#FFA643"
                            stroke-width="0.895874"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                        <svg
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12.7271 3.53383L14.3039 6.6873C14.5189 7.12628 15.0922 7.54734 15.576 7.62797L18.4338 8.10279C20.2614 8.40738 20.6915 9.73328 19.3745 11.0413L17.1527 13.263C16.7765 13.6393 16.5704 14.3649 16.6869 14.8846L17.323 17.6349C17.8247 19.8119 16.669 20.654 14.7428 19.5162L12.0642 17.9305C11.5804 17.6438 10.7831 17.6438 10.2904 17.9305L7.61169 19.5162C5.69452 20.654 4.52988 19.8029 5.03157 17.6349L5.66764 14.8846C5.78411 14.3649 5.57805 13.6393 5.20179 13.263L2.98002 11.0413C1.67204 9.73328 2.0931 8.40738 3.92069 8.10279L6.77853 7.62797C7.25334 7.54734 7.8267 7.12628 8.04171 6.6873L9.61845 3.53383C10.4785 1.82271 11.876 1.82271 12.7271 3.53383Z"
                            stroke="#FFA643"
                            stroke-width="0.895874"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="text-[#A0A0A0] mt-4">
                      Buttons in a design system are a visual component or
                      pattern used to trigger an action or navigate to another
                      page or section of a website or application.
                    </p>
                  </div>
                </div>
                <div className=" mb-8">
                  <div className="flex items-center">
                    <div className="shrink-0">
                      <img
                        src="/images/astrologers/djGCYIrB_400x400.png"
                        className="w-[71px] h-[71px] object-cover bg-[#373737] rounded-full"
                        alt=""
                      />
                    </div>
                    <div className="ms-2 grow lg:ms-6">
                      <h3 className="md:text-[25px] mb-1 font-bold">
                        Vachi Savadatti
                      </h3>
                      <div className="flex flex-wrap">
                        <svg
                          width="23"
                          height="22"
                          viewBox="0 0 23 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.0553 3.53407L14.632 6.68755C14.847 7.12653 15.4204 7.54759 15.9041 7.62822L18.762 8.10303C20.5896 8.40763 21.0196 9.73352 19.7026 11.0415L17.4809 13.2633C17.1046 13.6395 16.8986 14.3652 17.015 14.8848L17.6511 17.6351C18.1528 19.8121 16.9971 20.6542 15.071 19.5165L12.3923 17.9308C11.9085 17.6441 11.1112 17.6441 10.6185 17.9308L7.93981 19.5165C6.02264 20.6542 4.85801 19.8031 5.3597 17.6351L5.99577 14.8848C6.11223 14.3652 5.90618 13.6395 5.52991 13.2633L3.30814 11.0415C2.00017 9.73352 2.42123 8.40763 4.24881 8.10303L7.10665 7.62822C7.58146 7.54759 8.15482 7.12653 8.36983 6.68755L9.94657 3.53407C10.8066 1.82295 12.2042 1.82295 13.0553 3.53407Z"
                            fill="#FFA643"
                            stroke="#FFA643"
                            stroke-width="0.895874"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                        <svg
                          width="23"
                          height="22"
                          viewBox="0 0 23 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.0553 3.53407L14.632 6.68755C14.847 7.12653 15.4204 7.54759 15.9041 7.62822L18.762 8.10303C20.5896 8.40763 21.0196 9.73352 19.7026 11.0415L17.4809 13.2633C17.1046 13.6395 16.8986 14.3652 17.015 14.8848L17.6511 17.6351C18.1528 19.8121 16.9971 20.6542 15.071 19.5165L12.3923 17.9308C11.9085 17.6441 11.1112 17.6441 10.6185 17.9308L7.93981 19.5165C6.02264 20.6542 4.85801 19.8031 5.3597 17.6351L5.99577 14.8848C6.11223 14.3652 5.90618 13.6395 5.52991 13.2633L3.30814 11.0415C2.00017 9.73352 2.42123 8.40763 4.24881 8.10303L7.10665 7.62822C7.58146 7.54759 8.15482 7.12653 8.36983 6.68755L9.94657 3.53407C10.8066 1.82295 12.2042 1.82295 13.0553 3.53407Z"
                            fill="#FFA643"
                            stroke="#FFA643"
                            stroke-width="0.895874"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                        <svg
                          width="23"
                          height="22"
                          viewBox="0 0 23 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.0553 3.53407L14.632 6.68755C14.847 7.12653 15.4204 7.54759 15.9041 7.62822L18.762 8.10303C20.5896 8.40763 21.0196 9.73352 19.7026 11.0415L17.4809 13.2633C17.1046 13.6395 16.8986 14.3652 17.015 14.8848L17.6511 17.6351C18.1528 19.8121 16.9971 20.6542 15.071 19.5165L12.3923 17.9308C11.9085 17.6441 11.1112 17.6441 10.6185 17.9308L7.93981 19.5165C6.02264 20.6542 4.85801 19.8031 5.3597 17.6351L5.99577 14.8848C6.11223 14.3652 5.90618 13.6395 5.52991 13.2633L3.30814 11.0415C2.00017 9.73352 2.42123 8.40763 4.24881 8.10303L7.10665 7.62822C7.58146 7.54759 8.15482 7.12653 8.36983 6.68755L9.94657 3.53407C10.8066 1.82295 12.2042 1.82295 13.0553 3.53407Z"
                            fill="#FFA643"
                            stroke="#FFA643"
                            stroke-width="0.895874"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                        <svg
                          width="23"
                          height="22"
                          viewBox="0 0 23 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.0553 3.53407L14.632 6.68755C14.847 7.12653 15.4204 7.54759 15.9041 7.62822L18.762 8.10303C20.5896 8.40763 21.0196 9.73352 19.7026 11.0415L17.4809 13.2633C17.1046 13.6395 16.8986 14.3652 17.015 14.8848L17.6511 17.6351C18.1528 19.8121 16.9971 20.6542 15.071 19.5165L12.3923 17.9308C11.9085 17.6441 11.1112 17.6441 10.6185 17.9308L7.93981 19.5165C6.02264 20.6542 4.85801 19.8031 5.3597 17.6351L5.99577 14.8848C6.11223 14.3652 5.90618 13.6395 5.52991 13.2633L3.30814 11.0415C2.00017 9.73352 2.42123 8.40763 4.24881 8.10303L7.10665 7.62822C7.58146 7.54759 8.15482 7.12653 8.36983 6.68755L9.94657 3.53407C10.8066 1.82295 12.2042 1.82295 13.0553 3.53407Z"
                            fill="#FFA643"
                            stroke="#FFA643"
                            stroke-width="0.895874"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                        <svg
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12.7271 3.53383L14.3039 6.6873C14.5189 7.12628 15.0922 7.54734 15.576 7.62797L18.4338 8.10279C20.2614 8.40738 20.6915 9.73328 19.3745 11.0413L17.1527 13.263C16.7765 13.6393 16.5704 14.3649 16.6869 14.8846L17.323 17.6349C17.8247 19.8119 16.669 20.654 14.7428 19.5162L12.0642 17.9305C11.5804 17.6438 10.7831 17.6438 10.2904 17.9305L7.61169 19.5162C5.69452 20.654 4.52988 19.8029 5.03157 17.6349L5.66764 14.8846C5.78411 14.3649 5.57805 13.6393 5.20179 13.263L2.98002 11.0413C1.67204 9.73328 2.0931 8.40738 3.92069 8.10279L6.77853 7.62797C7.25334 7.54734 7.8267 7.12628 8.04171 6.6873L9.61845 3.53383C10.4785 1.82271 11.876 1.82271 12.7271 3.53383Z"
                            stroke="#FFA643"
                            stroke-width="0.895874"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="text-[#A0A0A0] mt-4">
                      Buttons in a design system are a visual component or
                      pattern used to trigger an action or navigate to another
                      page or section of a website or application.
                    </p>
                  </div>
                </div>
                <div className=" mb-8">
                  <div className="flex items-center">
                    <div className="shrink-0">
                      <img
                        src="/images/astrologers/djGCYIrB_400x400.png"
                        className="w-[71px] h-[71px] object-cover bg-[#373737] rounded-full"
                        alt=""
                      />
                    </div>
                    <div className="ms-2 grow lg:ms-6">
                      <h3 className="md:text-[25px] mb-1 font-bold">
                        Vachi Savadatti
                      </h3>
                      <div className="flex flex-wrap">
                        <svg
                          width="23"
                          height="22"
                          viewBox="0 0 23 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.0553 3.53407L14.632 6.68755C14.847 7.12653 15.4204 7.54759 15.9041 7.62822L18.762 8.10303C20.5896 8.40763 21.0196 9.73352 19.7026 11.0415L17.4809 13.2633C17.1046 13.6395 16.8986 14.3652 17.015 14.8848L17.6511 17.6351C18.1528 19.8121 16.9971 20.6542 15.071 19.5165L12.3923 17.9308C11.9085 17.6441 11.1112 17.6441 10.6185 17.9308L7.93981 19.5165C6.02264 20.6542 4.85801 19.8031 5.3597 17.6351L5.99577 14.8848C6.11223 14.3652 5.90618 13.6395 5.52991 13.2633L3.30814 11.0415C2.00017 9.73352 2.42123 8.40763 4.24881 8.10303L7.10665 7.62822C7.58146 7.54759 8.15482 7.12653 8.36983 6.68755L9.94657 3.53407C10.8066 1.82295 12.2042 1.82295 13.0553 3.53407Z"
                            fill="#FFA643"
                            stroke="#FFA643"
                            stroke-width="0.895874"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                        <svg
                          width="23"
                          height="22"
                          viewBox="0 0 23 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.0553 3.53407L14.632 6.68755C14.847 7.12653 15.4204 7.54759 15.9041 7.62822L18.762 8.10303C20.5896 8.40763 21.0196 9.73352 19.7026 11.0415L17.4809 13.2633C17.1046 13.6395 16.8986 14.3652 17.015 14.8848L17.6511 17.6351C18.1528 19.8121 16.9971 20.6542 15.071 19.5165L12.3923 17.9308C11.9085 17.6441 11.1112 17.6441 10.6185 17.9308L7.93981 19.5165C6.02264 20.6542 4.85801 19.8031 5.3597 17.6351L5.99577 14.8848C6.11223 14.3652 5.90618 13.6395 5.52991 13.2633L3.30814 11.0415C2.00017 9.73352 2.42123 8.40763 4.24881 8.10303L7.10665 7.62822C7.58146 7.54759 8.15482 7.12653 8.36983 6.68755L9.94657 3.53407C10.8066 1.82295 12.2042 1.82295 13.0553 3.53407Z"
                            fill="#FFA643"
                            stroke="#FFA643"
                            stroke-width="0.895874"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                        <svg
                          width="23"
                          height="22"
                          viewBox="0 0 23 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.0553 3.53407L14.632 6.68755C14.847 7.12653 15.4204 7.54759 15.9041 7.62822L18.762 8.10303C20.5896 8.40763 21.0196 9.73352 19.7026 11.0415L17.4809 13.2633C17.1046 13.6395 16.8986 14.3652 17.015 14.8848L17.6511 17.6351C18.1528 19.8121 16.9971 20.6542 15.071 19.5165L12.3923 17.9308C11.9085 17.6441 11.1112 17.6441 10.6185 17.9308L7.93981 19.5165C6.02264 20.6542 4.85801 19.8031 5.3597 17.6351L5.99577 14.8848C6.11223 14.3652 5.90618 13.6395 5.52991 13.2633L3.30814 11.0415C2.00017 9.73352 2.42123 8.40763 4.24881 8.10303L7.10665 7.62822C7.58146 7.54759 8.15482 7.12653 8.36983 6.68755L9.94657 3.53407C10.8066 1.82295 12.2042 1.82295 13.0553 3.53407Z"
                            fill="#FFA643"
                            stroke="#FFA643"
                            stroke-width="0.895874"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                        <svg
                          width="23"
                          height="22"
                          viewBox="0 0 23 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.0553 3.53407L14.632 6.68755C14.847 7.12653 15.4204 7.54759 15.9041 7.62822L18.762 8.10303C20.5896 8.40763 21.0196 9.73352 19.7026 11.0415L17.4809 13.2633C17.1046 13.6395 16.8986 14.3652 17.015 14.8848L17.6511 17.6351C18.1528 19.8121 16.9971 20.6542 15.071 19.5165L12.3923 17.9308C11.9085 17.6441 11.1112 17.6441 10.6185 17.9308L7.93981 19.5165C6.02264 20.6542 4.85801 19.8031 5.3597 17.6351L5.99577 14.8848C6.11223 14.3652 5.90618 13.6395 5.52991 13.2633L3.30814 11.0415C2.00017 9.73352 2.42123 8.40763 4.24881 8.10303L7.10665 7.62822C7.58146 7.54759 8.15482 7.12653 8.36983 6.68755L9.94657 3.53407C10.8066 1.82295 12.2042 1.82295 13.0553 3.53407Z"
                            fill="#FFA643"
                            stroke="#FFA643"
                            stroke-width="0.895874"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                        <svg
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12.7271 3.53383L14.3039 6.6873C14.5189 7.12628 15.0922 7.54734 15.576 7.62797L18.4338 8.10279C20.2614 8.40738 20.6915 9.73328 19.3745 11.0413L17.1527 13.263C16.7765 13.6393 16.5704 14.3649 16.6869 14.8846L17.323 17.6349C17.8247 19.8119 16.669 20.654 14.7428 19.5162L12.0642 17.9305C11.5804 17.6438 10.7831 17.6438 10.2904 17.9305L7.61169 19.5162C5.69452 20.654 4.52988 19.8029 5.03157 17.6349L5.66764 14.8846C5.78411 14.3649 5.57805 13.6393 5.20179 13.263L2.98002 11.0413C1.67204 9.73328 2.0931 8.40738 3.92069 8.10279L6.77853 7.62797C7.25334 7.54734 7.8267 7.12628 8.04171 6.6873L9.61845 3.53383C10.4785 1.82271 11.876 1.82271 12.7271 3.53383Z"
                            stroke="#FFA643"
                            stroke-width="0.895874"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="text-[#A0A0A0] mt-4">
                      Buttons in a design system are a visual component or
                      pattern used to trigger an action or navigate to another
                      page or section of a website or application.
                    </p>
                  </div>
                </div>
                <div className=" mb-8">
                  <div className="flex items-center">
                    <div className="shrink-0">
                      <img
                        src="/images/astrologers/djGCYIrB_400x400.png"
                        className="w-[71px] h-[71px] object-cover bg-[#373737] rounded-full"
                        alt=""
                      />
                    </div>
                    <div className="ms-2 grow lg:ms-6">
                      <h3 className="md:text-[25px] mb-1 font-bold">
                        Vachi Savadatti
                      </h3>
                      <div className="flex flex-wrap">
                        <svg
                          width="23"
                          height="22"
                          viewBox="0 0 23 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.0553 3.53407L14.632 6.68755C14.847 7.12653 15.4204 7.54759 15.9041 7.62822L18.762 8.10303C20.5896 8.40763 21.0196 9.73352 19.7026 11.0415L17.4809 13.2633C17.1046 13.6395 16.8986 14.3652 17.015 14.8848L17.6511 17.6351C18.1528 19.8121 16.9971 20.6542 15.071 19.5165L12.3923 17.9308C11.9085 17.6441 11.1112 17.6441 10.6185 17.9308L7.93981 19.5165C6.02264 20.6542 4.85801 19.8031 5.3597 17.6351L5.99577 14.8848C6.11223 14.3652 5.90618 13.6395 5.52991 13.2633L3.30814 11.0415C2.00017 9.73352 2.42123 8.40763 4.24881 8.10303L7.10665 7.62822C7.58146 7.54759 8.15482 7.12653 8.36983 6.68755L9.94657 3.53407C10.8066 1.82295 12.2042 1.82295 13.0553 3.53407Z"
                            fill="#FFA643"
                            stroke="#FFA643"
                            stroke-width="0.895874"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                        <svg
                          width="23"
                          height="22"
                          viewBox="0 0 23 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.0553 3.53407L14.632 6.68755C14.847 7.12653 15.4204 7.54759 15.9041 7.62822L18.762 8.10303C20.5896 8.40763 21.0196 9.73352 19.7026 11.0415L17.4809 13.2633C17.1046 13.6395 16.8986 14.3652 17.015 14.8848L17.6511 17.6351C18.1528 19.8121 16.9971 20.6542 15.071 19.5165L12.3923 17.9308C11.9085 17.6441 11.1112 17.6441 10.6185 17.9308L7.93981 19.5165C6.02264 20.6542 4.85801 19.8031 5.3597 17.6351L5.99577 14.8848C6.11223 14.3652 5.90618 13.6395 5.52991 13.2633L3.30814 11.0415C2.00017 9.73352 2.42123 8.40763 4.24881 8.10303L7.10665 7.62822C7.58146 7.54759 8.15482 7.12653 8.36983 6.68755L9.94657 3.53407C10.8066 1.82295 12.2042 1.82295 13.0553 3.53407Z"
                            fill="#FFA643"
                            stroke="#FFA643"
                            stroke-width="0.895874"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                        <svg
                          width="23"
                          height="22"
                          viewBox="0 0 23 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.0553 3.53407L14.632 6.68755C14.847 7.12653 15.4204 7.54759 15.9041 7.62822L18.762 8.10303C20.5896 8.40763 21.0196 9.73352 19.7026 11.0415L17.4809 13.2633C17.1046 13.6395 16.8986 14.3652 17.015 14.8848L17.6511 17.6351C18.1528 19.8121 16.9971 20.6542 15.071 19.5165L12.3923 17.9308C11.9085 17.6441 11.1112 17.6441 10.6185 17.9308L7.93981 19.5165C6.02264 20.6542 4.85801 19.8031 5.3597 17.6351L5.99577 14.8848C6.11223 14.3652 5.90618 13.6395 5.52991 13.2633L3.30814 11.0415C2.00017 9.73352 2.42123 8.40763 4.24881 8.10303L7.10665 7.62822C7.58146 7.54759 8.15482 7.12653 8.36983 6.68755L9.94657 3.53407C10.8066 1.82295 12.2042 1.82295 13.0553 3.53407Z"
                            fill="#FFA643"
                            stroke="#FFA643"
                            stroke-width="0.895874"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                        <svg
                          width="23"
                          height="22"
                          viewBox="0 0 23 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.0553 3.53407L14.632 6.68755C14.847 7.12653 15.4204 7.54759 15.9041 7.62822L18.762 8.10303C20.5896 8.40763 21.0196 9.73352 19.7026 11.0415L17.4809 13.2633C17.1046 13.6395 16.8986 14.3652 17.015 14.8848L17.6511 17.6351C18.1528 19.8121 16.9971 20.6542 15.071 19.5165L12.3923 17.9308C11.9085 17.6441 11.1112 17.6441 10.6185 17.9308L7.93981 19.5165C6.02264 20.6542 4.85801 19.8031 5.3597 17.6351L5.99577 14.8848C6.11223 14.3652 5.90618 13.6395 5.52991 13.2633L3.30814 11.0415C2.00017 9.73352 2.42123 8.40763 4.24881 8.10303L7.10665 7.62822C7.58146 7.54759 8.15482 7.12653 8.36983 6.68755L9.94657 3.53407C10.8066 1.82295 12.2042 1.82295 13.0553 3.53407Z"
                            fill="#FFA643"
                            stroke="#FFA643"
                            stroke-width="0.895874"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                        <svg
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12.7271 3.53383L14.3039 6.6873C14.5189 7.12628 15.0922 7.54734 15.576 7.62797L18.4338 8.10279C20.2614 8.40738 20.6915 9.73328 19.3745 11.0413L17.1527 13.263C16.7765 13.6393 16.5704 14.3649 16.6869 14.8846L17.323 17.6349C17.8247 19.8119 16.669 20.654 14.7428 19.5162L12.0642 17.9305C11.5804 17.6438 10.7831 17.6438 10.2904 17.9305L7.61169 19.5162C5.69452 20.654 4.52988 19.8029 5.03157 17.6349L5.66764 14.8846C5.78411 14.3649 5.57805 13.6393 5.20179 13.263L2.98002 11.0413C1.67204 9.73328 2.0931 8.40738 3.92069 8.10279L6.77853 7.62797C7.25334 7.54734 7.8267 7.12628 8.04171 6.6873L9.61845 3.53383C10.4785 1.82271 11.876 1.82271 12.7271 3.53383Z"
                            stroke="#FFA643"
                            stroke-width="0.895874"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="text-[#A0A0A0] mt-4">
                      Buttons in a design system are a visual component or
                      pattern used to trigger an action or navigate to another
                      page or section of a website or application.
                    </p>
                  </div>
                </div>
                <div className=" mb-8">
                  <div className="flex items-center">
                    <div className="shrink-0">
                      <img
                        src="/images/astrologers/djGCYIrB_400x400.png"
                        className="w-[71px] h-[71px] object-cover bg-[#373737] rounded-full"
                        alt=""
                      />
                    </div>
                    <div className="ms-2 grow lg:ms-6">
                      <h3 className="md:text-[25px] mb-1 font-bold">
                        Vachi Savadatti
                      </h3>
                      <div className="flex flex-wrap">
                        <svg
                          width="23"
                          height="22"
                          viewBox="0 0 23 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.0553 3.53407L14.632 6.68755C14.847 7.12653 15.4204 7.54759 15.9041 7.62822L18.762 8.10303C20.5896 8.40763 21.0196 9.73352 19.7026 11.0415L17.4809 13.2633C17.1046 13.6395 16.8986 14.3652 17.015 14.8848L17.6511 17.6351C18.1528 19.8121 16.9971 20.6542 15.071 19.5165L12.3923 17.9308C11.9085 17.6441 11.1112 17.6441 10.6185 17.9308L7.93981 19.5165C6.02264 20.6542 4.85801 19.8031 5.3597 17.6351L5.99577 14.8848C6.11223 14.3652 5.90618 13.6395 5.52991 13.2633L3.30814 11.0415C2.00017 9.73352 2.42123 8.40763 4.24881 8.10303L7.10665 7.62822C7.58146 7.54759 8.15482 7.12653 8.36983 6.68755L9.94657 3.53407C10.8066 1.82295 12.2042 1.82295 13.0553 3.53407Z"
                            fill="#FFA643"
                            stroke="#FFA643"
                            stroke-width="0.895874"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                        <svg
                          width="23"
                          height="22"
                          viewBox="0 0 23 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.0553 3.53407L14.632 6.68755C14.847 7.12653 15.4204 7.54759 15.9041 7.62822L18.762 8.10303C20.5896 8.40763 21.0196 9.73352 19.7026 11.0415L17.4809 13.2633C17.1046 13.6395 16.8986 14.3652 17.015 14.8848L17.6511 17.6351C18.1528 19.8121 16.9971 20.6542 15.071 19.5165L12.3923 17.9308C11.9085 17.6441 11.1112 17.6441 10.6185 17.9308L7.93981 19.5165C6.02264 20.6542 4.85801 19.8031 5.3597 17.6351L5.99577 14.8848C6.11223 14.3652 5.90618 13.6395 5.52991 13.2633L3.30814 11.0415C2.00017 9.73352 2.42123 8.40763 4.24881 8.10303L7.10665 7.62822C7.58146 7.54759 8.15482 7.12653 8.36983 6.68755L9.94657 3.53407C10.8066 1.82295 12.2042 1.82295 13.0553 3.53407Z"
                            fill="#FFA643"
                            stroke="#FFA643"
                            stroke-width="0.895874"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                        <svg
                          width="23"
                          height="22"
                          viewBox="0 0 23 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.0553 3.53407L14.632 6.68755C14.847 7.12653 15.4204 7.54759 15.9041 7.62822L18.762 8.10303C20.5896 8.40763 21.0196 9.73352 19.7026 11.0415L17.4809 13.2633C17.1046 13.6395 16.8986 14.3652 17.015 14.8848L17.6511 17.6351C18.1528 19.8121 16.9971 20.6542 15.071 19.5165L12.3923 17.9308C11.9085 17.6441 11.1112 17.6441 10.6185 17.9308L7.93981 19.5165C6.02264 20.6542 4.85801 19.8031 5.3597 17.6351L5.99577 14.8848C6.11223 14.3652 5.90618 13.6395 5.52991 13.2633L3.30814 11.0415C2.00017 9.73352 2.42123 8.40763 4.24881 8.10303L7.10665 7.62822C7.58146 7.54759 8.15482 7.12653 8.36983 6.68755L9.94657 3.53407C10.8066 1.82295 12.2042 1.82295 13.0553 3.53407Z"
                            fill="#FFA643"
                            stroke="#FFA643"
                            stroke-width="0.895874"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                        <svg
                          width="23"
                          height="22"
                          viewBox="0 0 23 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.0553 3.53407L14.632 6.68755C14.847 7.12653 15.4204 7.54759 15.9041 7.62822L18.762 8.10303C20.5896 8.40763 21.0196 9.73352 19.7026 11.0415L17.4809 13.2633C17.1046 13.6395 16.8986 14.3652 17.015 14.8848L17.6511 17.6351C18.1528 19.8121 16.9971 20.6542 15.071 19.5165L12.3923 17.9308C11.9085 17.6441 11.1112 17.6441 10.6185 17.9308L7.93981 19.5165C6.02264 20.6542 4.85801 19.8031 5.3597 17.6351L5.99577 14.8848C6.11223 14.3652 5.90618 13.6395 5.52991 13.2633L3.30814 11.0415C2.00017 9.73352 2.42123 8.40763 4.24881 8.10303L7.10665 7.62822C7.58146 7.54759 8.15482 7.12653 8.36983 6.68755L9.94657 3.53407C10.8066 1.82295 12.2042 1.82295 13.0553 3.53407Z"
                            fill="#FFA643"
                            stroke="#FFA643"
                            stroke-width="0.895874"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                        <svg
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12.7271 3.53383L14.3039 6.6873C14.5189 7.12628 15.0922 7.54734 15.576 7.62797L18.4338 8.10279C20.2614 8.40738 20.6915 9.73328 19.3745 11.0413L17.1527 13.263C16.7765 13.6393 16.5704 14.3649 16.6869 14.8846L17.323 17.6349C17.8247 19.8119 16.669 20.654 14.7428 19.5162L12.0642 17.9305C11.5804 17.6438 10.7831 17.6438 10.2904 17.9305L7.61169 19.5162C5.69452 20.654 4.52988 19.8029 5.03157 17.6349L5.66764 14.8846C5.78411 14.3649 5.57805 13.6393 5.20179 13.263L2.98002 11.0413C1.67204 9.73328 2.0931 8.40738 3.92069 8.10279L6.77853 7.62797C7.25334 7.54734 7.8267 7.12628 8.04171 6.6873L9.61845 3.53383C10.4785 1.82271 11.876 1.82271 12.7271 3.53383Z"
                            stroke="#FFA643"
                            stroke-width="0.895874"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="text-[#A0A0A0] mt-4">
                      Buttons in a design system are a visual component or
                      pattern used to trigger an action or navigate to another
                      page or section of a website or application.
                    </p>
                  </div>
                </div>
                <div className=" mb-8">
                  <div className="flex items-center">
                    <div className="shrink-0">
                      <img
                        src="/images/astrologers/djGCYIrB_400x400.png"
                        className="w-[71px] h-[71px] object-cover bg-[#373737] rounded-full"
                        alt=""
                      />
                    </div>
                    <div className="ms-2 grow lg:ms-6">
                      <h3 className="md:text-[25px] mb-1 font-bold">
                        Vachi Savadatti
                      </h3>
                      <div className="flex flex-wrap">
                        <svg
                          width="23"
                          height="22"
                          viewBox="0 0 23 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.0553 3.53407L14.632 6.68755C14.847 7.12653 15.4204 7.54759 15.9041 7.62822L18.762 8.10303C20.5896 8.40763 21.0196 9.73352 19.7026 11.0415L17.4809 13.2633C17.1046 13.6395 16.8986 14.3652 17.015 14.8848L17.6511 17.6351C18.1528 19.8121 16.9971 20.6542 15.071 19.5165L12.3923 17.9308C11.9085 17.6441 11.1112 17.6441 10.6185 17.9308L7.93981 19.5165C6.02264 20.6542 4.85801 19.8031 5.3597 17.6351L5.99577 14.8848C6.11223 14.3652 5.90618 13.6395 5.52991 13.2633L3.30814 11.0415C2.00017 9.73352 2.42123 8.40763 4.24881 8.10303L7.10665 7.62822C7.58146 7.54759 8.15482 7.12653 8.36983 6.68755L9.94657 3.53407C10.8066 1.82295 12.2042 1.82295 13.0553 3.53407Z"
                            fill="#FFA643"
                            stroke="#FFA643"
                            stroke-width="0.895874"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                        <svg
                          width="23"
                          height="22"
                          viewBox="0 0 23 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.0553 3.53407L14.632 6.68755C14.847 7.12653 15.4204 7.54759 15.9041 7.62822L18.762 8.10303C20.5896 8.40763 21.0196 9.73352 19.7026 11.0415L17.4809 13.2633C17.1046 13.6395 16.8986 14.3652 17.015 14.8848L17.6511 17.6351C18.1528 19.8121 16.9971 20.6542 15.071 19.5165L12.3923 17.9308C11.9085 17.6441 11.1112 17.6441 10.6185 17.9308L7.93981 19.5165C6.02264 20.6542 4.85801 19.8031 5.3597 17.6351L5.99577 14.8848C6.11223 14.3652 5.90618 13.6395 5.52991 13.2633L3.30814 11.0415C2.00017 9.73352 2.42123 8.40763 4.24881 8.10303L7.10665 7.62822C7.58146 7.54759 8.15482 7.12653 8.36983 6.68755L9.94657 3.53407C10.8066 1.82295 12.2042 1.82295 13.0553 3.53407Z"
                            fill="#FFA643"
                            stroke="#FFA643"
                            stroke-width="0.895874"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                        <svg
                          width="23"
                          height="22"
                          viewBox="0 0 23 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.0553 3.53407L14.632 6.68755C14.847 7.12653 15.4204 7.54759 15.9041 7.62822L18.762 8.10303C20.5896 8.40763 21.0196 9.73352 19.7026 11.0415L17.4809 13.2633C17.1046 13.6395 16.8986 14.3652 17.015 14.8848L17.6511 17.6351C18.1528 19.8121 16.9971 20.6542 15.071 19.5165L12.3923 17.9308C11.9085 17.6441 11.1112 17.6441 10.6185 17.9308L7.93981 19.5165C6.02264 20.6542 4.85801 19.8031 5.3597 17.6351L5.99577 14.8848C6.11223 14.3652 5.90618 13.6395 5.52991 13.2633L3.30814 11.0415C2.00017 9.73352 2.42123 8.40763 4.24881 8.10303L7.10665 7.62822C7.58146 7.54759 8.15482 7.12653 8.36983 6.68755L9.94657 3.53407C10.8066 1.82295 12.2042 1.82295 13.0553 3.53407Z"
                            fill="#FFA643"
                            stroke="#FFA643"
                            stroke-width="0.895874"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                        <svg
                          width="23"
                          height="22"
                          viewBox="0 0 23 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.0553 3.53407L14.632 6.68755C14.847 7.12653 15.4204 7.54759 15.9041 7.62822L18.762 8.10303C20.5896 8.40763 21.0196 9.73352 19.7026 11.0415L17.4809 13.2633C17.1046 13.6395 16.8986 14.3652 17.015 14.8848L17.6511 17.6351C18.1528 19.8121 16.9971 20.6542 15.071 19.5165L12.3923 17.9308C11.9085 17.6441 11.1112 17.6441 10.6185 17.9308L7.93981 19.5165C6.02264 20.6542 4.85801 19.8031 5.3597 17.6351L5.99577 14.8848C6.11223 14.3652 5.90618 13.6395 5.52991 13.2633L3.30814 11.0415C2.00017 9.73352 2.42123 8.40763 4.24881 8.10303L7.10665 7.62822C7.58146 7.54759 8.15482 7.12653 8.36983 6.68755L9.94657 3.53407C10.8066 1.82295 12.2042 1.82295 13.0553 3.53407Z"
                            fill="#FFA643"
                            stroke="#FFA643"
                            stroke-width="0.895874"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                        <svg
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12.7271 3.53383L14.3039 6.6873C14.5189 7.12628 15.0922 7.54734 15.576 7.62797L18.4338 8.10279C20.2614 8.40738 20.6915 9.73328 19.3745 11.0413L17.1527 13.263C16.7765 13.6393 16.5704 14.3649 16.6869 14.8846L17.323 17.6349C17.8247 19.8119 16.669 20.654 14.7428 19.5162L12.0642 17.9305C11.5804 17.6438 10.7831 17.6438 10.2904 17.9305L7.61169 19.5162C5.69452 20.654 4.52988 19.8029 5.03157 17.6349L5.66764 14.8846C5.78411 14.3649 5.57805 13.6393 5.20179 13.263L2.98002 11.0413C1.67204 9.73328 2.0931 8.40738 3.92069 8.10279L6.77853 7.62797C7.25334 7.54734 7.8267 7.12628 8.04171 6.6873L9.61845 3.53383C10.4785 1.82271 11.876 1.82271 12.7271 3.53383Z"
                            stroke="#FFA643"
                            stroke-width="0.895874"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="text-[#A0A0A0] mt-4">
                      Buttons in a design system are a visual component or
                      pattern used to trigger an action or navigate to another
                      page or section of a website or application.
                    </p>
                  </div>
                </div>
                <div className=" mb-8">
                  <div className="flex items-center">
                    <div className="shrink-0">
                      <img
                        src="/images/astrologers/djGCYIrB_400x400.png"
                        className="w-[71px] h-[71px] object-cover bg-[#373737] rounded-full"
                        alt=""
                      />
                    </div>
                    <div className="ms-2 grow lg:ms-6">
                      <h3 className="md:text-[25px] mb-1 font-bold">
                        Vachi Savadatti
                      </h3>
                      <div className="flex flex-wrap">
                        <svg
                          width="23"
                          height="22"
                          viewBox="0 0 23 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.0553 3.53407L14.632 6.68755C14.847 7.12653 15.4204 7.54759 15.9041 7.62822L18.762 8.10303C20.5896 8.40763 21.0196 9.73352 19.7026 11.0415L17.4809 13.2633C17.1046 13.6395 16.8986 14.3652 17.015 14.8848L17.6511 17.6351C18.1528 19.8121 16.9971 20.6542 15.071 19.5165L12.3923 17.9308C11.9085 17.6441 11.1112 17.6441 10.6185 17.9308L7.93981 19.5165C6.02264 20.6542 4.85801 19.8031 5.3597 17.6351L5.99577 14.8848C6.11223 14.3652 5.90618 13.6395 5.52991 13.2633L3.30814 11.0415C2.00017 9.73352 2.42123 8.40763 4.24881 8.10303L7.10665 7.62822C7.58146 7.54759 8.15482 7.12653 8.36983 6.68755L9.94657 3.53407C10.8066 1.82295 12.2042 1.82295 13.0553 3.53407Z"
                            fill="#FFA643"
                            stroke="#FFA643"
                            stroke-width="0.895874"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                        <svg
                          width="23"
                          height="22"
                          viewBox="0 0 23 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.0553 3.53407L14.632 6.68755C14.847 7.12653 15.4204 7.54759 15.9041 7.62822L18.762 8.10303C20.5896 8.40763 21.0196 9.73352 19.7026 11.0415L17.4809 13.2633C17.1046 13.6395 16.8986 14.3652 17.015 14.8848L17.6511 17.6351C18.1528 19.8121 16.9971 20.6542 15.071 19.5165L12.3923 17.9308C11.9085 17.6441 11.1112 17.6441 10.6185 17.9308L7.93981 19.5165C6.02264 20.6542 4.85801 19.8031 5.3597 17.6351L5.99577 14.8848C6.11223 14.3652 5.90618 13.6395 5.52991 13.2633L3.30814 11.0415C2.00017 9.73352 2.42123 8.40763 4.24881 8.10303L7.10665 7.62822C7.58146 7.54759 8.15482 7.12653 8.36983 6.68755L9.94657 3.53407C10.8066 1.82295 12.2042 1.82295 13.0553 3.53407Z"
                            fill="#FFA643"
                            stroke="#FFA643"
                            stroke-width="0.895874"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                        <svg
                          width="23"
                          height="22"
                          viewBox="0 0 23 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.0553 3.53407L14.632 6.68755C14.847 7.12653 15.4204 7.54759 15.9041 7.62822L18.762 8.10303C20.5896 8.40763 21.0196 9.73352 19.7026 11.0415L17.4809 13.2633C17.1046 13.6395 16.8986 14.3652 17.015 14.8848L17.6511 17.6351C18.1528 19.8121 16.9971 20.6542 15.071 19.5165L12.3923 17.9308C11.9085 17.6441 11.1112 17.6441 10.6185 17.9308L7.93981 19.5165C6.02264 20.6542 4.85801 19.8031 5.3597 17.6351L5.99577 14.8848C6.11223 14.3652 5.90618 13.6395 5.52991 13.2633L3.30814 11.0415C2.00017 9.73352 2.42123 8.40763 4.24881 8.10303L7.10665 7.62822C7.58146 7.54759 8.15482 7.12653 8.36983 6.68755L9.94657 3.53407C10.8066 1.82295 12.2042 1.82295 13.0553 3.53407Z"
                            fill="#FFA643"
                            stroke="#FFA643"
                            stroke-width="0.895874"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                        <svg
                          width="23"
                          height="22"
                          viewBox="0 0 23 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.0553 3.53407L14.632 6.68755C14.847 7.12653 15.4204 7.54759 15.9041 7.62822L18.762 8.10303C20.5896 8.40763 21.0196 9.73352 19.7026 11.0415L17.4809 13.2633C17.1046 13.6395 16.8986 14.3652 17.015 14.8848L17.6511 17.6351C18.1528 19.8121 16.9971 20.6542 15.071 19.5165L12.3923 17.9308C11.9085 17.6441 11.1112 17.6441 10.6185 17.9308L7.93981 19.5165C6.02264 20.6542 4.85801 19.8031 5.3597 17.6351L5.99577 14.8848C6.11223 14.3652 5.90618 13.6395 5.52991 13.2633L3.30814 11.0415C2.00017 9.73352 2.42123 8.40763 4.24881 8.10303L7.10665 7.62822C7.58146 7.54759 8.15482 7.12653 8.36983 6.68755L9.94657 3.53407C10.8066 1.82295 12.2042 1.82295 13.0553 3.53407Z"
                            fill="#FFA643"
                            stroke="#FFA643"
                            stroke-width="0.895874"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                        <svg
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12.7271 3.53383L14.3039 6.6873C14.5189 7.12628 15.0922 7.54734 15.576 7.62797L18.4338 8.10279C20.2614 8.40738 20.6915 9.73328 19.3745 11.0413L17.1527 13.263C16.7765 13.6393 16.5704 14.3649 16.6869 14.8846L17.323 17.6349C17.8247 19.8119 16.669 20.654 14.7428 19.5162L12.0642 17.9305C11.5804 17.6438 10.7831 17.6438 10.2904 17.9305L7.61169 19.5162C5.69452 20.654 4.52988 19.8029 5.03157 17.6349L5.66764 14.8846C5.78411 14.3649 5.57805 13.6393 5.20179 13.263L2.98002 11.0413C1.67204 9.73328 2.0931 8.40738 3.92069 8.10279L6.77853 7.62797C7.25334 7.54734 7.8267 7.12628 8.04171 6.6873L9.61845 3.53383C10.4785 1.82271 11.876 1.82271 12.7271 3.53383Z"
                            stroke="#FFA643"
                            stroke-width="0.895874"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="text-[#A0A0A0] mt-4">
                      Buttons in a design system are a visual component or
                      pattern used to trigger an action or navigate to another
                      page or section of a website or application.
                    </p>
                  </div>
                </div>
                <div className=" mb-8">
                  <div className="flex items-center">
                    <div className="shrink-0">
                      <img
                        src="/images/astrologers/djGCYIrB_400x400.png"
                        className="w-[71px] h-[71px] object-cover bg-[#373737] rounded-full"
                        alt=""
                      />
                    </div>
                    <div className="ms-2 grow lg:ms-6">
                      <h3 className="md:text-[25px] mb-1 font-bold">
                        Vachi Savadatti
                      </h3>
                      <div className="flex flex-wrap">
                        <svg
                          width="23"
                          height="22"
                          viewBox="0 0 23 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.0553 3.53407L14.632 6.68755C14.847 7.12653 15.4204 7.54759 15.9041 7.62822L18.762 8.10303C20.5896 8.40763 21.0196 9.73352 19.7026 11.0415L17.4809 13.2633C17.1046 13.6395 16.8986 14.3652 17.015 14.8848L17.6511 17.6351C18.1528 19.8121 16.9971 20.6542 15.071 19.5165L12.3923 17.9308C11.9085 17.6441 11.1112 17.6441 10.6185 17.9308L7.93981 19.5165C6.02264 20.6542 4.85801 19.8031 5.3597 17.6351L5.99577 14.8848C6.11223 14.3652 5.90618 13.6395 5.52991 13.2633L3.30814 11.0415C2.00017 9.73352 2.42123 8.40763 4.24881 8.10303L7.10665 7.62822C7.58146 7.54759 8.15482 7.12653 8.36983 6.68755L9.94657 3.53407C10.8066 1.82295 12.2042 1.82295 13.0553 3.53407Z"
                            fill="#FFA643"
                            stroke="#FFA643"
                            stroke-width="0.895874"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                        <svg
                          width="23"
                          height="22"
                          viewBox="0 0 23 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.0553 3.53407L14.632 6.68755C14.847 7.12653 15.4204 7.54759 15.9041 7.62822L18.762 8.10303C20.5896 8.40763 21.0196 9.73352 19.7026 11.0415L17.4809 13.2633C17.1046 13.6395 16.8986 14.3652 17.015 14.8848L17.6511 17.6351C18.1528 19.8121 16.9971 20.6542 15.071 19.5165L12.3923 17.9308C11.9085 17.6441 11.1112 17.6441 10.6185 17.9308L7.93981 19.5165C6.02264 20.6542 4.85801 19.8031 5.3597 17.6351L5.99577 14.8848C6.11223 14.3652 5.90618 13.6395 5.52991 13.2633L3.30814 11.0415C2.00017 9.73352 2.42123 8.40763 4.24881 8.10303L7.10665 7.62822C7.58146 7.54759 8.15482 7.12653 8.36983 6.68755L9.94657 3.53407C10.8066 1.82295 12.2042 1.82295 13.0553 3.53407Z"
                            fill="#FFA643"
                            stroke="#FFA643"
                            stroke-width="0.895874"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                        <svg
                          width="23"
                          height="22"
                          viewBox="0 0 23 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.0553 3.53407L14.632 6.68755C14.847 7.12653 15.4204 7.54759 15.9041 7.62822L18.762 8.10303C20.5896 8.40763 21.0196 9.73352 19.7026 11.0415L17.4809 13.2633C17.1046 13.6395 16.8986 14.3652 17.015 14.8848L17.6511 17.6351C18.1528 19.8121 16.9971 20.6542 15.071 19.5165L12.3923 17.9308C11.9085 17.6441 11.1112 17.6441 10.6185 17.9308L7.93981 19.5165C6.02264 20.6542 4.85801 19.8031 5.3597 17.6351L5.99577 14.8848C6.11223 14.3652 5.90618 13.6395 5.52991 13.2633L3.30814 11.0415C2.00017 9.73352 2.42123 8.40763 4.24881 8.10303L7.10665 7.62822C7.58146 7.54759 8.15482 7.12653 8.36983 6.68755L9.94657 3.53407C10.8066 1.82295 12.2042 1.82295 13.0553 3.53407Z"
                            fill="#FFA643"
                            stroke="#FFA643"
                            stroke-width="0.895874"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                        <svg
                          width="23"
                          height="22"
                          viewBox="0 0 23 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.0553 3.53407L14.632 6.68755C14.847 7.12653 15.4204 7.54759 15.9041 7.62822L18.762 8.10303C20.5896 8.40763 21.0196 9.73352 19.7026 11.0415L17.4809 13.2633C17.1046 13.6395 16.8986 14.3652 17.015 14.8848L17.6511 17.6351C18.1528 19.8121 16.9971 20.6542 15.071 19.5165L12.3923 17.9308C11.9085 17.6441 11.1112 17.6441 10.6185 17.9308L7.93981 19.5165C6.02264 20.6542 4.85801 19.8031 5.3597 17.6351L5.99577 14.8848C6.11223 14.3652 5.90618 13.6395 5.52991 13.2633L3.30814 11.0415C2.00017 9.73352 2.42123 8.40763 4.24881 8.10303L7.10665 7.62822C7.58146 7.54759 8.15482 7.12653 8.36983 6.68755L9.94657 3.53407C10.8066 1.82295 12.2042 1.82295 13.0553 3.53407Z"
                            fill="#FFA643"
                            stroke="#FFA643"
                            stroke-width="0.895874"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                        <svg
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12.7271 3.53383L14.3039 6.6873C14.5189 7.12628 15.0922 7.54734 15.576 7.62797L18.4338 8.10279C20.2614 8.40738 20.6915 9.73328 19.3745 11.0413L17.1527 13.263C16.7765 13.6393 16.5704 14.3649 16.6869 14.8846L17.323 17.6349C17.8247 19.8119 16.669 20.654 14.7428 19.5162L12.0642 17.9305C11.5804 17.6438 10.7831 17.6438 10.2904 17.9305L7.61169 19.5162C5.69452 20.654 4.52988 19.8029 5.03157 17.6349L5.66764 14.8846C5.78411 14.3649 5.57805 13.6393 5.20179 13.263L2.98002 11.0413C1.67204 9.73328 2.0931 8.40738 3.92069 8.10279L6.77853 7.62797C7.25334 7.54734 7.8267 7.12628 8.04171 6.6873L9.61845 3.53383C10.4785 1.82271 11.876 1.82271 12.7271 3.53383Z"
                            stroke="#FFA643"
                            stroke-width="0.895874"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="text-[#A0A0A0] mt-4">
                      Buttons in a design system are a visual component or
                      pattern used to trigger an action or navigate to another
                      page or section of a website or application.
                    </p>
                  </div>
                </div>
                <div className=" mb-8">
                  <div className="flex items-center">
                    <div className="shrink-0">
                      <img
                        src="/images/astrologers/djGCYIrB_400x400.png"
                        className="w-[71px] h-[71px] object-cover bg-[#373737] rounded-full"
                        alt=""
                      />
                    </div>
                    <div className="ms-2 grow lg:ms-6">
                      <h3 className="md:text-[25px] mb-1 font-bold">
                        Vachi Savadatti
                      </h3>
                      <div className="flex flex-wrap">
                        <svg
                          width="23"
                          height="22"
                          viewBox="0 0 23 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.0553 3.53407L14.632 6.68755C14.847 7.12653 15.4204 7.54759 15.9041 7.62822L18.762 8.10303C20.5896 8.40763 21.0196 9.73352 19.7026 11.0415L17.4809 13.2633C17.1046 13.6395 16.8986 14.3652 17.015 14.8848L17.6511 17.6351C18.1528 19.8121 16.9971 20.6542 15.071 19.5165L12.3923 17.9308C11.9085 17.6441 11.1112 17.6441 10.6185 17.9308L7.93981 19.5165C6.02264 20.6542 4.85801 19.8031 5.3597 17.6351L5.99577 14.8848C6.11223 14.3652 5.90618 13.6395 5.52991 13.2633L3.30814 11.0415C2.00017 9.73352 2.42123 8.40763 4.24881 8.10303L7.10665 7.62822C7.58146 7.54759 8.15482 7.12653 8.36983 6.68755L9.94657 3.53407C10.8066 1.82295 12.2042 1.82295 13.0553 3.53407Z"
                            fill="#FFA643"
                            stroke="#FFA643"
                            stroke-width="0.895874"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                        <svg
                          width="23"
                          height="22"
                          viewBox="0 0 23 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.0553 3.53407L14.632 6.68755C14.847 7.12653 15.4204 7.54759 15.9041 7.62822L18.762 8.10303C20.5896 8.40763 21.0196 9.73352 19.7026 11.0415L17.4809 13.2633C17.1046 13.6395 16.8986 14.3652 17.015 14.8848L17.6511 17.6351C18.1528 19.8121 16.9971 20.6542 15.071 19.5165L12.3923 17.9308C11.9085 17.6441 11.1112 17.6441 10.6185 17.9308L7.93981 19.5165C6.02264 20.6542 4.85801 19.8031 5.3597 17.6351L5.99577 14.8848C6.11223 14.3652 5.90618 13.6395 5.52991 13.2633L3.30814 11.0415C2.00017 9.73352 2.42123 8.40763 4.24881 8.10303L7.10665 7.62822C7.58146 7.54759 8.15482 7.12653 8.36983 6.68755L9.94657 3.53407C10.8066 1.82295 12.2042 1.82295 13.0553 3.53407Z"
                            fill="#FFA643"
                            stroke="#FFA643"
                            stroke-width="0.895874"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                        <svg
                          width="23"
                          height="22"
                          viewBox="0 0 23 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.0553 3.53407L14.632 6.68755C14.847 7.12653 15.4204 7.54759 15.9041 7.62822L18.762 8.10303C20.5896 8.40763 21.0196 9.73352 19.7026 11.0415L17.4809 13.2633C17.1046 13.6395 16.8986 14.3652 17.015 14.8848L17.6511 17.6351C18.1528 19.8121 16.9971 20.6542 15.071 19.5165L12.3923 17.9308C11.9085 17.6441 11.1112 17.6441 10.6185 17.9308L7.93981 19.5165C6.02264 20.6542 4.85801 19.8031 5.3597 17.6351L5.99577 14.8848C6.11223 14.3652 5.90618 13.6395 5.52991 13.2633L3.30814 11.0415C2.00017 9.73352 2.42123 8.40763 4.24881 8.10303L7.10665 7.62822C7.58146 7.54759 8.15482 7.12653 8.36983 6.68755L9.94657 3.53407C10.8066 1.82295 12.2042 1.82295 13.0553 3.53407Z"
                            fill="#FFA643"
                            stroke="#FFA643"
                            stroke-width="0.895874"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                        <svg
                          width="23"
                          height="22"
                          viewBox="0 0 23 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.0553 3.53407L14.632 6.68755C14.847 7.12653 15.4204 7.54759 15.9041 7.62822L18.762 8.10303C20.5896 8.40763 21.0196 9.73352 19.7026 11.0415L17.4809 13.2633C17.1046 13.6395 16.8986 14.3652 17.015 14.8848L17.6511 17.6351C18.1528 19.8121 16.9971 20.6542 15.071 19.5165L12.3923 17.9308C11.9085 17.6441 11.1112 17.6441 10.6185 17.9308L7.93981 19.5165C6.02264 20.6542 4.85801 19.8031 5.3597 17.6351L5.99577 14.8848C6.11223 14.3652 5.90618 13.6395 5.52991 13.2633L3.30814 11.0415C2.00017 9.73352 2.42123 8.40763 4.24881 8.10303L7.10665 7.62822C7.58146 7.54759 8.15482 7.12653 8.36983 6.68755L9.94657 3.53407C10.8066 1.82295 12.2042 1.82295 13.0553 3.53407Z"
                            fill="#FFA643"
                            stroke="#FFA643"
                            stroke-width="0.895874"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                        <svg
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12.7271 3.53383L14.3039 6.6873C14.5189 7.12628 15.0922 7.54734 15.576 7.62797L18.4338 8.10279C20.2614 8.40738 20.6915 9.73328 19.3745 11.0413L17.1527 13.263C16.7765 13.6393 16.5704 14.3649 16.6869 14.8846L17.323 17.6349C17.8247 19.8119 16.669 20.654 14.7428 19.5162L12.0642 17.9305C11.5804 17.6438 10.7831 17.6438 10.2904 17.9305L7.61169 19.5162C5.69452 20.654 4.52988 19.8029 5.03157 17.6349L5.66764 14.8846C5.78411 14.3649 5.57805 13.6393 5.20179 13.263L2.98002 11.0413C1.67204 9.73328 2.0931 8.40738 3.92069 8.10279L6.77853 7.62797C7.25334 7.54734 7.8267 7.12628 8.04171 6.6873L9.61845 3.53383C10.4785 1.82271 11.876 1.82271 12.7271 3.53383Z"
                            stroke="#FFA643"
                            stroke-width="0.895874"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="text-[#A0A0A0] mt-4">
                      Buttons in a design system are a visual component or
                      pattern used to trigger an action or navigate to another
                      page or section of a website or application.
                    </p>
                  </div>
                </div>
                <div className=" mb-8">
                  <div className="flex items-center">
                    <div className="shrink-0">
                      <img
                        src="/images/astrologers/djGCYIrB_400x400.png"
                        className="w-[71px] h-[71px] object-cover bg-[#373737] rounded-full"
                        alt=""
                      />
                    </div>
                    <div className="ms-2 grow lg:ms-6">
                      <h3 className="md:text-[25px] mb-1 font-bold">
                        Vachi Savadatti
                      </h3>
                      <div className="flex flex-wrap">
                        <svg
                          width="23"
                          height="22"
                          viewBox="0 0 23 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.0553 3.53407L14.632 6.68755C14.847 7.12653 15.4204 7.54759 15.9041 7.62822L18.762 8.10303C20.5896 8.40763 21.0196 9.73352 19.7026 11.0415L17.4809 13.2633C17.1046 13.6395 16.8986 14.3652 17.015 14.8848L17.6511 17.6351C18.1528 19.8121 16.9971 20.6542 15.071 19.5165L12.3923 17.9308C11.9085 17.6441 11.1112 17.6441 10.6185 17.9308L7.93981 19.5165C6.02264 20.6542 4.85801 19.8031 5.3597 17.6351L5.99577 14.8848C6.11223 14.3652 5.90618 13.6395 5.52991 13.2633L3.30814 11.0415C2.00017 9.73352 2.42123 8.40763 4.24881 8.10303L7.10665 7.62822C7.58146 7.54759 8.15482 7.12653 8.36983 6.68755L9.94657 3.53407C10.8066 1.82295 12.2042 1.82295 13.0553 3.53407Z"
                            fill="#FFA643"
                            stroke="#FFA643"
                            stroke-width="0.895874"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                        <svg
                          width="23"
                          height="22"
                          viewBox="0 0 23 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.0553 3.53407L14.632 6.68755C14.847 7.12653 15.4204 7.54759 15.9041 7.62822L18.762 8.10303C20.5896 8.40763 21.0196 9.73352 19.7026 11.0415L17.4809 13.2633C17.1046 13.6395 16.8986 14.3652 17.015 14.8848L17.6511 17.6351C18.1528 19.8121 16.9971 20.6542 15.071 19.5165L12.3923 17.9308C11.9085 17.6441 11.1112 17.6441 10.6185 17.9308L7.93981 19.5165C6.02264 20.6542 4.85801 19.8031 5.3597 17.6351L5.99577 14.8848C6.11223 14.3652 5.90618 13.6395 5.52991 13.2633L3.30814 11.0415C2.00017 9.73352 2.42123 8.40763 4.24881 8.10303L7.10665 7.62822C7.58146 7.54759 8.15482 7.12653 8.36983 6.68755L9.94657 3.53407C10.8066 1.82295 12.2042 1.82295 13.0553 3.53407Z"
                            fill="#FFA643"
                            stroke="#FFA643"
                            stroke-width="0.895874"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                        <svg
                          width="23"
                          height="22"
                          viewBox="0 0 23 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.0553 3.53407L14.632 6.68755C14.847 7.12653 15.4204 7.54759 15.9041 7.62822L18.762 8.10303C20.5896 8.40763 21.0196 9.73352 19.7026 11.0415L17.4809 13.2633C17.1046 13.6395 16.8986 14.3652 17.015 14.8848L17.6511 17.6351C18.1528 19.8121 16.9971 20.6542 15.071 19.5165L12.3923 17.9308C11.9085 17.6441 11.1112 17.6441 10.6185 17.9308L7.93981 19.5165C6.02264 20.6542 4.85801 19.8031 5.3597 17.6351L5.99577 14.8848C6.11223 14.3652 5.90618 13.6395 5.52991 13.2633L3.30814 11.0415C2.00017 9.73352 2.42123 8.40763 4.24881 8.10303L7.10665 7.62822C7.58146 7.54759 8.15482 7.12653 8.36983 6.68755L9.94657 3.53407C10.8066 1.82295 12.2042 1.82295 13.0553 3.53407Z"
                            fill="#FFA643"
                            stroke="#FFA643"
                            stroke-width="0.895874"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                        <svg
                          width="23"
                          height="22"
                          viewBox="0 0 23 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.0553 3.53407L14.632 6.68755C14.847 7.12653 15.4204 7.54759 15.9041 7.62822L18.762 8.10303C20.5896 8.40763 21.0196 9.73352 19.7026 11.0415L17.4809 13.2633C17.1046 13.6395 16.8986 14.3652 17.015 14.8848L17.6511 17.6351C18.1528 19.8121 16.9971 20.6542 15.071 19.5165L12.3923 17.9308C11.9085 17.6441 11.1112 17.6441 10.6185 17.9308L7.93981 19.5165C6.02264 20.6542 4.85801 19.8031 5.3597 17.6351L5.99577 14.8848C6.11223 14.3652 5.90618 13.6395 5.52991 13.2633L3.30814 11.0415C2.00017 9.73352 2.42123 8.40763 4.24881 8.10303L7.10665 7.62822C7.58146 7.54759 8.15482 7.12653 8.36983 6.68755L9.94657 3.53407C10.8066 1.82295 12.2042 1.82295 13.0553 3.53407Z"
                            fill="#FFA643"
                            stroke="#FFA643"
                            stroke-width="0.895874"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                        <svg
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12.7271 3.53383L14.3039 6.6873C14.5189 7.12628 15.0922 7.54734 15.576 7.62797L18.4338 8.10279C20.2614 8.40738 20.6915 9.73328 19.3745 11.0413L17.1527 13.263C16.7765 13.6393 16.5704 14.3649 16.6869 14.8846L17.323 17.6349C17.8247 19.8119 16.669 20.654 14.7428 19.5162L12.0642 17.9305C11.5804 17.6438 10.7831 17.6438 10.2904 17.9305L7.61169 19.5162C5.69452 20.654 4.52988 19.8029 5.03157 17.6349L5.66764 14.8846C5.78411 14.3649 5.57805 13.6393 5.20179 13.263L2.98002 11.0413C1.67204 9.73328 2.0931 8.40738 3.92069 8.10279L6.77853 7.62797C7.25334 7.54734 7.8267 7.12628 8.04171 6.6873L9.61845 3.53383C10.4785 1.82271 11.876 1.82271 12.7271 3.53383Z"
                            stroke="#FFA643"
                            stroke-width="0.895874"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="text-[#A0A0A0] mt-4">
                      Buttons in a design system are a visual component or
                      pattern used to trigger an action or navigate to another
                      page or section of a website or application.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
