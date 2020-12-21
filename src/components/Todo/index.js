import React from "react";
import { useSelector, useDispatch } from "react-redux";
import classNames from "classnames/bind";
import { selectVisibleTodos } from "./selectors";
import {
  addTodoAsync as addTodo,
  removeTodo,
  toggleTodo
} from "../../store/features/todos/todosSlice";
import {
  setVisibilityFilter,
  VisibilityFilters
} from "../../store/features/visibilityFilter/visibilityFilterSlice";

import style from "./style.module.scss";

const cx = classNames.bind(style)

const Todo = () => {
  const dispatch = useDispatch();

  const todos = useSelector(selectVisibleTodos);
  const status = useSelector(state => state.status);

  return (
    <div>
      <div>
        <p
          onClick={() =>
            dispatch(setVisibilityFilter(VisibilityFilters.SHOW_ALL))
          }
        >
          showALL
        </p>
        <p
          onClick={() =>
            dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED))
          }
        >
          showCompleted
        </p>
        <p
          onClick={() =>
            dispatch(setVisibilityFilter(VisibilityFilters.SHOW_ACTIVE))
          }
        >
          showActive
        </p>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index} className={cx({ completed: todo.completed })}>
            <span>{todo.text}</span>
            <button onClick={() => dispatch(toggleTodo(index))}>toggle</button>
            <button onClick={() => dispatch(removeTodo(index))}>X</button>
          </li>
        ))}
      </ul>
      <button onClick={() => dispatch(addTodo("new todo ~"))}>addTodo</button>
      <p>
        status:
        {status.isLoading
          ? "loading"
          : status.loadSuccess
          ? "success"
          : status.loadError
          ? "error"
          : ""}
      </p>
    </div>
  );
};

export default Todo;
