import { FormikProps } from "formik";
import { OptionType } from "../signup/signUp.types";

export interface ChangePlateFormKeysProps {
     plate:string;
     newPlate:string;
  }


  export interface ChangePlateFormProps extends FormikProps<ChangePlateFormKeysProps> {
     licenseOption :OptionType[]
}