import React from "react";
import Layout from "../components/Layout/Layout";
import PageTitle from "../components/PageTitle/PageTitle";
import Seo from "../components/Seo";

type Props = {};

const contact = (props: Props) => {
  return (
    <Layout>
      <Seo title="Contact - Omolara's Portfolio" />
      <section>
        <PageTitle title="Contact Details" />
      </section>
    </Layout>
  );
};

export default contact;
