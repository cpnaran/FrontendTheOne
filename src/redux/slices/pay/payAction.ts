import api from "@/src/api";
import { AppThunk } from "../../store";
import { PayRequest } from "../../types/paySlice.types";
import { payFailure, payStart, paySuccess } from "./paySlice";


const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

export const PaySubmit =
  (request: PayRequest, callback: (check:boolean) => void): AppThunk =>
  async (dispatch) => {
    dispatch(payStart());
    try {
      await api.post(
          `${apiBaseUrl}/license/fine-payment?userId=${request.userId}`,
          {
            license:  request.license
  
          },
          
        ); 
        dispatch(paySuccess());
        callback(true);
      
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.message || "An error occurred.";
      console.error(error);
      dispatch(payFailure(errorMessage));
         callback(false);
    }
  };

