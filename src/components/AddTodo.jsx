/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

const AddTodo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };
  return (
    <form
      onSubmit={addTodoHandler}
      className="flex items-center justify-between gap-2"
    >
      <input
        type="text"
        className="flex-1 py-3 px-2 outline-none border-2 border-black"
        placeholder="Enter a todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="py-3 px-6 rounded-sm bg-black text-white" type="submit">
        Add
      </button>
    </form>
  );
};

export default AddTodo;
