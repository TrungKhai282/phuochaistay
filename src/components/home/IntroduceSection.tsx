import React from "react";
import Link from "next/link";
import ImageShow from "./ImageShow";

const IntroduceSection = () => {
  return (
    <section className="introduce-section">
      <div className="content">
        <div className="title">
          Quên đi
          <br /> công việc bộn bề,
          <br /> Bắt đầu
          <br /> một kì nghỉ mới
        </div>
        <div className="description">
          Chúng tôi cung cấp những gì bạn cần để tận hưởng kỳ nghỉ cùng gia
          đình. Đã đến lúc tạo ra nhiều khoảnh khắc đáng nhớ.
        </div>
        <Link href={"/"} className="primary-btn start-btn">
          Bắt đầu ngay
        </Link>
      </div>
      <div className="image-show">
        <ImageShow />
      </div>
    </section>
  );
};

export default IntroduceSection;
