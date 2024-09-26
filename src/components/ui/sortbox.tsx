import React, { useState } from "react";
import { Imprima, Montserrat_Alternates } from "next/font/google";

const montserratAlternates = Montserrat_Alternates({
    weight: "400", // Specify the font weights you need
    subsets: ["latin"], // Include any subsets you need
    display: "swap", // Controls how the font is displayed while loading
  });

const SortAlertBox = () => {
  const [selectedOption, setSelectedOption] = useState("Type");

  const handleOptionChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 z-50">
      <div className="bg-gray-900 p-6 rounded-xl w-80">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-white text-xl font-semibold">Sort</h2>
          <button className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Divider */}
        <hr className="border-gray-600 mb-4" />

        {/* Sort Options */}
        <form className="text-white space-y-4">
          <div>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                value="Type"
                checked={selectedOption === "Type"}
                onChange={handleOptionChange}
                className="form-radio text-white"
              />
              <span>Type</span>
            </label>
          </div>

          <div>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                value="DateLowToHigh"
                checked={selectedOption === "DateLowToHigh"}
                onChange={handleOptionChange}
                className="form-radio text-white"
              />
              <span>Date : Low to High</span>
            </label>
          </div>

          <div>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                value="DateHighToLow"
                checked={selectedOption === "DateHighToLow"}
                onChange={handleOptionChange}
                className="form-radio text-white"
              />
              <span>Date : High to Low</span>
            </label>
          </div>

          <div>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                value="AmountLowToHigh"
                checked={selectedOption === "AmountLowToHigh"}
                onChange={handleOptionChange}
                className="form-radio text-white"
              />
              <span>Amount : Low to High</span>
            </label>
          </div>

          <div>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                value="AmountHighToLow"
                checked={selectedOption === "AmountHighToLow"}
                onChange={handleOptionChange}
                className="form-radio text-white"
              />
              <span>Amount : High to Low</span>
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SortAlertBox;
