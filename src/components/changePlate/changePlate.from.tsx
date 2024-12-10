import { Form } from "formik";
import styles from "./changePlate.from.module.css";
import CustomButton from "../share/button/button";

import Input from "../share/input/input";
import { ChangePlateFormProps } from "./changePlate.types";
import CustomsSelect from "../share/customerSelect/customSelect";

const ChangePlateForm = ({ licenseOption }: ChangePlateFormProps) => {
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
        <Input
          label="ทะเบียนรถใหม่"
          type="text"
          id="newPlate"
          name="newPlate"
          placeholder="ตัวอย่าง ทก1234 "
          className={styles.inputstyle}
        />
        <div className={styles.buttomstyle}>
          <CustomButton block={true} htmlType="submit" size="large">
            ยืนยัน
          </CustomButton>
        </div>
        <div className={styles.remark}>
          <p>หมายเหตุ : ต้องนำรถออกจากที่จอดก่อนทำการเปลี่ยนทะเบียน</p>
        </div>
      </section>
    </Form>
  );
};

export default ChangePlateForm;
