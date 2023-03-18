import React from "react";
import About from "../components/About/About";
import AreasOfInterest from "../components/AreasOfInterest/AreasOfInterest";
import Layout from "../components/Layout/Layout";
import PageTitle from "../components/PageTitle/PageTitle";
import Seo from "../components/Seo";
import Skills from "../components/Skills/Skills";

type Props = {};

const about = (props: Props) => {
  return (
    <Layout>
      <Seo title="About - Omolara's Portfolio" />
      <section>
        <PageTitle title="About Me" />
      </section>
      <section>
        <About />
      </section>
     
    </Layout>
  );
};

export default about;
