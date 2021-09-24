import React from "react";
import { useRef, useState, useImperativeHandle } from "react";
import styles from "./Service.module.css";
const Service: React.FC<{
  label: string;
  content: string;
  imgURL: string;
  test: string;
}> = (props, ref) => {
  const [toggle, setToggle] = useState(false);
  const content = useRef<HTMLDivElement>(null);
  console.log(content);
  const expandToggler = () => {
    console.log("this was hit!");
    setToggle((prevState: boolean) => {
      console.log(props.test);
      return !prevState;
    });
  };
  return (
    <div className={styles.service}>
      <div className={styles.label}>
        {props.label}
        <img
          src={props.imgURL}
          alt="down symbol"
          className={styles.img}
          onClick={expandToggler}
        ></img>
      </div>
      <div
        ref={content}
        className={styles.content}
        style={{
          height: toggle ? `${content.current!.scrollHeight}px` : "0",
        }}
      >
        <p>{props.content}</p>
      </div>
    </div>
  );
};
export default Service;
