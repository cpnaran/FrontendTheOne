import { Formik, FormikProps } from "formik";
import styles from "./pay.module.css";
import Image from "next/image";
import { PayFormKeysProps } from "./pay.types";
import { initialValues } from "./pay.utils";
import { validationSchema } from "./pay.validation";

const PayComponent: React.FC = () => {
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
      <h2>แบบจ่ายค่าปรับ</h2>
      <h1>The ONE Parking</h1>
      <div className={styles.wrap}>
        <Formik
          enableReinitialize
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={() => {}}
        >
          {(props: FormikProps<PayFormKeysProps>) => {
            return (
              <></>
              // <ReNewForm
              //   promotion={modifiedPromotionOptions}
              //   license={modifiedLicenseOptions}
              //   {...props}
              // />
            );
          }}
        </Formik>
      </div>
    </div>
  );
};

export default PayComponent;
