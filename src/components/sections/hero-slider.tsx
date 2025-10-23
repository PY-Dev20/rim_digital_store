"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const slides = [
  {
    tagline: 'Robust Digital Workplace',
    headline: ['High Speed', 'High ', 'Impact'],
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/ac8a90f4-7aa0-4196-902e-e02017adac3a/generated_images/modern-technology-office-environment-wit-4e8998e1-20251020184248.jpg?',
  },
  {
    tagline: 'Reliable, Scalable, Affordable',
    headline: ['Superior Care', 'Finest ', 'Products'],
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/ac8a90f4-7aa0-4196-902e-e02017adac3a/generated_images/futuristic-data-center-with-blue-led-lig-b1c426aa-20251020184257.jpg?',
  },
  {
    tagline: 'Managed IT Solutions',
    headline: ['The Engine For', 'Digital ', 'Success'],
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/ac8a90f4-7aa0-4196-902e-e02017adac3a/generated_images/professional-it-solutions-workspace%2c-m-5e32a560-20251020184307.jpg?',
  },
];

export default function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearInterval(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);

    return () => {
      resetTimeout();
    };
  }, [currentIndex]);

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <section className="relative w-full min-h-[500px] md:min-h-[600px] overflow-hidden font-body">
      <div className="relative w-full h-full min-h-[500px] md:min-h-[600px]">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
            aria-hidden={index !== currentIndex}
          >
            <div className="relative w-full h-full min-h-[500px] md:min-h-[600px]">
              <Image
                src={slide.image}
                alt={slide.tagline}
                fill
                className="object-cover"
                priority={index === 0}
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-black/40" />
                <div className="container relative z-20 flex items-center h-full min-h-[500px] md:min-h-[600px] text-white">
                    <div
                        className={`max-w-3xl text-left transition-all duration-1000 delay-300 ease-out ${
                            index === currentIndex ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                        }`}
                        >
                        <h6 className="mb-4 text-base md:text-lg font-semibold uppercase tracking-[0.2em]">
                            {slide.tagline}
                        </h6>
                        <h1 className="font-display font-bold text-4xl md:text-[60px] leading-tight md:leading-[1.1]">
                            {slide.headline[0]}
                            <br />
                            {slide.headline[1]}<span className="text-primary">{slide.headline[2]}</span>
                        </h1>
                    </div>
                </div>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-white scale-125'
                : 'bg-transparent border-2 border-white'
            }`}
             aria-label={`Go to slide ${index + 1}`}
             aria-current={index === currentIndex}
          />
        ))}
      </div>
    </section>
  );
}