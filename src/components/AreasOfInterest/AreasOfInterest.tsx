import React from "react";
import { areasOfInterest } from "./areas-of-interest";

interface Props {}

const AreasOfInterest = (props: Props) => {
  return (
    <div className="container mx-auto py-20 border-b border-slate-300">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-display font-bold">Areas of Interest</h2>
        <p>Take a look at some of the things I love working on.</p>
      </div>
      <div className="flex flex-wrap">
        {areasOfInterest.map((interest) => (
          <div
            className="w-1/3 px-4 mb-12 flex flex-col justify-center items-center text-center"
            key={interest.id}
          >
            {interest.icon({
              className:
                "text-6xl bg-red-400 bg-gradient-to-r text-white p-4 rounded-full from-purple-700 to-pink-700",
            })}
            <h3 className="font-semibold text-lg mb-4">{interest.title}</h3>
            <p className="text-sm">{interest.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AreasOfInterest;
