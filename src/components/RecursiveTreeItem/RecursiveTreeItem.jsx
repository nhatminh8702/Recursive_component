import React, { useRef, useState } from "react";
import style from "./RecursiveTreeItem.module.scss";
import squareBox from "@/assets/icon/checkmark-squarebox.svg";
import caretLeft from "@/assets/icon/caret-left-solid.svg";
import ckeckMark from "@/assets/icon/check-solid.svg";

const RecursiveTreeItem = ({
  id,
  level,
  code,
  name,
  childData,
  onContextMenu,
}) => {
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
      <div
        className={style.container}
        onContextMenu={(event) => onContextMenu(event, id)}
      >
        <span className={style.checkBoxWarper} onClick={handleOnClickCheck}>
          <img src={squareBox} alt="" />
          {toggleCheckBox && (
            <img src={ckeckMark} className={style.checkIcon} alt="" />
          )}
          {!toggleCheckBox && <span className={style.squareText}>{level}</span>}
        </span>
        <span className={style.code}>{code}</span>
        <span className={style.description}>{name}</span>
        {childData.length !== 0 && (
          <img
            className={
              toggleDisplay
                ? style.caretIcon
                : style.caretIcon + " " + style.rotate
            }
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
              id={item.id}
              key={item.id}
              level={item.level}
              code={item.code}
              name={item.name}
              childData={item.children}
              onContextMenu={onContextMenu}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default RecursiveTreeItem;
