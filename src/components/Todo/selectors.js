import { createSelector } from "@reduxjs/toolkit";
import { VisibilityFilters } from "../../store/features/visibilityFilter/visibilityFilterSlice";

const selectTodos = state => state.todos;
const selectFilter = state => state.visibilityFilter;

export const selectVisibleTodos = createSelector(
  [selectTodos, selectFilter],
  (todos, visibilityFilter) => {
    return todos.filter(todo => {
      if (visibilityFilter === VisibilityFilters.SHOW_ACTIVE) {
        return !todo.completed;
      } else if (visibilityFilter === VisibilityFilters.SHOW_COMPLETED) {
        return todo.completed;
      }
      return true;
    });
  }
);
