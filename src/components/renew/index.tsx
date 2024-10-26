import { Formik, FormikProps } from "formik";
import styles from "./reNew.module.css";
import { initialValues } from "./reNew.utils";
import { ReNewFormKeysProps } from "./reNew.types";
import { validationSchema } from "./reNew.validation";
import ReNewForm from "./reNew.from";
import { useRenew } from "./reNew.hooks";
import Image from "next/image";
import LoadingScreen from "../loadingScreen/loading";
const ReNewComponent: React.FC = () => {
  const { modifiedPromotionOptions, modifiedLicenseOptions, handleSubmit,loading } =
    useRenew();
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
      <h2>แบบฟอร์มต่อทะเบียนสมาชิก</h2>
      <h1>The ONE Parking</h1>
      <div className={styles.wrap}>
        <Formik
          enableReinitialize
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {(props: FormikProps<ReNewFormKeysProps>) => {
            return (
              <ReNewForm
                promotion={modifiedPromotionOptions}
                license={modifiedLicenseOptions}
                {...props}
              />
            );
          }}
        </Formik>
      </div>
      { loading && <LoadingScreen/>}
    </div>
  );
};

export default ReNewComponent;
