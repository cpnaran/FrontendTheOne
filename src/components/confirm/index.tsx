import styles from "./confirm.module.css";

const ConfirmComponent = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.checkmarkContainer}>
          <i>✓</i>
        </div>
        <h1>Success</h1>
        <p>
          สมัครเรียบร้อยแล้ว <br />
          กรุณาสแกน qrcode ใน line
        </p>
      </div>
    </div>
  );
};

export default ConfirmComponent;
