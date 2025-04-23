import React from "react";

function SearchInput() {
  return (
    <div className="mt-10">
      {/* Heading */}
      <h2 className="text-center text-[24px] font-semibold text-gray-700 mb-6">
        Let's Find Your Perfect Ride
      </h2>

      {/* Search Input Container */}
      <div className="flex justify-center">
        <div className="flex bg-white shadow-lg p-2 px-6 gap-4 rounded-full divide-x divide-gray-200">
          {/* Location Input */}
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 text-blue-500"
            >
              <path
                fillRule="evenodd"
                d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                clipRule="evenodd"
              />
            </svg>
            <input
              type="text"
              placeholder="Enter Location"
              className="p-2 outline-none bg-transparent text-gray-700 placeholder-gray-400"
            />
          </div>

          {/* Date Input */}
          <div className="flex items-center pl-4">
            <input
              type="date"
              className="p-2 outline-none bg-transparent text-gray-700 placeholder-gray-400"
            />
          </div>

          {/* Search Button */}
          <div className="flex items-center pl-4">
            <button className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-all duration-300">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchInput;