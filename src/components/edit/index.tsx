import { Formik, FormikProps } from "formik";
import styles from "./edit.module.css";
import { initialValues } from "./edit.utils";
import { validationSchema } from "./edit.validation";
import { EditFormKeysProps } from "./edit.types";
import EditForm from "./edit.from";
import Image from "next/image";
import { useEdit } from "./edit.hooks";
const EditComponent: React.FC = () => {
  const { handleSubmit } = useEdit();
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
      <h2>แบบฟอร์มแก้ไขข้อมูลสมาชิก</h2>
      <h1>The ONE Parking</h1>
      <div className={styles.wrap}>
        <Formik
          enableReinitialize
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
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
