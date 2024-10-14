import { FormikProps } from "formik";

export interface EditFormKeysProps {
     name:string;
      phoneNumber:string;
  }


  export interface EditFormProps extends FormikProps<EditFormKeysProps> {
    test:""
}