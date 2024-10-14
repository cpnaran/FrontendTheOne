import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  plate: Yup.string().required("กรุณากรอกเลขทะเบียนรถเดิม"),
  newPlate: Yup.string().required("กรุณากรอกเลขทะเบียนรถใหม่"),
 
});
