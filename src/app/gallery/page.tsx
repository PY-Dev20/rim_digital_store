import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import Image from "next/image";

export default function GalleryPage() {
  const galleryImages = [
    {
      src: "https://thearchitectsdiary.com/wp-content/uploads/2022/02/OFFICE-INTERIOR-DESIGN-TAD-9.png",
      title: "Modern Office Space",
      category: "Office"
    },
    {
      src: "https://t3.ftcdn.net/jpg/14/87/63/04/360_F_1487630450_m05bXKLfsr1e738JMJ8oh2di6c1mOfWj.jpg",
      title: "Professional Team Meeting",
      category: "Team"
    },
    {
      src: "https://images.stockcake.com/public/0/3/c/03cd8901-a78f-4d02-817f-3892f2d96188_large/bustling-tech-office-stockcake.jpg",
      title: "Technology Workspace",
      category: "Workspace"
    },
    {
      src: "https://www.tagnational.com/images-content/blog/long-term-relations.jpg",
      title: "Client Relationships",
      category: "Business"
    },
    {
      src: "https://ulysseus.eu/wp-content/uploads/2023/08/Students-meeting-in-entrecamp-jpg.webp",
      title: "Innovation Hub",
      category: "Technology"
    },
    {
      src: "https://img-cdn.inc.com/image/upload/f_webp,c_fit,w_1920,q_auto/images/panoramic/getty_461149083_89867.jpg",
      title: "Creative Team",
      category: "Team"
    },
    {
      src: "https://humanyze.com/wp-content/uploads/2021/06/cross-team-collaboration-min.jpg",
      title: "Team Collaboration",
      category: "Workspace"
    },
    {
      src: "https://cdn.pixabay.com/photo/2022/09/16/15/53/city-7458934_640.jpg",
      title: "RIM Digital Storefront",
      category: "Office"
    },
    {
      src: "https://www.shive-hattery.com/wp-content/uploads/2023/05/1623356337837.jpg",
      title: "Innovation Center",
      category: "Technology"
    }
  ];

  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-[90px]">
        {/* Hero Section */}
        <section className="relative h-[400px] bg-gradient-to-r from-[#0066CC] to-[#0052a3] flex items-center justify-center">
          <div className="container text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Gallery</h1>
            <p className="text-xl md:text-2xl font-light">A Glimpse Into Our World</p>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-20 bg-white">
          <div className="container text-center max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Our Journey in Pictures</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Explore our state-of-the-art facilities, dedicated team, and the innovative solutions we deliver to our clients. These images showcase our commitment to excellence and our passion for technology.
            </p>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-20 bg-gray-50">
          <div className="container">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {galleryImages.map((image, index) => (
                <div 
                  key={index}
                  className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all cursor-pointer"
                >
                  <div className="relative h-[350px]">
                    <Image
                      src={image.src}
                      alt={image.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <span className="inline-block bg-[#0066CC] text-white text-xs font-semibold px-3 py-1 rounded-full mb-2">
                          {image.category}
                        </span>
                        <h3 className="text-white text-xl font-bold">{image.title}</h3>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              {[
                { number: "12+", label: "Years of Excellence" },
                { number: "300+", label: "Happy Clients" },
                { number: "20+", label: "Brand Partners" },
                { number: "10000+", label: "Products Delivered" }
              ].map((stat, index) => (
                <div key={index} className="p-6">
                  <div className="text-5xl font-bold text-[#0066CC] mb-2">{stat.number}</div>
                  <div className="text-lg text-gray-700">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-[#0066CC] text-white text-center">
          <div className="container max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Want to Be Part of Our Story?</h2>
            <p className="text-xl mb-8">Join our team or become a valued client and contribute to our continued success.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/careers" 
                className="inline-block bg-white text-[#0066CC] px-10 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Join Our Team
              </a>
              <a 
                href="/contact" 
                className="inline-block bg-transparent border-2 border-white text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-[#0066CC] transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
