import { Formik, FormikProps } from "formik";
import { SignUpFormKeysProps } from "./signUp.types";
import { initialValues } from "./signUp.utils";
import { validationSchema } from "./signUp.validation";
import SignupForm from "./signUp.from";
import styles from "./signUp.module.css";
import { useSignUp } from "./signUp.hooks";
import Image from "next/image";
const SignUpComponent: React.FC = () => {
  const { handleSubmit, modifiedPromotionOptions } = useSignUp();
  return (
    <div className={styles.container}>
      <div
        style={{
          width: "100%",
          position: "relative",
          justifyContent: "center",
          display: "flex",
          paddingTop: "24px",
        }}
      >
        <Image src={"/images/logo_one.png"} width={150} height={150} alt={""} />
      </div>
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
