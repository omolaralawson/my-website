import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";

import { IoArrowForward } from "react-icons/io5";

interface Props {}

const HeroBanner = (props: Props) => {
  return (
    <div className="bg-stone-900 bg-blend-multiply bg-opacity-60 bg-contain bg-fixed bg-hero-pattern border-b border-neutral-100 text-white flex h-[600px]">
      <div className="container mx-auto flex justify-center items-center">
        <div className="max-w-xl text-center">
          <h1 className="font-display text-6xl underline font-bold mb-4">
            Hi, I am Omolara
          </h1>
          <p className="mb-8 text-xl">
            A Data Analyst, making a career switch from clinical medicine to
            Data analysis! Let’s make impact together!
          </p>
          <div>
            <Link
              className="bg-red-400 bg-gradient-to-r from-purple-700 to-pink-700 text-sm inline-flex items-center justify-between text-white rounded py-3 px-6"
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