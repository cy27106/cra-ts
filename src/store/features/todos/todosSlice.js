import { createSlice } from "@reduxjs/toolkit";
import { fetchBegin, fetchSuccess } from "../status/statusSlice";

// 同一个功能模块中action和reduces本来就是高内聚的，所以写在一个文件中很自然。
// createSlice自动生成了 actionCreator 和 actionTypes for 每一个 reducer，所以不用手写。
// 使用了immer，可以使用可变数据的写法

const todosSlice = createSlice({
  name: "todos", // the prefix for generated action types
  initialState: [],
  reducers: {
    addTodo(state, { payload }) {
      const { isDraft } = require("immer");
      console.log("isDraft");
      console.log(isDraft(state));
      state.push({
        text: payload,
        completed: false
      });
    },
    toggleTodo(state, { payload }) {
      console.log(state);
      const todo = state.find((todo, index) => index === payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    removeTodo(state, { payload }) {
      console.log(state);
      return state.filter((todo, index) => index !== payload);
      // state.splice(payload, 1);
    }
  }
});

export const { addTodo, toggleTodo, removeTodo } = todosSlice.actions;

// thunk

export const addTodoAsync = text => dispatch => {
  dispatch(fetchBegin());

  return new Promise(resolve => {
    setTimeout(() => {
      dispatch(addTodo(text));
      dispatch(fetchSuccess());
      resolve("ok");
    }, 1000);
  });
};

export default todosSlice.reducer;
