import AboutText from "../components/AboutText/AboutText";

import Introduction from "../components/Introduction/Introduction";
import Image from "../components/Image/Image";
import styles from "./About.module.css";
import Navbar from "../components/Navbar/Navbar";
import WorkSection from "../components/WorkApproach/WorkSection";
import TechnicalSkills from "../components/TechnicalSkills/TechnicalSkills";
import Services from "../components/Services/Services";
const About = () => {
  return (
    <div>
      <Navbar />
      <div className={styles.introContainer}>
        <Image />
        <Introduction />
      </div>
      <AboutText />
      <WorkSection />
      <TechnicalSkills />
      <Services />
    </div>
  );
};
export default About;
