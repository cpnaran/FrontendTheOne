import { getOptionLicense } from "@/src/redux/slices/option/optionAction";
import { RootState, useAppDispatch } from "@/src/redux/store";
import { OptionLicenseRequest } from "@/src/redux/types/optionSlice.types";
import { useRouter } from "next/router";
import { useEffect, useMemo } from "react";
import { useSelector } from "react-redux";

export const usePay = () => {
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
    // userId: "U96b9e6e3c26berd9a42ef7ef4cd03e397"
    userId: userId as string,
  };

  useEffect(() => {
    dispatch(getOptionLicense(request, () => {}));
  }, []);

  const modifiedLicenseOptions = useMemo(() => {
    const modifiedOptions = optionLicense.map((opt) => ({
      value: opt.license,
      label: opt.license,
    }));
    return modifiedOptions;
  }, [optionLicense]);


  return {
    modifiedLicenseOptions
  }
};
