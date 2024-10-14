import { Formik, FormikProps } from "formik";
import { SignUpFormKeysProps } from "./signUp.types";
import { initialValues } from "./signUp.utils";
import { validationSchema } from "./signUp.validation";
import SignupForm from "./signUp.from";
import styles from "./signUp.module.css";

const SignUpComponent: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1>The ONE Parking</h1>
      <h2>แบบฟอร์มสมัครสมาชิก</h2>
      <div className={styles.wrap}>
        <Formik
          enableReinitialize
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(e) => {
            console.log(e, "Dsdsd");
          }}
        >
          {(props: FormikProps<SignUpFormKeysProps>) => {
            return <SignupForm test={""} {...props} />;
          }}
        </Formik>
      </div>
    </div>
  );
};

export default SignUpComponent;
