import { Link } from "gatsby";
import React from "react";
import { MdOutlineFileDownload } from "react-icons/md";
import { TbBrandGmail, TbLetterK } from "react-icons/tb";
import { FaGithub, FaMedium, FaLinkedin } from "react-icons/fa";

interface Props {}

const Header = (props: Props) => {
  return (
    <header className="w-full flex flex-col">
      <div className="h-8 bg-red-400 bg-gradient-to-r from-purple-700 to-pink-700 flex text-white text-xs">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <a
              className="flex items-center"
              href="mailto:omolara.tlawson@gmail.com"
            >
              <TbBrandGmail className="mr-1 text-sm" />{" "}
              omolara.tlawson@gmail.com
            </a>
          </div>
          <nav className="flex gap-5 text-xl">
            <a href="" title="Linkedin">
              <FaLinkedin />
            </a>
            <a href="" title="Kagle">
              <TbLetterK />
            </a>
            <a href="" title="Medium">
              <FaMedium />
            </a>
            <a href="" title="Github">
              <FaGithub />
            </a>
          </nav>
        </div>
      </div>
      <div className="container flex justify-between h-24 items-center mx-auto">
        <div>
          <Link className="font-bold text-3xl font-display" to="/">
            Dr. Lawson
          </Link>
        </div>
        <nav className="flex gap-6 items-center text-sm font-medium">
          <Link to="/about">About</Link>
          <Link to="/me">Me</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/contact">Contact</Link>
          <a
            href="https://drive.google.com/file/d/1sYfdWal3v_bWyGkHaVlKYzwC8YqxA09_/view?usp=share_link"
            target={"_blank"}
            className="flex items-center bg-red-400 bg-gradient-to-r from-purple-700 to-pink-700 text-white py-3 px-6 rounded"
          >
            Resume <MdOutlineFileDownload className="text-lg ml-2" />
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
