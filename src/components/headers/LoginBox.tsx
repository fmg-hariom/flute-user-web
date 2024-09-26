import React from "react";
import { Logo } from "@/components/ui/Logo";

const LoginBox = () => {
  return (
    <section className="h-screen w-full flex flex-wrap items-center justify-center ">
      <div className="mb-12 w-full md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
        <form>
          {/* <!-- PhoneNumber input --> */}
          <div className="relative mb-6 " data-twe-input-wrapper-init>
            <input
              type="text"
              className="peer block min-h-[auto] w-full rounded border-0 bg-White px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:o100pacity- peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
              id="exampleFormControlInput2"
              placeholder="Email address"
            />
            <label
              htmlFor="exampleFormControlInput2"
              className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[1.15rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"
            >
              Enter your Phone Number
            </label>
          </div>

          {/* <!-- SignIn button --> */}
          <div className="text-center lg:text-left">
            <button
              type="button"
              className="inline-block w-full rounded bg-primary px-7 pb-2 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
              data-twe-ripple-init
              data-twe-ripple-color="light"
            >
              Sign in
            </button>
          </div>
          <button className="px-6 py-2 bg-white text-black font-semibold text-sm border border-black rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2">
            Get OTP
          </button>
        </form>
      </div>
    </section>
  );
};

export default LoginBox;
