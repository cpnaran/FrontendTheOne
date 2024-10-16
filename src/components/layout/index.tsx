import MainFooter from "../share/mainFooter/mainFooter";
import { LayoutContainerProps } from "./layout.types";
import styles from "./layout.module.css";
import { useLayout } from "./layout.hooks";
import { ToastContainer } from "react-toastify";

const Layout: React.FC<LayoutContainerProps> = ({ children }) => {
  const {} = useLayout();
  return (
    <div className={styles.container}>
      <main>
        <div className={styles.content}>
          <div className={styles.headers} />
          {children}
        </div>
      </main>
      <MainFooter />
    </div>
  );
};

export default Layout;
