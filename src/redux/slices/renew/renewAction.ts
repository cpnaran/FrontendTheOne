import api from "@/src/api";
import { AppThunk } from "../../store";
import { RenewRequest } from "../../types/renewSlice.types";
import { renewFailure, renewStart, renewSuccess } from "./renewSlice";

const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

export const reNewSubmit =
  (request: RenewRequest, callback: (check:boolean) => void): AppThunk =>
  async (dispatch) => {
    dispatch(renewStart());
    console.log(request.userId,"request")
    try {
      await api.post(
          `${apiBaseUrl}/license/renew?userId=${request.userId}`,
          {
           packageId: request.packageId,
            license:  request.license
  
          },
          
        ); 
      
        dispatch(renewSuccess());
        callback(true);
      
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.message || "An error occurred.";
      console.error(error);
      dispatch(renewFailure(errorMessage));
         callback(false);
    }
  };
