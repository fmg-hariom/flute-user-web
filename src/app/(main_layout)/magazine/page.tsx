import MainHeader from "@/components/headers/MainHeader";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { Montserrat_Alternates } from "next/font/google";

const montserratAlternates = Montserrat_Alternates({
  weight: "400", // Specify the font weights you need
  subsets: ["latin"], // Include any subsets you need
  display: "swap", // Controls how the font is displayed while loading
});

export default function FluteMagazine() {
  return (
    <div className="py-4 sm:py-8 px-0 bg-black text-white">
      <main>
        <div className="relative isolate overflow-hidden bg-light-yellow py-22 ">
          <div className="mx-auto px-6 lg:px-8">
            <div className="mx-auto  lg:mx-0 text-center">
              <h2 className=" heading-2 !text-[26px] md:!text-[40px]    text-dark ">
                Flute Magazine  
              </h2>
              <span className="x-arrow"></span>
              <p className="mt-14 text-lg header-p  !text-[14px] md:!text-[16px]">
                Harmonizing Life: Honest Talks, Real Stories, and Expert Advice
                for Your Journey
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className="container py-33 px-[10px] md:px-[36px] mx-auto">
            <form action="">
              <div className="gap-2 columns-1  md:columns-3">
                <div className="mb-3 md:mb-0">
                  <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
                    Search
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                      <svg
                        className="w-4 h-4 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                        />
                      </svg>
                    </div>
                    <input
                      type="search"
                      id="default-search"
                      className="block w-full p-4 ps-10 text-sm text-gray-900 border rounded-md   bg-transparent  "
                      placeholder="Search"
                      required
                    />
                  </div>
                </div>
                <div className="text-center mb-3 md:mb-0">
                  <button
                    type="button"
                    className="border-white w-full md:w-fit rounded-md bg-transparent border-solid	border text-white py-3 px-10"
                  >
                    Close
                  </button>
                </div>

                <div>
                  <div className="flex items-center justify-center sm:justify-end">
                    <div className=" w-full md:w-fit ">
                      <select
                        name=""
                        id=""
                        className="rounded-md md:w-[99px] h-[49px] w-full md:w-fit custom-select border px-2 ps-10 bg-icon sort-icon filter-select border-white bg-transparent"
                      >
                        <option value="Sort" selected>
                          Sort
                        </option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </form>
            <div className="gap-2 md:gap-4 columns-2 md:columns-4 mt-12">
              <div>
                <button
                  type="button"
                  className="border-white w-full py-2.5 mb-3 px-5  rounded-md bg-transparent border-solid border"
                >
                  Astrologer
                </button>
              </div>
              <div>
                <button
                  type="button"
                  className="border-white w-full py-2.5 mb-3 px-5  rounded-md bg-transparent border-solid border"
                >
                  Tarot Reading
                </button>
              </div>
              <div>
                <button
                  type="button"
                  className="border-white w-full py-2.5 mb-3 px-5  rounded-md bg-transparent border-solid border"
                >
                  Relationship
                </button>
              </div>
              <div>
                <button
                  type="button"
                  className="border-white w-full py-2.5 mb-3 px-5  rounded-md bg-transparent border-solid border"
                >
                  Pre-Marital
                </button>
              </div>
              <div>
                <button
                  type="button"
                  className="border-white w-full py-2.5 mb-3 px-5  rounded-md bg-transparent border-solid border"
                >
                  Breakup
                </button>
              </div>
              <div>
                <button
                  type="button"
                  className="border-white w-full py-2.5 mb-3 px-5  rounded-md bg-transparent border-solid border"
                >
                  Divorce
                </button>
              </div>
              <div>
                <button
                  type="button"
                  className="border-white w-full py-2.5 mb-3 px-5  rounded-md bg-transparent border-solid border"
                >
                  Marriage
                </button>
              </div>
              <div>
                <button
                  type="button"
                  className="border-white w-full py-2.5 mb-3 px-5  rounded-md bg-transparent border-solid border"
                >
                  Psychic Reading
                </button>
              </div>
              <div>
                <button
                  type="button"
                  className="border-white w-full py-2.5 mb-3 px-5  rounded-md bg-transparent border-solid border"
                >
                  Dating
                </button>
              </div>
              <div>
                <button
                  type="button"
                  className="border-white w-full py-2.5 mb-3 px-5  rounded-md bg-transparent border-solid border"
                >
                  Spiritual
                </button>
              </div>
              <div>
                <button
                  type="button"
                  className="border-white w-full py-2.5 mb-3 px-5  rounded-md bg-transparent border-solid border"
                >
                  Unashamed
                </button>
              </div>
              <div>
                <button
                  type="button"
                  className="border-white w-full py-2.5 mb-3 px-5  rounded-md bg-transparent border-solid border"
                >
                  Pet Psychic
                </button>
              </div>
            </div>

            <div className="text-center">
              <button
                type="button"
                className="text-white !text-[18px] md:!text-[36px] mt-10 show-more-btn bg-semi-dark bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-10 py-5  dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
              >
                Show More
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
