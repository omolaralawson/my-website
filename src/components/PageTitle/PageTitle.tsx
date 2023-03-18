import { Link } from "gatsby";
import React from "react";

import { IoArrowForward } from "react-icons/io5";

interface Props {
  title: string;
}

const PageTitle = ({ title }: Props) => {
  return (
    <div className="bg-stone-900 bg-blend-multiply bg-no-repeat bg-opacity-80 bg-contain bg-fixed bg-hero-pattern border-b border-neutral-100 text-white flex py-12 sm:py-24">
      <div className="container px-4 xl:px-0 mx-auto flex justify-center items-center">
        <div className="max-w-xl text-center">
          <h1 className="font-display text-4xl sm:text-6xl underline font-bold mb-4">
            {title}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default PageTitle;
