import { Link } from "gatsby";
import React from "react";
import { MdOutlineFileDownload } from "react-icons/md";
import { TbBrandGmail, TbLetterK } from "react-icons/tb";
import { FaGithub, FaMedium, FaLinkedin } from "react-icons/fa";
import { IoClose, IoMenu } from "react-icons/io5";

interface Props { }

const Header = (props: Props) => {
  const [open, setopen] = React.useState<boolean>(false);
  return (
    <header className="w-full flex flex-col">
      <div className="h-8 bg-red-400 bg-gradient-to-r from-purple-700 to-pink-700 flex text-white text-xs">
        <div className="container px-4 xl:px-0 mx-auto flex justify-between items-center">
          <div>
            <a
              className="flex items-center text-xs"
              href="mailto:omolara.tlawson@gmail.com"
            >
              <TbBrandGmail className="mr-1 text-xl" />{" "}
              omolara.tlawson@gmail.com
            </a>
          </div>
          <nav className="flex gap-2 sm:gap-5 text-xl">
            <a href="https://www.linkedin.com/in/omolara-tekena-lawson/" target={"_blank"} title="Linkedin">
              <FaLinkedin />
            </a>
            <a href="https://www.kaggle.com/omolaratekenalawson" target={"_blank"} title="Kaggle">
              <TbLetterK />
            </a>
            <a href="https://medium.com/@omolaralawson" target={"_blank"} title="Medium">
              <FaMedium />
            </a>
            <a href="https://github.com/omolaralawson/" target={"_blank"} title="Github">
              <FaGithub />
            </a>
          </nav>
        </div>
      </div>
      <div className="container px-4 xl:px-0 flex flex-wrap sm:flex-nowrap justify-between py-4 sm:py-0 h-auto sm:h-24 items-center mx-auto">
        <div>
          <Link className="font-bold text-3xl font-display" to="/">
            Lara Lawson
          </Link>
        </div>
        <button onClick={() => setopen((prev) => !prev)} className="flex sm:hidden">
          {open ? <IoClose className="text-3xl" /> : <IoMenu className="text-3xl" />}
        </button>
        <nav className={`${open ? "flex" : "hidden"} sm:flex flex-col sm:flex-row w-full sm:w-auto gap-6 sm:items-center text-sm font-medium py-4 sm:py-0`}>
          <Link activeClassName="text-pink-900" to="/">Home</Link>
          <Link activeClassName="text-pink-900" to="/about">About</Link>
          <Link activeClassName="text-pink-900" to="/portfolio">Portfolio</Link>
          <Link activeClassName="text-pink-900" to="/contact">Contact</Link>
          <a
            href="https://drive.google.com/file/d/1sYfdWal3v_bWyGkHaVlKYzwC8YqxA09_/view?usp=share_link"
            target={"_blank"}
            className="flex items-center justify-center bg-red-400 bg-gradient-to-r from-purple-700 hover:to-purple-700 to-pink-700 hover:from-pink-700 text-white py-3 px-6 rounded"
          >
            Resume <MdOutlineFileDownload className="text-lg ml-2" />
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
