import React from 'react';

const FinalCta = () => {
  return (
    <section className="bg-[#1f2937] py-[60px]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center text-center gap-8 max-w-4xl mx-auto">
          <h2 className="mb-8 font-display text-3xl font-light leading-tight text-white md:text-[44px] md:leading-[1.2]">
            Exceptional Quality IT Products That Always{" "}
            <span className="font-medium">Exceed Your Expectations</span>
          </h2>
          <a
            href="/contact"
            className="inline-block rounded-lg bg-primary px-10 py-4 text-base font-bold text-white shadow-[0_4px_15px_rgba(0,102,204,0.3)] transition-transform duration-300 hover:scale-105"
          >
            Enquire with us
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinalCta;