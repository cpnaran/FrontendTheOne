import { Formik, FormikProps } from "formik";
import styles from "./pay.module.css";
import Image from "next/image";
import { PayFormKeysProps } from "./pay.types";
import { initialValues } from "./pay.utils";
import { validationSchema } from "./pay.validation";
import { usePay } from "./pay.hooks";
import PayForm from "./pay.from";
import LoadingScreen from "../loadingScreen/loading";

const PayComponent: React.FC = () => {
  const { handleSubmit, modifiedLicenseOptions,  loading } = usePay();
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
          onSubmit={handleSubmit}
        >
          {(props: FormikProps<PayFormKeysProps>) => {
            return (
              <PayForm licenseOption={modifiedLicenseOptions} {...props} />
            );
          }}
        </Formik>
      </div>
      { loading && <LoadingScreen/>}
    </div>
  );
};

export default PayComponent;
