import { Form } from "formik";

import styles from "./signUp.from.module.css";
import { SignUpFormProps } from "./signUp.types";
import CustomButton from "../share/button/button";
import Input from "../share/input/input";
import CustomsSelect from "../share/customerSelect/customSelect";
import { onChangeFormatPhoneNumber } from "@/src/utils/type";

const SignupForm = ({ setFieldValue, promotion }: SignUpFormProps) => {
  return (
    <Form className={styles.container}>
      <section>
        <Input
          label="ชื่อ-นามสกุล"
          type="text"
          id="username"
          name="username"
          placeholder="ชื่อ-นามสกุล"
          className={styles.inputstyle}
        />
        <Input
          label="ทะเบียนรถ"
          type="text"
          id="plate"
          name="plate"
          maxLength={7}
          placeholder="ตัวอย่าง ทก1234"
          className={styles.inputstyle}
        />
        <p className={styles.note}>
          * ไม่ต้องใส่จังหวัดของทะเบียนรถ ตัวอย่าง ทก1234
        </p>
        <Input
          label="เบอร์โทร"
          type="text"
          id="phoneNumber"
          name="phoneNumber"
          placeholder="เบอร์โทร"
          className={styles.inputstyle}
          onChange={(e) => {
            setFieldValue(
              "phoneNumber",
              onChangeFormatPhoneNumber(e.target.value)
            );
          }}
        />
        <CustomsSelect
          label="เลือกแพ็คเกจ"
          name="package"
          placeholder="เลือกแพ็คเกจ"
          size="large"
          options={promotion}
          className={styles.inputstyle}
          onChange={(e) => {
            console.log(e, "e");
          }}
        />
        <div className={styles.buttomstyle}>
          <CustomButton block={true} htmlType="submit" size="large">
            ยืนยัน
          </CustomButton>
        </div>
      </section>
    </Form>
  );
};

export default SignupForm;
