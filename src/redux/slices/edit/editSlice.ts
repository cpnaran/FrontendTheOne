import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "./editSlice.types";

const editSlice = createSlice({
  name: "edit",
  initialState,
  reducers: {
    editStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    editSuccess: (state) => {
      state.loading = false;
      state.error = null;
    },
    editFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload || "An error occurred.";
    },
  },
});

export const { editStart, editSuccess, editFailure } = editSlice.actions;

export default editSlice.reducer;
