"use client";
import { Montserrat } from "next/font/google";
import { Open_Sans } from "next/font/google";
import { Logo } from "@/components/ui/Logo";
import Footer from "@/components/footer/footer";
import GetApp from "@/components/get-app/GetApp";
import OTPInput from "@/components/ui/otpInput";
import CountryFlagDropdown from "@/components/ui/CountryFlagDropdown";

const montserrat = Montserrat({
  weight: ['400', '500', '600', '700',], // Specify the font weights you need
  subsets: ["latin"], // Include any subsets you need
  display: "swap", // Controls how the font is displayed while loading
});
const open_sans = Open_Sans({
  weight: ['300', '400', '500',], // Specify the font weights you need
  subsets: ["latin"], // Include any subsets you need
  display: "swap", // Controls how the font is displayed while loading
});

const LoginSuccessBox = () => {
  return (
    <>
      <div className="fixed inset-0 p-2 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto ">
        <div className="bg-[#302C28] flex flex-col justify-between py-16 items-center text-center w-[36rem] h-[15rem] text-white p-6 rounded-[19px] max-w-md mx-auto z-[1001] shadow-lg">
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 rounded-full flex items-center justify-center">
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M31.6667 0C14.25 0 0 14.25 0 31.6667C0 49.0833 14.25 63.3333 31.6667 63.3333C49.0833 63.3333 63.3333 49.0833 63.3333 31.6667C63.3333 14.25 49.0833 0 31.6667 0ZM31.6667 57C17.7017 57 6.33333 45.6317 6.33333 31.6667C6.33333 17.7017 17.7017 6.33333 31.6667 6.33333C45.6317 6.33333 57 17.7017 57 31.6667C57 45.6317 45.6317 57 31.6667 57ZM46.2017 17.67L25.3333 38.5383L17.1317 30.3683L12.6667 34.8333L25.3333 47.5L50.6667 22.1667L46.2017 17.67Z" fill="white" />
              </svg>

            </div>
          </div>
          <p className="text-xl font-semibold">
            You have successfully logged in
          </p>
        </div>

      </div>
    </>
  )
}

export default function Login() {
  return (
    <>
      <div className={montserrat.className + " flex h-screen"}>
        {/* Left Section (Logo) */}
        <div className="w-1/2 bg-[#1A1816] hidden flex-col md:flex items-center justify-center ">
          <div className="w-[56%] flex flex-col items-center justify-center">
            <Logo width={232} height={231} />
            <div className="text-white ">
              <h2 className=" text-[1.7rem] mb-3 font-medium text-justify">When Life Needs a Melody of Support</h2>
              <p className="text-[1.3rem] font-normal text-justify">
                Here, we   believe that building a strong professional network
                begins with your participation.
              </p>
              <p className="text-[1.3rem] mt-2 font-normal text-justify">We are delighted to offer a modern
                and friendly service to ensure you have the best experience.
              </p>
            </div>
          </div>
        </div>

        {/* Right Section (Login Form) */}
        <div className={montserrat.className + " w-screen md:w-1/2 bg-[#1A1816] flex items-center justify-center"}>
          {/* Login Card */}
          <div className="bg-[#302c28] px-[2rem] md:px-[5rem] rounded-[30px] shadow-lg py-24  w-[95%] md:w-[70%] ">
            <div className="text-white  font-bold  mb-6 text-center">
              <h1 className="text-[1.5rem] md:text-[2.3rem]  font-bolder mb-4 tracking-wider">
                Welcome to{" "}
                <span className="text-[2rem] md:text-[3rem] font-extrabold">Flute</span>
              </h1>
            </div>
            <form>
              <div className=" mb-4 flex items-center overflow-hidden h-[4.5rem] shadow-lg shadow-black border border-gray-300 rounded-md p-2 bg-white">
                <CountryFlagDropdown />
                <div className="px-2">|</div>
                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  className=" placeholder-custom-color flex-1 border-none focus:outline-none bg-transparent  pl-2"
                />
              </div>
              {/* Enter OTP  Section*/}
              {/* <p className={open_sans.className + "mb-2 text-white text-2xl"}>Enter OTP</p>
              <p className={open_sans.className + "text-xl text-gray-400 mb-4"}>Sent to { }</p>
              <div className="flex flex-col justify-center items-center w-full">
                <OTPInput />
                <p className="text-lg text-gray-400 mb-4 mt-2">Valid till <span className="text-white font-semibold">00:59</span></p>
              </div> */}
              {/* Signin Button */}
              <div className="mt-10">
                <p className="mb-2 text-[#ffffff80] text-sm">You will receive an OTP in your phone</p>
                <button
                  type="button"
                  className="w-full bg-white text-black font-bold h-[3.5rem] transition-all rounded-md shadow-lg shadow-black py-2 px-4 rounded "
                >
                  Sign in
                </button>

                {/* <button
                  type="button"
                  className="w-full bg-white text-black font-bold h-[3.5rem] transition-all rounded-md shadow-lg shadow-black py-2 px-4 rounded "
                >
                  Get OTP
                </button>
                <button
                  type="button"
                  disabled
                  className="w-full bg-white text-black font-bold h-[3.5rem] transition-all rounded-md shadow-lg shadow-black py-2 px-4 rounded disabled:bg-[#949290] disabled:text-[#302C28]  disabled:cursor-not-allowed "
                >
                  Verify
                </button> */}
              </div>
            </form>

            {/* <LoginSuccessBox /> */}
          </div>
        </div>
      </div>
      <GetApp />
    </>
  );
}
// <div className="py-4 sm:py-8 px-0 bg-black text-white">
//     <main>
//         <div className="flex justify-center items-center bg-[#1A1816]">
//         <div className=" flex justify-center items-center w-1/2 border border-white">
//         <Logo width={232} height={231} />
//         </div>
//          <div className="flex justify-center items-center w-1/2 border border-white">
//         <LoginBox />
//         </div>
//         </div>

//     </main>

// </div>

// export  default function Login(){
//     return (
//     <div className="container">
//       <nav>
//         <div className="nav-login">
//           <a href="/">Login</a>
//         </div>
//       </nav>

//       <div className="main-content">
//         <div className="logo-section">
//           <img src="logo-url" alt="Flute Logo" className="logo" />
//           <h2>When Life Needs a Melody of Support</h2>
//           <p>
//             Here, we believe that building a strong professional network begins with your participation.
//             We are delighted to offer a modern and friendly service to ensure you have the best experience.
//           </p>
//         </div>

//         <div className="form-section">
//           <h3>Welcome to Flute</h3>
//           <form>
//             <label>Enter your Phone Number</label>
//             <input type="tel" placeholder="📱 Enter your Phone Number" />
//             <button type="submit">Sign in</button>
//           </form>
//           <p>You will receive an OTP on your phone</p>
//         </div>
//       </div>

//       <div className="app-section">
//         <h3>Get the Flute App</h3>
//         <p>We will send you a link, open it on your phone to download the app</p>

//         <form>
//           <input type="email" placeholder="📧 Email" />
//           <input type="tel" placeholder="📱 Phone" />
//           <button type="submit">Send App Link</button>
//         </form>

//         <div className="app-buttons">
//           <img src="google-play-url" alt="Google Play" />
//           <img src="app-store-url" alt="App Store" />
//         </div>
//       </div>

//       <footer>
//         <div className="footer-content">
//           <img src="footer-logo-url" alt="Footer Logo" />
//           <div className="footer-links">
//             <a href="/">FAQs</a>
//             <a href="/">Terms of Service</a>
//             <a href="/">Privacy Policy</a>
//           </div>
//           <div className="social-media">
//             <p>Follow Us</p>
//             {/* Add Social Media Icons */}
//           </div>
//           <p>&copy; 2019 Fun Max Games Private Ltd. All rights reserved.</p>
//         </div>
//       </footer>
//     </div>
//   );
// }
