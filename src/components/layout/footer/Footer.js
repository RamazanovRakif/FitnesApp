import React, { Component } from "react";
import "./Footer.scss";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaGooglePlusG,
  FaInstagram,
  FaAngleDoubleRight,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";
class Footer extends Component {
  render() {
    return (
      <footer>
        <section className="footer">
          <div className="footer_content section-gap">
            <div className="wrapper">
              <div className="footer_content_top">
                <h4>THIS WINTER! SAVE 50% OFF HERE</h4>
                <p>
                  Take Care of your body.It is the place you have ,live in
                  <a href="/"> Became a Member</a>
                </p>
              </div>
              <div className="footer_content_main mt-5 d-grid">
                <section className="footer_content_main_about">
                  <h5 className="footer_content_main_title">About</h5>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab.
                  </p>
                  <ul className="social_links">
                    <li>
                      <a href="/" className="link">
                        <span className="icon_style">
                          <FaFacebookF />
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="/" className="link">
                        <span className="icon_style">
                          <FaLinkedinIn />
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="/" className="link">
                        <span className="icon_style">
                          <FaTwitter />
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="/" className="link">
                        <span className="icon_style">
                          <FaGooglePlusG />
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="/" className="link">
                        <span className="icon_style">
                          <FaInstagram />
                        </span>
                      </a>
                    </li>
                  </ul>
                </section>

                <section className="footer_content_main_quick_links">
                  <h5 className="footer_content_main_title">Quick Links</h5>
                  <ul>
                    <li>
                      <a href="/">
                        <span>
                          <FaAngleDoubleRight />
                        </span>{" "}
                        Home
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <span>
                          <FaAngleDoubleRight />
                        </span>{" "}
                        About
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <span>
                          <FaAngleDoubleRight />
                        </span>{" "}
                        Services
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <span>
                          <FaAngleDoubleRight />
                         </span>{" "}
                        Contact
                      </a>
                    </li>
                  </ul>
                </section>

                <section className="footer_content_main_quick_links">
                  <h5 className="footer_content_main_title">Help & Support</h5>
                  <ul>
                    <li>
                      <a href="/">
                        <span>
                          <FaAngleDoubleRight />
                        </span>{" "}
                        Live Chart
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <span>
                          <FaAngleDoubleRight />
                        </span>{" "}
                        Faq
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <span>
                          <FaAngleDoubleRight />
                        </span>{" "}
                        Support
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <span>
                          <FaAngleDoubleRight />
                        </span>{" "}
                        Terms of Services
                      </a>
                    </li>
                  </ul>
                </section>

                <section className="footer_content_main_quick_links">
                  <h5 className="footer_content_main_title">Contact</h5>
                  <ul>
                    <li>
                      <a href="/">
                        <span>
                          <FiMail />
                        </span>{" "}
                        info@example.com
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <span>
                          <FaPhoneAlt />
                        </span>{" "}
                        +994(70)-668-09-68
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <span>
                          <FaMapMarkerAlt />
                        </span>{" "}
                        Sumqayıt,3 mkr
                      </a>
                    </li>
                  </ul>
                </section>
              </div>

              <div className="footer_content_bottom mt-5">
                <h4>
                  © 2019 Apt Pro. All rights reserved. Design by 
                  <span>Ramazanov Rakif</span>
                </h4>
              </div>
            </div>
          </div>
        </section>
      </footer>
    );
  }
}

export default Footer;
