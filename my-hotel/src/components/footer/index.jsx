import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./index.css";
import "../../utils/css/base.css";
import { useSelector } from "react-redux";
import { themeSelector } from "../../service/selector";

const Footer = () => {
  const theme = useSelector(themeSelector);
  return (
    <footer className="footer">
      <div className="footer_contact">
        <div className="footer-container">
          <div
            className="footer_contact_social"
            style={{ color: theme.background }}
          >
            <a
              className="footer_contact_link"
              href="https://www.facebook.com/"
              target={"_blank"}
              rel="noreferrer"
            >
              <i
                style={{ color: theme.background }}
                className="bi bi-facebook"
              ></i>
            </a>
            <a
              className="footer_contact_link"
              href="https://www.instagram.com"
              target={"_blank"}
              rel="noreferrer"
            >
              <i
                style={{ color: theme.background }}
                className="bi bi-instagram"
              ></i>
            </a>
            <a
              className="footer_contact_link"
              href="https://www.twitter.com"
              target={"_blank"}
              rel="noreferrer"
            >
              <i
                style={{ color: theme.background }}
                className="bi bi-twitter"
              ></i>
            </a>
          </div>
          <div className="footer_contact_address">
            <span className="address" style={{ color: theme.background }}>
              D8 Giang Vo, Ba Dinh District, Hanoi, Vietnam
            </span>
            <span className="phone" style={{ color: theme.background }}>
              Phone: 84 24 3845 2270
            </span>
            <span className="email" style={{ color: theme.background }}>
              <br></br>
              Email: huudatvu6139@gmail.com
            </span>
          </div>
          <div
            className="footer_contact_copyright"
            style={{ color: theme.background }}
          >
            © Copyright Hanoi Hotel 2023
          </div>
        </div>
      </div>
      <div
        className="footer_menu"
        style={{ backgroundColor: theme.background, color: theme.textColor }}
      >
        <div className="footer-container">
          <div className="footer_menu-wrapper">
            <ul className="footer_menu_list">
              <li className="footer_menu_item">
                <a
                  className="footer_menu_link"
                  href="https://www.d-edge.com/"
                  target={"_blank"}
                  rel="noreferrer"
                  style={{ color: theme.textColor }}
                >
                  Privacy Policy
                </a>
              </li>
              <li className="footer_menu_item">
                <a
                  className="footer_menu_link"
                  href="https://www.d-edge.com/"
                  target={"_blank"}
                  rel="noreferrer"
                  style={{ color: theme.textColor }}
                >
                  Credits
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
