import React from "react";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
const Header = () => {
  return (
    <header className="rounded-[25px] bg-[url('/images/header-image.png')] bg-cover bg-center p-4 min-h-[800px] relative">
      <div className="absolute inset-0 bg-black/20 rounded-[25px]"></div>
      <div className="max-width relative z-10">
        <Navbar />

        <div className="flex items-center justify-between mt-92">
          {/* left side */}
          <div className="w-1/2">
            <h1 className="text-5xl text-white leading-16">
              Your Trusted Link to <br /> Reliable{" "}
              <span className="text-evergreen">Home</span> Services
            </h1>
          </div>
          {/* right side */}
          <div className="w-1/2">
            <div className="max-w-[450px] ml-auto">
              <div className="w-24 h-1 bg-evergreen rounded-full mb-2"></div>
              <p className="text-ivory text-[20px] leading-8">
                From cleaning and plumbing to repairs and installations,
                HomeLinkGH connects you with verified, professional service
                providers across Ghana, anytime you need help at home or work.
              </p>
            </div>
          </div>
        </div>

        {/* button CTA */}
        <div className="flex items-center justify-start mt-28">
          <Button variant="secondary" size="large">
            Book a Service
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
