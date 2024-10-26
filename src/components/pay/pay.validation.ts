import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  license: Yup.string().required("กรุณากรอกเลขทะเบียน"),
});
