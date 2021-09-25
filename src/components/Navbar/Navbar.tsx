import React from "react";
import NavbarItem from "./NavbarItem";
import styles from "./Navbar.module.css";
const Navbar = () => {
  const navOptions = ["About", "Work"];
  return (
    <ul className={styles.navbarMain}>
      {navOptions.map((option: string, index: number) => {
        return (
          <li className={styles.item} key={index}>
            <NavbarItem text={option} />
          </li>
        );
      })}
    </ul>
  );
};
export default Navbar;
