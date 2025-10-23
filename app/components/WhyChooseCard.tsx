import React from "react";
import Image from "next/image";

interface WhyChooseCardProps {
  image: string;
  title: string;
  description: string;
}

const WhyChooseCard = ({ image, title, description }: WhyChooseCardProps) => {
  return (
    <div className="bg-ivory rounded-[25px] p-10 pb-5 border border-black/20 variable-text-size">
      <Image
        src={image}
        alt="Why Choose Card"
        width={100}
        height={100}
        className="md:size-16 lg:size-20 size-12"
      />
      <h3 className=" font-gilroy-black my-3 lg:my-5">{title}</h3>
      <p className=" max-w-[400px]">{description}</p>
    </div>
  );
};

export default WhyChooseCard;
