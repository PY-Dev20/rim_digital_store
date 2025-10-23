import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import Image from "next/image";

export default function ProductsPage() {
  const productCategories = [
    {
      title: "Laptops & Desktops",
      description: "High-performance computing solutions for business and personal use",
      icon: "💻"
    },
    {
      title: "Servers & Storage",
      description: "Enterprise-grade servers and storage solutions for your data needs",
      icon: "🖥️"
    },
    {
      title: "Networking Equipment",
      description: "Advanced networking solutions for seamless connectivity",
      icon: "🌐"
    },
    {
      title: "Printers & Scanners",
      description: "Professional printing and scanning solutions",
      icon: "🖨️"
    },
    {
      title: "Security Solutions",
      description: "Comprehensive cybersecurity products and services",
      icon: "🔒"
    },
    {
      title: "Accessories",
      description: "Quality accessories to enhance your IT infrastructure",
      icon: "⚡"
    },
    {
      title: "Software Solutions",
      description: "Licensed software for business productivity and security",
      icon: "📦"
    },
    {
      title: "Audio Visual",
      description: "Professional AV equipment for modern workspaces",
      icon: "📹"
    }
  ];

  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-[90px]">
        {/* Hero Section */}
        <section className="relative h-[400px] bg-gradient-to-r from-[#0066CC] to-[#0052a3] flex items-center justify-center">
          <div className="container text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Our Products</h1>
            <p className="text-xl md:text-2xl font-light">Premium IT Solutions from Leading Brands</p>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-20 bg-white">
          <div className="container text-center max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Complete IT Product Portfolio</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              At RIM Digital, we offer a comprehensive range of premium IT products from world-renowned brands. Our extensive portfolio covers everything from laptops and desktops to enterprise servers, networking equipment, and security solutions.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Every product in our catalog is carefully selected to ensure the highest standards of quality, performance, and reliability.
            </p>
          </div>
        </section>

        {/* Product Categories */}
        <section className="py-20 bg-gray-50">
          <div className="container">
            <h2 className="text-4xl font-bold text-center mb-12">Product Categories</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {productCategories.map((category, index) => (
                <div 
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer"
                >
                  <div className="text-5xl mb-4">{category.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{category.title}</h3>
                  <p className="text-gray-700">{category.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Brands */}
        <section className="py-20 bg-white">
          <div className="container">
            <h2 className="text-4xl font-bold text-center mb-6">Our Brand Partners</h2>
            <p className="text-center text-lg text-gray-700 mb-12 max-w-3xl mx-auto">
              We partner with industry-leading brands to bring you the best technology solutions available in the market.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
              {[
                "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ac8a90f4-7aa0-4196-902e-e02017adac3a-grandpcd-com/assets/images/20-16.webp",
                "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ac8a90f4-7aa0-4196-902e-e02017adac3a-grandpcd-com/assets/images/21-17.webp",
                "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ac8a90f4-7aa0-4196-902e-e02017adac3a-grandpcd-com/assets/images/22-18.webp",
                "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ac8a90f4-7aa0-4196-902e-e02017adac3a-grandpcd-com/assets/images/23-19.webp",
                "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ac8a90f4-7aa0-4196-902e-e02017adac3a-grandpcd-com/assets/images/24-20.webp",
                "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ac8a90f4-7aa0-4196-902e-e02017adac3a-grandpcd-com/assets/images/25-21.webp"
              ].map((logo, index) => (
                <div key={index} className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all">
                  <Image src={logo} alt={`Brand ${index + 1}`} width={120} height={60} className="object-contain" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Our Products */}
        <section className="py-20 bg-[#0066CC] text-white">
          <div className="container">
            <h2 className="text-4xl font-bold text-center mb-12">Why Choose Our Products</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Genuine Products",
                  description: "100% authentic products with manufacturer warranties"
                },
                {
                  title: "Competitive Pricing",
                  description: "Best prices in the market without compromising quality"
                },
                {
                  title: "Expert Support",
                  description: "Technical support and after-sales service"
                },
                {
                  title: "Latest Technology",
                  description: "Access to the newest products and innovations"
                },
                {
                  title: "Bulk Orders",
                  description: "Special pricing for enterprise and bulk purchases"
                },
                {
                  title: "Fast Delivery",
                  description: "Quick delivery across the UAE and region"
                }
              ].map((item, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm p-8 rounded-xl text-center">
                  <h4 className="text-2xl font-bold mb-3">{item.title}</h4>
                  <p className="text-white/90">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-900 text-white text-center">
          <div className="container max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Looking for Specific Products?</h2>
            <p className="text-xl mb-8">Contact our sales team for product inquiries, quotes, and custom solutions.</p>
            <a 
              href="/contact" 
              className="inline-block bg-[#0066CC] text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-[#0052a3] transition-colors"
            >
              Contact Sales Team
            </a>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
