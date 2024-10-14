import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  username: Yup.string().required("กรุณากรอกชื่อ"),
  plate: Yup.string().required("กรุณากรอกเลขทะเบียน"),
  package: Yup.string().required("กรุณาเลือกแพ็คเกจ"),
 phoneNumber: Yup.string()
    .required("โปรดระบุเบอร์โทรศัพท์")
    .matches(/^0[0-9]{2}-[0-9]{3}-[0-9]{4}$/, "รูปแบบเบอร์โทรศัพท์ไม่ถูกต้อง"),
});
