import styles from "../styles/pages/signup.module.scss";
import Form from "../components/Login/molecules/Form";
import FormInput from "../components/Login/atoms/FormInput";

const SignIn = () => {
  return (
    <div className={styles.container}>
      <Form >
        <h1>Create New Account</h1>
        <FormInput
          
          type={"text"}
          placeHolder={"Enter your display name"}
        />
        <FormInput
          type={"email"}
          placeHolder={"Email Address"}
        />

        <FormInput
          type={"password"}
          placeHolder={"Super secret password"}
        />
        <input
          className={styles.create_account}
          type={"submit"}
          value="Create Account"
        />
      </Form>
    </div>
  );
};

export default SignIn;
