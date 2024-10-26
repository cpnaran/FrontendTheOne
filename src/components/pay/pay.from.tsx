import { Form } from "formik";

import styles from "./pay.from.module.css";

import CustomButton from "../share/button/button";
import CustomsSelect from "../share/customerSelect/customSelect";
import { PayFormProps } from "./pay.types";


const PayForm = ({  licenseOption }: PayFormProps) => {
  return (
    <Form className={styles.container}>
      <section>
        <CustomsSelect
          label="ทะเบียนรถ"
          name="plate"
          placeholder="เลือกทะเบียนรถ"
          size="large"
          options={licenseOption}
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

export default PayForm;
