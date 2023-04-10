import React from "react";
import RecursiveTree from "../../components/RecursiveTree/RecursiveTree";
import data from "@/utility/data";
import RightClickContextMenu from "@/components/RightClickContextMenu/RightClickContextMenu";

const recursiveView = () => {
  return (
    <>
      <RecursiveTree recursiveData={data} />
      <RightClickContextMenu />
    </>
  );
};
export default recursiveView;
