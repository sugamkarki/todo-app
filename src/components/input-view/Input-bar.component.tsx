import React from "react";
import "./Input-bar.styles.scss";
import Textfield from "@material-ui/core/Textfield";
import AddIcon from "@material-ui/icons/Add";
import { IconButton } from "@material-ui/core";
function InputBar({ inputData, changeHandler, clickHandler }) {
  // console.log(inputData)
  return (
    <div className="wrapper">
      <div className="input">
        <form onSubmit={clickHandler} className="input__form">
          <Textfield
            label="Input your todo"
            className="input__textField"
            variant="outlined"
            value={inputData}
            onChange={(e) => {
              return changeHandler(e.target.value);
            }}
          />
          <IconButton className="input__button" onClick={clickHandler}>
            <AddIcon />
          </IconButton>
        </form>
      </div>
    </div>
  );
}
export default InputBar;
