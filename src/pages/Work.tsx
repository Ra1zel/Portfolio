import Navbar from "../components/Navbar/Navbar";
import styles from "./Work.module.css";
const Work = () => {
  return (
    <div>
      <Navbar />
      <h2 className={styles.heading}>E-Commerce SPA</h2>
      <div className={styles.container}>
        <p className={styles.content}>
          Ecommerce Website made using React and Context API. Firebase Rest API
          used for backend. Users can make an account and place their orders.
        </p>
        <div className={styles.linkContainer}>
          <a className={styles.link}>github</a>
          <a className={styles.link}>Deployed</a>
        </div>
      </div>
    </div>
  );
};
export default Work;
