import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Data for the CTA cards, derived from content and design instructions
const cardData = [
  {
    bgImage: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/ac8a90f4-7aa0-4196-902e-e02017adac3a/generated_images/modern-rim-digital-retail-store-exterior-7e96f337-20251020184353.jpg?",
    title: "Transcending Expectations, Delivering Excellence",
    description: "We are committed to providing top-tier IT products and solutions, and our dedication to quality and performance ensures that every client receives the very best, tailored to their specific needs.",
    link: "/contact",
  },
  {
    bgImage: "https://v3b.fal.media/files/b/elephant/9dVxPeq05ixfzd3z-yx33_output.png",
    title: "Strengthening Innovation Unlimited Success",
    description: "We make great things possible by delivering cutting-edge technology that drives innovation and business growth. With our expertise and a carefully curated selection of products, we help you achieve goals",
    link: "/careers",
  }
];

const arrowIconUrl = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ac8a90f4-7aa0-4196-902e-e02017adac3a-grandpcd-com/assets/icons/arrow-right-5.png?";

const CtaCards = () => {
  return (
    <section className="bg-muted py-20 md:py-24">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cardData.map((card, index) => (
            <div key={index} className="group relative rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-transform duration-300 ease-in-out hover:scale-[1.02] h-[400px]">
              {/* Background Image and Overlay */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-in-out group-hover:scale-110" 
                style={{ backgroundImage: `url(${card.bgImage})` }}
                aria-hidden="true"
              />
              <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
              
              {/* Content */}
              <div className="relative z-10 p-8 md:p-10 flex flex-col h-full text-white">
                <h3 className="font-medium text-[32px] leading-snug mb-4">
                  {card.title.replace('  ', ' ')}
                </h3>
                <p className="font-light text-base text-gray-200">
                  {card.description}
                </p>
                <div className="mt-auto self-end">
                  <Link 
                    href={card.link} 
                    className="bg-primary rounded-full w-[58px] h-[58px] flex items-center justify-center transition-all duration-300 hover:bg-black hover:scale-110"
                  >
                    <Image 
                      src={arrowIconUrl}
                      alt="Arrow link" 
                      width={32}
                      height={32}
                      className="w-8 h-8"
                    />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CtaCards;