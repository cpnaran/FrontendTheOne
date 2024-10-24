import api from "@/src/api";
import { AppThunk } from "../../store";
import { editFailure, editStart, editSuccess } from "./editSlice";
import { EditRequest } from "../../types/editSlice.types";

const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

export const editUser =
  (request: EditRequest, callback: (check:boolean) => void): AppThunk =>
  async (dispatch) => {
    dispatch(editStart());
    try {
      await api.post(
          `${apiBaseUrl}/user/edit-user/?userId=${request.userId}`,
          {
          fullName : request.fullName,
          telNo: request.telNo,   
          },  
        ); 
        dispatch(editSuccess());
        callback(true);
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.message || "An error occurred.";
      console.error(error);
      dispatch(editFailure(errorMessage));
         callback(false);
    }
  };
