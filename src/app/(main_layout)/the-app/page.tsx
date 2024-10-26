"use client";

import { useRef, useEffect, useState } from "react";
import FluteAccordion from "@/components/accordion/FluteAccordion";

interface ContentSectionProps {
  title: string;
  description: string;
  imageSrc: string;
}

const ContentSection: React.FC<ContentSectionProps> = ({
  title,
  description,
  imageSrc,
}) => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const [imageWidth, setImageWidth] = useState<string>("auto");

  useEffect(() => {
    if (headingRef.current) {
      setImageWidth(headingRef.current.offsetWidth + "px");
    }
  }, [title]);

  return (
    <div className="mb-[40px] sm:my-[70px] font-afacad flex flex-col  sm:flex-row items-center  w-full">
      <div className="text-[16px] leading-[25px] sm:font-[500]  sm:text-[30px] sm:leading-[42px] sm:w-[60%] w-full sm:mr-[20px]">
        <div className="flex flex-col items-start mb-8 text-[#ffffff] font-semibold sm:text-[48px] sm:leading-[58px]">
          <h2 ref={headingRef}>{title}</h2>
          <img
            src="theApp/theapptitleimg.png"
            style={{ width: imageWidth }}
            alt="decorative line"
          />
        </div>
        <span className="sm:text-[32px] sm:leading-[36px] text-[##ffffffb3]  sm:font-[400] ">
          {description}
        </span>
      </div>
      <div className="w-[35%] sm:w-[40%] h-full flex justify-center   ">
        <img
          src={imageSrc}
          alt="FLUTE logo"
          className="w-[150px] h-[150px] object-contain"
        />
      </div>
    </div>
  );
};

const TheApp: React.FC = () => {
  return (
    <div className="w-screen flex flex-col justify-between bg-[#000] py-4 sm:py-6 px-4 sm:px-10 lg:px-20 text-[#D9D9D9] ">
      <div className="w-full flex flex-col justify-center items-center mb-8">
        <div className="text-[40px] sm:text-[54px] leading-[50px] tracking-[1px] text-[#c1cfe3] font-bold font-urbanist mt-[30px]">
          THE APP
        </div>
        <div className="flex flex-col items-center w-[80%]">
          <h2 className="my-[10px] mb-6 sm:my-[30px] sm:pt-[10px] text-[#ffffffcc] font-[500] text-[20px] leading-[24px] sm:text-[40px] sm:leading-[44px] font-afacad text-center">
            Your <span className="text-[#1EC048]">Go-To Platform </span>for
            Emotional Support, Relationship Development & Spiritual Guidance
          </h2>
        </div>
      </div>

      <div className="  font-urbanist flex flex-col sm:flex-row items-center  w-full">
        <div className="text-[16px] leading-[25px] sm:font-[400] text-[#ffffffcc] sm:text-[36px] sm:leading-[54px] sm:w-[60%] w-full sm:mr-[20px] font-charter">
          Flute is more than just an app—it's a comprehensive platform designed
          to support you through life's emotional, relational, and spiritual
          challenges. Whether you're seeking advice on love, looking for
          emotional support, or needing guidance for personal growth, Flute is
          here for you.
        </div>
        <div className="w-[35%] sm:w-[40%] h-[400px] flex justify-center video_play">
          <video
            src="theApp/iphone-slow-reveal_3_online-video-cutter.com.mp4"
            autoPlay
            loop
            muted
            // controls
            className="w-full  object-contain"
          />
        </div>
      </div>

      <ContentSection
        title="Emotional Support"
        description="Life can be overwhelming at times, and everyone needs someone to talk to. Flute offers a unique feature where you can connect with trained Listeners—empathetic individuals ready to offer a non-judgmental ear. When you're feeling low, stressed, or simply in need of a caring conversation, our Listeners are here to help you feel heard and understood."
        imageSrc="theApp/ES.png"
      />

      <ContentSection
        title="Relationship Development"
        description="Navigating relationships—whether with partners, friends, or family—can be challenging. Flute provides you with expert relationship coaching and advice to help you overcome obstacles, improve communication, and deepen your connections. Our relationship experts are available to offer practical insights and strategies to strengthen the bonds that matter most."
        imageSrc="theApp/RD.png"
      />
      <ContentSection
        title="Spiritual Guidance"
        description="For those looking to align their emotional and spiritual well-being, Flute offers consultations with spiritual coaches, astrologers, and tarot readers. Whether you're curious about your astrological chart or seeking guidance on your spiritual journey, our expert advisors can offer insights to help you find clarity, peace, and direction."
        imageSrc="theApp/SG.png"
      />
      <ContentSection
        title="Professional Counseling & Therapy"
        description="For more complex emotional challenges, Flute provides access to certified therapists and counselors. Whether you're dealing with anxiety, grief, relationship issues, or personal trauma, our qualified professionals are here to offer structured support and therapeutic guidance to help you navigate difficult times with resilience."
        imageSrc="theApp/PCT.png"
      />

      <ContentSection
        title="Personal Growth & Life Coaching"
        description="Flute is not just about managing emotional struggles—it's also about empowering you to achieve your goals. Our life coaches work with you to develop personalized plans for self-improvement, whether you're striving for personal growth, professional success, or a more balanced life. Set clear objectives, overcome challenges, and become the best version of yourself with the help of our expert coaches."
        imageSrc="theApp/PGLC.png"
      />
      <ContentSection
        title="Astrological Insights & Spiritual Tools"
        description="For those who find solace in astrology, Flute offers one-on-one consultations with experienced astrologers. Get insights into your life path, relationships, and personal development through astrological readings. Additionally, tarot readings and other spiritual tools are available to guide you through decision-making and life’s uncertainties."
        imageSrc="theApp/AIST.png"
      />
      <ContentSection
        title="Mental Wellness Support"
        description="Mental health is integral to overall well-being, and Flute is dedicated to promoting it. With our mental wellness programs and resources, you can work on improving your mental resilience, coping strategies, and emotional regulation. Whether through self-care routines, guided meditations, or mindfulness practices, we aim to create a balanced and peaceful mental state for our users."
        imageSrc="theApp/MWS.png"
      />
      <ContentSection
        title="Instant Access Anytime, Anywhere"
        description="Flute understands that life doesn’t wait, and neither should you. That’s why we offer instant, on-demand access to emotional support, coaching, and spiritual guidance. Wherever you are, whenever you need it, Flute is right in your pocket, ready to provide help and clarity when you need it most."
        imageSrc="theApp/IAAA.png"
      />

      <div className="mt-[20px] sm:my-[35px] flex flex-col items-center ">
        {/* <p className="w-[80%] text-center text-[#ffffffcc] text-[30px] leading-[42px] font-charter"> */}
        <p className="w-full sm:w-[80%] text-center text-[#ffffffcc] text-[18px] leading-[23.4px] sm:text-[30px] sm:leading-[54px] font-charter ">
          Flute is your personal tool for navigating life's emotional,
          relational, and spiritual journeys. We’re here to help you connect
          deeply with yourself and others, overcome life's hurdles, and find
          peace and purpose along the way. Join Flute today, and take the first
          step towards emotional balance, stronger relationships, and spiritual
          growth.
        </p>
      </div>

      <div className="mt-[40px] sm:mt-[70px] font-afacad ">
        <button className="bg-[#ffffff] px-[7px] text-[#000000] font-bold leading-[67px] rounded-xl text-[50px] ">
          How is the Flute Different?
        </button>
        <p className=" text-[#ffffffcc] text-[18px] leading-[23.4px] sm:text-[34px] sm:leading-[42px]  mt-[40px] ">
          Flute stands out as a comprehensive, all-in-one platform tailored to
          provide emotional support, relationship guidance, and spiritual
          insights—offering a unique combination of services that no other app
          currently provides. Here’s how Flute is different:
        </p>
      </div>

      <div className="mt-[40px] sm:my-[70px] font-afacad  ">
        <FluteAccordion />
      </div>
    </div>
  );
};

export default TheApp;
