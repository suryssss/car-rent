import React from "react";

const InfoPage = () => {
  return (
    <section className="overflow-hidden bg-gradient-to-r from-blue-50 to-purple-50 pb-16 pt-5">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center md:gap-12">
          <div className="max-w-lg md:max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
            "Unlock the Future of Car Rentals"
            </h2>
            <p className="mt-6 text-lg text-gray-600">
            "Discover the ultimate car rental experience with our wide range of vehicles, offering top-notch performance, modern features, and unmatched comfort. Whether you need a stylish ride for a weekend getaway, a spacious SUV for a family trip, or a sleek sedan for a business venture, we have the perfect car to suit your needs."
            </p>
            <div className="mt-8 flex gap-4">
              <button className="rounded-lg bg-blue-600 px-6 py-3 text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                Explore Models
              </button>
              <button className="rounded-lg border-2 border-blue-600 px-6 py-3 text-blue-600 transition-colors hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                Learn More
              </button>
            </div>
          </div>
          <div>
            <img
              src="https://hips.hearstapps.com/hmg-prod/images/rt-mercedes-benz-cpo-1-1531414981.jpg?crop=1xw:0.8465011286681715xh;center,top&resize=1200:*"
              className="rounded-xl shadow-2xl"
              alt="Mercedes Benz"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoPage;
