import React from "react";
import Image from "next/image";

const ServicesBar = () => {
  const services = [
    {
      name: "Beauty Services",
      image: "/icons/beauty.svg",
    },
    {
      name: "Laundry Services",
      image: "/icons/laundry.svg",
    },
    {
      name: "Home Maintenance",
      image: "/icons/home.svg",
    },
    {
      name: "Repair Services",
      image: "/icons/repair.svg",
    },
    {
      name: "Food Delivery",
      image: "/icons/food.svg",
    },
    {
      name: "Grocery Shopping",
      image: "/icons/shop.svg",
    },
  ];
  return (
    <div className="bg-evergreen flex justify-center p-6 md:p-8 rounded-[25px] xl:gap-10 lg:gap-6 gap-4 flex-wrap md:flex-nowrap">
      {services.map((service, index) => (
        <div className="flex flex-col items-center md:gap-2 gap-1" key={index}>
          <Image
            src={service.image}
            alt="services-bar"
            className="size-8 md:size-10 xl:size-14 mb-2"
            width={50}
            height={50}
          />
          <p className="text-xs lg:text-sm xl:text-base text-ivory whitespace-nowrap">
            {service.name}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ServicesBar;
