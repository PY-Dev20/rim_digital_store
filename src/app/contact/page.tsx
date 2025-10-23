"use client";

import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    alert("Thank you for reaching out! We will get back to you shortly.");
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-[90px]">
        {/* Hero Section */}
        <section className="relative h-[400px] bg-gradient-to-r from-[#0066CC] to-[#0052a3] flex items-center justify-center">
          <div className="container text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl md:text-2xl font-light">We're Here to Help</p>
          </div>
        </section>

        {/* Contact Info & Form */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <h2 className="text-4xl font-bold mb-6">Get In Touch</h2>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  Have questions about our products or services? Want to discuss a project? Our team is ready to assist you. Reach out to us through any of the channels below.
                </p>

                <div className="space-y-6">
                  {/* Office Address */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#0066CC] rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Office Address</h3>
                      <p className="text-gray-700">
                        RIM Digital Solutions<br />
                        Dubai, United Arab Emirates
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#0066CC] rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Phone Number</h3>
                      <a href="tel:+22246007635" className="text-gray-700 hover:text-[#0066CC] transition-colors">
                        +222 46 00 76 35
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#0066CC] rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Email Address</h3>
                      <a href="mailto:sales@rimds.com" className="text-gray-700 hover:text-[#0066CC] transition-colors">
                        sales@rimds.com
                      </a>
                    </div>
                  </div>

                  {/* Business Hours */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#0066CC] rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Business Hours</h3>
                      <p className="text-gray-700">
                        Sunday - Thursday: 9:00 AM - 6:00 PM<br />
                        Friday - Saturday: Closed
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div className="mt-10">
                  <h3 className="text-xl font-bold mb-4">Follow Us</h3>
                  <div className="flex gap-4">
                    {[
                      { name: "Instagram", icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ac8a90f4-7aa0-4196-902e-e02017adac3a-grandpcd-com/assets/icons/insta-7.png" },
                      { name: "Facebook", icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ac8a90f4-7aa0-4196-902e-e02017adac3a-grandpcd-com/assets/icons/fb-8.png" },
                      { name: "WhatsApp", icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ac8a90f4-7aa0-4196-902e-e02017adac3a-grandpcd-com/assets/icons/wa-9.png" },
                      { name: "LinkedIn", icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ac8a90f4-7aa0-4196-902e-e02017adac3a-grandpcd-com/assets/icons/linked-in-10.png" }
                    ].map((social) => (
                      <a
                        key={social.name}
                        href="#"
                        className="w-12 h-12 rounded-full bg-gray-100 hover:bg-[#0066CC] flex items-center justify-center transition-colors group"
                      >
                        <img src={social.icon} alt={social.name} className="w-6 h-6 opacity-60 group-hover:opacity-100" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-gray-50 p-10 rounded-2xl shadow-lg">
                <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Your Name *</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0066CC]"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">Email Address *</label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0066CC]"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">Phone Number</label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0066CC]"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">Subject *</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0066CC]"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">Message *</label>
                    <textarea
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0066CC]"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="How can we help you?"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#0066CC] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#0052a3] transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-20 bg-gray-50">
          <div className="container">
            <h2 className="text-4xl font-bold text-center mb-12">Find Us</h2>
            <div className="bg-gray-300 h-[450px] rounded-2xl overflow-hidden shadow-lg flex items-center justify-center">
              <p className="text-gray-600 text-lg">Map integration placeholder - Add Google Maps embed here</p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
