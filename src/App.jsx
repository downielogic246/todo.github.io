import React, { useEffect } from "react";
import { useState } from "react";
import NewItem from "./components/NewItem";
import List from "./components/List";

const App = () => {
  const [todoList, setTodoList] = useState(() => {
    const value = localStorage.getItem("todos");

    return value === null ? [] : JSON.parse(localStorage.todos);
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoList));
  }, [todoList]);

  function addNewItem(newItem) {
    setTodoList([...todoList, { id: crypto.randomUUID(), title: newItem }]);
    localStorage.setItem("todos", JSON.stringify(todoList));
  }

  function deleteItem(id) {
    setTodoList(
      todoList.filter((todo) => {
        return todo.id !== id;
      })
    );
    localStorage.setItem("todos", JSON.stringify(todoList));
    // setTodoList([...todoList]);
  }

  return (
    <>
      <h1>To Do List</h1>
      <NewItem addItem={addNewItem} />
      <List todoList={todoList} deleteItem={deleteItem} />
    </>
  );
};

export default App;
