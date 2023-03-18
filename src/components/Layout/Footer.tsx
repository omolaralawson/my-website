import React from "react";
import { RiGatsbyFill } from "react-icons/ri"
import { SiNetlify } from "react-icons/si"
import { TbBrandGmail, TbLetterK } from "react-icons/tb";
import { FaGithub, FaMedium, FaLinkedin } from "react-icons/fa";

interface Props { }

const Footer = (props: Props) => {
  return <footer className="bg-pink-900 py-16 text-white">
    <div className="container flex gap-8 justify-between mx-auto">
      <div className="w-1/3">
        <h4 className="font-semibold mb-4">About This Page</h4>
        <p className="mb-2">This website was coded and hosted using <a className="underline hover:no-underline" href="https://www.gatsbyjs.com/" target={"_blank"}>Gatsby <RiGatsbyFill className="inline text-lg" /></a> + <a className="underline hover:no-underline" href="https://www.netlify.com/" target={"_blank"}>Netlity <SiNetlify className="inline text-lg" /></a>. The code can be found <a className="underline hover:no-underline" href="https://github.com/omolaralawson/my-website" target={"_blank"}>here.</a></p>
        <p className="text-sm">Copyright &copy;2023 | All rights reserved</p>
      </div>
      <div className="w-2/3">
        <h4 className="font-semibold mb-4">Find me if you can</h4>
        <nav className="flex gap-8 flex-wrap">
          <a
            className="flex items-center mb-4"
            href="mailto:omolara.tlawson@gmail.com"
            title="email"
          >
            <TbBrandGmail className="mr-1 text-xl" />{" "}
            Email: omolara.tlawson@gmail.com
          </a>
          <a
            className="flex items-center mb-4"
            href="https://www.linkedin.com/in/omolara-tekena-lawson/"
            title="Linkedin"
          >
            <FaLinkedin className="mr-1 text-xl" /> Linkedin
          </a>
          <a
            className="flex items-center mb-4"
            href=""
            title="Kagle"
          >
            <TbLetterK className="mr-1 text-xl" /> Kaggle
          </a>
          <a
            className="flex items-center mb-4"
            href=""
            title="Medium"
          >
            <FaMedium className="mr-1 text-xl" /> Medium blog
          </a>
          <a
            className="flex items-center mb-4"
            href="https://github.com/omolaralawson/"
            title="Github"
          >
            <FaGithub className="mr-1 text-xl" /> Github (@omolaralawson)
          </a>
        </nav>
      </div>
    </div>
  </footer>;
};

export default Footer;
