import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "./layoutSlice.types";
import { SetLayoutState } from "../../types/layoutSlice.types";




const layoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    setLayout: (state, action: PayloadAction<SetLayoutState>) => {
      state.header = action.payload.header;
      state.main = action.payload.main;
      state.footer = action.payload.footer;
      state.sidebar=action.payload.sidebar;
    },
    
  },
});

export const { setLayout } = layoutSlice.actions;

export default layoutSlice.reducer;
