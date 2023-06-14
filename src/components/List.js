import React from "react";
import ListItem from "./ListItem";

const List = ({ todoList, deleteItem }) => {
  return (
    <ul className="todo-list">
      {todoList.map((todo) => {
        return (
          <ListItem id={todo.id} title={todo.title} deleteItem={deleteItem} />
        );
      })}
    </ul>
  );
};

export default List;
