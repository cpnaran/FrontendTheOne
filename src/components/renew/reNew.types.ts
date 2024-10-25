import { FormikProps } from "formik";
import { OptionType } from "../signup/signUp.types";

export interface ReNewFormKeysProps {
    plate:string;
    package:string;
  }


  export interface ReNewFormProps extends FormikProps<ReNewFormKeysProps> {
      promotion:OptionType[]
      license:OptionType[]
}


 