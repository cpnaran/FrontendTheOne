import { getOptionLicense } from "@/src/redux/slices/option/optionAction";
import { RootState, useAppDispatch } from "@/src/redux/store";
import { OptionLicenseRequest } from "@/src/redux/types/optionSlice.types";
import { useRouter } from "next/router";
import { useEffect, useMemo } from "react";
import { useSelector } from "react-redux";

export const useChangePlate = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { userId, token } = router.query;
  const optionLicense = useSelector(
    (state: RootState) => state.option.optionLicense
  );

  const request: OptionLicenseRequest = {
    // userId: "U96b9e6e3c26bed9a42ef7ef4cd03e397"
    userId: userId as string,
  };
  const loading = useSelector((state: RootState) => state.pay.loading);

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
  return {
    modifiedLicenseOptions,
    loading,
  };
};
