import { Formik, FormikProps } from "formik";
import styles from "./edit.module.css";
import { initialValues } from "./edit.utils";
import { validationSchema } from "./edit.validation";
import { EditFormKeysProps } from "./edit.types";
import EditForm from "./edit.from";

const EditComponent: React.FC = () => {
  return (
    <div className={styles.container}>
      <h2>แบบฟอร์มแก้ไขข้อมูลสมาชิก</h2>
      <h1>The ONE Parking</h1>
      <div className={styles.wrap}>
        <Formik
          enableReinitialize
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(e) => {
            console.log(e, "Dsdsd");
          }}
        >
          {(props: FormikProps<EditFormKeysProps>) => {
            return <EditForm test={""} {...props} />;
          }}
        </Formik>
      </div>
    </div>
  );
};

export default EditComponent;
