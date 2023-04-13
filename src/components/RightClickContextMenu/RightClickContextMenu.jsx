import React, { useEffect, useRef, useState } from "react";
import style from "./RightClickContextMenu.module.scss";

const RightClickContextMenu = ({
  contextMenu,
  toggleContextMenu,
  mouseX,
  mouseY,
  onClick,
}) => {
  return (
    <>
      {toggleContextMenu && (
        <ul
          className={style.menu}
          style={{
            left: mouseX,
            top: mouseY,
          }}
        >
          {contextMenu.map((item) => (
            <li
              key={item.id}
              className={style.item}
              onClick={() => onClick(item.context)}
            >
              <span>{item.context}</span>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default RightClickContextMenu;
