import styles from "./container.module.css";

const Container = ({ children }) => {
  return <div className={styles.parentConiatiner}>{children}</div>;
};

export default Container;
