import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import Form from "../components/Login/molecules/Form";
import FormInput from "../components/Login/atoms/FormInput";
import {Link} from 'react-router-dom';
import styles from '../styles/pages/login.module.scss'

const Login = () => {
  return (
    <div className={styles.container}>
      <Form >
        <h1>Log in to BEARS26 chat application</h1>
        <label htmlFor="email">Email address</label>
        <FormInput  placeHolder={"Enter your Email"} type={"email"}/>

        <label htmlFor="password">Password</label>
        <FormInput  placeHolder={"Enter your password"} type={"password"}/>

        <div className={styles.remember_password}>
          <input type="checkbox" className={styles.checkbox} />
          <p>Remember password</p>
        </div>
        <input type={"submit"} value="Sign Up" className={styles.sign_up} />
        <p>
          No account?
          <Link to={'/signUp'}>
            Sign Up
          </Link> 
        </p>
        Or
        <div className={styles.google_auth}>
          <FontAwesomeIcon icon={faGoogle} /> Log in with google
        </div>
      </Form>
    </div>
  );
};



export default Login;
