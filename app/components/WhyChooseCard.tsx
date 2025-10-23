import React from "react";
import Image from "next/image";

interface WhyChooseCardProps {
  image: string;
  title: string;
  description: string;
}

const WhyChooseCard = ({ image, title, description }: WhyChooseCardProps) => {
  return (
    <div className="bg-ivory rounded-[25px] p-10 pb-5 border border-black/20">
      <Image
        src={image}
        alt="Why Choose Card"
        width={100}
        height={100}
        className="size-20"
      />
      <h3 className="text-lg font-gilroy-black my-3">{title}</h3>
      <p className="text-lg max-w-[400px]">{description}</p>
    </div>
  );
};

export default WhyChooseCard;
