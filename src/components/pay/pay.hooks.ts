import { getOptionLicense } from "@/src/redux/slices/option/optionAction";
import { RootState, useAppDispatch } from "@/src/redux/store";
import { OptionLicenseRequest, PACKAGE_TYPE } from "@/src/redux/types/optionSlice.types";
import { useRouter } from "next/router";
import { useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import { PayFormKeysProps } from "./pay.types";
import { PayRequest } from "@/src/redux/types/paySlice.types";
import { PaySubmit } from "@/src/redux/slices/pay/payAction";
import { PAGE_TYPE } from "@/src/utils/type";
import { toast } from "react-toastify";

export const usePay = () => {
  const router = useRouter();

  const dispatch = useAppDispatch();
  const { userId, token } = router.query;
  
  const optionLicense = useSelector(
    (state: RootState) => state.option.optionLicense
  );
   
  const loading = useSelector(
    (state:RootState) => state.pay.loading
  )

  useEffect(() => {
    const request: OptionLicenseRequest = {

        userId: userId as string,
      };
    dispatch(getOptionLicense(request, () => {}));
  }, []);

  const modifiedLicenseOptions = useMemo(() => {
    const modifiedOptions = optionLicense.map((opt) => ({
      value: opt.license,
      label: opt.license,
    }));
    return modifiedOptions;
  }, [optionLicense]);
  


  const handleSubmit = (value:PayFormKeysProps) => {
 
    const request: PayRequest = {
        license: value.license,   
        userId: userId as string,
    };

    dispatch(
        PaySubmit(request, (e) => {
        if (e) {
          router.push({
            pathname: `/confirm`,
            query: {
              page: PAGE_TYPE.PAY,
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

  return {
    modifiedLicenseOptions,
    handleSubmit,
    loading
  }
};
