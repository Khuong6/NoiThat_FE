import React, { useEffect } from "react";
import "./CSS/Slideshow.css"; // File CSS để tạo kiểu cho slideshow

const Test = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      // Lấy danh sách các slide
      const slides = document.querySelectorAll(".swiper-slide");
      // Lấy chiều rộng của mỗi slide
      const slideWidth = slides[0].offsetWidth;
      // Di chuyển toàn bộ slides sang phải một slide
      document.querySelector(
        ".swiper-wrapper"
      ).style.transform = `translateX(-${slideWidth}px)`;
    }, 3000); // Đặt thời gian trễ giữa các lần trượt (ở đây là 3 giây)

    // Xóa interval khi component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section-logos swiper-no-swiping swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events swiper-container-free-mode">
      <div className="swiper-wrapper">
        {/* Chèn các phần tử slide vào đây */}
        <div className="swiper-slide">
          <picture>
            <source
              type="image/webp"
              srcSet="//qhstatic-sg-s3.coohom.com/image/png/1669806450561/homepro.png?x-oss-process=image/resize,w_240,/format,webp"
            />
            <img
              loading="lazy"
              srcSet="//qhstatic-sg-s3.coohom.com/image/png/1669806450561/homepro.png?x-oss-process=image/resize,w_240,/format,webp"
              alt="partner company logo"
            />
          </picture>
        </div>
        <div className="swiper-slide">
          <picture>
            <source
              type="image/webp"
              srcSet="https://qhstatic-sg-s3.coohom.com/image/png/1669806900040/hanssem.png?x-oss-process=image/resize,w_240,/format,webp"
            />
            <img
              loading="lazy"
              srcSet="https://qhstatic-sg-s3.coohom.com/image/png/1669806900040/hanssem.png?x-oss-process=image/resize,w_240,/format,webp"
              alt="partner company logo"
            />
          </picture>
        </div>
        <div className="swiper-slide">
          <picture>
            <source
              type="image/webp"
              srcSet="//qhstatic-sg-s3.coohom.com/image/png/1669806900040/hanssem.png?x-oss-process=image/resize,w_240,/format,webp"
            />
            <img
              loading="lazy"
              srcSet="//qhstatic-sg-s3.coohom.com/image/png/1669806900040/hanssem.png"
              alt="partner company logo"
            />
          </picture>
        </div>
        {/* Các phần tử slide khác */}
      </div>
      <span
        className="swiper-notification"
        aria-live="assertive"
        aria-atomic="true"
      ></span>
    </section>
  );
};

export default Test;
