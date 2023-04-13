import React, { useEffect } from "react";
import RecursiveTreeItem from "../RecursiveTreeItem/RecursiveTreeItem";
import style from "./RecursiveTree.module.scss";

const recursiveTree = ({
  recursiveData,
  handleOnContextMenu,
  handleLeftClick,
}) => {
  useEffect(() => {
    document.addEventListener("click", handleLeftClick);
    return () => {
      document.removeEventListener("click", handleLeftClick);
    };
  }, []);

  return (
    <div className={style.container}>
      <div className={style.warper}>
        {recursiveData.length !== 0 &&
          recursiveData.map((item) => (
            <RecursiveTreeItem
              key={item.id}
              id={item.id}
              level={item.level}
              code={item.code}
              name={item.name}
              childData={item.children}
              onContextMenu={handleOnContextMenu}
            />
          ))}
      </div>
    </div>
  );
};

export default recursiveTree;
