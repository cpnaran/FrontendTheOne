import { Form } from "formik";
import styles from "./edit.from.module.css";
import CustomButton from "../share/button/button";
import { EditFormProps } from "./edit.types";
import Input from "../share/input/input";
import { onChangeFormatPhoneNumber } from "@/src/utils/type";

const EditForm = ({ setFieldValue }: EditFormProps) => {
  return (
    <Form className={styles.container}>
      <section>
        <Input
          label="ชื่อ-นามสกุล"
          type="text"
          id="name"
          name="name"
          placeholder="ชื่อ-นามสกุล"
          className={styles.inputstyle}
        />

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
        <div className={styles.buttomstyle}>
          <CustomButton block={true} htmlType="submit" size="large">
            ยืนยัน
          </CustomButton>
        </div>
      </section>
    </Form>
  );
};

export default EditForm;
