import React from "react";
import Header from "./Header";

const PublicLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="public-layout">
      <Header />
      <div className="public-main">{children}</div>
    </div>
  );
};

export default PublicLayout;
