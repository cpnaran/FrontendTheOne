import { FormikProps } from "formik";

export interface ReNewFormKeysProps {
    username: string;
    plate:string;
    phoneNumber:string;
    package:string;
  }


  export interface reNewFormProps extends FormikProps<ReNewFormKeysProps> {
    test:""
}