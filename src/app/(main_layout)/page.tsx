"use client";
import MainHeader from "@/components/headers/MainHeader";

import { Card } from "@/components/ui/card";
import Image from "next/image";
import { Montserrat_Alternates } from "next/font/google";
import LiveSession from "@/components/live-sessions/LiveSession";
import { Slides } from "@/components/slides/Slides";
import Listeners from "@/components/listeners/Listeners";
import GetApp from "@/components/get-app/GetApp";
import Footer from "@/components/footer/footer";
import FluteMag from "@/components/flute-mag/FluteMag";
import Marriage from "@/components/Marriage/Marriage";
import { CarouselCard } from "@/components/ui/carouselCard";
import FluteBuzz from "@/components/flute-buzz/FluteBuzz";
import useDashboardStore from "@/services/dashboard/dqshboard.service";
import { useEffect } from "react";
import useSkillStore from "@/services/meta/sills.service";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Banner from "@/components/banner/Banner";
import MobileBanner from "@/components/banner/MobileBanner";
import DownloadAppDialog from "@/components/common/dialogs/DownloadAppDialog";
import useMagazineStore from "@/services/magazine/magazine.service";
import useConsultantProfileStore from "@/services/consultant_profile/consultant_profile.service";
import { SkillSlide } from "@/components/slides/SkillSlide";
import useBuzzStore from "@/services/buzz/buzz.service";
import React, { useState } from "react";
import useLiveConsultantProfileStore from "@/services/consultant_profile/live_consultant.service";
import FluteTestimonial from "@/components/testimonial/FluteTestimonial";

// import HomeIcon from '/images/icons/home.svg'
const HomeIcon = "/images/icons/home.svg";
const DateGif = "/gifs/heart.gif";
const LiveIcon = "/images/icons/live.svg";
const ListenerIcon = "/images/icons/listener.svg";
const QdIcon = "/images/icons/qd.svg";

const navigationMenuList = [
  {
    imagePath: HomeIcon,
    title: "Home",
    className: "bg-pink-200",
    path: "/",
  },
  {
    imagePath: DateGif,
    title: "Date",
    className: "bg-pink-200",
    path: "/consultant/live",
  },
  {
    imagePath: LiveIcon,
    title: "Live",
    className: "bg-pink-200",
    path: "/consultant/live",
  },
  {
    imagePath: ListenerIcon,
    title: "Listener",
    className: "bg-pink-200",
    path: "/consultant/listener?title=Listeners&consultant_type=3",
  },
  {
    imagePath: QdIcon,
    title: "QD",
    className: "bg-pink-200",
    path: "/consultant/live",
  },
];

export default function Home() {
  // Router
  const router = useRouter();

  // Stores
  const store = useDashboardStore();
  const skillStore = useSkillStore();
  const magazineStore = useMagazineStore();
  const consultantProfileStore = useConsultantProfileStore();
  const buzzStore = useBuzzStore();
  const liveConsultantProfileStore = useLiveConsultantProfileStore();

  useEffect(() => {
    store.get.paginate({});
    skillStore.get.list();
    magazineStore.get.home_list();
    consultantProfileStore.get.paginate({});
    buzzStore.get.paginate({});
    store.get.banners();
    liveConsultantProfileStore.get.home_list();
  }, []);

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      <div className="py-4 sm:py-8 px-2 sm:px-16 bg-black text-white">
        <main>
          <div className="hidden sm:grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            {cardList.map((card) => {
              if (!card?.path) {
                return (
                  <DownloadAppDialog
                    trigger={
                      // <Link href={card?.path || "/"} onClick={(e) => {
                      //   if (!card?.path) {
                      //     e.preventDefault();
                      //   }
                      // }} >
                      <Card
                        className={`${card.className} text-black text-center py-5 flex flex-col justify-center items-center rounded-[20px] cursor-pointer`}
                      >
                        <card.Icon className="w-12" />
                        <h3 className="text-[#302c28] sm:text-[22px] md:text-[28px] font-semibold leading-[33px] font-serif">
                          {" "}
                          {card.title}
                        </h3>
                      </Card>
                      // </Link>
                    }
                  />
                );
              }
              return (
                <Link
                  href={card?.path || "/"}
                  onClick={(e) => {
                    if (!card?.path) {
                      e.preventDefault();
                    }
                  }}
                >
                  <Card
                    className={`${card.className} text-black text-center py-5 flex flex-col justify-center items-center rounded-[20px] cursor-pointer`}
                  >
                    <card.Icon className="w-12" />
                    <h3 className="text-[#302c28] sm:text-[22px] md:text-[28px] font-semibold leading-[33px] font-serif">
                      {" "}
                      {card.title}
                    </h3>
                  </Card>
                </Link>
              );
            })}
          </div>

          <div className="w-full grid grid-cols-5 py-2 sm:hidden mb-2 shadow-white">
            {[...navigationMenuList].map((item, index) => {
              return (
                <div
                  className="flex flex-col items-center justify-between cursor-pointer"
                  onClick={() => router.push(item.path)}
                  key={item.title}
                >
                  <img src={item.imagePath} className="w-6" />
                  <p
                    className={`text-sm font-normal text-[#A0A0A0] ${index == 0 ? "text-[#FFA643]" : ""
                      }`}
                  >
                    {item.title}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="relative mb-8 rounded-lg ">
            <Banner />
          </div>

          <div className="flex overflow-x-scroll mb-5 sm:mb-0">
            {skillStore.skill.list?.length ? (
              <SkillSlide slides={[...(skillStore.skill.list || [])]} />
            ) : (
              <>
                {Array.from({ length: 10 }).map(() => {
                  return (
                    <Card
                      className={`animate-pulse mr-4 border-[2.359px] md:min-h-60 border-[#232323] bg-[#202020]/75 text-black text-center py-5 flex flex-col justify-center items-center rounded-[20px] min-w-32 md:min-w-40 overflow-x-scroll cursor-pointer`}
                    >
                      <div className="h-28 py-2"> </div>
                    </Card>
                  );
                })}
              </>
            )}
          </div>
          <div className="relative mb-8 sm:hidden">
            <MobileBanner />
          </div>
        </main>
      </div>
      {/** Live Sessions */}
      <LiveSession />

      {store.dashboard.list.length ? (
        store.dashboard.list.map((item) => {
          if (item.content_type !== 4 && item.content_type !== 3) {
            let slides = item?.list?.map((l) => ({
              image: l.photos?.[0]?.url,
              name: l.first_name,
              id: l.id,
            }));

            let cardSlides = [] as any;



            if (item.content_type === 2) {
              slides = item.list.map((l) => ({
                image: l.card_image,
                name: l.category_name,
                id: l.id,
                category_id: l?.category_id,
                is_clickable: l?.is_clickable,
              }));
            }
            if (item.list_cards?.length) {
              cardSlides = item.list_cards.map((l) => ({
                image: l.card_image,
                name: l.category_name,
                id: l.id,
                category_id: l?.category_id,
                is_clickable: l?.is_clickable,
              }));
            }

            return (
              <>
                <div className="py-4 sm:py-6 px-2 sm:px-16   w-full sm:w-[100%] bg-black text-white" style={{
                  background: `radial-gradient(circle, 
                    ${item.categories?.[0]?.category_bg_color?.[0] || `rgba(9,9,121,1)`} 1%, ${item.categories?.[0]?.category_bg_color?.[1] || `rgba(0,212,255,1)`} 50%)`,
                }} >
                  <Slides
                    contentType={item.content_type}
                    title={`${item.title}`}
                    slides={slides}
                    radiant1={`${item.categories?.[0]?.category_card_bg_color?.[0]
                      ?.color || "#DDC3A2"
                      }`}
                    radiant2={"#DFB881"}
                    viewAllId={item.category_ids?.[0]}
                    cardSlides={cardSlides}
                  />
                </div>
              </>
            );
          }
        })
      ) : (
        <></>
      )}

      {/* <Marriage /> */}
      <div className="py-4 sm:py-8 px-2 sm:px-16 bg-black text-white">
        {/* <CarouselCard /> */}
        {/* <Slides title={"Spiritual Coach"} slides={SpiritualSlides} radiant1={"#EAB2B3"} radiant2={"#EAB2B3"} />
        <Slides title={"Life Coach"} slides={LifeSlides} radiant1={"#7095DD"} radiant2={"#82BEDC"} />
        <Slides title={"Recently Viewed"} slides={RecentsSlides} radiant1={"#DDC3A2"} radiant2={"#DFB881"} />
        <Slides title={"My Favorites"} slides={FavoritesSlides} radiant1={"#D1BFE2"} radiant2={"#C8AFDE"} /> */}
      </div>
      <FluteMag />
      <FluteBuzz />
      {/* {window.innerWidth > 600 && <FluteTestimonial />} */}
      {isClient && window.innerWidth > 600 && <FluteTestimonial />}

      {/* <FluteTestimonial /> */}
      <GetApp />
    </>
  );
}

const cardList = [
  {
    Icon: (props: React.SVGProps<SVGSVGElement>) => (
      <LiveCoachesIcon {...props} />
    ),
    title: "Live Coaches",
    className: "bg-pink-200",
    path: "/consultant/live",
  },
  {
    Icon: (props: React.SVGProps<SVGSVGElement>) => (
      <ListenersIcon {...props} />
    ),
    title: "Talk to Listener",
    className: "bg-[#D3E7F6]",
    path: "/consultant/listener?title=Listeners&consultant_type=3",
  },
  {
    Icon: (props: React.SVGProps<SVGSVGElement>) => (
      <MatchDateIcon {...props} />
    ),
    title: "Swipe Match Date",
    className: "bg-[#F2BCBC]",
  },
  {
    Icon: (props: React.SVGProps<SVGSVGElement>) => <QDIcon {...props} />,
    title: "Quick Date",
    className: "bg-[#F6E3C7]",
  },
];

const LiveCoachesIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M47.5 20C51.6421 20 55 16.6421 55 12.5C55 8.35786 51.6421 5 47.5 5C43.3579 5 40 8.35786 40 12.5C40 16.6421 43.3579 20 47.5 20Z"
        stroke="#302C28"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M35 5H22.5C10 5 5 10 5 22.5V37.5C5 50 10 55 22.5 55H37.5C50 55 55 50 55 37.5V25"
        stroke="#302C28"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M17.0252 37.3252C16.1502 34.5752 17.1752 31.1502 20.0752 30.2252C21.6002 29.7252 23.4752 30.1502 24.5502 31.6252C25.5502 30.1002 27.5002 29.7502 29.0002 30.2252C31.9002 31.1502 32.9252 34.5752 32.0502 37.3252C30.6752 41.7002 25.8752 43.9752 24.5502 43.9752C23.2002 43.9502 18.4502 41.7252 17.0252 37.3252Z"
        stroke="#302C28"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

const ListenersIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="60"
      height="60"
      viewBox="0 0 70 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M46.1963 6.76625C46.8413 6.06999 47.9287 6.02847 48.6249 6.67351C54.9447 12.5284 61.9401 29.5997 51.2019 48.2844C50.729 49.1073 49.6785 49.391 48.8556 48.9181C48.0327 48.4452 47.749 47.3947 48.2219 46.5718C58.131 29.3296 51.4795 14.0035 46.289 9.19486C45.5928 8.54983 45.5513 7.4625 46.1963 6.76625Z"
        fill="#302C28"
      />
      <ellipse
        cx="30.2476"
        cy="27.1724"
        rx="9.16555"
        ry="9.16555"
        fill="#302C28"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M24.3038 10.4388C26.6034 9.62198 29.0467 9.28793 31.4812 9.45745C33.9156 9.62698 36.289 10.2964 38.4532 11.4241C40.6174 12.5517 42.526 14.1133 44.0598 16.0114C45.5936 17.9095 46.7197 20.1033 47.3679 22.456C47.7908 23.9911 48.0044 25.5724 48.0058 27.1571C48.0058 27.1622 48.0058 27.1674 48.0058 27.1726C48.0058 30.8526 47.7207 35.1652 45.8177 39.3177C43.9555 43.3813 40.6135 47.1462 34.83 50.0688C33.9653 52.2417 32.3908 55.8423 30.6647 58.4275C29.976 59.5752 29.0572 60.5944 27.9735 61.3864C25.8881 62.9102 23.2829 63.5433 20.7308 63.1463C18.1787 62.7493 15.8888 61.3547 14.365 59.2694C12.8411 57.184 12.208 54.5788 12.605 52.0267C12.7509 51.0888 13.6295 50.4468 14.5673 50.5927C15.5052 50.7386 16.1472 51.6172 16.0013 52.555C15.7444 54.2064 16.154 55.8921 17.14 57.2415C18.1261 58.5908 19.6077 59.4932 21.2591 59.7501C22.9104 60.0069 24.5962 59.5973 25.9455 58.6113C26.3705 58.3008 26.762 57.9314 27.107 57.5179C28.9842 54.8664 30.9729 50.5863 31.8601 48.2202C32.0157 47.8055 32.3254 47.4667 32.7247 47.2748C38.2331 44.6267 41.1296 41.2975 42.6931 37.8858C44.2811 34.4207 44.5688 30.7134 44.5688 27.1726C44.5688 27.0942 44.574 27.0171 44.5842 26.9416C44.5576 26.7135 44.5323 26.481 44.5068 26.2468C44.3974 25.2409 44.2847 24.2052 44.0543 23.3689C43.5315 21.4716 42.6234 19.7024 41.3864 18.1717C40.1495 16.6409 38.6103 15.3816 36.865 14.4722C35.1197 13.5628 33.2057 13.0229 31.2424 12.8862C29.2791 12.7495 27.3087 13.0189 25.4542 13.6776C23.5997 14.3363 21.9009 15.3702 20.4637 16.7147C19.0265 18.0592 17.8819 19.6854 17.1012 21.492C16.3206 23.2986 15.9206 25.2467 15.9264 27.2147C15.9292 28.1638 15.162 28.9355 14.2129 28.9382C13.2638 28.941 12.4921 28.1738 12.4893 27.2247C12.4822 24.7844 12.9781 22.3688 13.9461 20.1286C14.9141 17.8885 16.3335 15.8719 18.1156 14.2047C19.8977 12.5375 22.0042 11.2555 24.3038 10.4388Z"
        fill="#302C28"
      />
      <path
        d="M6.4842 40.4539C5.73904 38.1119 6.61194 35.1951 9.08162 34.4074C10.3803 33.9816 11.9771 34.3435 12.8926 35.5997C13.7442 34.3009 15.4049 34.0029 16.6823 34.4074C19.152 35.1951 20.0249 38.1119 19.2797 40.4539C18.1087 44.1797 14.021 46.1171 12.8926 46.1171C11.7429 46.0958 7.69775 44.201 6.4842 40.4539Z"
        stroke="#302C28"
        stroke-width="2.84193"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
const MatchDateIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="60"
      height="60"
      viewBox="0 0 88 88"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M34.9556 44.1221V44.9776C34.9556 52.5554 30.189 58.7887 24.3223 58.7887C18.4556 58.7887 13.689 52.5554 13.689 44.9776V44.1221"
        stroke="black"
        stroke-width="2.44444"
        stroke-miterlimit="10"
      />
      <path
        d="M48.1557 60.3779C44.489 54.8779 47.4223 50.9668 49.1335 46.5668C50.6001 42.6557 48.889 40.5779 50.3557 35.4446C51.7001 30.4334 57.0779 27.2557 62.9446 27.2557C67.9557 27.2557 70.2779 30.0668 70.2779 30.0668C74.0668 30.4334 77.0001 33.6112 77.1223 37.4001C77.489 44.0001 78.1001 44.0001 80.3001 49.1334C81.889 52.9223 81.2779 57.2001 78.589 60.2557M11.1223 38.3779C11.8557 27.7446 19.9223 27.6223 23.9557 28.2334C24.3223 28.3557 25.4223 28.2334 25.789 28.2334C33.1223 27.2557 36.789 35.5668 36.789 39.2334C36.789 40.5779 36.789 43.8779 34.9557 45.7112C34.9557 45.7112 30.8001 40.5779 30.5557 37.6446C30.5557 37.6446 16.6223 42.9001 15.6446 38.3779C15.6446 38.3779 14.6668 42.0446 13.8112 43.0223V46.689C13.8112 46.689 10.7557 43.0223 11.1223 38.3779ZM44.0001 14.3001C45.3446 11.3668 48.889 10.1446 51.7001 11.6112C54.5112 13.0779 55.7335 16.5001 54.389 19.4334C54.2668 19.8001 54.0223 20.0446 53.9001 20.289L44.0001 33.0001L34.1001 20.289C33.8557 20.0446 33.7335 19.6779 33.6112 19.4334C32.2668 16.5001 33.489 13.0779 36.3001 11.6112C39.1112 10.1446 42.6557 11.3668 44.0001 14.3001Z"
        stroke="black"
        stroke-width="2.44444"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M53.4111 45.8335C53.4111 53.1668 58.0556 58.6668 63.5556 58.6668C69.0556 58.6668 73.7 53.1668 73.7 45.8335C73.7 41.1891 71.8667 38.5002 68.2 34.8335C64.5334 38.5002 53.5334 43.1446 53.5334 44.9779L53.4111 45.8335Z"
        stroke="black"
        stroke-width="2.44444"
        stroke-miterlimit="10"
        stroke-linejoin="round"
      />
      <path
        d="M46.4446 73.3335V70.5224C46.4446 66.0002 50.9668 62.3335 55.4891 62.3335C60.8668 66.8557 66.2446 66.8557 71.7446 62.3335C76.2668 62.3335 80.789 66.0002 80.789 70.5224V73.3335M7.3335 73.3335V70.5224C7.3335 66.0002 11.8557 62.3335 16.3779 62.3335C21.7557 66.8557 27.1335 66.8557 32.6335 62.3335C37.1557 62.3335 41.6779 66.0002 41.6779 70.5224V73.3335"
        stroke="black"
        stroke-width="2.44444"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M68.689 45.4665C68.689 46.4443 67.9557 47.1776 66.9779 47.1776C66.0001 47.1776 65.2668 46.4443 65.2668 45.4665C65.2668 44.4887 66.0001 43.7554 66.9779 43.7554C67.9557 43.7554 68.689 44.4887 68.689 45.4665ZM61.8446 45.4665C61.8446 46.4443 61.1113 47.1776 60.1335 47.1776C59.1557 47.1776 58.4224 46.4443 58.4224 45.4665C58.4224 44.4887 59.1557 43.7554 60.1335 43.7554C61.1113 43.7554 61.8446 44.4887 61.8446 45.4665Z"
        fill="black"
      />
      <path
        d="M60.9888 52.4331C62.5777 53.2887 64.5332 53.2887 66.1221 52.4331"
        stroke="black"
        stroke-width="2.44444"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M29.5777 45.7111C29.5777 46.6889 28.8444 47.4222 27.8666 47.4222C26.8888 47.4222 26.1555 46.6889 26.1555 45.7111C26.1555 44.7333 26.8888 44 27.8666 44C28.8444 44 29.5777 44.8556 29.5777 45.7111ZM22.7333 45.7111C22.7333 46.6889 21.9999 47.4222 21.0221 47.4222C20.0444 47.4222 19.311 46.6889 19.311 45.7111C19.311 44.7333 20.0444 44 21.0221 44C21.9999 44 22.7333 44.8556 22.7333 45.7111Z"
        fill="black"
      />
      <path
        d="M21.8779 52.7998C23.4668 53.6554 25.4224 53.6554 27.0113 52.7998"
        stroke="black"
        stroke-width="2.44444"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

const QDIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="60"
      height="60"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M50.8721 13.1274H53.4976C57.8477 13.1274 61.3742 16.6539 61.3742 21.004V21.004C61.3742 25.3541 57.8477 28.8806 53.4976 28.8806H50.8721"
        stroke="#302C28"
        stroke-width="3.93829"
      />
      <path
        d="M3.61279 7.87646H50.8723V31.5062V36.7573V36.7573C50.8723 46.9075 42.6439 55.136 32.4936 55.136H21.9915C11.8412 55.136 3.61279 46.9075 3.61279 36.7573V36.7573V31.5062V7.87646Z"
        stroke="#302C28"
        stroke-width="3.93829"
        stroke-linejoin="round"
      />
      <path
        d="M39.7476 19.0998C40.6516 20.0119 40.6455 21.4744 39.7338 22.3634L33.7228 28.3265L36.9253 42.4877L34.7464 44.6645L28.8243 33.2014L22.7978 39.1798L23.3357 42.9846L21.6824 44.6094L18.9948 39.7026L14.0977 36.9571L15.7358 35.3014L19.5802 35.8872L25.5604 29.9547L14.1528 23.8873L16.347 21.7259L30.4744 25.0492L36.4854 19.086C37.3509 18.1968 38.8896 18.2033 39.7476 19.0998Z"
        fill="#302C28"
      />
    </svg>
  );
};
