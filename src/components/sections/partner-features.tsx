import Image from 'next/image';

const partnerData = [
  {
    title: "Robust Client Relationships",
    description: "Fosters long-term partnerships by delivering exceptional service and trust.",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/ac8a90f4-7aa0-4196-902e-e02017adac3a/generated_images/professional-business-handshake-digital--e63ca0f5-20251020184315.jpg?",
    titleJsx: <>Robust Client Relationships</>
  },
  {
    title: "Latest Innovative Technology",
    description: "RIM Digital ensures forward-thinking solutions for modern business challenges.",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/ac8a90f4-7aa0-4196-902e-e02017adac3a/generated_images/futuristic-smart-city-with-innovative-te-fafce88b-20251020184327.jpg?",
    titleJsx: <>Latest Innovative Technology</>
  },
  {
    title: "Adept, Creative Team",
    description: "Skilled team drives innovative strategies to meet and exceed expectations.",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/ac8a90f4-7aa0-4196-902e-e02017adac3a/generated_images/creative-professional-team-collaboration-d58279b8-20251020184337.jpg?",
    titleJsx: <>Adept, Creative<br /> Team</>
  },
];

const PartnerCard = ({ title, description, titleJsx, imageUrl }: (typeof partnerData)[0]) => (
  <div
    className="group overflow-hidden rounded-[20px] bg-card p-10 shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)]"
  >
    <h5 className="mb-2.5 font-display text-[20px] font-semibold leading-[25px] text-text-dark lg:h-[50px]">
      {titleJsx}
    </h5>
    <p className="mb-8 h-[52px] text-base leading-[26px] text-muted-foreground">
      {description}
    </p>
    <div className="relative h-[220px] w-full">
      <Image
        src={imageUrl}
        alt={title}
        layout="fill"
        objectFit="cover"
        className="rounded-2xl"
      />
    </div>
  </div>
);


const PartnerFeatures = () => {
  return (
    <section className="bg-white py-20 font-body">
      <div className="container">
        <div className="mb-16 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div className="w-full lg:w-7/12">
            <h1 className="font-display text-[40px] font-normal leading-[50px] text-text-dark">
              Perfect Partner In
              <br />
              Advanced Technology
            </h1>
          </div>
          <div className="w-full lg:w-5/12">
            <p className="text-base leading-[26px] text-muted-foreground">
              RIM Digital possesses the expertise and experience necessary to provide complete IT solutions from world class brands suited to your unique requirements.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {partnerData.map((partner, index) => (
            <PartnerCard key={index} {...partner} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerFeatures;