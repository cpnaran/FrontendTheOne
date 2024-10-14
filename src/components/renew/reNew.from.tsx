import { Form } from "formik";

import styles from "./reNew.from.module.css";

import CustomButton from "../share/button/button";
import CustomsSelect from "../share/customerSelect/customSelect";
import { reNewFormProps } from "./reNew.types";

const ReNewForm = ({}: reNewFormProps) => {
  return (
    <Form className={styles.container}>
      <section>
        <CustomsSelect
          label="ทะเบียนรถ"
          name=" plate"
          placeholder="เลือกทะเบียนรถ"
          size="large"
          options={[
            { value: "option1", label: "Option 1" },
            { value: "option2", label: "Option 2" },
            { value: "option3", label: "Option 3" },
          ]}
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

export default ReNewForm;
