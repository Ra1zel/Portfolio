import styles from "./SectionWrapper.module.css";
const SectionWrapper: React.FC<{ heading: string; compClass: string }> = (
  props
) => {
  return (
    <div className={`${styles.sectionWrapper} ${props.compClass}`}>
      <h1 className={styles.sectionHeading}>{props.heading}</h1>
      {props.children}
    </div>
  );
};

export default SectionWrapper;
