import React from "react";

const ListItem = ({ id, title, deleteItem }) => {
  return (
    <li className="todo-item" key={id}>
      <label htmlFor={title} className="item-title">
        {title}
      </label>
      <button className="delete" onClick={() => deleteItem(id)}>
        Delete
      </button>
    </li>
  );
};

export default ListItem;
