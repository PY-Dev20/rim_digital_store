import React from 'react';
import { ArrowRight } from 'lucide-react';

type TimelineItemData = {
  number: string;
  title: string;
  description: string;
  align: 'left' | 'right';
};

const timelineItems: TimelineItemData[] = [
  {
    number: "01",
    title: "Nationwide<br />Coverage",
    description: "Ensuring that clients all over UAE receive timely and efficient service, our extensive reach guarantees high-quality technology solutions are accessible to businesses of all sizes, wherever they are located.",
    align: "left",
  },
  {
    number: "02",
    title: "Latest<br />Technology",
    description: "We pride ourselves on providing the latest cutting-edge technology from globally renowned brands, keeping your business at the forefront of innovation and by staying updated with the most recent advancements.",
    align: "left",
  },
  {
    number: "03",
    title: "Innovative<br />Products",
    description: "Delivers a wide range of innovative IT products designed to meet the evolving needs of modern businesses. Our offerings help companies stay competitive by integrating smart, forward-thinking solutions.",
    align: "right",
  },
  {
    number: "04",
    title: "Professional<br />Team",
    description: "Brings extensive knowledge and experience to ensure top-notch customer support and guidance. Tailored advice or timely troubleshooting, we are committed to delivering exceptional service and results.",
    align: "right",
  },
];

const TimelineCard = ({ number, title, description }: Omit<TimelineItemData, 'align'>) => (
  <div className="flex-shrink-0 w-80 bg-[#1f2937] p-8 rounded-2xl space-y-6">
    <div className="flex items-center gap-4">
      <h5 className="text-6xl font-bold text-white/10 leading-none">{number}</h5>
      <h4 className="text-xl font-bold text-white" dangerouslySetInnerHTML={{ __html: title }} />
    </div>
    <div className="flex items-start gap-4">
      <ArrowRight className="text-primary w-6 h-6 shrink-0 mt-1" />
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  </div>
);

const TimelineDesktopItem = ({ number, title, description, align }: TimelineItemData) => {
  const isLeft = align === 'left';

  const TitleBlock = () => (
    <div className={`flex items-center gap-x-4 ${isLeft ? 'justify-end' : 'justify-start'}`}>
      <h5 className="text-[140px] font-bold text-white/10 leading-none">{number}</h5>
      <h4 className="text-2xl text-white font-bold leading-tight" dangerouslySetInnerHTML={{ __html: title }} />
    </div>
  );

  return (
    <div className="relative">
      <div className="lg:grid lg:grid-cols-2 lg:items-center">
        {isLeft ? (
          <>
            <div className={`flex justify-end items-center pr-12`}>
              <TitleBlock />
            </div>
            <div className={`flex items-center gap-6 pl-12`}>
              <p className="text-gray-400">{description}</p>
            </div>
          </>
        ) : (
          <>
            <div className={`flex justify-end items-center pr-12`}>
              <p className="text-gray-400 text-right">{description}</p>
            </div>
            <div className={`flex items-center gap-6 pl-12`}>
              <TitleBlock />
            </div>
          </>
        )}
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full z-10" />
      <div className="absolute left-0 right-0 top-1/2 h-px bg-white/10" />
    </div>
  );
};

const FeaturesTimeline = () => {
  return (
    <section className="bg-[#1f2937] text-white overflow-hidden">
      <div className="container mx-auto px-4 py-24 sm:py-32">
        <h2 className="text-center font-light text-3xl md:text-5xl mb-16 md:mb-24 leading-tight">
          Infinite Possibilities<br />One Destination
        </h2>

        {/* Mobile View */}
        <div className="lg:hidden">
          <div className="flex overflow-x-auto space-x-6 pb-4 -mx-4 px-4 scrollbar-hide">
            {timelineItems.map((item, index) => (
              <TimelineCard key={index} {...item} />
            ))}
          </div>
        </div>

        {/* Desktop View */}
        <div className="hidden lg:block relative">
          <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-white/10" />
          <div className="relative">
            {timelineItems.map((item, index) => (
              <TimelineDesktopItem key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesTimeline;

// Utility for scrollbar hiding if not globally available
// You can add this to your globals.css
/*
@layer utilities {
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
}
*/