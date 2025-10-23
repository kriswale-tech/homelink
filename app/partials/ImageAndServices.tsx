import React from "react";
import ServicesBar from "../components/ServicesBar";

const ImageAndServices = () => {
  return (
    <div className="relative bg-cover bg-center rounded-[25px] bg-[url('/images/about-image.png')] min-h-[500px] md:min-h-[600px] xl:min-h-[800px]">
      {/* services bar */}
      <div className="absolute w-full px-2 md:w-[min(90%,1200px)] md:bottom-[-80px] min-[500px]:bottom-[-70px] left-1/2 -translate-x-1/2 bottom-[-100px]">
        <ServicesBar />
      </div>
    </div>
  );
};

export default ImageAndServices;
