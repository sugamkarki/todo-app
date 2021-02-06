import React from "react";
import "./List-item.styles.scss";
import DoneAllIcon from "@material-ui/icons/DoneAll";
import ClearIcon from "@material-ui/icons/Clear";
import { IconButton } from "@material-ui/core";
const ListItem = ({ item, changeCompletedStatus, removeTodo }) => {
  return (
    <div className="wrapper">
      <div className="item">
        <div className="item__title">{item.title}</div>
        <div className="item__buttons">
          {item.completed ? null : (
            <IconButton onClick={() => changeCompletedStatus(item.id)}>
              <DoneAllIcon />
            </IconButton>
          )}
          <IconButton onClick={() => removeTodo(item.id)}>
            <ClearIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
};
export default ListItem;
