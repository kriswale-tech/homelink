"use client";

import Navbar from "../components/Navbar";
import Button from "../components/Button";
import useScreenSize from "../hooks/useScreenSize";

const Header = () => {
  // get screen width
  const { width, isMounted } = useScreenSize();

  const isMobile = isMounted ? width < 768 : true; // Default to mobile during SSR
  return (
    <header className="rounded-[25px] bg-[url('/images/header-image.png')] bg-cover bg-center p-4 min-h-[500px] md:min-h-[600px] xl:min-h-[800px] relative">
      <div className="absolute inset-0 bg-black/20 rounded-[25px]"></div>
      <div className="max-width relative z-10">
        <Navbar />

        <div className="flex items-center justify-between mt-40 md:mt-68 xl:mt-92 gap-8 flex-col md:flex-row">
          {/* left side */}
          <div className="w-full md:w-1/2">
            <h1 className="text-3xl sm:text-4xl xl:text-5xl text-white leading-11 sm:leading-14 xl:leading-16">
              Your Trusted Link to <br /> Reliable{" "}
              <span className="text-evergreen">Home</span> Services
            </h1>
          </div>
          {/* right side */}
          <div className="w-full md:w-1/2">
            <div className="max-w-[450px] md:ml-auto">
              <div className="w-24 h-1 bg-evergreen rounded-full mb-2"></div>
              <p className="text-ivory text-base md:text-lg xl:text-[20px] md:leading-8">
                From cleaning and plumbing to repairs and installations,
                HomeLinkGH connects you with verified, professional service
                providers across Ghana, anytime you need help at home or work.
              </p>
            </div>
          </div>
        </div>

        {/* button CTA */}
        <div className="flex items-center justify-start mt-10 md:mt-16 mb-10 xl:mt-28">
          <Button variant="secondary" size={isMobile ? "medium" : "large"}>
            Book a Service
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
