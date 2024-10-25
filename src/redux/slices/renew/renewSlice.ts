import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "./renewSlice.types";







const renewSlice = createSlice({
  name: "renew",
  initialState,
  reducers: {
     renewStart:(state) =>{
        state.loading =true;
        state.error =null;
     },
    renewSuccess: (state) => {
      state.loading = false;
      state.error =null;
    },
   renewFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload || "An error occurred.";
    },
  },
});

export const {renewStart, renewSuccess,renewFailure } =  renewSlice.actions;

export default  renewSlice.reducer;
