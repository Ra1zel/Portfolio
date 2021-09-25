import styles from "./Image.module.css";
import img from "../../imageSelf.jpg";
import Github from "../SVGs/Github";
import LinkedIn from "../SVGs/LinkedIn";
import Instagram from "../SVGs/Instagram";
const Image = () => {
  return (
    <div>
      <div className={styles.imageContainer}>
        <img src={img} alt="Muhammad Ali" className={styles.image} />
      </div>
      <div className={styles.row}>
        <Github />
        <LinkedIn />
        <Instagram />
      </div>
    </div>
  );
};
export default Image;
