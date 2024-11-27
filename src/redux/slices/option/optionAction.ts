import api from "@/src/api";
import { AppThunk } from "../../store";
import {
  getOptionLicenseFailure,
  getOptionLicenseStart,
  getOptionLicenseSuccess,
  getOptionPackageFailure,
  getOptionPackageStart,
  getOptionPackageSuccess,
} from "./optionSlice";
import { OptionLicenseRequest, OptionRequest } from "../../types/optionSlice.types";

const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

export const getOptionPromotion =
  (request: OptionRequest,callback: () => void): AppThunk =>
  async (dispatch) => {
    dispatch(getOptionPackageStart());
    console.log(request.userId)
    try {
      const respone = await api.get(`${apiBaseUrl}/options/packages/${request.userId}`);
      dispatch(getOptionPackageSuccess(respone.data));
      callback();
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.message || "An error occurred.";
      console.error(error);
      dispatch(getOptionPackageFailure(errorMessage));
    }
  };

export const getOptionLicense =
  (request: OptionLicenseRequest, callback: () => void): AppThunk =>
  async (dispatch) => {
    dispatch(getOptionLicenseStart());
    try {
      const respone = await api.get(`${apiBaseUrl}/options/license/${request.userId}`);
      dispatch(getOptionLicenseSuccess(respone.data));
      callback();
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.message || "An error occurred.";
      console.error(error);
      dispatch(getOptionLicenseFailure(errorMessage));
    }
  };
