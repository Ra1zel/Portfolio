import img from "../../communication.svg";
import img4 from "../../iteration.svg";
import img3 from "../../programming.svg";
import img2 from "../../thinking.svg";
import SectionWrapper from "../UtilComponents/SectionWrapper";
import Step from "./Step";
import styles from "./WorkSection.module.css";

const WorkSection = () => {
  const heading = "My Approach to solve your problems";
  const copy =
    "Detailed communication with the client to understand the business problem at hand.";
  const copy2 =
    "Come up with a well engineered solution and share my ideas with the client.";
  const copy3 =
    "I start development and communicate my progress to you at every checkpoint.";
  const copy4 =
    "I deliver the product. If you are unsatisfied I start all over again and this continues until you are 100% satisfied.";

  const stepArray = [
    [img, copy],
    [img2, copy2],
    [img3, copy3],
    [img4, copy4],
  ];
  return (
    <SectionWrapper heading={heading} compClass={styles.container}>
      <div className={styles.row}>
        {stepArray.map((item: string[], index: number) => {
          return (
            <div className={styles.temp} key={index}>
              <Step stepInfo={{ img: item[0], copy: item[1] }} />
              {index !== stepArray.length - 1 ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className={styles.arrowSym}
                >
                  <title>Arrow Forward</title>
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="48"
                    d="M268 112l144 144-144 144M392 256H100"
                  />
                </svg>
              ) : null}
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
};
export default WorkSection;
