import { Formik, FormikProps } from "formik";
import styles from "./changePlate.module.css";
import { validationSchema } from "./changePlate.validation";
import { ChangePlateFormKeysProps } from "./changePlate.types";
import ChangePlateForm from "./changePlate.from";
import { initialValues } from "./changePlate.utils";

const ChangePlateComponent: React.FC = () => {
  return (
    <div className={styles.container}>
      <h2>แบบฟอร์มเปลี่ยนทะเบียนรถ</h2>
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
          {(props: FormikProps<ChangePlateFormKeysProps>) => {
            return <ChangePlateForm test={""} {...props} />;
          }}
        </Formik>
      </div>
    </div>
  );
};

export default ChangePlateComponent;
