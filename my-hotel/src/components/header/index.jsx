import React, { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./index.css";
import "../../utils/css/base.css";
import { useDispatch, useSelector } from "react-redux";
import { themeSelector } from "../../service/selector";
import ChangeLangPopOver from "../language/languageUI";
import ChangeTheme from "../theme/themeUI";
import { Offcanvas } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import { getLocalStorage } from "../../utils/localStore";
import { logoutUser } from "../../service/authThunk";
import { errorToast, successToast } from "../../utils/toastify";

const Header = () => {
  const [show, setShow] = useState(false);
  const { t } = useTranslation();
  const theme = useSelector(themeSelector);
  const navigate = useNavigate();
  const ditpatch = useDispatch();
  const token = getLocalStorage("token") || false;
  const handleLogin = () => {
    if (token) {
      ditpatch(logoutUser()).then((res) => {
        if (res.payload) {
          successToast("Logout successfull");
        } else {
          errorToast("Please check your connection");
        }
      });
    } else {
      navigate("/login");
    }
  };

  const handleBooking = () => {
    navigate("/booking");
  };
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <header
      className="header_main homepage"
      style={{ backgroundColor: theme.background, color: theme.textColor }}
    >
      <div
        className="header_first_nav"
        style={{ backgroundColor: theme.background, color: theme.textColor }}
      >
        <div className="header_first_nav_container">
          <div className="header_column_one">
            <span className="header_popup" onClick={handleShow}>
              <i className="bi bi-list"></i>
            </span>
          </div>
          <div className="header_column_two">
            <span className="header_logo_wrap">
              <img
                className="header_logo"
                src="https://hanoihotel.com.vn/wp-content/uploads/sites/97/2020/09/Logo-Hanoihotel.png"
                alt="logo"
              />
            </span>
          </div>
          <div className="header_column_three">
            <div className="header_column_lang">
              <ChangeLangPopOver />
            </div>
            <div className="header_column_theme">
              <ChangeTheme />
            </div>
            <div className="main_login">
              <span onClick={handleLogin}>
                {!token ? (
                  <i className="login-icon bi bi-box-arrow-in-left"></i>
                ) : (
                  <i className="login-icon bi bi-box-arrow-right"></i>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div
        className="main_book"
        onClick={handleBooking}
        style={{
          color: theme.textColor,
          borderColor: theme.textColor,
        }}
      >
        <span className="text_book">{t("content.booking")}</span>
      </div>
      <div className="header_second_nav" style={{ color: theme.textColor }}>
        <div className="header_second_nav_container">
          <div className="header_second_nav_menu">
            <ul className="header_second_nav_menu_list">
              <li className="header_second_nav_menu_item">
                <Link to="/" className="header_second_nav_menu_link">
                  <span style={{ color: theme.textColor }}>
                    {t("content.home")}
                  </span>
                </Link>
              </li>
              <li className="header_second_nav_menu_item">
                <Link
                  to="/accomodation"
                  className="header_second_nav_menu_link"
                >
                  <span style={{ color: theme.textColor }}>
                    {t("content.accomodation")}
                  </span>
                </Link>
              </li>
              <li className="header_second_nav_menu_item">
                <Link to="/services" className="header_second_nav_menu_link">
                  <span style={{ color: theme.textColor }}>
                    {t("content.services")}
                  </span>
                </Link>
              </li>
              <li className="header_second_nav_menu_item">
                <Link to="/offer" className="header_second_nav_menu_link">
                  <span style={{ color: theme.textColor }}>
                    {t("content.offer")}
                  </span>
                </Link>
              </li>
              <li className="header_second_nav_menu_item">
                <Link to="/contact" className="header_second_nav_menu_link">
                  <span style={{ color: theme.textColor }}>
                    {t("content.contact")}
                  </span>
                </Link>
              </li>
              <li className="header_second_nav_menu_item">
                <Link to="/account" className="header_second_nav_menu_link">
                  <span style={{ color: theme.textColor }}>
                    {t("content.account")}
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Offcanvas show={show} onHide={handleClose} style={{ width: "350px" }}>
        <Offcanvas.Header closeButton>
          <div></div>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <span className="sidebar_logo">
            <img
              className="header_logo"
              src="https://hanoihotel.com.vn/wp-content/uploads/sites/97/2020/09/Logo-Hanoihotel.png"
              alt="logo"
            />
          </span>
          <div className="sidebar_language">
            <label className="sidebar_title">{t("content.select_lang")}</label>
            <select className="sidebar_select">
              <option>{t("content.lang_en")}</option>
              <option>{t("content.lang_vn")}</option>
            </select>
          </div>
          <div className="sidebar_language">
            <label className="sidebar_title">{t("content.theme")}</label>
            <select className="sidebar_select">
              <option>{t("content.dark")}</option>
              <option>{t("content.light")}</option>
            </select>
          </div>
          <div className="sidebar_menu">
            <div className="sidebar_menu_container">
              <ul>
                <li className="sidebar_menu_item">
                  <Link className="sidebar_menu_text" to="/">
                    {t("content.home")}
                  </Link>
                </li>
                <li className="sidebar_menu_item">
                  <Link className="sidebar_menu_text" to="/accomodation">
                    {t("content.accomodation")}
                  </Link>
                </li>
                <li className="sidebar_menu_item">
                  <Link className="sidebar_menu_text" to="/services">
                    {t("content.services")}
                  </Link>
                </li>
                <li className="sidebar_menu_item">
                  <Link className="sidebar_menu_text" to="/offer">
                    {t("content.offer")}
                  </Link>
                </li>
                <li className="sidebar_menu_item">
                  <Link className="sidebar_menu_text" to="/contact">
                    {t("content.contact")}
                  </Link>
                </li>
                <li className="sidebar_menu_item">
                  <Link className="sidebar_menu_text" to="/account">
                    {t("content.account")}
                  </Link>
                </li>
              </ul>
            </div>
            <div className="sidebar_login" onClick={handleLogin}>
              {token ? t("content.logout") : t("content.login")}
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </header>
  );
};

export default Header;
