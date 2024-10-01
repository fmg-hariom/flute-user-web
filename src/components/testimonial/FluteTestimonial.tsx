import React from "react";
import { Carousel, CarouselContent } from "../ui/carousel";

const FluteTestimonial = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="bg-gray-800 text-white max-w-lg mx-auto rounded-lg p-6 shadow-lg relative">
        {/* Title */}
        <h2 className="text-orange-500 font-semibold mb-4 text-lg">
          Reassurance About My Senior Dog’s Well-Being
        </h2>

        {/* Content */}
        <p className="text-gray-300 mb-6">
          My dog, Daisy, has been with me through so much, and now that she's
          getting older, I worry constantly about her health and happiness. I
          wanted to make sure she was comfortable and at peace as she aged, so I
          turned to Flute's pet psychics for some guidance. The psychic was able
          to connect with Daisy and gave me insight into how she was feeling. I
          learned that Daisy was content and that she felt loved and safe, which
          was a huge relief. The psychic also suggested some changes to make her
          more comfortable in her final years. The reassurance I received was
          invaluable, and I'm so grateful to Flute for helping me ensure Daisy's
          remaining time is filled with love and care.
        </p>

        {/* Author */}
        <p className="text-gray-500 text-sm">SARAH T</p>

        {/* Left and Right Navigation Buttons */}
        <button className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400">
          &#x276E;
        </button>
        <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400">
          &#x276F;
        </button>

        {/* Show More Button */}
        <div className="flex justify-center mt-6">
          <button className="bg-gray-700 text-gray-300 px-4 py-2 rounded hover:bg-gray-600 transition">
            Show More
          </button>
        </div>
      </div>
    </div>
  );
};

export default FluteTestimonial;
