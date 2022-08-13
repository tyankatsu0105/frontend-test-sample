import styles from "./index.module.scss";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <div>
        <h1>aa</h1>
        <p className={styles.error}>error</p>
        <p className={styles.warn}>warn</p>
        <p data-level="info">info</p>
      </div>
    </div>
  );
};

export default Home;
