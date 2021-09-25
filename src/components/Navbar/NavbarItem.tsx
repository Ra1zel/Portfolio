import { Link } from "react-router-dom";
import styles from "./NavbarItem.module.css";
const NavbarItem: React.FC<{ text: string }> = (props) => {
  return (
    <Link to={`${props.text}`} className={styles.link}>
      {props.text}
    </Link>
  );
};
export default NavbarItem;
