"use client";

import React from "react";
import Button from "../components/Button";
import useScreenSize from "../hooks/useScreenSize";
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
  const { width, isMounted } = useScreenSize();

  const buttonSize = () => {
    if (!isMounted || width < 768) {
      return "medium"; // Default to medium during SSR or on mobile
    }
    return "large";
  };

  return (
    <div className="flex gap-4 items-start flex-col md:flex-row">
      {/* title */}
      <div className="flex items-center gap-2 md:w-[25%]">
        <div className="size-4 bg-evergreen"></div>
        <h2 className="variable-text-size">{title}</h2>
      </div>

      {/* description and button */}
      <div
        className={`${
          type === "long" ? "md:w-[75%] w-full" : "md:w-[50%] w-full"
        } ml-auto`}
      >
        <p
          className={`variable-text-size font-gilroy-bold ${
            buttonText ? "mb-8" : ""
          }`}
        >
          {children}
        </p>
        {buttonText && <Button size={buttonSize()}>{buttonText}</Button>}
      </div>
    </div>
  );
};

export default SectionDescription;
