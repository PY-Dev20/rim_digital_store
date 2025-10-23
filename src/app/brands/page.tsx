import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import Image from "next/image";

export default function BrandsPage() {
  const brands = [
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ac8a90f4-7aa0-4196-902e-e02017adac3a-grandpcd-com/assets/images/20-16.webp",
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ac8a90f4-7aa0-4196-902e-e02017adac3a-grandpcd-com/assets/images/21-17.webp",
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ac8a90f4-7aa0-4196-902e-e02017adac3a-grandpcd-com/assets/images/22-18.webp",
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ac8a90f4-7aa0-4196-902e-e02017adac3a-grandpcd-com/assets/images/23-19.webp",
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ac8a90f4-7aa0-4196-902e-e02017adac3a-grandpcd-com/assets/images/24-20.webp",
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ac8a90f4-7aa0-4196-902e-e02017adac3a-grandpcd-com/assets/images/25-21.webp",
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ac8a90f4-7aa0-4196-902e-e02017adac3a-grandpcd-com/assets/images/26-22.webp",
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ac8a90f4-7aa0-4196-902e-e02017adac3a-grandpcd-com/assets/images/27-23.webp",
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ac8a90f4-7aa0-4196-902e-e02017adac3a-grandpcd-com/assets/images/28-24.webp",
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ac8a90f4-7aa0-4196-902e-e02017adac3a-grandpcd-com/assets/images/29-25.webp",
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ac8a90f4-7aa0-4196-902e-e02017adac3a-grandpcd-com/assets/images/30-26.webp",
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ac8a90f4-7aa0-4196-902e-e02017adac3a-grandpcd-com/assets/images/31-27.webp",
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ac8a90f4-7aa0-4196-902e-e02017adac3a-grandpcd-com/assets/images/32-28.webp",
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ac8a90f4-7aa0-4196-902e-e02017adac3a-grandpcd-com/assets/images/33-29.webp",
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ac8a90f4-7aa0-4196-902e-e02017adac3a-grandpcd-com/assets/images/34-30.webp"
  ];

  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-[90px]">
        {/* Hero Section */}
        <section className="relative h-[400px] bg-gradient-to-r from-[#0066CC] to-[#0052a3] flex items-center justify-center">
          <div className="container text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Our Brands</h1>
            <p className="text-xl md:text-2xl font-light">Partnering with Industry Leaders</p>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-20 bg-white">
          <div className="container text-center max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Serving Esteemed Industry Giants</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              At RIM Digital, we are proud to partner with the world's most respected technology brands. Our strategic partnerships enable us to provide our customers with access to the latest innovations, cutting-edge products, and reliable solutions.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              These partnerships reflect our commitment to quality, authenticity, and customer satisfaction. Every product we offer comes with full manufacturer support and genuine warranties.
            </p>
          </div>
        </section>

        {/* Brand Grid */}
        <section className="py-20 bg-gray-50">
          <div className="container">
            <h2 className="text-4xl font-bold text-center mb-12">Our Trusted Partners</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {brands.map((brand, index) => (
                <div 
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 flex items-center justify-center grayscale hover:grayscale-0"
                >
                  <Image 
                    src={brand} 
                    alt={`Brand ${index + 1}`} 
                    width={150} 
                    height={80} 
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Our Brands */}
        <section className="py-20 bg-white">
          <div className="container">
            <h2 className="text-4xl font-bold text-center mb-12">Why We Partner with These Brands</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: "🏆",
                  title: "Market Leaders",
                  description: "We partner with brands that are recognized globally for their innovation and quality."
                },
                {
                  icon: "✓",
                  title: "Proven Reliability",
                  description: "Every brand we work with has a track record of delivering dependable, high-performance products."
                },
                {
                  icon: "🔧",
                  title: "Full Support",
                  description: "Our partnerships ensure comprehensive technical support and warranty coverage for all products."
                },
                {
                  icon: "🚀",
                  title: "Latest Technology",
                  description: "Access to the newest innovations and product launches as soon as they're available."
                },
                {
                  icon: "💎",
                  title: "Authentic Products",
                  description: "100% genuine products sourced directly from authorized distributors and manufacturers."
                },
                {
                  icon: "🤝",
                  title: "Strategic Relationships",
                  description: "Long-standing partnerships that enable competitive pricing and priority service."
                }
              ].map((item, index) => (
                <div key={index} className="text-center p-8 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Brand Categories */}
        <section className="py-20 bg-[#0066CC] text-white">
          <div className="container">
            <h2 className="text-4xl font-bold text-center mb-12">Brand Categories</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  category: "Computing",
                  brands: "HP, Dell, Lenovo, ASUS, Acer"
                },
                {
                  category: "Networking",
                  brands: "Cisco, D-Link, TP-Link, Ubiquiti"
                },
                {
                  category: "Storage",
                  brands: "Seagate, Western Digital, Kingston"
                },
                {
                  category: "Peripherals",
                  brands: "Logitech, Targus, BenQ"
                },
                {
                  category: "Security",
                  brands: "Kaspersky, Norton, McAfee"
                },
                {
                  category: "Components",
                  brands: "ASRock, Corsair, NVIDIA"
                },
                {
                  category: "Printers",
                  brands: "Canon, Epson, Brother"
                },
                {
                  category: "Audio Visual",
                  brands: "Sony, Panasonic, Samsung"
                }
              ].map((item, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                  <h4 className="text-xl font-bold mb-2">{item.category}</h4>
                  <p className="text-white/80 text-sm">{item.brands}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-900 text-white text-center">
          <div className="container max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Looking for a Specific Brand?</h2>
            <p className="text-xl mb-8">Contact us to inquire about product availability and pricing from your preferred brands.</p>
            <a 
              href="/contact" 
              className="inline-block bg-[#0066CC] text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-[#0052a3] transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
