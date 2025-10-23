import React from "react";
import HowItWorksCard from "../components/HowItWorksCard";

const HowItWorks = () => {
  const howItWorksCards = [
    {
      title: "Request a Service",
      description:
        "Tap the WhatsApp chat icon and tell our support agent what you need. Cleaning, plumbing, delivery, or repairs. Share your location and preferred time, and you'll get an instant quote right there.",
      image: "/images/how-it-works/lady.png",
      count: 1,
    },
    {
      title: "Get Matched Instantly",
      description:
        "Our team connects you with a verified, highly-rated service provider nearby. Every professional on HomeLinkGH is vetted for reliability, skill, and customer care.",
      image: "/images/how-it-works/man-1.png",
      count: 2,
    },
    {
      title: "Relax and Enjoy",
      description:
        "Once confirmed, your provider shows up as scheduled to get the job done. When the service is complete, pay securely, either online or in cash. It’s that simple.",
      image: "/images/how-it-works/man-2.png",
      count: 3,
    },
  ];
  return (
    <div className="space-y-4">
      {howItWorksCards.map((card) => (
        <HowItWorksCard
          key={card.title}
          {...card}
          className={`${card.count === 2 ? "flex-row-reverse" : ""}`}
        />
      ))}
    </div>
  );
};

export default HowItWorks;
