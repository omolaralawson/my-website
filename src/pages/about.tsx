import React from "react";
import Layout from "../components/Layout/Layout";
import PageTitle from "../components/PageTitle/PageTitle";
import Seo from "../components/Seo";

type Props = {};

const about = (props: Props) => {
  return (
    <Layout>
      <Seo title="About - Omolara's Portfolio" />
      <section>
        <PageTitle title="About Me" />
      </section>
    </Layout>
  );
};

export default about;
