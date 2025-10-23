import React from "react";
import ServiceCard from "../components/ServiceCard";
const Services = () => {
  const services = [
    {
      image: "/images/services/capernter.png",
      title: "Cleaning Services",
    },
    {
      image: "/images/services/electrician.png",
      title: "Electrical & Installation",
    },
    {
      image: "/images/services/plumber.png",
      title: "Plumbing & Repairs",
    },
    {
      image: "/images/services/repairer.png",
      title: "Appliance Maintenance",
    },
    {
      image: "/images/services/painter.png",
      title: "Cleaning Services",
    },
    {
      image: "/images/services/deliverer.png",
      title: "Cleaning Services",
    },
  ];
  return (
    <div className="grid grid-cols-3 gap-16">
      {services.map((service, index) => (
        <ServiceCard key={index} image={service.image} title={service.title} />
      ))}
    </div>
  );
};

export default Services;
