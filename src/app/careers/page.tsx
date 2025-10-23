"use client";

import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import { useState } from "react";

export default function CareersPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    coverLetter: "",
    resume: null as File | null
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your application! We will review it and get back to you soon.");
  };

  const openPositions = [
    {
      title: "IT Sales Executive",
      department: "Sales",
      location: "Dubai, UAE",
      type: "Full-time"
    },
    {
      title: "Technical Support Engineer",
      department: "Support",
      location: "Abu Dhabi, UAE",
      type: "Full-time"
    },
    {
      title: "Product Manager",
      department: "Product",
      location: "Dubai, UAE",
      type: "Full-time"
    },
    {
      title: "Network Engineer",
      department: "Technical",
      location: "Sharjah, UAE",
      type: "Full-time"
    }
  ];

  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-[90px]">
        {/* Hero Section */}
        <section className="relative h-[400px] bg-gradient-to-r from-[#0066CC] to-[#0052a3] flex items-center justify-center">
          <div className="container text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Join Our Team</h1>
            <p className="text-xl md:text-2xl font-light">Build Your Career with RIM Digital</p>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-20 bg-white">
          <div className="container text-center max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Why Work With Us?</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              At RIM Digital, we believe our greatest asset is our people. We are committed to fostering a dynamic, inclusive, and innovative work environment where talented individuals can thrive and grow.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Join us in shaping the future of technology and making a meaningful impact on businesses across the region.
            </p>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-gray-50">
          <div className="container">
            <h2 className="text-4xl font-bold text-center mb-12">Employee Benefits</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: "💰",
                  title: "Competitive Salary",
                  description: "Industry-leading compensation packages"
                },
                {
                  icon: "📈",
                  title: "Career Growth",
                  description: "Clear advancement paths and promotions"
                },
                {
                  icon: "🎓",
                  title: "Training & Development",
                  description: "Continuous learning opportunities"
                },
                {
                  icon: "🏥",
                  title: "Health Insurance",
                  description: "Comprehensive medical coverage"
                },
                {
                  icon: "⏰",
                  title: "Flexible Hours",
                  description: "Work-life balance support"
                },
                {
                  icon: "🌴",
                  title: "Paid Leave",
                  description: "Generous vacation and time off"
                },
                {
                  icon: "🤝",
                  title: "Team Culture",
                  description: "Collaborative and supportive environment"
                },
                {
                  icon: "🎯",
                  title: "Performance Bonus",
                  description: "Merit-based incentives"
                }
              ].map((benefit, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow">
                  <div className="text-5xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-gray-700">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-20 bg-white">
          <div className="container">
            <h2 className="text-4xl font-bold text-center mb-12">Open Positions</h2>
            <div className="max-w-4xl mx-auto space-y-6">
              {openPositions.map((position, index) => (
                <div key={index} className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{position.title}</h3>
                      <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                        <span className="flex items-center gap-1">
                          <span className="font-semibold">Department:</span> {position.department}
                        </span>
                        <span className="flex items-center gap-1">
                          <span className="font-semibold">Location:</span> {position.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <span className="font-semibold">Type:</span> {position.type}
                        </span>
                      </div>
                    </div>
                    <button className="bg-[#0066CC] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#0052a3] transition-colors whitespace-nowrap">
                      Apply Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Application Form */}
        <section className="py-20 bg-gray-50">
          <div className="container max-w-3xl mx-auto">
            <div className="bg-white p-10 rounded-2xl shadow-lg">
              <h2 className="text-4xl font-bold text-center mb-6">Apply for a Position</h2>
              <p className="text-center text-gray-700 mb-8">
                Fill out the form below to submit your application. We review all submissions carefully and will contact qualified candidates.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Full Name *</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0066CC]"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Email *</label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0066CC]"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">Phone *</label>
                    <input
                      type="tel"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0066CC]"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Position Applied For *</label>
                  <select
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0066CC]"
                    value={formData.position}
                    onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                  >
                    <option value="">Select a position</option>
                    {openPositions.map((pos, idx) => (
                      <option key={idx} value={pos.title}>{pos.title}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Years of Experience *</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0066CC]"
                    value={formData.experience}
                    onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Cover Letter *</label>
                  <textarea
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0066CC]"
                    value={formData.coverLetter}
                    onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
                    placeholder="Tell us why you'd be a great fit for this position..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Upload Resume (PDF) *</label>
                  <input
                    type="file"
                    accept=".pdf"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0066CC]"
                    onChange={(e) => setFormData({ ...formData, resume: e.target.files?.[0] || null })}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#0066CC] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#0052a3] transition-colors"
                >
                  Submit Application
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
