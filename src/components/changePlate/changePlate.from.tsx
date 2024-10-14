import { Form } from "formik";
import styles from "./changePlate.from.module.css";
import CustomButton from "../share/button/button";

import Input from "../share/input/input";
import { ChangePlateFormProps } from "./changePlate.types";
import CustomsSelect from "../share/customerSelect/customSelect";

const ChangePlateForm = ({}: ChangePlateFormProps) => {
  return (
    <Form className={styles.container}>
      <section>
        <CustomsSelect
          label="ทะเบียนรถเดิม"
          name="newPlate"
          placeholder="เลือกแพ็คเกจ"
          size="large"
          options={[
            { value: "option1", label: "Option 1" },
            { value: "option2", label: "Option 2" },
            { value: "option3", label: "Option 3" },
          ]}
          className={styles.inputstyle}
        />
        <Input
          label="ทะเบียนรถใหม่"
          type="text"
          id="plate"
          name="plate"
          placeholder="plate"
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

export default ChangePlateForm;
