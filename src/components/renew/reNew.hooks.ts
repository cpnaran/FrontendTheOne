import { useRouter } from "next/router";
import { RootState, useAppDispatch } from "@/src/redux/store";
import { useEffect, useMemo } from "react";
import {
  getOptionLicense,
  getOptionPromotion,
} from "@/src/redux/slices/option/optionAction";
import { OptionLicenseRequest } from "@/src/redux/types/optionSlice.types";
import { useSelector } from "react-redux";
import { ReNewFormKeysProps } from "./reNew.types";
import { RenewRequest } from "@/src/redux/types/renewSlice.types";
import { reNewSubmit } from "@/src/redux/slices/renew/renewAction";
import { PAGE_TYPE } from "@/src/utils/type";
import { toast } from "react-toastify";

export const useRenew = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { userId, token } = router.query;
  const optionPromotion = useSelector(
    (state: RootState) => state.option.optionPackage
  );
  const optionLicense = useSelector(
    (state: RootState) => state.option.optionLicense
  );
  const request: OptionLicenseRequest = {
    // userId: "U96b9e6e3c26bed9a42ef7ef4cd03e397"
    userId: userId as string,
  };

const loading = useSelector(
  (state: RootState) => state.renew.loading
)

  useEffect(() => {
    dispatch(getOptionLicense(request, () => {}));
    dispatch(getOptionPromotion(() => {}));
  }, []);

  const handleSubmit = (value: ReNewFormKeysProps) => {
    const request: RenewRequest = {
      packageId: value.package,
      license: value.plate,
      userId: userId as string,
    };

    dispatch(
      reNewSubmit(request, (e) => {
        if (e) {
          router.push({
            pathname: `/confirm`,
            query: {
              page: PAGE_TYPE.RENEW,
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
      label: opt.package + " " + opt.amount + " " + "บาท",
    }));
    return modifiedOptions;
  }, [optionPromotion]);

  const modifiedLicenseOptions = useMemo(() => {
    const modifiedOptions = optionLicense.map((opt) => ({
      value: opt.license,
      label: opt.license,
    }));
    return modifiedOptions;
  }, [optionLicense]);
  return {
    modifiedPromotionOptions,
    modifiedLicenseOptions,
    handleSubmit,
    loading
  };
};
