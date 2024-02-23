import React from "react";

function Footer() {
  const borderTopStyle = {
    borderTop: "3px solid blue", // Thiết lập border top
  };
  return (
    <div style={borderTopStyle}>
      <footer className="footer p-10   text-base-content">
        <aside>
          <div className="flex w-full">
            <img
              src="public/F/F.png"
              width="200"
              height="200"
              viewBox="0 0 24 24"
              fillRule="evenodd"
              clipRule="evenodd"
              className="fill-current"
            ></img>
            <div className="divider divider-horizontal"></div>
            <div className="wpb_wrapper">
              <div className="wpb_map_wraper">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15672.656224107062!2d106.8007234!3d10.8751238!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d8a6b19d6763%3A0x143c54525028b2e!2zTmjDoCBWxINuIGjDs2EgU2luaCB2acOqbiBUUC5IQ00!5e0!3m2!1svi!2s!4v1708582469681!5m2!1svi!2s"
                  width={250}
                  height={150}
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <p className="pt-[5px] font-bold">
                Efurniture
                <br />
                Thiết kế nội thất sang trọng từ 2018
              </p>
            </div>
          </div>
        </aside>
        <nav>
          <h6 className="footer-title">Liên Hệ</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Thông Tin</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Showroom</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
}
export default Footer;
