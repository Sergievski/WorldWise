import styles from "./Sidebar.module.css";
import Footer from "./Footer";
import Logo from "./Logo";
import AppNav from "./AppNav";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />
      <p>List of cities</p>

      <Footer footer={styles.footer} copyright={styles.copyright} />
    </div>
  );
}

export default Sidebar;
