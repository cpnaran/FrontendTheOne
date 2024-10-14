import { Formik, FormikProps } from "formik";
import styles from "./reNew.module.css";
import { initialValues } from "./reNew.utils";
import { ReNewFormKeysProps } from "./reNew.types";
import { validationSchema } from "./reNew.validation";
import ReNewForm from "./reNew.from";

const ReNewComponent: React.FC = () => {
  return (
    <div className={styles.container}>
      <h2>แบบฟอร์มต่อทะเบียนสมาชิก</h2>
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
          {(props: FormikProps<ReNewFormKeysProps>) => {
            return <ReNewForm test={""} {...props} />;
          }}
        </Formik>
      </div>
    </div>
  );
};

export default ReNewComponent;
