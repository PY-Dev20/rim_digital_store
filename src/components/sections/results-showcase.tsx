import Image from "next/image";
import Link from "next/link";

const ResultsShowcase = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container">
        <div className="block lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
          {/* Left Column: Text Content */}
          <div className="flex flex-col items-start">
            <h2 className="font-display text-[32px] lg:text-[48px] font-light text-foreground !leading-tight mb-6">
              Impressive Results Delivered With High{" "}
              <span className="text-primary font-medium">Quality Solutions</span>
            </h2>
            <p className="text-[#444444] font-body text-base leading-relaxed mb-4">
              RIM Digital offers budget-friendly IT products without compromising
              on quality, ensuring our clients receive the best value. Our
              seasoned IT experts are dedicated to assisting with tailored
              support, making business operations smooth and efficient. We
              provide the latest products from the finest IT brands, utilizing
              trusted technology that saves time and avoids hassles.
            </p>
            <p className="text-[#444444] font-body text-base leading-relaxed mb-8">
              As a leading trader of innovative IT products, systems, and
              accessories, we help enterprises and individuals build affordable
              IT infrastructures. By partnering with reliable global brands, we
              deliver high-end products that incorporate modern technology to
              enhance your business success.
            </p>

            <h6 className="font-display text-primary font-semibold text-xl mb-6">
              The Result are very satisfying with high Quality Products
            </h6>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/products.php"
                className="bg-destructive text-destructive-foreground font-semibold py-[14px] px-7 rounded-full text-center hover:opacity-90 transition-opacity whitespace-nowrap"
              >
                View Products
              </Link>
              <Link
                href="/careers.php"
                className="bg-foreground text-background font-semibold py-[14px] px-7 rounded-full text-center hover:opacity-90 transition-opacity whitespace-nowrap"
              >
                Join Our Team
              </Link>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="mt-12 lg:mt-0">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/ac8a90f4-7aa0-4196-902e-e02017adac3a/generated_images/professional-office-team-working-environ-a669a254-20251020184345.jpg?"
              alt="Office team working on computers with RIM Digital branded overlay in corner"
              width={602}
              height={582}
              className="rounded-2xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsShowcase;