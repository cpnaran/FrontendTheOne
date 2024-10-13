import { Form } from "formik";

import styles from "./signUp.from.module.css";
import { SignUpFormProps } from "./signUp.types";
import CustomsInput from "../share/input/input";
import CustomButton from "../share/button/button";
import Input from "../share/input/input";

const SignupForm = ({}: SignUpFormProps) => {
  return (
    <Form className={styles.container}>
      <section>
        <Input
          label="ชื่อ-นามสกุล"
          type="text"
          id="password"
          name="username"
          placeholder="ชื่อ-นามสกุล"
          className={styles.inputstyle}
          onChange={(e) => {
            console.log(e, "test");
          }}
        />
        <Input
          label="ทะเบียนรถ"
          type="text"
          id="password"
          name="password"
          placeholder="plate"
          className={styles.inputstyle}
        />
        <Input
          label="เบอร์โทร"
          type="text"
          id="phone"
          name="phone"
          placeholder="phone"
          className={styles.inputstyle}
          onChange={(e) => {
            console.log(e, "test");
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
