import { Link } from "gatsby";
import React from "react";

import { IoArrowForward } from "react-icons/io5";

interface Props {}

const HeroBanner = (props: Props) => {
  return (
    <div className="bg-stone-900 bg-blend-multiply bg-opacity-60 bg-no-repeat bg-contain bg-fixed bg-hero-pattern border-b border-neutral-100 text-white flex py-8 lg:py-0 lg:h-[600px]">
      <div className="container px-4 xl:px-0 mx-auto flex justify-center items-center">
        <div className="max-w-xl text-center">
          <h1 className="font-display text-4xl lg:text-6xl underline font-bold mb-4">
            Hi, I am Omolara!
          </h1>
          <p className="mb-8 text-base lg:text-xl">
            A Data Analyst, making a career switch from clinical medicine to
            Data analysis! Let’s make impact together!
          </p>
          <div>
            <Link
              className="bg-red-400 bg-gradient-to-r from-purple-700 hover:to-purple-700 to-pink-700 hover:from-pink-700 text-sm inline-flex items-center justify-between text-white rounded py-3 px-6"
              to="/portfolio"
            >
              My Projects
              <IoArrowForward className="text-lg ml-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
