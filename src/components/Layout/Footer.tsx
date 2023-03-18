import React from "react";
import { RiGatsbyFill } from "react-icons/ri"
import { SiNetlify } from "react-icons/si"
import { TbBrandGmail, TbLetterK } from "react-icons/tb";
import { FaGithub, FaMedium, FaLinkedin } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

interface Props { }

const Footer = (props: Props) => {
  return <footer className="bg-pink-900 py-16 text-white">
    <div className="container px-4 lg:px-0 flex gap-8 flex-wrap sm:flex-nowrap justify-between mx-auto">
      <div className="w-full sm:w-1/3">
        <h4 className="font-display text-xl font-bold mb-4">About This Page</h4>
        <p className="mb-2">This website was coded and hosted using <a className="underline hover:no-underline" href="https://www.gatsbyjs.com/" target={"_blank"}>Gatsby <RiGatsbyFill className="inline text-lg" /></a> + <a className="underline hover:no-underline" href="https://www.netlify.com/" target={"_blank"}>Netlity <SiNetlify className="inline text-lg" /></a>. The code can be found <a className="underline hover:no-underline" href="https://github.com/omolaralawson/my-website" target={"_blank"}>here.</a></p>
        <p className="text-sm">Copyright &copy;2023 | All rights reserved</p>
      </div>
      <div className="w-full sm:w-2/3">
        <h4 className="font-display font-bold text-xl mb-4">Find me if you can</h4>
        <div className="flex items-center mb-4">
          <IoLocationSharp className="text-xl mr-2" /> A Nigerian 🇳🇬 living in the beautiful city of London 🇬🇧 
        </div>
        <nav className="flex gap-2 flex-wrap">
          <a
            className="flex items-center mb-4"
            href="mailto:omolara.tlawson@gmail.com"
            title="email"
            target={"_blank"}
          >
            <TbBrandGmail className="mr-1 text-xl" />{" "}
            Email: omolara.tlawson@gmail.com
          </a> / 
          <a
            className="flex items-center mb-4"
            href="https://www.linkedin.com/in/omolara-tekena-lawson/"
            title="Linkedin"
            target={"_blank"}
          >
            <FaLinkedin className="mr-1 text-xl" /> Linkedin
          </a> /
          <a
            className="flex items-center mb-4"
            href="https://www.kaggle.com/omolaratekenalawson"
            title="Kagle"
            target={"_blank"}
          >
            <TbLetterK className="mr-1 text-xl" /> Kaggle
          </a> /
          <a
            className="flex items-center mb-4"
            href="https://medium.com/@omolaralawson"
            title="Medium"
            target={"_blank"}
          >
            <FaMedium className="mr-1 text-xl" /> Medium blog
          </a> /
          <a
            className="flex items-center mb-4"
            href="https://github.com/omolaralawson/"
            title="Github"
            target={"_blank"}
          >
            <FaGithub className="mr-1 text-xl" /> Github (@omolaralawson)
          </a>
        </nav>
      </div>
    </div>
  </footer>;
};

export default Footer;
