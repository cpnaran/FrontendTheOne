import api from "@/src/api";
import getConfig from "next/config";
import { AppThunk } from "../../store";
import { signInStart, signInSuccess, signInFailure } from "./signupSlice";
import { SignInRequest } from "../../types/signupSlice.types";

const {
  publicRuntimeConfig: {
    NEXT_PUBLIC_API_BASE_URL,
    
  },
} = getConfig();


export const signIn =
  (request: SignInRequest, callback: (check:boolean) => void): AppThunk =>
  async (dispatch) => {
    dispatch(signInStart());
    console.log(request.userId,"request")
    try {
      await api.post(
          `${NEXT_PUBLIC_API_BASE_URL}/user/submit/?userId=${request.userId}&token=${request.token}`,
          {
          fullName : request.fullName,
          telNo: request.telNo,
          packageId: "30d27f15-0ace-4263-b789-1c851d15bc5c",
          license: request.license,
  
          },
          
        ); 
        console.log(NEXT_PUBLIC_API_BASE_URL,"NEXT_PUBLIC_API_BASE_URL")
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
