"use client";

import * as React from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

interface Testimonial {
  title: string;
  text: string;
  author: string;
}

const testimonials: Testimonial[] = [
  {
    title: "Best for Dell and HP laptops.",
    text: "I was impressed with the variety of Dell laptops available at RIM Digital. They had all the models I needed for my business. The service was professional and the team was very knowledgeable.",
    author: "Ramesh P.",
  },
  {
    title: "Great service for retailers.",
    text: "As a retailer, I've had a great experience working with RIM Digital. They offer competitive prices and ensure timely deliveries. Perfect for expanding my business!",
    author: "Eldar G.",
  },
  {
    title: "Efficient service for international businesses.",
    text: "RIM Digital has been a fantastic supplier for my IT store. Their team is responsive and always ensures that shipments are on time. The quality of products is excellent.",
    author: "William",
  },
  {
    title: "Trusted supplier.",
    text: "RIM Digital has been a reliable source for IT products for my business. Their team ensures smooth shipping, and the products always arrive in excellent condition. Highly recommended!",
    author: "Tinashe M.",
  },
  {
    title: "Great service for bulk orders.",
    text: "I ordered laptops in bulk for my retail shop, and the experience was smooth. The team guided me through the process and ensured timely delivery. I'll definitely continue working with them.",
    author: "Sophia M.",
  },
];

const TestimonialCard = ({ title, text, author }: Testimonial) => (
  <div className="bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] p-10 text-center h-full flex flex-col items-center">
    <div className="flex justify-center mb-4">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="h-5 w-5 text-primary fill-primary" />
      ))}
    </div>
    <h3 className="font-bold text-lg text-text-dark mb-4">{title}</h3>
    <p className="text-base text-[#555] leading-relaxed mb-6 flex-grow">{text}</p>
    <div className="w-[60px] h-[60px] bg-gray-200 rounded-full mx-auto mb-5"></div>
    <h4 className="font-bold text-base text-text-dark">{author}</h4>
  </div>
);

export default function TestimonialsCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 6000, stopOnInteraction: true })
  );

  return (
    <section className="bg-[#f9fafb] py-24">
      <div className="container">
        <h2 className="font-display text-[40px] font-normal text-text-dark text-center mb-16 leading-tight">
          Testaments of Our Professionalism
        </h2>
        
        <Carousel
          plugins={[plugin.current]}
          opts={{
            align: "start",
            loop: true,
          }}
          className="relative px-12"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent className="-ml-8">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-8 basis-full md:basis-1/2 lg:basis-1/3">
                <div className="p-1 h-full"> 
                  <TestimonialCard {...testimonial} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-primary border-none text-white rounded-full hover:bg-primary/90 hover:scale-110 transition-all" />
          <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-primary border-none text-white rounded-full hover:bg-primary/90 hover:scale-110 transition-all" />
        </Carousel>
      </div>
    </section>
  );
}