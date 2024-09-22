import React from "react";
import { Image } from "antd";

const MostPickedSection = () => {
  return (
    <section className="most-picked-section">
      <div className="title">Được lựa chọn nhiều</div>
      <div className="list-picker">
        <div className="picker">
          <div className="price">200.000đ - 300.000đ / ngày</div>
          <Image
            src="https://bookatrip.net/image/cache/data/hotel/vung%20tau/getlstd-property-photo-1170x600.jpg"
            preview={false}
          />
          <div className="address">
            <span>Lan Rừng Resort</span>
            <br />
            Khu phố Hải Sơn, Phước Hải
          </div>
        </div>
        <div className="picker">
          <div className="price">200.000đ - 300.000đ / ngày</div>
          <Image
            src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/517566847.jpg?k=bca4a46d4f0cea6d8502a50f9741fe2f0f7f23c8b589860273b4afe670dab7ed&o=&hp=1"
            preview={false}
          />
          <div className="address">
            <span>Lan Rừng Resort</span>
            <br />
            Khu phố Hải Sơn, Phước Hải
          </div>
        </div>
        <div className="picker">
          <div className="price">200.000đ - 300.000đ / ngày</div>
          <Image
            src="https://bookatrip.net/image/cache/data/hotel/vung%20tau/getlstd-property-photo-1170x600.jpg"
            preview={false}
          />
          <div className="address">
            <span>Lan Rừng Resort</span>
            <br />
            Khu phố Hải Sơn, Phước Hải
          </div>
        </div>
        <div className="picker">
          <div className="price">200.000đ - 300.000đ / ngày</div>
          <Image
            src="https://bookatrip.net/image/cache/data/hotel/vung%20tau/getlstd-property-photo-1170x600.jpg"
            preview={false}
          />
          <div className="address">
            <span>Lan Rừng Resort</span>
            <br />
            Khu phố Hải Sơn, Phước Hải
          </div>
        </div>
        <div className="picker">
          <div className="price">200.000đ - 300.000đ / ngày</div>
          <Image
            src="https://bookatrip.net/image/cache/data/hotel/vung%20tau/getlstd-property-photo-1170x600.jpg"
            preview={false}
          />
          <div className="address">
            <span>Lan Rừng Resort</span>
            <br />
            Khu phố Hải Sơn, Phước Hải
          </div>
        </div>
      </div>
    </section>
  );
};

export default MostPickedSection;
