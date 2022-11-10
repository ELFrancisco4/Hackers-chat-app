import styles from "../styles/side_nav.module.scss";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-regular-svg-icons";
import { faSignOut, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import AppLogo from "../atoms/AppLogo";
const Nav = ({ children }: any) => {
  return (
    <>
      <nav className={styles.nav}>
        <AppLogo />
        <ul>
          <li>
            <FontAwesomeIcon className={styles.icons} icon={faUserCircle} />{" "}
            <NavLink to={"/profile"}>Profile</NavLink>
          </li>
          <li>
            <FontAwesomeIcon className={styles.icons} icon={faUserGroup} />{" "}
            <NavLink to={"/chatroom"}>Chat room</NavLink>
          </li>
        </ul>
        <span>
          <FontAwesomeIcon className={styles.icons} icon={faSignOut} />
          <Link to={"/"}>Logout</Link>
        </span>
      </nav>
      {children}
    </>
  );
};

export default Nav;
