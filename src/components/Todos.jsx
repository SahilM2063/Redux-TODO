/* eslint-disable no-unused-vars */
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

const Todos = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <>
      <h1 className="text-xl font-bold underline mt-3 mb-4">All Todos</h1>
      {todos.map((todo) => (
        <li
          key={todo.id}
          className="list-none flex justify-between items-center font-mono text-lg bg-slate-200 py-2 px-4 rounded-sm my-2"
        >
          {todo.text}
          <button onClick={() => dispatch(removeTodo(todo.id))}>❎</button>
        </li>
      ))}
    </>
  );
};

export default Todos;
