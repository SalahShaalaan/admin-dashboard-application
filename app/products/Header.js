"use client";
import { useState } from "react";

export default function Header() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [fadeEffect, setFadeEffect] = useState(false);

  const slides = [
    {
      date: "September 12-22",
      title: "Enjoy free home delivery in this summer",
      description: "Designer Dresses - Pick from trendy Designer Dress.",
    },
    {
      date: "September 12-22",
      title: "Get the latest fashion trends",
      description: "Shop the hottest styles for this summer collection.",
    },
    {
      date: "September 12-22",
      title: "Big discounts on accessories",
      description: "Find exclusive deals on premium accessories.",
    },
  ];

  const changeSlide = (direction) => {
    setFadeEffect(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + direction + slides.length) % slides.length);
      setFadeEffect(false);
    }, 200);
  };

  return (
    <div className="relative">
      <h1 className="font-bold text-3xl leading-wider">Products</h1>
      <div className="p-20  flex flex-col bg-blue w-full rounded-xl relative overflow-hidden mt-6">
        <div
          className={`flex flex-col space-y-4 mx-6 p-4 transition-opacity duration-300 ${fadeEffect ? "opacity-0" : "opacity-100"}`}
        >
          <span className="text-sm text-white opacity-75">{slides[currentSlide].date}</span>
          <h3 className="text-white font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight">
            {slides[currentSlide].title}
          </h3>
          <p className="text-white opacity-75 text-sm sm:text-base">
            {slides[currentSlide].description}
          </p>
          <button disabled className="mt-8 self-start bg-[#FF8743] px-6 py-2 rounded-xl text-white text-sm sm:text-base hover:bg-[#ff7a2a] transition-colors duration-300">
            Get Started
          </button>
        </div>
      </div>
      <button
        onClick={() => changeSlide(-1)}
        className="absolute left-0 top-1/2 -translate-y-1/2 cursor-pointer bg-[#c5d5f7] p-2 rounded-full text-[#363636] hover:bg-[#a7bfef] transition-colors duration-300"

      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 h-4 sm:w-5 sm:h-5"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
        </svg>
      </button>
      <button
        onClick={() => changeSlide(1)}
        className="absolute right-0 top-1/2 -translate-y-1/2 cursor-pointer bg-[#c5d5f7] p-2 rounded-full text-[#363636] hover:bg-[#a7bfef] transition-colors duration-300"      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 h-4 sm:w-5 sm:h-5"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
      </button>
    </div>
  );
}