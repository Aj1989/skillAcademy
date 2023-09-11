import SignUpComponent from "../signupPage/signupPage";
import classes from "./LoginComponent.module.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const LoginComponent = () => {
  const username = {
    type: "text",
    name: "username",
    id: "username",
    className: classes.loginInput,
  };
  const password = {
    type: "password",
    name: "password",
    id: "password",
    className: classes.loginInput,
  };

  const navigate = useNavigate();

  function onSubmitLogin(e) {
    e.preventDefault();
    navigate("/HomePage");
  }
  return (
    <div className={classes.LoginComponentDiv}>
      <form>
        <h2 className={classes.formHeading}>Sign In</h2>
        <div>
          <label htmlFor="username">USERNAME</label>
          <br />
          <input {...username}></input>
        </div>
        <div>
          <label htmlFor="password">PASSWORD</label>
          <br />
          <input {...password}></input>
        </div>

        <div className={classes.buttonDiv}>
          <button
            type="submit"
            className={classes.formLoginBtn}
            onClick={onSubmitLogin}
          >
            LOGIN
          </button>
        </div>
        <div className={classes.resgiterSectionDiv}>
          New to Skills ?{" "}
          <Link
            to="/signupcomponent"
            className={classes.registrationLink}
            element={<SignUpComponent />}
          >
            REGISTER
          </Link>
        </div>
      </form>
    </div>
  );
};
export default LoginComponent;
