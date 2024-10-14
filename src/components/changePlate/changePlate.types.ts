import { FormikProps } from "formik";

export interface ChangePlateFormKeysProps {
     plate:string;
     newPlate:string;
  }


  export interface ChangePlateFormProps extends FormikProps<ChangePlateFormKeysProps> {
    test:""
}