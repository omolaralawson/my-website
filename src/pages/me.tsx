import React from "react";
import Layout from "../components/Layout/Layout";
import PageTitle from "../components/PageTitle/PageTitle";
import Seo from "../components/Seo";

type Props = {};

const me = (props: Props) => {
  return (
    <Layout>
      <Seo title="Personal Profile - Omolara's Portfolio" />
      <section>
        <PageTitle title="A lil' more about me" />
      </section>
    </Layout>
  );
};

export default me;
