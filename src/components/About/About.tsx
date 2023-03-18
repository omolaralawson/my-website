import React from "react";

interface Props {}

const About = (props: Props) => {
  return (
    <div className="container border-b border-slate-300 mx-auto py-20">
      <div className="mx-auto max-w-4xl">
        <h2 className="font-display font-bold mb-4 text-4xl">About me!</h2>
        <p className="mb-4">
          Hi, my name is Omolara and I am a Data Analyst! I am making a career
          switch from clinical medicine to Data analysis!
        </p>
        <p className="mb-4">
          What inspired the switch? Working as a medical doctor during the
          COVID-19 pandemic in my home country, I experienced first hand the
          power of data and how it revolutionized COVID-19 vaccination spread,
          improved treatment modalities, and helped in improving vaccination
          protocols. I have since been on a journey to discover all I could
          about data and how it helps proffer solutions to world(health)problems
          and to be part of its impact story.
        </p>
        <p className="mb-4">
          So far, I have done self paced learning courses such as the Google
          Data analysis course and learnt a great deal of SQL, R and Tableau
          which I applied in doing the capstone project. To complement this , my
          time on the Generation programme has further solidified my
          determination to begin a career in data analytics.
        </p>
        <p className="mb-4">
          Since I was young, I have always enjoyed to solve puzzles. So that’s
          how I look at big data sets: to me it is one big puzzle I want to
          solve. Finding patterns nobody else sees is the challenge to me!
        </p>
        <p className="mb-4">Let’s make impact together!</p>
      </div>
    </div>
  );
};

export default About;
