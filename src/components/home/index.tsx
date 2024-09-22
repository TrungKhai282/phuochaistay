import React from "react";
import "./style.scss";
import IntroduceSection from "./IntroduceSection";
import MostPickedSection from "./MostPickedSection";
import Link from "next/link";

const Homeview = () => {
  return (
    <div className="homeview">
      <div className="container">
        <IntroduceSection />
        <MostPickedSection />
        <Link href={"/"} className="primary-btn more-btn">
          Xem thêm{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
            width={24}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default Homeview;
