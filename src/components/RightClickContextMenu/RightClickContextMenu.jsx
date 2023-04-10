import React, { useEffect, useRef } from "react";
import style from "./RightClickContextMenu.module.scss";

const RightClickContextMenu = () => {
  const contextMenuRef = useRef(null);
  const liRef = useRef();
  const toggleOnMenu = (event) => {
    event.preventDefault();
    let mouseX = event.clientX;
    let mouseY = event.clientY;
    contextMenuRef.current.style.visibility = "visible";
    contextMenuRef.current.style.left = mouseX + "px";
    contextMenuRef.current.style.top = mouseY + "px";
  };
  const toggleOffMenu = () => {
    contextMenuRef.current.style.visibility = "hidden";
  };
  useEffect(() => {
    document.addEventListener("click", toggleOffMenu);
    document.addEventListener("contextmenu", toggleOnMenu);
    return () => {
      document.removeEventListener("contextmenu", toggleOnMenu);
      document.removeEventListener("click", toggleOffMenu);
    };
  }, []);

  return (
    <>
      <ul ref={contextMenuRef} className={style.menu}>
        <li className={style.item}>
          <span>Add Item</span>
        </li>
        <li className={style.item}>
          <span>Delete Item</span>
        </li>
        <li className={style.item}>
          <span>Increase Level</span>
        </li>
        <li className={style.item} ref={liRef}>
          <span>Decrease Level</span>
        </li>
      </ul>
    </>
  );
};

export default RightClickContextMenu;
