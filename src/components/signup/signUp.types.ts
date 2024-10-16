import { FormikProps } from "formik";

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
  label:string;
}
