"use client";

import MainHeader from "@/components/headers/MainHeader";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import { useRouter } from "next/navigation";
import { ChangeEventHandler, useEffect, useState } from "react";
import useMagazineStore from "@/services/magazine/magazine.service";
import { Copy, Radio } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const Montserrats = Montserrat({
  weight: "600", // Specify the font weights you need
  subsets: ["latin"], // Include any subsets you need
  display: "swap", // Controls how the font is displayed while loading
});

export default function FluteMagazineView(props: any) {
  const router = useRouter();
  const store = useMagazineStore();
  const totalPages = store?.magazine?.total_pages || 0;
  const total_posts = store?.magazine?.total_posts || 0;
  console.log("total pages", totalPages);
  // Render pagination links
  const randerPage = Array.from({ length: totalPages }, (_, i) => i + 1);

  const current_page = store?.magazine.current_page;

  const per_page = store?.magazine.per_page;

  console.log("ksdjfnkjdfvnvkjfdv", per_page);

  // * States
  const [showCategories, setShowCategories] = useState(false);
  const [search, setSearch] = useState("");

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
    console.log("radhe");
    setIsSearchFocused(false);
  };

  useEffect(() => {
    console.log("🚀 ~ FluteMagazineView ~ props:", props);

    store.get.paginate({ category: props?.searchParams?.category_id });
  }, [props?.searchParams?.category_id]);

  const handleShowCategory = () => {
    setShowCategories((prev) => !prev);

    if (!store.magazine.category_list?.length) {
      store.get.category_list();
    }
  };

  const handleSearch: ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearch(e.target.value);
    store.get.paginate({ search: e.target.value });
  };

  const handlePaginate = (type: any) => {
    if (type === "back") {
      if (current_page != 1)
        store.get.paginate({ page: store.magazine.page - 1 });
    } else if (type == "next") {
      if (current_page != totalPages)
        store.get.paginate({ page: store.magazine.page + 1 });
    } else {
      if (current_page != type) store.get.paginate({ page: type });
    }
  };

  return (
    <div className="py-4 sm:py-4  bg-black text-white">
      <main>
        <div className="relative isolate overflow-hidden bg-light-yellow py-22 ">
          <div className="mx-auto px-2 lg:px-8">
            <div className="mx-auto  lg:mx-0 text-center">
              <h2 className="  heading-2  md:!text-[40px]  text-dark  ">
                Flute Magazine
              </h2>
              <span className="x-arrow"></span>
              <p className="mt-14 text-[20px] header-p font-[600]  sm:text-[28px] font-workSans text-[#302c28]">
                {/* <p
                className={`mt-14 text-lg header-p !text-[14px] md:!text-[16px]  text-dark ${Montserrats.className}`}
              > */}
                Harmonizing Life: Honest Talks, Real Stories, and Expert Advice
                for Your Journey
              </p>
            </div>
          </div>
        </div>

        <div className="magazine-view">
          <div className="container py-33 px-[10px] md:px-[36px] mx-auto">
            <form action="" className="border-bottom pb-8 mb-4">
              <div
                className={`gap-2 ${
                  isSearchFocused && isMobileView ? "columns-1" : "columns-3"
                } `}
              >
                <div className="mb-3 md:mb-0 relative">
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
                      className={`block w-full ${
                        isSearchFocused && isMobileView
                          ? "w-full"
                          : "sm:w-[70%]"
                      } pt-[15px] pr-[8px] pb-[15px] pl-[34px] md:pl-[60px] sm:p-4  ps-10 text-sm text-white border border-[#7d7d7dfd] rounded-xl bg-transparent`}
                      placeholder="Search"
                      required
                      onFocus={handleSearchFocus}
                      onChange={handleSearch}
                    />
                  </div>
                </div>

                {/* Conditionally hide Categories and Sort only in mobile view */}
                {(!isSearchFocused || !isMobileView) && (
                  <>
                    <div className="text-center mb-3 md:mb-0">
                      <button
                        type="button"
                        className="border-white w-full md:w-fit rounded-xl bg-transparent border border-[#7d7d7dfd] text-white py-3 sm:px-10"
                        onClick={handleShowCategory}
                      >
                        Categories
                      </button>
                    </div>

                    <div className="flex items-center justify-center sm:justify-end">
                      <div className="w-full md:w-fit">
                        <Dialog>
                          <DialogTrigger asChild>
                            <button
                              type="button"
                              className="rounded-xl md:w-[99px] h-[49px] w-full custom-select border px-2 ps-10 bg-icon sort-icon filter-select border-[#7d7d7dfd] bg-transparent"
                            >
                              Sort
                            </button>
                          </DialogTrigger>
                          <DialogContent className="w-[75%] sm:max-w-72 border rounded-lg">
                            <DialogHeader>
                              <DialogTitle>Sort</DialogTitle>
                            </DialogHeader>
                            <hr className="bg-[#5B5B5B]" />
                            <div className="flex items-center">
                              <RadioGroup value={store.magazine.sort}>
                                <DialogClose asChild>
                                  <div className="flex items-center space-x-2">
                                    <RadioGroupItem
                                      value="DESC"
                                      id="r1"
                                      onClick={() =>
                                        store.get.paginate({ sort: "DESC" })
                                      }
                                    />
                                    <Label
                                      htmlFor="r1"
                                      className="text-white text-[17px] sm:text-xl font-medium"
                                    >
                                      Newest to Oldest
                                    </Label>
                                  </div>
                                </DialogClose>

                                <DialogClose asChild>
                                  <div className="flex items-center space-x-2">
                                    <RadioGroupItem
                                      value="ASC"
                                      id="r2"
                                      onClick={() =>
                                        store.get.paginate({ sort: "ASC" })
                                      }
                                    />
                                    <Label
                                      htmlFor="r2"
                                      className="text-white text-[17px] sm:text-xl font-medium"
                                    >
                                      Oldest to Newest
                                    </Label>
                                  </div>
                                </DialogClose>
                              </RadioGroup>
                            </div>
                          </DialogContent>
                        </Dialog>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </form>

            {/* <div>
              <h2 className="text-center text-[22px] font-bold md:text-[40px] my-10">
                Cosmic Insights: Your Astrology Guide to the Stars
              </h2>
            </div> */}
            {showCategories ? (
              <div className="gap-2 md:gap-4 columns-2 md:columns-4 mt-8 mb-4">
                {store.magazine.category_list?.length ? (
                  store.magazine.category_list.map((item) => {
                    return (
                      <div>
                        <button
                          type="button"
                          className="border-white w-full py-2.5 mb-3 px-5  rounded-md bg-transparent border-solid border"
                          onClick={() => {
                            router.push(
                              // `/magazine/list?category_id=${item.slug}`
                              `/magazine/list?category_id=${item.id}`
                            );
                            setShowCategories(false);
                          }}
                        >
                          {item.name}
                        </button>
                      </div>
                    );
                  })
                ) : (
                  <>Loading...</>
                )}
              </div>
            ) : (
              <></>
            )}

            <div className="gap-10 grid md:grid-cols-3">
              {store.magazine.list.length ? (
                store.magazine.list.map((item) => {
                  return (
                    <div
                      className="card-design   rounded-lg mb-8"
                      key={item.id}
                    >
                      <a href={`/magazine/${item.id}`}>
                        <img
                          className="rounded-t-lg w-full responsive-image hidden md:block"
                          src={`${item.featured_image_web}`}
                          alt=""
                        />
                        <img
                          className="rounded-t-lg w-full responsive-image block md:hidden"
                          src={`${item.featured_image_mobile}`}
                          alt=""
                        />
                        <div className="p-4">
                          <div className="h-[125px]">
                            <h2
                              className={`text-[20px] text-[#959393] font-bold mb-2 line-clamp-2    ${Montserrats.className} `}
                            >
                              {" "}
                              {item.title}
                            </h2>

                            <h2 className="text-[16px] mb-6 text-[#959393] line-clamp-2 ">
                              {item.sub_title}
                            </h2>
                          </div>

                          <div className="flex justify-between px-1 ">
                            <div>
                              <span className="inline-block align-middle me-2">
                                <svg
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <g opacity="0.5">
                                    <path
                                      d="M16.2799 22.0995H12.4799C11.9199 22.0995 10.6999 21.9295 10.0499 21.2795L7.01986 18.9395L7.93986 17.7495L11.0399 20.1495C11.2899 20.3895 11.9199 20.5895 12.4799 20.5895H16.2799C17.1799 20.5895 18.1499 19.8695 18.3499 19.0595L20.7699 11.7095C20.9299 11.2695 20.8999 10.8695 20.6899 10.5795C20.4699 10.2695 20.0699 10.0895 19.5799 10.0895H15.5799C15.0599 10.0895 14.5799 9.8695 14.2499 9.4895C13.9099 9.0995 13.7599 8.5795 13.8399 8.0395L14.3399 4.8295C14.4599 4.2695 14.0799 3.6395 13.5399 3.4595C13.0499 3.2795 12.4199 3.5395 12.1999 3.8595L8.09986 9.9595L6.85986 9.1295L10.9599 3.0295C11.5899 2.0895 12.9699 1.6395 14.0499 2.0495C15.2999 2.4595 16.0999 3.8395 15.8199 5.1195L15.3299 8.2695C15.3199 8.3395 15.3199 8.4395 15.3899 8.5195C15.4399 8.5695 15.5099 8.5995 15.5899 8.5995H19.5899C20.5699 8.5995 21.4199 9.0095 21.9199 9.7195C22.4099 10.4095 22.5099 11.3195 22.1899 12.1995L19.7999 19.4795C19.4299 20.9295 17.8899 22.0995 16.2799 22.0995Z"
                                      fill="white"
                                    />
                                    <path
                                      d="M5.37988 20.9994H4.37988C2.52988 20.9994 1.62988 20.1294 1.62988 18.3494V8.54941C1.62988 6.76941 2.52988 5.89941 4.37988 5.89941H5.37988C7.22988 5.89941 8.12988 6.76941 8.12988 8.54941V18.3494C8.12988 20.1294 7.22988 20.9994 5.37988 20.9994ZM4.37988 7.39941C3.28988 7.39941 3.12988 7.65941 3.12988 8.54941V18.3494C3.12988 19.2394 3.28988 19.4994 4.37988 19.4994H5.37988C6.46988 19.4994 6.62988 19.2394 6.62988 18.3494V8.54941C6.62988 7.65941 6.46988 7.39941 5.37988 7.39941H4.37988Z"
                                      fill="white"
                                    />
                                  </g>
                                </svg>
                              </span>
                              <span className="inline-block align-middle opacity-50">
                                0
                              </span>
                            </div>
                            <div>
                              <span className="inline-block align-middle me-2">
                                <svg
                                  width="26"
                                  height="20"
                                  viewBox="0 0 26 20"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="opacity-50"
                                >
                                  <path
                                    d="M23.5499 11.6969C23.6604 12.0718 24.0004 12.3158 24.3658 12.3158V12.3071C24.4982 12.3084 24.629 12.2777 24.7476 12.2176C24.8663 12.1575 24.9695 12.0695 25.049 11.9609C25.1284 11.8523 25.1818 11.7261 25.2048 11.5924C25.2279 11.4587 25.22 11.3213 25.1817 11.1913C25.1554 11.1042 22.3422 1.85547 13.3179 1.85547C4.29361 1.85547 1.48297 11.1042 1.45747 11.2001C1.32149 11.6621 1.57646 12.1415 2.02691 12.281C2.47736 12.4204 2.95331 12.1589 3.08929 11.6969C3.18193 11.3657 5.57866 3.59886 13.3187 3.59886C21.0571 3.59886 23.4454 11.3596 23.5499 11.6969ZM8.22272 12.3158C8.22272 10.9287 8.75998 9.59839 9.71631 8.61754C10.6726 7.63669 11.9697 7.08565 13.3221 7.08565C14.6746 7.08565 15.9717 7.63669 16.928 8.61754C17.8843 9.59839 18.4216 10.9287 18.4216 12.3158C18.4216 13.703 17.8843 15.0333 16.928 16.0141C15.9717 16.995 14.6746 17.546 13.3221 17.546C11.9697 17.546 10.6726 16.995 9.71631 16.0141C8.75998 15.0333 8.22272 13.703 8.22272 12.3158Z"
                                    fill="white"
                                  />
                                </svg>
                              </span>
                              <span className="inline-block align-middle opacity-50">
                                {item.views}
                              </span>
                            </div>
                            <div>
                              <span className="inline-block align-middle opacity-50">
                                {item.date}
                              </span>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  );
                })
              ) : (
                <></>
              )}
            </div>

            <div>
              <div className="flex items-center flex-wrap justify-center px-2 sm:py-3 sm:px-6">
                <div className=" md:flex sm:flex-1 sm:items-center sm:justify-center">
                  <div>
                    <nav
                      aria-label="Pagination"
                      className="isolate inline-flex  rounded-md shadow-sm"
                    >
                      <div
                        className="relative m-1 inline-flex items-center rounded px-1 sm:px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300  focus:z-20 focus:outline-offset-0"
                        onClick={() => handlePaginate("back")}
                      >
                        <span className="sr-only">Previous</span>
                        <span>
                          <svg
                            className="inline-block align-middle"
                            width="24"
                            height="23"
                            viewBox="0 0 24 23"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M15.2717 5.95041C15.5948 6.28639 15.5843 6.82064 15.2483 7.1437L10.8173 11.3177L15.2483 15.4917C15.5843 15.8148 15.5948 16.3491 15.2717 16.685C14.9487 17.021 14.4144 17.0315 14.0784 16.7084L9.01474 11.9261C8.84926 11.767 8.75574 11.5473 8.75574 11.3177C8.75574 11.0882 8.84926 10.8685 9.01474 10.7094L14.0784 5.92701C14.4144 5.60395 14.9487 5.61443 15.2717 5.95041Z"
                              fill="#E5E9EC"
                            />
                          </svg>
                          Back
                        </span>
                      </div>

                      {/* {randerPage.map((item) => {
                        return (
                          <a
                            onClick={() => handlePaginate(item)}
                            aria-current="page"
                            className={`relative z-10 m-1 inline-flex items-center  rounded px-2 sm:px-4 py-1 sm:py-2 text-sm font-semibold  focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2   ${
                              store.magazine.page == item
                                ? " text-dark bg-white"
                                : " text-white ring-1 ring-inset ring-gray-300 bg-none"
                            }`}
                          >
                            {item}
                          </a>
                        );
                      })} */}

                      {randerPage
                        .filter((item) => {
                          // Conditionally apply filtering for mobile view only
                          if (window.innerWidth <= 640) {
                            // Mobile screen size (you can adjust this as per your need)
                            if (store.magazine.page <= 2) {
                              return item <= 3; // Show first 3 pages when current page is 1 or 2
                            } else if (
                              store.magazine.page >=
                              randerPage.length - 1
                            ) {
                              return item >= randerPage.length - 2; // Show last 3 pages when close to the end
                            } else {
                              return (
                                item >= store.magazine.page - 1 &&
                                item <= store.magazine.page + 1
                              ); // Show 1 before and 1 after the current page
                            }
                          }
                          return true; // No filtering for web version
                        })
                        .map((item) => (
                          <a
                            onClick={() => handlePaginate(item)}
                            aria-current="page"
                            key={item}
                            className={`relative z-10 m-1 inline-flex items-center rounded  px-4 py-1 sm:py-2 text-sm font-semibold focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                              store.magazine.page == item
                                ? "text-dark bg-white"
                                : "text-white ring-1 ring-inset ring-gray-300 bg-none"
                            }`}
                          >
                            {item}
                          </a>
                        ))}

                      <div
                        className="relative m-1 inline-flex rounded items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300  focus:z-20 focus:outline-offset-0"
                        onClick={() => handlePaginate("next")}
                      >
                        <span className="sr-only">Next</span>
                        <span>
                          Next
                          <svg
                            className="inline-block align-middle"
                            width="24"
                            height="23"
                            viewBox="0 0 24 23"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M8.76636 16.6853C8.44331 16.3494 8.45378 15.8151 8.78976 15.492L13.2208 11.318L8.78976 7.144C8.45378 6.82094 8.44331 6.28668 8.76636 5.9507C9.08942 5.61472 9.62368 5.60425 9.95966 5.92731L15.0233 10.7097C15.1888 10.8688 15.2823 11.0885 15.2823 11.318C15.2823 11.5476 15.1888 11.7672 15.0233 11.9264L9.95966 16.7087C9.62368 17.0318 9.08942 17.0213 8.76636 16.6853Z"
                              fill="#E5E9EC"
                            />
                          </svg>
                        </span>
                      </div>
                    </nav>
                  </div>

                  <form className=" hidden sm:flex sm:items-center sm:ms-10">
                    <label className="block mb-2 text-sm font-medium text-white ">
                      Result per page
                    </label>
                    <select
                      id="countries"
                      className="bg-gray-50 ms-2 border result-per-page bg-transparent border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      onChange={(e) =>
                        store.get.paginate({ size: parseInt(e.target.value) })
                      }
                    >
                      <option selected>10</option>
                      <option value="20">20</option>
                      <option value="30">30</option>
                      <option value="40">40</option>
                      <option value="50">50</option>
                    </select>
                  </form>
                </div>
              </div>

              <div className=" w-full flex items-center  justify-center mt-4">
                <div className="showing-data">
                  <p className="text-sm text-gray-300 text-center md:text-start">
                    Showing{" "}
                    <span className="font-medium">
                      {(store.magazine.page - 1) * store.magazine.per_page + 1}
                    </span>{" "}
                    to{" "}
                    <span className="font-medium">
                      {store.magazine.page * store.magazine.per_page >
                      store.magazine.total_posts
                        ? store.magazine.total_posts
                        : store.magazine.page * store.magazine.per_page}
                    </span>{" "}
                    of{" "}
                    <span className="font-medium">
                      {store.magazine.total_posts}
                    </span>{" "}
                    results
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
