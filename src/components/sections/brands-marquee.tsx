import React from 'react';
import Image from 'next/image';

const brandLogos = [
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ac8a90f4-7aa0-4196-902e-e02017adac3a-grandpcd-com/assets/images/20-16.webp?",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ac8a90f4-7aa0-4196-902e-e02017adac3a-grandpcd-com/assets/images/21-17.webp?",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ac8a90f4-7aa0-4196-902e-e02017adac3a-grandpcd-com/assets/images/22-18.webp?",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ac8a90f4-7aa0-4196-902e-e02017adac3a-grandpcd-com/assets/images/23-19.webp?",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ac8a90f4-7aa0-4196-902e-e02017adac3a-grandpcd-com/assets/images/24-20.webp?",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ac8a90f4-7aa0-4196-902e-e02017adac3a-grandpcd-com/assets/images/25-21.webp?",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ac8a90f4-7aa0-4196-902e-e02017adac3a-grandpcd-com/assets/images/26-22.webp?",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ac8a90f4-7aa0-4196-902e-e02017adac3a-grandpcd-com/assets/images/27-23.webp?",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ac8a90f4-7aa0-4196-902e-e02017adac3a-grandpcd-com/assets/images/28-24.webp?",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ac8a90f4-7aa0-4196-902e-e02017adac3a-grandpcd-com/assets/images/29-25.webp?",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ac8a90f4-7aa0-4196-902e-e02017adac3a-grandpcd-com/assets/images/30-26.webp?",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ac8a90f4-7aa0-4196-902e-e02017adac3a-grandpcd-com/assets/images/31-27.webp?",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ac8a90f4-7aa0-4196-902e-e02017adac3a-grandpcd-com/assets/images/32-28.webp?",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ac8a90f4-7aa0-4196-902e-e02017adac3a-grandpcd-com/assets/images/33-29.webp?",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ac8a90f4-7aa0-4196-902e-e02017adac3a-grandpcd-com/assets/images/34-30.webp?"
];

const row1Logos = brandLogos.slice(0, 8);
const row2Logos = brandLogos.slice(8);

const LogoSet = ({ logos }: { logos: string[] }) => (
  <div className="flex flex-shrink-0 items-center">
    {logos.map((logo, index) => (
      <div key={index} className="mx-[20px] flex-shrink-0">
        <Image
          src={logo}
          alt={`Brand logo ${index + 1}`}
          width={120}
          height={60}
          className="w-[80px] h-auto object-contain filter grayscale hover:filter-none transition-all duration-300 ease-in-out md:w-[120px]"
        />
      </div>
    ))}
  </div>
);

const BrandsMarquee = () => {
  return (
    <>
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee-slow {
            animation: marquee 80s linear infinite;
          }
          .animate-marquee-fast {
            animation: marquee 60s linear infinite;
          }
        `}
      </style>
      <section className="bg-white py-16 md:py-24 overflow-x-hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-[40px] font-light leading-tight text-text-dark font-display">
            Serving Esteemed Industry Giants
          </h2>
        </div>
        
        <div className="mt-12 md:mt-16 flex flex-col gap-8 md:gap-10">
          <div className="flex animate-marquee-slow">
            <LogoSet logos={row1Logos} />
            <LogoSet logos={row1Logos} />
          </div>
          <div className="hidden md:flex animate-marquee-fast">
            <LogoSet logos={row2Logos} />
            <LogoSet logos={row2Logos} />
          </div>
        </div>
      </section>
    </>
  );
};

export default BrandsMarquee;