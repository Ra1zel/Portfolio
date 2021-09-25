import React, { useEffect } from "react";
import { useRef, useState } from "react";
import styles from "./Service.module.css";
const Service: React.FC<{
  label: string;
  content: string;
  imgURL: string;
}> = (props, ref) => {
  const [toggle, setToggle] = useState(false);
  const [serviceHeight, setserviceHeight] = useState("auto");
  const content = useRef<HTMLDivElement>(null);
  const head = useRef<HTMLDivElement>(null);
  const expandToggler = () => {
    setToggle((prevState: boolean) => {
      return !prevState;
    });
  };
  useEffect(() => {
    console.log("this was hit1111");
    setserviceHeight((prevState) => {
      return (head.current!.clientWidth + 50).toString();
    });
  }, []);
  console.log(serviceHeight);
  return (
    <div className={styles.service}>
      <div ref={head} className={`${styles.label}`}>
        {props.label}
        <img
          src={props.imgURL}
          alt="down symbol"
          className={styles.img}
          onClick={expandToggler}
          style={{
            transform: toggle ? "rotate(180deg)" : "",
          }}
        ></img>
      </div>
      <div
        ref={content}
        className={styles.content}
        style={{
          height: toggle ? `${content.current!.scrollHeight}px` : "0",
        }}
      >
        <p
          style={{
            width: `${serviceHeight}px`,
          }}
        >
          {props.content}
        </p>
      </div>
    </div>
  );
};
export default Service;
