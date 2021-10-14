import { NavLink } from "react-router-dom";
import styles from "./NavbarItem.module.css";
const NavbarItem: React.FC<{ text: string }> = (props) => {
  let linkText;
  if (props.text === "Home") {
    linkText = "/";
  } else {
    linkText = props.text;
  }
  return (
    <NavLink
      activeClassName={styles.active}
      exact={true}
      to={`${linkText}`}
      className={styles.link}
    >
      {props.text}
    </NavLink>
  );
};
export default NavbarItem;
