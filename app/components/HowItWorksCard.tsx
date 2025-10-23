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
      className={`bg-ivory/20 border border-black/10 rounded-[25px] p-3 flex gap-4 ${className} items-center justify-between`}
    >
      {/* content */}
      <div className="w-1/2">
        <div className="max-w-[450px] pl-6">
          <h3 className="text-lg font-gilroy-black mb-4">
            <span className="text-evergreen text-6xl">{count}</span>{" "}
            <span className="size-3 inline-block rounded-full bg-black"></span>{" "}
            {title}
          </h3>
          <p className="text-lg">{description}</p>
        </div>
      </div>
      {/* image */}
      <div className="w-[40%]">
        <Image
          src={image}
          alt="How It Works"
          width={500}
          height={500}
          className="w-full  rounded-[25px] "
        />
      </div>
    </div>
  );
};

export default HowItWorksCard;
