import styles from "./Step.module.css";
const Step: React.FC<{
  stepInfo: {
    img: string;
    copy: string;
  };
}> = (props) => {
  return (
    <div>
      <img
        src={props.stepInfo.img}
        alt="communication"
        className={styles.img}
      />
      <div className={styles.stepTextContainer}>
        <p className={styles.stepText}>{props.stepInfo.copy}</p>
      </div>
    </div>
  );
};
export default Step;
