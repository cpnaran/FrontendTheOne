import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "./paySlice.types";


const paySlice = createSlice({
  name: "pay",
  initialState,
  reducers: {
     payStart:(state) =>{
        state.loading =true;
        state.error =null;
     },
     paySuccess: (state) => {
      state.loading = false;
      state.error =null;
    },
    payFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload || "An error occurred.";
    },
  },
});

export const { payStart,  paySuccess,payFailure } =  paySlice.actions;

export default paySlice.reducer;
