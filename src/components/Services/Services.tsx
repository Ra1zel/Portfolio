import SectionWrapper from "../UtilComponents/SectionWrapper";
import styles from "./Services.module.css";
import img1 from "../../down.svg";
import Service from "./Service";
import React from "react";
const Services = () => {
  const obj1 = {
    label: "Full-Stack Development",
    test: "ho",
    content:
      "Responsible for development of the entire product including database management, setting up RESTful routes, building the entire user interface as well as deployment. ",
  };
  const obj2 = {
    label: "API Development",
    test: "yo",
    content:
      "Building the entire backend of your product inlcuding setting up RESTful routes , and ensuring the code is performant and scalable.",
  };
  const arr = [obj1, obj2];
  return (
    <SectionWrapper compClass={styles.container} heading="Services">
      <div className={styles.servicesContainer}>
        {arr.map((item, index: number) => {
          return (
            <Service
              key={index}
              label={item.label}
              content={item.content}
              imgURL={img1}
              test={item.test}
            />
          );
        })}
      </div>
    </SectionWrapper>
  );
};
export default Services;
