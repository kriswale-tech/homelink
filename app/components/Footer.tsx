import React from "react";
import Image from "next/image";

const Footer = () => {
  const areas = [
    "Accra",
    "Tema",
    "Kasoa",
    "Madina",
    "Adenta",
    "Kumasi",
    "Takoradi",
    "Tamale",
    "Cape Coast",
  ];
  return (
    <footer className="bg-evergreen text-ivory rounded-t-[25px]">
      {/* areas */}
      <div className="max-width py-8">
        <div className=" divide-x divide-ivory flex mx-auto w-fit">
          <span className="font-gilroy-bold px-6">Major Areas</span>
          {areas.map((area) => (
            <span key={area} className="px-6">
              {area}
            </span>
          ))}
        </div>
      </div>

      <hr className="border-ivory" />

      <div className="max-width py-8 flex gap-32 items-center">
        {/* content */}
        <div className="w-[400px] space-y-6">
          {/* logo */}
          <div className="w-52">
            <Image
              src="/images/logo.png"
              alt="logo"
              className="w-full h-auto"
              width={144}
              height={144}
            />
          </div>

          <p className="">
            HomeLink is your trusted platform for verified home service
            providers, connecting you to professionals who deliver quality and
            convenience at your doorstep.
          </p>

          {/* contact information */}
          <div className="space-y-1">
            <a href="mailto:info@homelinkgh.com" className="block">
              info@homelinkgh.com
            </a>
            <a href="tel:+233555555555" className="block">
              +233 (0) 555 0123
            </a>
            <p>Greater Accra, Ghana</p>
          </div>

          {/* social media */}
          <div className="flex gap-5 items-center">
            <a href="https://www.facebook.com/homelinkgh" className="block">
              <Image
                src="/icons/linkedin.svg"
                alt="facebook"
                width={24}
                height={24}
              />
            </a>
            <a href="https://www.facebook.com/homelinkgh" className="block">
              <Image
                src="/icons/instagram.svg"
                alt="facebook"
                width={24}
                height={24}
              />
            </a>
            <a href="https://www.facebook.com/homelinkgh" className="block">
              <Image
                src="/icons/youtube.svg"
                alt="facebook"
                width={24}
                height={24}
              />
            </a>
            <a href="https://www.facebook.com/homelinkgh" className="block">
              <Image
                src="/icons/facebook.svg"
                alt="facebook"
                width={24}
                height={24}
              />
            </a>
            <a href="https://www.facebook.com/homelinkgh" className="block">
              <Image src="/icons/x.svg" alt="facebook" width={24} height={24} />
            </a>
          </div>
        </div>

        {/* download from app store */}
        <div className="space-y-4">
          <p className="">Download the App</p>

          <a href="https://www.apple.com/app-store" className="block">
            <Image
              src="/images/appstore.png"
              alt="app store"
              className="w-[150px] h-auto"
              width={200}
              height={200}
            />
          </a>
          <a href="https://www.apple.com/app-store" className="block">
            <Image
              src="/images/playstore.png"
              alt="play store"
              className="w-[150px] h-auto"
              width={200}
              height={200}
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
