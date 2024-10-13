import { FormikProps } from "formik";

export interface SignUpFormKeysProps {
    username: string;
    password: string;
  }


  export interface SignUpFormProps extends FormikProps<SignUpFormKeysProps> {

}