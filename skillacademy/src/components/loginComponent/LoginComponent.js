import classes from "./LoginComponent.module.css";

const LoginComponent = () => {
  return (
    <div className={classes.LoginComponentDiv}>
      <form>
        <h1 className={classes.formHeading}>Sign In</h1>
        <div>
          <label htmlFor="username">USERNAME</label>
          <br />
          <input
            type="text"
            name="username"
            id="username"
            className={classes.loginInput}
          ></input>
        </div>
        <div>
          <label htmlFor="password">PASSWORD</label>
          <br />
          <input
            type="password"
            name="password"
            id="password"
            className={classes.loginInput}
          ></input>
        </div>

        <div className={classes.buttonDiv}>
          <button type="submit" className={classes.formLoginBtn}>
            LOGIN
          </button>
        </div>
        <div className={classes.resgiterSectionDiv}>
          New to Skills ?{" "}
          <a href="/" className={classes.registrationLink}>
            REGISTER
          </a>
        </div>
      </form>
    </div>
  );
};
export default LoginComponent;
