import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const PublicLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="public-layout">
      <Header />
      <div className="public-main">{children}</div>
      <Footer />
    </div>
  );
};

export default PublicLayout;
