"use client";

import * as React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { ArrowLeft, ArrowRight } from "lucide-react";

const leadershipData = [
  {
    name: "Muhammed Sajid",
    title: "Chief Executive Officer",
    headline: (
      <>
        We Are Dedicated
        <br />
        To Your Success
        <br />
        Through Innovation
      </>
    ),
    text: "At RIM Digital, we strive to be at the forefront of technological innovation. As CEO, I am dedicated to ensuring our products and services exceed your expectations. Our team is passionate about delivering reliable and advanced IT solutions that empower your business. We focus on thriving markets, providing tailored solutions to meet local demands. We value your trust and are committed to building strong, lasting relationships with our clients and partners.",
    image:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/ac8a90f4-7aa0-4196-902e-e02017adac3a/generated_images/professional-corporate-executive-portrai-ddbbbc5d-20251020184418.jpg?",
    link: "about.php",
  },
  {
    name: "Abdul Samad",
    title: "Chairman",
    headline: (
      <>
        Together, we will
        <br />
        continue to achieve
        <br />
        new heights
      </>
    ),
    text: "As Chairman, I am proud to lead an organization committed to delivering exceptional IT products and services. Our journey is built on innovation, quality, and customer satisfaction. We focus on dynamic markets, ensuring our offerings meet the diverse needs of this vibrant region. Your trust and support drive our success, and we are grateful for your partnership.",
    image:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/ac8a90f4-7aa0-4196-902e-e02017adac3a/generated_images/distinguished-business-chairman-portrait-1ff45e91-20251020184427.jpg?",
    link: "about.php",
  },
];

export default function LeadershipCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 8000, stopOnInteraction: true })
  );

  return (
    <section className="bg-[#1a1a1a] py-20 lg:py-28 font-body">
      <div className="container">
        <Carousel
          plugins={[plugin.current]}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
          opts={{
            loop: true,
          }}
          className="w-full relative"
        >
          <CarouselContent>
            {leadershipData.map((leader, index) => (
              <CarouselItem key={index}>
                <div className="flex flex-col lg:flex-row items-center justify-center gap-12 xl:gap-24">
                  <div className="lg:w-2/5 text-center lg:text-left order-2 lg:order-1 w-full">
                    <h3 className="font-display text-[36px] font-light text-white leading-tight mb-8">
                      {leader.headline}
                    </h3>
                    <p className="text-white/80 text-base font-light leading-relaxed mb-8">
                      {leader.text}
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-between gap-6 lg:mt-12">
                      <a
                        href={leader.link}
                        className="bg-black text-white rounded-full px-8 py-4 hover:bg-gray-800 transition-colors duration-300 text-sm tracking-widest font-medium whitespace-nowrap"
                      >
                        View Management Message
                      </a>
                      <div className="text-center sm:text-right">
                        <h5 className="text-white font-semibold text-lg uppercase tracking-wider">
                          {leader.name}
                        </h5>
                        <h6 className="text-gray-400 text-base font-normal">
                          {leader.title}
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="lg:w-3/5 order-1 lg:order-2 w-full flex justify-center lg:justify-end">
                    <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg aspect-[1/1]">
                      <Image
                        src={leader.image}
                        alt={`Photo of ${leader.name}`}
                        fill
                        className="object-cover rounded-[20px]"
                        sizes="(max-width: 640px) 90vw, (max-width: 1023px) 60vw, 40vw"
                      />
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="lg:hidden flex items-center justify-center gap-4 mt-8">
            <CarouselPrevious className="static translate-y-0 w-12 h-12 rounded-full border border-gray-600 bg-transparent text-gray-400">
              <ArrowLeft className="w-5 h-5" />
            </CarouselPrevious>
            <CarouselNext className="static translate-y-0 w-12 h-12 rounded-full border border-gray-600 bg-transparent text-gray-400">
              <ArrowRight className="w-5 h-5" />
            </CarouselNext>
          </div>

          <div className="hidden lg:block">
            <CarouselPrevious className="absolute top-[35px] right-[5rem] -translate-y-1/2 w-auto h-auto bg-transparent border-none text-gray-500 hover:text-white p-2 transition-colors">
              <ArrowLeft size={32} />
            </CarouselPrevious>
            <CarouselNext className="absolute top-[35px] right-[1rem] -translate-y-1/2 w-auto h-auto bg-transparent border-none text-gray-500 hover:text-white p-2 transition-colors">
              <ArrowRight size={32} />
            </CarouselNext>
          </div>
        </Carousel>
      </div>
    </section>
  );
}