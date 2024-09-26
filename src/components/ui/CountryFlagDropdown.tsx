import { useState } from "react";

const CountryFlagDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const handleClick = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div className="relative font-[sans-serif] w-max mx-auto">
        <button
          type="button"
          onClick={handleClick}
          className="px-2 py-2 rounded text-[#333] text-sm font-semibold outline-none hover:bg-blue-50"
        >
          
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-3 fill-[#333] inline ml-3"
            viewBox="0 0 24 24"
          >
            <path
              fillRule="evenodd"
              d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
              clipRule="evenodd"
              
            />
          </svg>
        </button>
  
        {isOpen && (
          <ul className="absolute block shadow-lg bg-white py-2 px-2 z-[1000] min-w-full w-max rounded max-h-96 overflow-auto">
            <li className="mb-2">
              <input
                placeholder="Search..."
                className="px-4 py-2.5 w-full rounded text-[#333] text-sm border-none outline-blue-600 bg-blue-50 focus:bg-transparent"
              />
            </li>
            <li className="py-2.5 px-4 hover:bg-blue-50 rounded text-black text-sm cursor-pointer">
              <div className="flex items-center">
                <img
                  src="https://readymadeui.com/usa_flag.webp"
                  className="w-6 mr-3"
                  alt="USA"
                />
                USA
              </div>
            </li>
            <li className="py-2.5 px-4 hover:bg-blue-50 rounded text-black text-sm cursor-pointer">
              <div className="flex items-center">
                <img
                  src="https://readymadeui.com/uk_flag.webp"
                  className="w-6 mr-3"
                  alt="England"
                />
                England
              </div>
            </li>
            <li className="py-2.5 px-4 hover:bg-blue-50 rounded text-black text-sm cursor-pointer">
              <div className="flex items-center">
                <img
                  src="https://readymadeui.com/india_flag.webp"
                  className="w-6 mr-3"
                  alt="India"
                />
                India
              </div>
            </li>
            <li className="py-2.5 px-4 hover:bg-blue-50 rounded text-black text-sm cursor-pointer">
              <div className="flex items-center">
                <img
                  src="https://readymadeui.com/singapore_flag.webp"
                  className="w-6 mr-3"
                  alt="Singapore"
                />
                Singapore
              </div>
            </li>
          </ul>
        )}
      </div>
    );
  };

  export default CountryFlagDropdown