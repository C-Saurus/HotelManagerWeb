import React from "react";
import "./index.css";
import { useTranslation } from "react-i18next";
import { changeTheme } from "../../../service/themeSlice";
import { useDispatch } from "react-redux";

const ChangeTheme = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const handleChangeTheme = () => {
    dispatch(changeTheme());
  };
  return (
    <div className="change-theme-btn" onClick={handleChangeTheme}>
      {t("content.theme")}
    </div>
  );
};

export default ChangeTheme;
