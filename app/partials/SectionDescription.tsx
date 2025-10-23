import React from "react";
import Button from "../components/Button";

interface SectionDescriptionProps {
  title: string;
  children: React.ReactNode;
  buttonText?: string;
  type?: "long" | "short";
}

const SectionDescription = ({
  title,
  children,
  buttonText,
  type = "long",
}: SectionDescriptionProps) => {
  return (
    <div className="flex gap-4 items-start">
      {/* title */}
      <div className="flex items-center gap-2 w-[25%]">
        <div className="size-4 bg-evergreen"></div>
        <h2 className="text-lg font-bold">{title}</h2>
      </div>

      {/* description and button */}
      <div className={`${type === "long" ? "w-[75%]" : "w-[50%]"} ml-auto`}>
        <p className="text-lg font-gilroy-bold mb-8">{children}</p>
        {buttonText && <Button>{buttonText}</Button>}
      </div>
    </div>
  );
};

export default SectionDescription;
