import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "./optionSlice.types";
import {
  OptionLicenseState,
  OptionPackageState,
} from "../../types/optionSlice.types";

const optionSlice = createSlice({
  name: "option",
  initialState,
  reducers: {
    getOptionPackageStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    getOptionPackageSuccess: (
      state,
      action: PayloadAction<OptionPackageState[]>
    ) => {
      state.optionPackage = action.payload;
      state.loading = false;
    },
    getOptionPackageFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload || "An error occurred.";
    },
    getOptionLicenseStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    getOptionLicenseSuccess: (
      state,
      action: PayloadAction<OptionLicenseState[]>
    ) => {
      state.optionLicense = action.payload;
      state.loading = false;
    },
    getOptionLicenseFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload || "An error occurred.";
    },
  },
});

export const {
  getOptionPackageStart,
  getOptionPackageSuccess,
  getOptionPackageFailure,
  getOptionLicenseStart,
  getOptionLicenseSuccess,
  getOptionLicenseFailure,
} = optionSlice.actions;

export default optionSlice.reducer;
