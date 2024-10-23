"use client";

import React from "react";

const AboutUs = () => {
  return (
    <>
      <div className="w-screen flex flex-col  justify-between bg-[#000] py-6 sm:py-9  px-4 sm:px-10 lg:px-32  text-[#D9D9D9]">
        <div className="w-full flex  flex-col justify-center items-center mb-8 ">
          <div className="text-[80px] leading-[96px]  tracking-[1px] text-[#c1cfe3] font-semibold">
            About Us
          </div>
          <div className="flex flex-col items-center">
            <h2 className="my-[40px] text-[#ffffffcc] font-bold text-[42px] leading-[58px] ">
              FLUTE – Your All-in-One App for Love, Life, and Listening Ears
            </h2>
            <p className="w-[80%] text-center text-[#ffffffcc] text-[38px] leading-[58px] font-charter ">
              Welcome to FLUTE, the app that’s redefining the way we approach
              love, personal growth, and emotional well-being. Founded by Astha
              Pruthi, FLUTE is designed to be your companion through life’s ups
              and downs, offering a comprehensive suite of tools to guide you
              through the complex landscape of relationships, self-development,
              and mental wellness.
            </p>
          </div>
        </div>

        <div className="my-[70px]  ">
          <h2 className="text-[60px] leading-[72px] font-bold mb-[40px]">
            More Than Just a <span className="text-[#8F63FC]">Dating App</span>
          </h2>
          <p className="font-[500px] text-[#ffffffcc] text-[30px] leading-[42px]">
            While FLUTE's smart matching algorithm helps you connect with
            potential matches, we know that love is just one part of the puzzle.
            Whether you're looking for romance or seeking personal development,
            FLUTE is here to provide much more. From improving your
            relationships to working on self-discovery, we’ve got you covered
            with a range of features designed to support your holistic
            well-being.
          </p>
        </div>

        <div>
          <h2 className="text-[60px] leading-[72px] font-bold mb-[40px]">
            Your <span className="text-[#FFA643]"> Well-being </span> Matters
          </h2>
          <p className="font-[500px] text-[#ffffffcc] text-[30px] leading-[42px] mb-[40px]">
            FLUTE offers more than a platform for meeting new people. We provide
            the resources you need to thrive in all aspects of your life,
            including:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1 */}
            <div className="bg-[#E0F8F2] shadow-md rounded-lg p-6 w-full flex flex-col items-center px-20">
              <h4 className="text-[30px] text-[#2E2F35] leading-[36px]  font-bold mb-2">
                Expert Coaching
              </h4>
              <p className="text-[24px] text-[#58595D] leading-[34px]  font-semibold ">
                Get personalized guidance from certified coaches who can help
                you with relationship dynamics, dating strategies, mental
                wellness, and personal development. Whether you're navigating
                challenges in love or life, our coaches are by your side,
                offering support every step of the way.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-[#FAEDED] shadow-md rounded-lg p-6 w-full flex flex-col items-center px-20">
              <h4 className="text-[30px] text-[#2E2F35] leading-[36px]  font-bold mb-2">
                Expert Coaching
              </h4>
              <p className="text-[24px] text-[#58595D] leading-[34px]  font-semibold ">
                Get personalized guidance from certified coaches who can help
                you with relationship dynamics, dating strategies, mental
                wellness, and personal development. Whether you're navigating
                challenges in love or life, our coaches are by your side,
                offering support every step of the way.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-[#EEECFF] shadow-md rounded-lg p-6 w-full flex flex-col items-center px-20">
              <h4 className="text-[30px] text-[#2E2F35] leading-[36px]  font-bold mb-2">
                Expert Coaching
              </h4>
              <p className="text-[24px] text-[#58595D] leading-[34px]  font-semibold ">
                Get personalized guidance from certified coaches who can help
                you with relationship dynamics, dating strategies, mental
                wellness, and personal development. Whether you're navigating
                challenges in love or life, our coaches are by your side,
                offering support every step of the way.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-[#D9F2F7] shadow-md rounded-lg p-6 w-full flex flex-col items-center px-20">
              <h4 className="text-[30px] text-[#2E2F35] leading-[36px]  font-bold mb-2">
                Expert Coaching
              </h4>
              <p className="text-[24px] text-[#58595D] leading-[34px]  font-semibold ">
                Get personalized guidance from certified coaches who can help
                you with relationship dynamics, dating strategies, mental
                wellness, and personal development. Whether you're navigating
                challenges in love or life, our coaches are by your side,
                offering support every step of the way.
              </p>
            </div>
          </div>
        </div>

        <div className="my-[70px]  ">
          <h2 className="text-[60px] leading-[72px] font-bold mb-[40px]">
            When You Just Need to <span className="text-[#10B9EA]">Talk</span>
          </h2>
          <p className="font-[500px] text-[#ffffffcc] text-[30px] leading-[42px]">
            Sometimes, what you need most is someone who will listen—without
            judgment or advice. That’s where Listeners on FLUTE come in. Our
            trained listeners offer a compassionate, non-judgmental space for
            you to share your feelings, or just talk about your day. You’re
            never alone when you have FLUTE.
          </p>
        </div>

        <div>
          <h2 className="text-[60px] leading-[72px] font-bold mb-[40px]">
            A Stepping Stone to<span className="text-[#2EC859]"> Healing</span>
          </h2>
          <p className="font-[500px] text-[#ffffffcc] text-[30px] leading-[42px]">
            FLUTE understands that sometimes, more structured support is needed.
            That’s why we offer access to licensed therapists and professional
            counselors for those times when deeper emotional healing or mental
            health support is necessary. Our platform is a stepping stone toward
            healing, helping you connect with the right professionals to guide
            you through life’s tougher moments.
          </p>
        </div>

        <div className="my-[70px]  ">
          <h2 className="text-[60px] leading-[72px] font-bold mb-[40px]">
            Your Journey <span className="text-[#8F63EC]">Starts</span> Here
          </h2>
          <p className="font-[500px] text-[#ffffffcc] text-[30px] leading-[42px]">
            Whether you're searching for love, working on your relationships, or
            simply need someone to talk to, FLUTE is here to empower and uplift
            you. Astha Pruthi’s vision for FLUTE is to break the stigma around
            mental health, foster open communication, and create a supportive
            environment where you can grow emotionally, mentally, and
            spiritually.
          </p>
        </div>

        <div>
          <h2 className="text-[60px] leading-[72px] font-bold mb-[40px]">
            Why Choose <span className="text-[#FFA643]">FLUTE</span>?
          </h2>
          <p className="font-[500px] text-[#ffffffcc] text-[30px] leading-[42px]">
            At FLUTE, we believe that your well-being is multidimensional. From
            matchmaking and life coaching to therapy and astrology, we offer a
            360-degree approach to help you thrive in all areas of your life.
          </p>
        </div>

        <div className="mt-[70px] flex flex-col items-center ">
          <p className="w-[80%] text-center text-[#ffffffcc] text-[30px] leading-[42px] font-charter">
            Join the FLUTE community today and take charge of your love life,
            emotional well-being, and personal growth. Download the{" "}
            <span className="text-[#FFA643]">FLUTE app </span>
            and let us be the support system you need in your journey toward
            fulfillment.
            <h2 className="mt-[40px] text-[#ffffffcc] font-bold text-[30px] leading-[42px]">
              {" "}
              Because at FLUTE, you never have to face life’s challenges alone.
            </h2>
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
