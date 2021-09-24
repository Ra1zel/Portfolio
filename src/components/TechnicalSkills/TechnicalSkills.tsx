import SectionWrapper from "../UtilComponents/SectionWrapper";
import img1 from "../../css.png";
import img2 from "../../cpp.svg";
import img3 from "../../html5.jpg";
import img4 from "../../javascript.svg";
import img5 from "../../typescript.svg";
import img6 from "../../react.png";
import img7 from "../../mongo.png";
import img8 from "../../redux.svg";
import img9 from "../../node1.png";
import img10 from "../../npm.png";

import styles from "./TechnicalSkills.module.css";
import Other from "./Other";
const TechnicalSkills = () => {
  const heading = "Technical Skills";
  const logos = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];
  const other = [
    "git",
    "GraphQL",
    "Next.js",
    "Passport.js",
    "Mongoose",
    "Express.js",
    "Bootstrap",
    "Firebase",
    "Apollo Client",
  ];
  return (
    <SectionWrapper heading={heading} compClass={styles.container}>
      <h2 className={styles.heading}>Major Technologies</h2>
      <div className={styles.row}>
        {logos.map((logo: string, index: number) => {
          return <img src={logo} key={index} className={styles.logo} alt="" />;
        })}
      </div>
      <h2 className={styles.heading}>Other</h2>
      <div className={styles.row}>
        <div className={styles.otherContainer}>
          {other.map((item: string, index: number) => {
            return <Other text={item} key={index} />;
          })}
        </div>
      </div>
    </SectionWrapper>
  );
};
export default TechnicalSkills;
