import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "./signupSlice.types";






const signupSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {
     signInStart:(state) =>{
        state.loading =true;
        state.error =null;
     },
    signInSuccess: (state,) => {
      state.loading = false;
      state.error =null;
    },
    signInFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload || "An error occurred.";
    },
  },
});

export const {signInStart, signInSuccess,signInFailure } =  signupSlice.actions;

export default  signupSlice.reducer;
