import SectionWrapper from "../UtilComponents/SectionWrapper";
import styles from "./AboutText.module.css";
const AboutText = () => {
  const text =
    "My name is Muhammad Ali and I am a computer engineering major. Although,I have broad interests in technology in general, my deepest knowledge and passion lies in web development. I focus on building high quality and properly engineered web applications following best practices. I am always eager to learn and further expand my skill-set by taking on challenging tasks!";
  return (
    <SectionWrapper heading={"About me"} compClass={styles.containerDiv}>
      <p className={styles.text}>{text}</p>
    </SectionWrapper>
  );
};
export default AboutText;
