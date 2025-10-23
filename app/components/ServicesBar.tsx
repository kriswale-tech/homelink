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
    <div className="bg-evergreen flex justify-center p-8 rounded-[25px] gap-10">
      {services.map((service, index) => (
        <div className="flex flex-col items-center gap-2" key={index}>
          <Image
            src={service.image}
            alt="services-bar"
            className="size-14 mb-2"
            width={50}
            height={50}
          />
          <p className="text-sm text-ivory">{service.name}</p>
        </div>
      ))}
    </div>
  );
};

export default ServicesBar;
