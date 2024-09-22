import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="public-footer">
      <div className="row-content">
        <div className="container">
          <div className="left">
            <div className="logo">
              <span>PhuocHai</span>Stay.
            </div>
            <p>Mang lại những sự lựa chọn hoàn hảo cho kì nghỉ của bạn.</p>
            <p>
              Chúng tôi mong muốn đem lại nhiều giá trị cho quê hương và đất
              nước.
            </p>
          </div>
          <div className="right">
            <span>Trở thành đối tác</span>
            <Link href={"/"} className="register-btn">
              Đăng kí
            </Link>
          </div>
        </div>
      </div>
      <div className="copyright">
        Copyright 2024 • All rights reserved • TrungKhai
      </div>
    </div>
  );
};

export default Footer;
