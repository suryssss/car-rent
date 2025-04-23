"use client";

import React, { useEffect, useState } from "react";

export default function CarsFilter({ carsList, setFilters }: any) {
  const [brandList, setBrandList] = useState<string[]>([]);
  const [selectedPrice, setSelectedPrice] = useState(""); // Control price selection
  const [selectedBrand, setSelectedBrand] = useState(""); // Control brand selection

  useEffect(() => {
    if (carsList && carsList.length > 0) {
      filterCarList();
    }
  }, [carsList]);

  const filterCarList = () => {
    const BrandSet = new Set<string>();
    carsList.forEach((element: any) => {
      BrandSet.add(element.carBrand);
    });
    setBrandList(Array.from(BrandSet));
  };

  return (
    <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-8 bg-gray-50 p-6 rounded-lg shadow-md">
      <div className="text-center md:text-left">
        <h2 className="text-[32px] font-extrabold text-gray-800">Cars Catalog</h2>
        <p className="text-gray-600 text-[18px] mt-2">
          Explore our wide range of cars you might like
        </p>
      </div>

      <div className="flex flex-wrap gap-4">
        {/* Price Filter */}
        <select
          value={selectedPrice}
          onChange={(e) => {
            const value = e.target.value;
            setSelectedPrice(value);
            if (value === "") {
              setFilters((prev: any) => ({ ...prev, priceOrder: "" }));
            } else {
              setFilters((prev: any) => ({ ...prev, priceOrder: value }));
            }
          }}
          className="w-full md:w-auto px-4 py-2 border border-gray-300 rounded-lg text-gray-700 bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
        >
          <option value="">Price</option>
          <option value="Min to Max">Min to Max</option>
          <option value="Max to Min">Max to Min</option>
        </select>

        {/* Manufacturer Filter */}
        <select
          value={selectedBrand}
          onChange={(e) => {
            const value = e.target.value;
            setSelectedBrand(value);
            if (value === "") {
              setFilters((prev: any) => ({ ...prev, brand: "" }));
            } else {
              setFilters((prev: any) => ({ ...prev, brand: value }));
            }
          }}
          className="w-full md:w-auto px-4 py-2 border border-gray-300 rounded-lg text-gray-700 bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
        >
          <option value="">Manufacturer</option>
          {brandList.map((brand: string, index: number) => (
            <option key={index} value={brand}>
              {brand}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
