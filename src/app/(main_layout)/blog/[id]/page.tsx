import MainHeader from "@/components/headers/MainHeader";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { Montserrat_Alternates } from "next/font/google";

const montserratAlternates = Montserrat_Alternates({
  weight: "400", // Specify the font weights you need
  subsets: ["latin"], // Include any subsets you need
  display: "swap", // Controls how the font is displayed while loading
});

export default function Blogs() {
  return (
    <div className="py-4 sm:py-8 px-0 bg-black text-white">
      <main>
        <div className="container mx-auto px-8">
          <div className="pt-10">
            <span className="inline-block align-middle me-6">
              <svg
                width="34"
                height="34"
                viewBox="0 0 34 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle opacity="0.8" cx="17" cy="17" r="17" fill="white" />
                <path
                  d="M20.41 12.41L19 11L13 17L19 23L20.41 21.59L15.83 17L20.41 12.41Z"
                  fill="black"
                />
              </svg>
            </span>
            <span className="inline-block align-middle bg-slate-200 rounded-sm p-1 px-2 text-sm  text-dark">
              AUGust 13, 2021
            </span>
          </div>
          <div>
            <h2 className="text-5xl font-bold mt-7 mb-9 leading-tight	">
              And Life Goes On...
              <br />
              Dilemmas of a Divorce
              <br />
              Damned if you do, damned if you don’t.
            </h2>
          </div>
          <div>
            <img
              src="https://placehold.co/1314x551"
              className="w-full rounded-xl"
              alt=""
            />
          </div>
          <div className="mt-5 bg-[#242424] p-[60px]  rounded-lg shadow-insets">
            <p>
              Yes, that’s what happens when you go through the word that is one
              of the biggest stigmas to exist in this country.
            </p>
            <p>
              Here are the thoughts that crippled me at the thought of the
              D-word.
            </p>
            <ul className="mt-[15px]">
              <li className="leading-snug">How will I tell my parents? </li>
              <li className="leading-snug">How will I tell my parents? </li>
              <li className="leading-snug">How will I tell my parents? </li>
              <li className="leading-snug">How will I tell my parents? </li>
              <li className="leading-snug">How will I tell my parents? </li>
            </ul>
            <p className="mt-[15px]">
              Do you see “how will I heal” anywhere on the list? The scope
              doesn’t arise in a country where you’re gripped with the fear of
              people rather than your personal tragedy because the biggest irony
              lies in the fact that the marriage may be yours, but the failure
              will be critiqued by everyone.
            </p>
            <p className="mt-[15px]">
              Do you see “how will I heal” anywhere on the list? The scope
              doesn’t arise in a country where you’re gripped with the fear of
              people rather than your personal tragedy because the biggest irony
              lies in the fact that the marriage may be yours, but the failure
              will be critiqued by everyone.
            </p>
            <p className="mt-[15px]">
              Do you see “how will I heal” anywhere on the list? The scope
              doesn’t arise in a country where you’re gripped with the fear of
              people rather than your personal tragedy because the biggest irony
              lies in the fact that the marriage may be yours, but the failure
              will be critiqued by everyone.
            </p>
            <p className="mt-[15px]">
              Do you see “how will I heal” anywhere on the list? The scope
              doesn’t arise in a country where you’re gripped with the fear of
              people rather than your personal tragedy because the biggest irony
              lies in the fact that the marriage may be yours, but the failure
              will be critiqued by everyone.
            </p>
            <p className="mt-[15px]">
              Do you see “how will I heal” anywhere on the list? The scope
              doesn’t arise in a country where you’re gripped with the fear of
              people rather than your personal tragedy because the biggest irony
              lies in the fact that the marriage may be yours, but the failure
              will be critiqued by everyone.
            </p>
            <p className="mt-[15px]">
              Do you see “how will I heal” anywhere on the list? The scope
              doesn’t arise in a country where you’re gripped with the fear of
              people rather than your personal tragedy because the biggest irony
              lies in the fact that the marriage may be yours, but the failure
              will be critiqued by everyone.
            </p>
            <p className="mt-[15px]">
              Do you see “how will I heal” anywhere on the list? The scope
              doesn’t arise in a country where you’re gripped with the fear of
              people rather than your personal tragedy because the biggest irony
              lies in the fact that the marriage may be yours, but the failure
              will be critiqued by everyone.
            </p>
            <p className="mt-[15px]">
              Do you see “how will I heal” anywhere on the list? The scope
              doesn’t arise in a country where you’re gripped with the fear of
              people rather than your personal tragedy because the biggest irony
              lies in the fact that the marriage may be yours, but the failure
              will be critiqued by everyone.
            </p>
            <p className="mt-[15px]">
              Do you see “how will I heal” anywhere on the list? The scope
              doesn’t arise in a country where you’re gripped with the fear of
              people rather than your personal tragedy because the biggest irony
              lies in the fact that the marriage may be yours, but the failure
              will be critiqued by everyone.
            </p>
            <p className="mt-[15px]">
              Do you see “how will I heal” anywhere on the list? The scope
              doesn’t arise in a country where you’re gripped with the fear of
              people rather than your personal tragedy because the biggest irony
              lies in the fact that the marriage may be yours, but the failure
              will be critiqued by everyone.
            </p>
            <div className="border my-12"></div>
            <div className="flex justify-between items-center ">
              <div className="flex items-center">
                <div className="me-10 text-[12px]">
                  <img
                    src="https://placehold.co/200x200"
                    className="rounded-[100%] w-[116px] border-4 border-white border-solid"
                    alt=""
                  />
                </div>
                <div>
                  <span>Written by</span>
                  <h3 className="text-[#D9D9D9] font-bold text-[36px]">
                    Rajshree Sharma
                  </h3>
                </div>
              </div>
              <div className="flex justify-between ">
                <div>
                  <span className="inline-block align-middle me-2">
                    <svg
                      width="30"
                      height="30"
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
                    421
                  </span>
                </div>
                <div className="px-8">
                  <span className="inline-block align-middle me-2">
                    <svg
                      width="30"
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
                    21k
                  </span>
                </div>
                <div >
                  <span className="inline-block align-middle opacity-50">
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 46 45"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g >
                        <path
                          d="M31.5964 4.46289C28.4684 4.46289 25.9153 7.01599 25.9153 10.1439C25.9153 10.8028 26.037 11.4314 26.245 12.0207L16.6583 18.0568C15.6581 17.1808 14.358 16.6366 12.9301 16.6366C9.80213 16.6366 7.24902 19.1897 7.24902 22.3176C7.24902 25.4456 9.80213 27.9987 12.9301 27.9987C14.3605 27.9987 15.6701 27.4571 16.671 26.5784L26.245 32.6018C26.0345 33.1944 25.9153 33.8283 25.9153 34.4913C25.9153 37.6192 28.4684 40.1723 31.5964 40.1723C34.7243 40.1723 37.2774 37.6192 37.2774 34.4913C37.2774 31.3633 34.7243 28.8102 31.5964 28.8102C29.7122 28.8102 28.0405 29.7359 27.0059 31.1562L17.7362 25.323C18.2857 24.4489 18.6111 23.4221 18.6111 22.3176C18.6111 21.2093 18.2892 20.1755 17.7362 19.2996L27.0059 13.4663C28.04 14.8912 29.7087 15.825 31.5964 15.825C34.7243 15.825 37.2774 13.2719 37.2774 10.1439C37.2774 7.01599 34.7243 4.46289 31.5964 4.46289Z"
                          fill="#A0A0A0"
                        />
                      </g>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
