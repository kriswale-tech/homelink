import React from "react";
import ServicesBar from "../components/ServicesBar";

const ImageAndServices = () => {
  return (
    <div className="relative bg-cover bg-center rounded-[25px] bg-[url('/images/about-image.png')] min-h-[800px]">
      <div className="absolute w-[min(90%,1200px)] bottom-[-80px] left-1/2 -translate-x-1/2">
        <ServicesBar />
      </div>
    </div>
  );
};

export default ImageAndServices;
