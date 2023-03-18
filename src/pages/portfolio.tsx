import React from "react";
import Layout from "../components/Layout/Layout";
import PageTitle from "../components/PageTitle/PageTitle";
import Projects from "../components/Projects/Projects";
import Seo from "../components/Seo";

type Props = {};

const portfolio = (props: Props) => {
  return (
    <Layout>
      <Seo title="Portfolio - Omolara's Portfolio" />
      <section>
        <PageTitle title="Take a look at my recent work." />
      </section>
      <section>
        <Projects />
      </section>
    </Layout>
  );
};

export default portfolio;
