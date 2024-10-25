import { Form } from "formik";

import styles from "./reNew.from.module.css";

import CustomButton from "../share/button/button";
import CustomsSelect from "../share/customerSelect/customSelect";
import { ReNewFormProps } from "./reNew.types";

const ReNewForm = ({ promotion, license }: ReNewFormProps) => {
  return (
    <Form className={styles.container}>
      <section>
        <CustomsSelect
          label="ทะเบียนรถ"
          name="plate"
          placeholder="เลือกทะเบียนรถ"
          size="large"
          options={license}
          className={styles.inputstyle}
        />
        <CustomsSelect
          label="เลือกแพ็คเกจ"
          name="package"
          placeholder="เลือกแพ็คเกจ"
          size="large"
          options={promotion}
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
