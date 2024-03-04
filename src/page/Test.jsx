import React, { useState } from "react";
import { Button, Drawer } from "antd";
import { PhoneOutlined, MailOutlined } from "@ant-design/icons";
function Footer() {
  const borderTopStyle = {
    borderTop: "3px", // Thiết lập border top
  };

  const [webInfoOpen, setWebInfoOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  const showWebInfoDrawer = () => {
    setWebInfoOpen(true);
  };

  const showContactDrawer = () => {
    setContactOpen(true);
  };

  const onClose = () => {
    setWebInfoOpen(false);
    setContactOpen(false);
  };

  return (
    <>
      <footer>
        <div class="container">
          <div class="footer__top wow animate__animated animate__fadeInUp">
            <div class="footer__text">
              <h2>Subscribe To Our Newsletter</h2>
            </div>
            <div class="footer__form">
              <form>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Your Email Address"
                />
                <button>
                  <i class="las la-paper-plane"></i>
                </button>
              </form>
            </div>
          </div>
          <div class="footer__bottom">
            <div class="footer__item wow animate__animated animate__fadeIn animate__delay-1s">
              <a href="#">
                <img src="./img/logo-white.png" alt="" />
              </a>
              <ul class="footer__contact">
                <li>
                  <i class="fa fa-phone"></i>
                  <span>
                    1800-123-4567
                    <br />
                    +91 987-654-3210
                  </span>
                </li>
                <li>
                  <i class="fa fa-envelope"></i>
                  <span>
                    info@example.com
                    <br />
                    services@gmail.com
                  </span>
                </li>
                <li>
                  <i class="fas fa-map-marker-alt"></i>
                  <span>
                    Demo Address #8901 Marmora
                    <br />
                    Road City
                  </span>
                </li>
              </ul>
            </div>
            <div class="footer__item wow animate__animated animate__fadeIn animate__delay-1s">
              <h3>Our links</h3>
              <ul>
                <li>
                  <a href="#">
                    <i class="fa fa-angle-right"></i>
                    Home
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-angle-right"></i>
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-angle-right"></i>
                    Services
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-angle-right"></i>
                    Team
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-angle-right"></i>
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div class="footer__item wow animate__animated animate__fadeIn animate__delay-1s">
              <h3>Our Services</h3>
              <ul>
                <li>
                  <a href="#">
                    <i class="fa fa-angle-right"></i>
                    Strategy & Research
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-angle-right"></i>
                    Web Development
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-angle-right"></i>
                    Web Solution
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-angle-right"></i>
                    Digital Marketing
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-angle-right"></i>
                    App Design
                  </a>
                </li>
              </ul>
            </div>
            <div class="footer__item wow animate__animated animate__fadeIn animate__delay-1s">
              <h3>Other links</h3>
              <ul>
                <li>
                  <a href="#">
                    <i class="fa fa-angle-right"></i>
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-angle-right"></i>
                    Portfolio
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-angle-right"></i>
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-angle-right"></i>
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-angle-right"></i>
                    Support
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="footer__copyright">
          <div class="container footer__content">
            <div class="footer__left">
              Copyright © 2021 <span>DexignZone</span> . All rights reserved.
            </div>
            <div class="footer__right">
              <a href="#">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="">
                <i class="fab fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
export default Footer;
