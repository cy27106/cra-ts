import { createSlice } from "@reduxjs/toolkit";

export const VisibilityFilters = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_COMPLETED: "SHOW_COMPLETED",
  SHOW_ACTIVE: "SHOW_ACTIVE"
};

const visibilityFilterSlice = createSlice({
  name: "visibilityFilter",
  initialState: VisibilityFilters.SHOW_ALL,
  reducers: {
    setVisibilityFilter(state, { payload }) {
      return payload;
    }
  }
});

export const { setVisibilityFilter } = visibilityFilterSlice.actions;

export default visibilityFilterSlice.reducer;
