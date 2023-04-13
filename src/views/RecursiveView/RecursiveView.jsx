import React, { useState } from "react";
import RecursiveTree from "../../components/RecursiveTree/RecursiveTree";
import { initData } from "@/utility/data";
import RightClickContextMenu from "@/components/RightClickContextMenu/RightClickContextMenu";
import PopUpWindow from "@/components/PopUpWindow/PopUpWindow";

const intiFormData = {
  title: "Add new Item",
  field: [
    {
      id: 1,
      name: "input-text",
      title: "Item Name",
      required: true,
      value: "",
      errorMessage: "",
    },
    {
      id: 2,
      name: "input-text",
      title: "Item Code",
      required: false,
      value: "",
      errorMessage: "",
    },
  ],
  buttons: [
    {
      id: 1,
      title: "Cancel",
      backGroundColor: "",
      color: "",
    },
    {
      id: 2,
      title: "save",
      backGroundColor: "#48647F",
      color: "#FFFFFF",
    },
  ],
};

const contextMenu = [
  {
    id: 1,
    context: "Add item",
  },
  {
    id: 2,
    context: "Delete item",
  },
];

const recursiveView = () => {
  const [data, setData] = useState(initData);
  const [itemId, setItemId] = useState(-1);
  const [toggleContextMenu, setToggleContextMenu] = useState(false);
  const [togglePopUp, setTogglePopUp] = useState(false);
  const [mouseX, setMouseX] = useState("");
  const [mouseY, setMouseY] = useState("");
  const [formData, setFormData] = useState(intiFormData);

  const setFormValue = (objectName, id, value) => {
    setFormData((current) => {
      const clone = JSON.parse(JSON.stringify(current.field));
      clone.forEach((item) => {
        if (item.id === id) {
          item[objectName] = value;
        }
      });
      return {
        ...current,
        field: clone,
      };
    });
  };

  const handleLeftClick = () => {
    setToggleContextMenu(false);
  };

  const handleOnContextMenu = (event, id) => {
    event.preventDefault();
    let mouseX = event.clientX;
    let mouseY = event.clientY;
    setMouseX(mouseX + "px");
    setMouseY(mouseY + "px");
    setToggleContextMenu(true);
    setItemId(id);
  };

  const handleValidate = () => {
    const specials = /[^A-Za-z 0-9]/g;
    let isValidated = true;
    formData.field.forEach((item) => {
      if (item.required && item.value === "") {
        setFormValue(
          "errorMessage",
          item.id,
          item.title + " must not leave empty and have special character "
        );
        isValidated = false;
      } else if (specials.test(item.value)) {
        setFormValue(
          "errorMessage",
          item.id,
          item.title + " must not leave empty and have special character "
        );
        isValidated = false;
      } else {
        setFormValue("errorMessage", item.id, "");
      }
    });
    return isValidated;
  };

  const handleOnSubmit = () => {
    if (handleValidate()) {
      setData((current) => {
        const clone = JSON.parse(JSON.stringify(current));
        let item = recursiveSearch(clone, itemId);
        item.children.push({
          id: item.id + "" + (item.children.length + 1),
          name: formData.field[0].value,
          level: item.level + 1,
          code: formData.field[1].value,
          children: [],
        });
        return clone;
      });
      setFormValue("value", 1, "");
      setFormValue("value", 2, "");
      setTogglePopUp(false);
    }
  };

  const handleOnCancel = () => {
    setTogglePopUp(false);
  };

  const recursiveSearch = (list, id) => {
    let result;
    for (let i = 0; i < list.length; i++) {
      if (list[i].id === id) {
        result = list[i];
        break;
      } else {
        result = recursiveSearch(list[i].children, id);
        if (result) break;
      }
    }
    return result;
  };

  const recursiveRemove = (list, id) => {
    for (let i = 0; i < list.length; i++) {
      if (list[i].id === id) {
        list.splice(i, 1);
        break;
      } else {
        recursiveRemove(list[i].children, id);
      }
    }
  };

  const handleAddItem = () => {
    setTogglePopUp(true);
  };
  const handleDeleteITem = () => {
    setData((current) => {
      const clone = JSON.parse(JSON.stringify(current));
      recursiveRemove(clone, itemId);
      return clone;
    });
  };

  const handleClickContextMenu = (context) => {
    switch (context) {
      case "Add item":
        handleAddItem();
        break;
      case "Delete item":
        handleDeleteITem();
        break;
    }
  };

  return (
    <>
      <RecursiveTree
        recursiveData={data}
        handleOnContextMenu={handleOnContextMenu}
        handleLeftClick={handleLeftClick}
      />
      <RightClickContextMenu
        mouseX={mouseX}
        mouseY={mouseY}
        contextMenu={contextMenu}
        toggleContextMenu={toggleContextMenu}
        onClick={handleClickContextMenu}
      />
      {togglePopUp && (
        <PopUpWindow
          formData={formData}
          setValue={setFormValue}
          onSubmit={handleOnSubmit}
          onCancel={handleOnCancel}
        />
      )}
    </>
  );
};
export default recursiveView;
