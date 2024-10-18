import { useRouter } from "next/router";
import { SignUpFormKeysProps } from "./signUp.types";
import { RootState, useAppDispatch } from "@/src/redux/store";
import { signIn } from "@/src/redux/slices/signup/signupAction";
import { SignInRequest } from "@/src/redux/types/signupSlice.types";
import { useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import { getOptionPromotion } from "@/src/redux/slices/option/optionAction";
import { toast } from "react-toastify";

export const useSignUp = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { userId, token } = router.query;
  const optionPromotion = useSelector(
    (state: RootState) => state.option.optionPackage
  );
  useEffect(() => {
    dispatch(getOptionPromotion(() => {}));
  }, []);
  const handleSubmit = (value: SignUpFormKeysProps) => {
    const request: SignInRequest = {
      fullName: value.username,
      telNo: value.phoneNumber,
      packageId: value.package,
      license: value.plate,
      userId: userId as string,
      token: token as string,
    };
    
    dispatch(
      signIn(request, (e) => {
        if (e) {
          router.push({
            pathname: `/confirm`,
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

  const modifiedPromotionOptions = useMemo(() => {
    const modifiedOptions = optionPromotion.map((opt) => ({
      value: opt.id,
      label: opt.package + " "+ opt.amount + " "+ "บาท",
    }));
    return modifiedOptions;
  }, [optionPromotion]);
  return {
    handleSubmit,
    modifiedPromotionOptions,
  };
};
