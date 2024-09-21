import React from "react";
import "./style.scss";
import IntroduceSection from "./IntroduceSection";
import SearchSection from "./SearchSection";

const Homeview = () => {
  return (
    <div className="homeview">
      <div className="container">
        <IntroduceSection />
        <SearchSection />
      </div>
    </div>
  );
};

export default Homeview;
