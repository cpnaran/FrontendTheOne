import MainFooter from "../share/mainFooter/mainFooter";
import { LayoutContainerProps } from "./layout.types";
import styles from "./layout.module.css";
import { useLayout } from "./layout.hooks";

const Layout: React.FC<LayoutContainerProps> = ({ children }) => {
  const {} = useLayout();
  return (
    <div className={styles.container}>
      <main>
        <div className={styles.content}>{children}</div>
      </main>
      <MainFooter />
    </div>
  );
};

export default Layout;
