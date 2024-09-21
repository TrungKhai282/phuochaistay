import React from "react";
import "./style.scss";
import Link from "next/link";

const Header = () => {
  return (
    <div className="public-header">
      <div className="container">
        <div className="logo">
          <span>PhuocHai</span>Stay.
        </div>
        <div className="nav">
          <div className="nav-link">
            <Link href={"/"} className="light-link">
              Trang chủ
            </Link>
            <Link href={"/"} className="light-link">
              Homestay & Hotel
            </Link>
            <Link href={"/"} className="light-link">
              Về chúng tôi
            </Link>
            <Link href={"/"} className="light-link">
              Liên hệ
            </Link>
          </div>
          <div className="nav-action">
            <Link href={"/"} className="login-btn">
              Đăng nhập
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
