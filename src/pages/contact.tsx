import React from "react";
import { IoArrowForward } from "react-icons/io5";
import { TbBrandGmail } from "react-icons/tb";
import ContactForm from "../components/ContactForm/ContactForm";
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
      <section>
        <div className="container px-4 xl:px-0 flex gap-4 mx-auto py-24">
          <div className="w-1/2">
            <div>
              <ContactForm />
            </div>
          </div>
          <div className="w-1/2 flex flex-col items-center justify-center">
            <h2 className="font-display text-4xl font-bold mb-4">Omolara Tekena-Lawson</h2>
            <p>
              <a
                className="flex text-xl items-center underline hover:no-underline"
                href="mailto:omolara.tlawson@gmail.com"
              >
                <TbBrandGmail className="mr-1" />{" "}
                omolara.tlawson@gmail.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default contact;
