import React from "react";
import { useRef, useState } from "react";
import styles from "./Service.module.css";
const Service: React.FC<{
  label: string;
  content: string;
  imgURL: string;
}> = (props, ref) => {
  const [toggle, setToggle] = useState(false);
  const content = useRef<HTMLDivElement>(null);
  const head = useRef<HTMLDivElement>(null);
  const expandToggler = () => {
    setToggle((prevState: boolean) => {
      return !prevState;
    });
  };
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
            width: head.current ? head.current!.clientWidth + 45 : "auto",
          }}
        >
          {props.content}
        </p>
      </div>
    </div>
  );
};
export default Service;
