import { combineReducers } from "@reduxjs/toolkit";
import todos from "./features/todos/todosSlice";
import visibilityFilter from "./features/visibilityFilter/visibilityFilterSlice";
import status from "./features/status/statusSlice";

export default combineReducers({
  todos,
  visibilityFilter,
  status
});
