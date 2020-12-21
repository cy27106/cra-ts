import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  loadSuccess: false,
  loadError: false
};

const statusSlice = createSlice({
  name: "status",
  initialState,
  reducers: {
    fetchBegin() {
      return {
        isLoading: true,
        loadSuccess: false,
        loadError: false
      };
    },
    fetchSuccess() {
      return {
        isLoading: false,
        loadSuccess: true,
        loadError: false
      };
    },
    fetchError() {
      return {
        isLoading: false,
        loadSuccess: false,
        loadError: true
      };
    }
  }
});

export const { fetchBegin, fetchSuccess, fetchError } = statusSlice.actions;

export default statusSlice.reducer;
