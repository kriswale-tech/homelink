import React from "react";
import Image from "next/image";

interface HowItWorksCardProps {
  title: string;
  description: string;
  image: string;
  count: number;
  className?: string;
}

const HowItWorksCard = ({
  title,
  description,
  image,
  count,
  className,
}: HowItWorksCardProps) => {
  return (
    <div
      className={`bg-ivory/20 border border-black/10 rounded-[25px] p-3 flex gap-4 ${className} items-center justify-between sm:flex-row flex-col`}
    >
      {/* content */}
      <div className="sm:w-1/2 w-full">
        <div className="max-w-[450px] pl-6">
          <h3 className="variable-text-size font-gilroy-black mb-4">
            <span className="text-evergreen text-4xl md:text-6xl">{count}</span>{" "}
            <span className="size-3 inline-block rounded-full bg-black"></span>{" "}
            {title}
          </h3>
          <p className="variable-text-size">{description}</p>
        </div>
      </div>
      {/* image */}
      <div className="lg:w-[40%] sm:w-1/2 w-full h-full">
        <Image
          src={image}
          alt="How It Works"
          width={500}
          height={500}
          className="w-full h-full object-cover rounded-[25px] "
        />
      </div>
    </div>
  );
};

export default HowItWorksCard;
