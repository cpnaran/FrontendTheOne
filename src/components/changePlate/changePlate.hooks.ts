import { changePlateUser } from "@/src/redux/slices/changePlate/changePlateAction";
import { editUser } from "@/src/redux/slices/edit/editAction";
import { getOptionLicense } from "@/src/redux/slices/option/optionAction";
import { RootState, useAppDispatch } from "@/src/redux/store";
import { OptionLicenseRequest } from "@/src/redux/types/optionSlice.types";
import { PAGE_TYPE } from "@/src/utils/type";
import { useRouter } from "next/router";
import { useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { ChangePlateFormKeysProps } from "./changePlate.types";
import { ChangePlateRequest } from "@/src/redux/types/changePlateSlice.types";

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
    if (userId) {
      dispatch(getOptionLicense(request, () => {}));
    }
  }, [userId]);

 

  const modifiedLicenseOptions = useMemo(() => {
    const modifiedOptions = optionLicense.map((opt) => ({
      value: opt.license,
      label: opt.license,
    }));
    return modifiedOptions;
  }, [optionLicense]);


const handleSubmit = (value: ChangePlateFormKeysProps) => {
    const request: ChangePlateRequest = {
      userId: userId as string,
      oldLicense: value.plate,
      newLicense: value.newPlate
    };

    dispatch(
     changePlateUser(request, (e,error) => {
        if (e) {
          router.push({
            pathname: `/confirm`,
             query:{
              page:PAGE_TYPE.CHANGEPLATE
             } 
          });
        } else {
          toast.error(error, {
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
    loading,
    handleSubmit
  };
};
