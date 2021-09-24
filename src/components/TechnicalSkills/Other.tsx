import styles from "./Other.module.css";
const Other: React.FC<{ text: string }> = (props) => {
  return <div className={styles.otherContainer}>{props.text}</div>;
};
export default Other;
