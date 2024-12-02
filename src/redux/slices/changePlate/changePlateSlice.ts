import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "./changePlateSlice.types";


const changePlateSlice = createSlice({
  name: "changePlate",
  initialState,
  reducers: {
    changePlateStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    changePlateSuccess: (state) => {
      state.loading = false;
      state.error = null;
    },
   changePlateFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload || "An error occurred.";
    },
  },
});

export const {  changePlateStart,  changePlateSuccess,   changePlateFailure } = changePlateSlice.actions;

export default changePlateSlice.reducer;
