import { useRouter } from "next/router";

import { RootState, useAppDispatch } from "@/src/redux/store";
import { signIn } from "@/src/redux/slices/signup/signupAction";
import { SignInRequest } from "@/src/redux/types/signupSlice.types";
import { useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import { getOptionPromotion } from "@/src/redux/slices/option/optionAction";
import { toast } from "react-toastify";
import { EditFormKeysProps } from "./edit.types";
import { EditRequest } from "@/src/redux/types/editSlice.types";
import { editUser } from "@/src/redux/slices/edit/editAction";
import { PAGE_TYPE } from "@/src/utils/type";

export const useEdit = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { userId, token } = router.query;

  const handleSubmit = (value: EditFormKeysProps) => {
    const request: EditRequest = {
      fullName: value.name,
      telNo: value.phoneNumber,
      userId: userId as string,
    };

    dispatch(
      editUser(request, (e) => {
        if (e) {
          router.push({
            pathname: `/confirm`,
             query:{
              page:PAGE_TYPE.EDIT
             } 
          });
        } else {
          toast.error("เกิดข้อผิดพลาด กรุณากรอกข้อมูลใหม่", {
            position: "top-right", // You can change position as needed
            autoClose: 5000, // Auto close after 5 seconds
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      })
    );
  };

  return {
    handleSubmit,
  };
};
