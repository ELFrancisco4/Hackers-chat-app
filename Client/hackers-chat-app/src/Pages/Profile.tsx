import Description from "../components/Profile/molecules/Description";
import ProfilePhoto from "./../components/Profile/atoms/ProfilePhoto";
import { Navigate } from "react-router-dom";
import styles from "../styles/pages/profile.module.scss";
import Nav from "../components/Side Nav/molecules/Nav";

const Profile = () => {
  return (
    <Nav>
      <div className={styles.profile}>
        <ProfilePhoto
          src={require("../Assets/profile-pic (3).jpg")}
          alt="Profile Photo"
        />
        <Description
          description="Ethical Hacker, Pentester, CTF Player"
          displayName="Striker Vlahovic"
        />
      </div>
    </Nav>
  );
};

export default Profile;
