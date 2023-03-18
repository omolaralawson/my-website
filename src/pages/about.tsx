import React from "react";
import { MdOutlineFileDownload } from "react-icons/md";
import About from "../components/About/About";
import { areasOfInterest } from "../components/AreasOfInterest/areas-of-interest";
import AreasOfInterest from "../components/AreasOfInterest/AreasOfInterest";
import Layout from "../components/Layout/Layout";
import PageTitle from "../components/PageTitle/PageTitle";
import Seo from "../components/Seo";
import Skills from "../components/Skills/Skills";
import { skills } from "../components/Skills/skills-list";

type Props = {};

const about = (props: Props) => {
  return (
    <Layout>
      <Seo title="About - Omolara's Portfolio" />
      <section>
        <PageTitle title="About Me" />
      </section>
      <section className="">
        <div className="flex">
          <div className="w-1/2 bg-orange-100 py-8 px-16">
            <About />
          </div>
          <div className="w-1/2 bg-orange-100 bg-blend-multiply bg-hero-pattern" />
        </div>
      </section>
      <section>
        <div className="container px-4 xl:px-0 flex gap-4 border-b border-slate-300 py-24 mx-auto">
          <div className="w-1/2">
            <h2 className="text-4xl font-bold font-display mb-4">Areas of Interest</h2>
            <div className="max-w-xl">
              {areasOfInterest?.map((interest) => (
                <div key={interest.id} className="flex gap-4 mb-8">
                  <div className="flex-shrink-0">
                    {interest.icon({
                      className:
                        "text-5xl bg-red-400 bg-gradient-to-r text-white p-2 rounded-full from-purple-700 to-pink-700",
                    })}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{interest.title}</h3>
                    <p>{interest.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-1/2">
            <h2 className="text-4xl font-bold font-display mb-4">Skills</h2>
            <div className="max-w-xl">
              {skills?.map((skill) => (
                <div key={skill.id} className="flex gap-4 mb-8">
                  <div className="flex-shrink-0">
                    {skill.icon({
                      className:
                        "text-5xl bg-red-400 bg-gradient-to-r text-white p-2 rounded-full from-purple-700 to-pink-700",
                    })}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{skill.title}</h3>
                    <p>{skill.description}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>
      <section>
        <div className="container px-4 xl:px-0 justify-center items-center flex mx-auto py-24">
          <a
            href="https://drive.google.com/file/d/1sYfdWal3v_bWyGkHaVlKYzwC8YqxA09_/view?usp=share_link"
            target={"_blank"}
            className="flex items-center justify-center bg-red-400 bg-gradient-to-r from-purple-700 hover:to-purple-700 to-pink-700 hover:from-pink-700 text-white py-6 px-12 w-full max-w-lg rounded text-xl"
          >
            View Resume <MdOutlineFileDownload className="text-lg ml-2" />
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default about;
