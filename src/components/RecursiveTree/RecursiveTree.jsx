import React from "react";
import RecursiveTreeItem from "../RecursiveTreeItem/RecursiveTreeItem";
import style from "./RecursiveTree.module.scss";

const recursiveTree = ({ recursiveData }) => {
  return (
    <div className={style.container}>
      <div className={style.warper}>
        {recursiveData.length !== 0 &&
          recursiveData.map((item) => (
            <RecursiveTreeItem
              key={item.id}
              level={item.level}
              code={item.code}
              name={item.name}
              childData={item.children}
            />
          ))}
      </div>
    </div>
  );
};

export default recursiveTree;
