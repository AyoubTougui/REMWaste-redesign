import { steps } from "../../utils/consts";
import Header from "../header";
import MobileActions from "../mobile-actions";
import SideBar from "../sidebar";
import styles from "./layout.module.scss";

const Layout = ({ children, selectedSkip }) => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Header currentStep={steps[2]} canContinue={selectedSkip} />
        <div>{children}</div>
        <MobileActions currentStep={steps[2]} canContinue={selectedSkip} />
      </div>
      <SideBar selectedSkip={selectedSkip} />
    </div>
  );
};

export default Layout;
