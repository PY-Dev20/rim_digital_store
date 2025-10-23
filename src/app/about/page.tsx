import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-[90px]">
        {/* Hero Section */}
        <section className="relative h-[400px] bg-gradient-to-r from-[#0066CC] to-[#0052a3] flex items-center justify-center">
          <div className="container text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">About RIM Digital</h1>
            <p className="text-xl md:text-2xl font-light">Your Trusted Partner in IT Solutions</p>
          </div>
        </section>

        {/* Company Overview */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6">Who We Are</h2>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  RIM Digital is a leading provider of premium IT products and solutions, serving businesses across multiple sectors. With over 14 years of experience, we have established ourselves as a trusted partner for organizations seeking reliable, scalable, and affordable technology solutions.
                </p>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  Our commitment to excellence and innovation has made us the preferred choice for companies looking to enhance their digital infrastructure and drive business growth through technology.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  We partner with renowned global brands to deliver cutting-edge products and services that meet the evolving needs of modern businesses.
                </p>
              </div>
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://mynorthstar.ae/wp-content/uploads/2024/10/digital.png"
                  alt="RIM Digital Office"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-gray-50">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-10 rounded-2xl shadow-lg">
                <div className="w-16 h-16 bg-[#0066CC] rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To be the most trusted and innovative IT solutions provider in the region, empowering businesses to achieve their digital transformation goals through cutting-edge technology and exceptional service.
                </p>
              </div>

              <div className="bg-white p-10 rounded-2xl shadow-lg">
                <div className="w-16 h-16 bg-[#0066CC] rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To deliver premium IT products and services that exceed customer expectations, foster long-term partnerships, and contribute to the success of businesses through innovative technology solutions and dedicated support.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20 bg-white">
          <div className="container">
            <h2 className="text-4xl font-bold text-center mb-12">Our Core Values</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  title: "Excellence",
                  description: "We strive for excellence in every product and service we deliver."
                },
                {
                  title: "Innovation",
                  description: "We embrace innovation and stay ahead of technological advancements."
                },
                {
                  title: "Integrity",
                  description: "We conduct business with honesty, transparency, and ethical practices."
                },
                {
                  title: "Customer Focus",
                  description: "We prioritize customer satisfaction and build lasting relationships."
                }
              ].map((value, index) => (
                <div key={index} className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-[#0066CC] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl font-bold">{index + 1}</span>
                  </div>
                  <h4 className="text-xl font-bold mb-3">{value.title}</h4>
                  <p className="text-gray-700">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-[#0066CC] text-white">
          <div className="container">
            <h2 className="text-4xl font-bold text-center mb-12">Why Choose RIM Digital</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "14+ Years Experience",
                  description: "Over a decade of expertise in IT solutions and technology services."
                },
                {
                  title: "Expert Team",
                  description: "Highly skilled professionals dedicated to your success."
                },
                {
                  title: "Quality Products",
                  description: "Premium IT products from world-renowned brands."
                },
                {
                  title: "Nationwide Coverage",
                  description: "Comprehensive service across the UAE and beyond."
                },
                {
                  title: "Affordable Solutions",
                  description: "Competitive pricing without compromising on quality."
                },
                {
                  title: "24/7 Support",
                  description: "Round-the-clock customer support and technical assistance."
                }
              ].map((item, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
                  <h4 className="text-2xl font-bold mb-3">{item.title}</h4>
                  <p className="text-white/90">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
