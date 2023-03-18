import React from "react";
import Footer from "./Footer";
import Header from "./Header";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex flex-col">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
