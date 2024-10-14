import { FormikProps } from "formik";

export interface ReNewFormKeysProps {
    plate:string;
    package:string;
  }


  export interface reNewFormProps extends FormikProps<ReNewFormKeysProps> {
    test:""
}