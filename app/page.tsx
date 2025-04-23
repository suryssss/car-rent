"use client";

import React, { useEffect, useState } from "react";
import Hero from "@/components/Home/Hero";
import SearchInput from "@/components/Home/SearchInput";
import CarsFilter from "@/components/Home/CarFilter";
import CarsList from "@/components/Home/CarList";
import { getCarsList, Car } from "../services";
import AboutPage from "@/components/Home/AboutPage";
import Footer from "@/components/Footer";
import InfoPage from "@/components/InfoPage";
import HowItWorks from "@/components/Home/HowItWorks";
import Testimonials from "@/components/Home/Testimonials";
import SpecialOffers from "@/components/Home/SpecialOffers";
import FAQ from "@/components/Home/FAQ";

export default function Home() {
  const [carList, setCarsList] = useState<Car[]>([]);
  const [carsOrgList, setCarsOrgList] = useState<Car[]>([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    brand: "",
    priceOrder: "",
  });

  useEffect(() => {
    getCarsList_();
  }, []);

  const getCarsList_ = async () => {
    try {
      setLoading(true);
      const result = await getCarsList();
      setCarsList(result?.carLists || []);
      setCarsOrgList(result?.carLists || []);
    } catch (error) {
      console.error("Failed to fetch car list:", error);
    } finally {
      setLoading(false);
    }
  };

  const applyFilters = () => {
    let filtered = [...carsOrgList];

    if (filters.brand) {
      filtered = filtered.filter((item) => item.carBrand === filters.brand);
    }

    if (filters.priceOrder === "Min to Max") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (filters.priceOrder === "Max to Min") {
      filtered.sort((a, b) => b.price - a.price);
    }

    setCarsList(filtered);
  };

  useEffect(() => {
    applyFilters();
  }, [filters]);

  return (
    <div>
      <div className="p-5 sm:px-10 md:px-20">
        <Hero />
        <SearchInput />
        <CarsFilter carsList={carsOrgList} setFilters={setFilters} />
        {loading ? (
          <div className="text-center py-10 text-xl font-semibold text-gray-600">Loading cars...</div>
        ) : (
          <CarsList carsList={carList} />
        )}
      </div>
      
      <HowItWorks />
      <SpecialOffers />
      <Testimonials />
      <InfoPage/>
      <AboutPage/>
      <FAQ />
      <Footer/>
    </div>
  );
}
