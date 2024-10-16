import api from "@/src/api";
import getConfig from "next/config";
import { AppThunk } from "../../store";
import { getOptionPackageFailure, getOptionPackageStart, getOptionPackageSuccess } from "./optionSlice";

const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

export const getOptionPromotion =
  ( callback: () => void): AppThunk =>
  async (dispatch) => {
    dispatch(getOptionPackageStart());
    try {
    const respone  =   await api.get(
          `${apiBaseUrl}/options/packages`,
         
        ); 
        dispatch(getOptionPackageSuccess(respone.data));
        callback();
      
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.message || "An error occurred.";
      console.error(error);
      dispatch(getOptionPackageFailure(errorMessage));
    }
  };
