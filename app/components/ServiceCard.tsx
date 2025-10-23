import React from "react";

interface ServiceCardProps {
  image: string;
  title: string;
  // description: string;
}

const ServiceCard = ({ image, title }: ServiceCardProps) => {
  const bgImage = `url(${image})`;
  return (
    <div
      className="rounded-[25px] bg-cover bg-center relative h-[400px]"
      style={{ backgroundImage: bgImage }}
    >
      <div className="absolute bottom-0 left-0 w-fit p-4 rounded-tr-[25px] rounded-bl-[25px] bg-black/80 text-ivory text-xl">
        {title}
      </div>
    </div>
  );
};

export default ServiceCard;
