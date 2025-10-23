import React from "react";
import WhyChooseCard from "../components/WhyChooseCard";

const WhyChooseUs = () => {
  const whyChooseUs = [
    {
      image: "/icons/clock.svg",
      title: "Swift Response",
      description:
        "Book a service and get matched with a provider within minutes.",
    },
    {
      image: "/icons/wallet.svg",
      title: "Affordable Options",
      description:
        "Transparent pricing that fits your budget, with no hidden costs.",
    },
    {
      image: "/icons/person.svg",
      title: "Verified Providers",
      description:
        "Every professional is screened for skill, safety, and reliability",
    },
    {
      image: "/icons/smiley.svg",
      title: "Guaranteed Satisfaction ",
      description:
        "We follow up on every job to ensure your complete peace of mind.",
    },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {whyChooseUs.map((item, index) => (
        <WhyChooseCard
          key={index}
          image={item.image}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default WhyChooseUs;
