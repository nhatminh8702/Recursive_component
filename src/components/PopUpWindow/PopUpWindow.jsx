import React from "react";
import style from "./PopUpWindow.module.scss";
import CustomButton from "../CustomButton/CustomButton";
import TextInput from "../TextInput/TextInput";

// id: 1,
// name: "input-text",
// title: "Item Name",
// required: true,
// value: "",
const PopUpWindow = ({ formData, setValue, onSubmit, onCancel }) => {
  const fieldType = (field) => {
    switch (field.name) {
      case "input-text":
        return (
          <li key={field.id} className={style.field}>
            <TextInput
              label={field.title}
              required={false}
              value={field.value}
              setValue={(value) => setValue("value", field.id, value)}
              errorMessage={field.errorMessage}
            />
          </li>
        );
    }
  };

  return (
    <>
      <ul className={style.container}>
        <li className={style.title}>{formData.title}</li>
        {formData.field.map((item) => fieldType(item))}
        <li className={style.buttons}>
          <CustomButton
            key={formData.buttons[0].id}
            title={formData.buttons[0].title}
            disable={false}
            onClick={onCancel}
            backGroundColor={formData.buttons[0].backGroundColor}
            color={formData.buttons[0].color}
          />
          <CustomButton
            key={formData.buttons[1].id}
            title={formData.buttons[1].title}
            disable={false}
            onClick={onSubmit}
            backGroundColor={formData.buttons[1].backGroundColor}
            color={formData.buttons[1].color}
          />
        </li>
      </ul>
    </>
  );
};
export default PopUpWindow;
