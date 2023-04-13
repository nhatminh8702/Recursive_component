import React from "react";
import style from "./CustomButton.module.scss";
const CustomButton = ({ title, disable, onClick, color, backGroundColor }) => {
  return (
    <div
      className={style.container}
      style={{ backgroundColor: backGroundColor, color: color }}
      onClick={onClick}
    >
      {title}
    </div>
  );
};

export default CustomButton;
