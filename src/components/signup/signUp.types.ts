import { PACKAGE_TYPE } from "@/src/redux/types/optionSlice.types";
import { FormikProps } from "formik";
import { ReactNode } from "react";

export interface SignUpFormKeysProps {
    username: string;
    plate:string;
    phoneNumber:string;
    package:string;
  }


  export interface SignUpFormProps extends FormikProps<SignUpFormKeysProps> {
     promotion:OptionType[]

}


export interface OptionType {
  value: string;
  label:ReactNode;

}
