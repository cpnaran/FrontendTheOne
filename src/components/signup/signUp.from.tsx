import { Form } from "formik";

import styles from "./signUp.from.module.css";
import { SignUpFormProps } from "./signUp.types";
import CustomButton from "../share/button/button";
import Input from "../share/input/input";
import CustomsSelect from "../share/customerSelect/customSelect";

const SignupForm = ({}: SignUpFormProps) => {
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
          placeholder="plate"
          className={styles.inputstyle}
        />
        <Input
          label="เบอร์โทร"
          type="text"
          id="phoneNumber"
          name="phoneNumber"
          placeholder="เบอร์โทร"
          className={styles.inputstyle}
        />
        <CustomsSelect
          label="เลือกแพ็คเกจ"
          name="package"
          placeholder="เลือกแพ็คเกจ"
          size="large"
          options={[
            { value: "option1", label: "Option 1" },
            { value: "option2", label: "Option 2" },
            { value: "option3", label: "Option 3" },
          ]}
          className={styles.inputstyle}
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
