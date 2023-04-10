import React, { useState } from "react";
import style from "./RecursiveTreeItem.module.scss";
import squareBox from "@/assets/icon/checkmark-squarebox.svg";
import caretDown from "@/assets/icon/caret-down-solid.svg";
import caretLeft from "@/assets/icon/caret-left-solid.svg";
import ckeckMark from "@/assets/icon/check-solid.svg";
const RecursiveTreeItem = ({ level, code, name, childData }) => {

  const [toggleDisplay, setToggleDisplay] = useState(true);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  const handleOnClickExpand = () => {
    setToggleDisplay(!toggleDisplay);
  };

  const handleOnClickCheck = () => {
    setToggleCheckBox(!toggleCheckBox);
  };

  return (
    <div className={style.warper}>
      <div className={style.container}>
        <img src={squareBox} alt="" onClick={handleOnClickCheck} />
        {toggleCheckBox && (
          <img
            src={ckeckMark}
            className={style.checkIcon}
            alt=""
            onClick={handleOnClickCheck}
          />
        )}
        {!toggleCheckBox && (
          <span className={style.squareText} onClick={handleOnClickCheck}>
            {level}
          </span>
        )}
        <span className={style.code}>{code}</span>
        <span className={style.description}>{name}</span>
        {childData.length !== 0 && (
          <img
            style={toggleDisplay && { transform: "rotate(45)" }}
            className={style.caretIcon}
            src={caretLeft}
            onClick={handleOnClickExpand}
          />
        )}
      </div>
      {childData.length !== 0 && (
        <div
          className={style.children}
          style={toggleDisplay ? { display: "none" } : { display: "block" }}
        >
          {childData.map((item) => (
            <RecursiveTreeItem
              key={item.id}
              level={item.level}
              code={item.code}
              name={item.name}
              childData={item.childData}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default RecursiveTreeItem;
