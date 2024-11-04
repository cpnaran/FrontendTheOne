import { useRouter } from "next/router";
import { SignUpFormKeysProps } from "./signUp.types";
import { RootState, useAppDispatch } from "@/src/redux/store";
import { signIn } from "@/src/redux/slices/signup/signupAction";
import { SignInRequest } from "@/src/redux/types/signupSlice.types";
import { useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import { getOptionPromotion } from "@/src/redux/slices/option/optionAction";
import { toast } from "react-toastify";
import { PAGE_TYPE } from "@/src/utils/type";
import { PACKAGE_TYPE } from "@/src/redux/types/optionSlice.types";
import styles from "./signUp.from.module.css";
export const useSignUp = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { userId, token } = router.query;
  const optionPromotion = useSelector(
    (state: RootState) => state.option.optionPackage
  );
  const loading = useSelector((state: RootState) => state.signup.loading);

  useEffect(() => {
    dispatch(getOptionPromotion(() => {}));
  }, []);
  const handleSubmit = (value: SignUpFormKeysProps) => {
    console.log(value.package, "value.package");
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
            query: {
              page: PAGE_TYPE.SUBMIT,
            },
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
      label:
        opt.packageType === PACKAGE_TYPE.PROMOTION ? (
          <span className={styles.customOption}>
            <p>{opt.packageType} </p>
            {opt.package}
            {opt.amount} บาท
          </span>
        ) : (
          <span>
            {opt.package}
            {opt.amount} บาท
          </span>
        ),
    }));
    return modifiedOptions;
  }, [optionPromotion]);
  return {
    handleSubmit,
    modifiedPromotionOptions,
    loading,
  };
};
