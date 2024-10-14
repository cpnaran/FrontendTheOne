import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  name: Yup.string().required("กรุณากรอกชื่อ-นามสกุล"),
  phoneNumber: Yup.string()
    .required("โปรดระบุเบอร์โทรศัพท์")
    .matches(/^0[0-9]{2}-[0-9]{3}-[0-9]{4}$/, "รูปแบบเบอร์โทรศัพท์ไม่ถูกต้อง"),
});
