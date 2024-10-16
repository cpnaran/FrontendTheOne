import { Formik, FormikProps } from "formik";
import { SignUpFormKeysProps } from "./signUp.types";
import { initialValues } from "./signUp.utils";
import { validationSchema } from "./signUp.validation";
import SignupForm from "./signUp.from";
import styles from "./signUp.module.css";
import { useSignUp } from "./signUp.hooks";

const SignUpComponent: React.FC = () => {
  const { handleSubmit, modifiedPromotionOptions } = useSignUp();
  return (
    <div className={styles.container}>
      <h1>The ONE Parking</h1>
      <h2>แบบฟอร์มสมัครสมาชิก</h2>
      <div className={styles.wrap}>
        <Formik
          enableReinitialize
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {(props: FormikProps<SignUpFormKeysProps>) => {
            return (
              <SignupForm promotion={modifiedPromotionOptions} {...props} />
            );
          }}
        </Formik>
      </div>
    </div>
  );
};

export default SignUpComponent;
