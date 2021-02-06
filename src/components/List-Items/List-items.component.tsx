import { ListItemAvatar } from "@material-ui/core";
import './List-items.styles.scss'
import React from "react";
import Item from "./../List-item/List-item.component";
const ListItems = ({ data,changeCompletedStatus,removeTodo }) => {
  //   console.log(data);
  return (
    <div className="items">
      <div className="items__container items__container--incomplete">
        <h1 className="items__header">Incomplete</h1>
        {data
          .filter((item) => item.completed === false)
          .map((item) => {
            return <Item item={item} key={item.id} changeCompletedStatus={changeCompletedStatus} removeTodo={removeTodo}/>;
          })}
      </div>
      <div className="items__container items__container--complete">
        <h1 className="items__header">Complete</h1>
        {data
          .filter((item) => item.completed === true)
          .map((item) => {
            return <Item item={item} key={item.id} changeCompletedStatus={changeCompletedStatus} removeTodo={removeTodo}/>;
          })}
      </div>
    </div>
  );
};
export default ListItems;
