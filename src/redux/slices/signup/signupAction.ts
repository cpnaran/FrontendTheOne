import api from "@/src/api";
import { AppThunk } from "../../store";
import { signInStart, signInSuccess, signInFailure } from "./signupSlice";
import { SignInRequest } from "../../types/signupSlice.types";

const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

export const signIn =
  (request: SignInRequest, callback: (check:boolean) => void): AppThunk =>
  async (dispatch) => {
    dispatch(signInStart());
    console.log(request.userId,"request")
    try {
      await api.post(
          `${apiBaseUrl}/user/submit/?userId=${request.userId}&token=${request.token}`,
          {
          fullName : request.fullName,
          telNo: request.telNo,
          packageId: request.packageId,
          license: request.license,
  
          },
          
        ); 
        console.log(apiBaseUrl,"NEXT_PUBLIC_API_BASE_URL")
        dispatch(signInSuccess());
        callback(true);
      
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.message || "An error occurred.";
      console.error(error);
      dispatch(signInFailure(errorMessage));
         callback(false);
    }
  };
