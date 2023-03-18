import React from "react";
import About from "../components/About/About";
import AreasOfInterest from "../components/AreasOfInterest/AreasOfInterest";
import HeroBanner from "../components/HeroBanner/HeroBanner";
import Layout from "../components/Layout/Layout";
import Projects from "../components/Projects/Projects";
import Seo from "../components/Seo";
import Skills from "../components/Skills/Skills";

interface Props {}

const index = (props: Props) => {
  return (
    <Layout>
      <Seo title="Omolara's Portfolio" />
      <section>
        <HeroBanner />
      </section>
      <section>
        <About />
      </section>
      <section>
        <AreasOfInterest />
      </section>
      <section className="bg-stone-800 text-white bg-blend-multiply bg-contain bg-fixed bg-hero-pattern">
        <Skills />
      </section>
      <section>
        <Projects />
      </section>
    </Layout>
  );
};

export default index;
