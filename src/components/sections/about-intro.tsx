import React from 'react';
import Image from 'next/image';
import { Users } from 'lucide-react';

const Card = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div className={`bg-white rounded-[20px] shadow-[0_4px_20px_rgba(0,0,0,0.08)] ${className}`}>
    {children}
  </div>
);

const AboutIntro = () => {
  return (
    <section className="bg-[#f5f7fa] py-12 md:py-20">
      <div className="container mx-auto px-5 sm:px-10 lg:px-[60px]">
        {/* Top Row: Headline and Intro Text */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-10 lg:mb-16">
          <div className="lg:col-span-8">
            <h1 className="text-3xl md:text-[48px] font-bold leading-[1.1] text-zinc-900">
              Premium IT Products<br />From Renowned Brands
            </h1>
          </div>
          <div className="lg:col-span-4 flex flex-col items-start lg:justify-end">
            <p className="text-base text-gray-600 mb-8 leading-relaxed">
              RIM Digital assists organizations to assess their present IT infrastructure and provide appropriate assistance to upgrade to the top-notch level.
            </p>
            <a href="/about" className="bg-primary text-white px-8 py-3 rounded-lg text-sm font-semibold hover:bg-primary/90 transition-colors shadow-[0_4px_15px_rgba(0,102,204,0.3)]">
              Read More
            </a>
          </div>
        </div>

        {/* Bottom Row: Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 items-stretch">
          
          <div className="lg:col-span-3">
            <Card className="p-8 h-full flex flex-col justify-center">
              <p className="text-7xl font-bold text-zinc-900">
                14<span className="text-primary">+</span>
              </p>
              <h6 className="text-xl font-semibold text-zinc-900 mt-2">
                Years of Experience
              </h6>
              <p className="text-sm text-gray-500 mt-4 leading-relaxed">
                In designing and building a scalable, flexible, and reliable IT infrastructure.
              </p>
            </Card>
          </div>

          <div className="lg:col-span-4">
            <Card className="p-6 h-full flex flex-col">
              <div className="relative w-[150px] h-[56px] mb-4">
                 <div className="flex">
                    <div className="w-14 h-14 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center">
                      <Users size={24} className="text-gray-400" />
                    </div>
                    <div className="w-14 h-14 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center -ml-4">
                      <Users size={24} className="text-gray-400" />
                    </div>
                    <div className="w-14 h-14 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center -ml-4">
                      <Users size={24} className="text-gray-400" />
                    </div>
                 </div>
              </div>
              <div className="flex justify-between items-start gap-4">
                <h5 className="text-lg font-bold text-zinc-900">
                  Expert Team: Our Strength
                </h5>
                <a href="/about" className="flex-shrink-0 mt-[-5px]">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center hover:bg-primary/90 transition-colors">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </a>
              </div>
              <p className="text-sm text-gray-500 mt-2 flex-grow leading-relaxed">
                Talented staff with years of industry knowledge is the pillar of our grand success.
              </p>
            </Card>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-8">
            <Card className="p-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5Z" stroke="currentColor" strokeWidth="2" className="text-primary"/>
                  <path d="M12 8V12L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-primary"/>
                </svg>
              </div>
              <div>
                <h5 className="text-lg font-bold text-zinc-900 mb-1">Vision & Mission</h5>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Provide the finest products on the market, meet every client requirement most cost-effectively, and surpass competition.
                </p>
              </div>
            </Card>

            <Card className="p-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"/>
                </svg>
              </div>
               <div>
                <h5 className="text-lg font-bold text-zinc-900 mb-1">Quality we Offer</h5>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Our clients have access to the newest, highest-performing products and most dependable cutting-edge technologies.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;