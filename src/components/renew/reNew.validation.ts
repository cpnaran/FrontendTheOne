import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  plate: Yup.string().required("กรุณากรอกเลขทะเบียน"),
  package: Yup.string().required("กรุณาเลือกแพ็คเกจ"),
});
