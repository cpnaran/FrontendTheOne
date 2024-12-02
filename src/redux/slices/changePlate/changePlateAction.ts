import api from "@/src/api";
import { AppThunk } from "../../store";
import { EditRequest } from "../../types/editSlice.types";
import { changePlateFailure, changePlateStart, changePlateSuccess } from "./changePlateSlice";
import { ChangePlateRequest } from "../../types/changePlateSlice.types";

const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

export const changePlateUser =
  (request: ChangePlateRequest, callback: (check:boolean) => void): AppThunk =>
  async (dispatch) => {
    dispatch(changePlateStart());
    try {
      await api.post(
          `${apiBaseUrl}/license/changePlate/?userId=${request.userId}`,
           request
        ); 
        dispatch(changePlateSuccess());
        callback(true);
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.message || "An error occurred.";
      console.error(error);
      dispatch(changePlateFailure(errorMessage));
         callback(false);
    }
  };
