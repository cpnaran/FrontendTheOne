import { PAGE_TYPE } from "@/src/utils/type";
import { useConfirm } from "./confirm.hooks";
import styles from "./confirm.module.css";

const ConfirmComponent = () => {
  const { page } = useConfirm();
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.checkmarkContainer}>
          <i>✓</i>
        </div>
        <h1>Success</h1>

        {page === PAGE_TYPE.SUMMIT && (
          <p>
            สมัครเรียบร้อยแล้ว <br />
            กรุณาสแกน qrcode จ่ายเงิน ใน Line
          </p>
        )}
        {page === PAGE_TYPE.EDIT && (
          <p>
            แก้ไขเรียบร้อยแล้ว <br />
          </p>
        )}
      </div>
    </div>
  );
};

export default ConfirmComponent;
