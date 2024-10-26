import { FormikProps } from "formik";
import { OptionType } from "../signup/signUp.types";

export interface PayFormKeysProps {
    license:string;
  }


  export interface PayFormProps extends FormikProps<PayFormKeysProps> {
    licenseOption :OptionType[]
}


 