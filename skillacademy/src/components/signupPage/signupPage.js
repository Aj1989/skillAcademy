import classes from "./SignUpComponent.module.css";

const SignUpComponent = () => {
  const email = {
    type: "email",
    name: "emailid",
    id: "emailid",
    placeholder: "Email Id",
    className: classes.loginInput,
  };
  const password = {
    type: "password",
    name: "password",
    id: "password",
    placeholder: "Password",
    className: classes.loginInput,
  };
  return (
    <div className={classes.LoginComponentDiv}>
      <form>
        <h2 className={classes.formHeading}>Sign Up</h2>
        <div>
          <label htmlFor="fullname">STUDENT FULL NAME</label>
          <br />
          <input
            type="text"
            name="fullname"
            id="fullname"
            placeholder="Full Name"
            className={classes.loginInput}
          ></input>
        </div>
        <div>
          <label htmlFor="mobileno">MOBILE NO</label>
          <br />
          <input
            type="number"
            name="mobileno"
            id="mobileno"
            placeholder="Mobile Number"
            className={classes.loginInput}
          ></input>
        </div>
        <div>
          <label htmlFor="emailid">EMAIL ID</label>
          <br />
          <input {...email}></input>
        </div>
        <div>
          <label htmlFor="password">PASSWORD</label>
          <br />
          <input {...password}></input>
        </div>
        <div>
          <label htmlFor="confirmpassword">CONFIRM PASSWORD</label>
          <br />
          <input
            type="password"
            name="confirmpassword"
            id="confirmpassword"
            placeholder="Confirm Passowrd"
            className={classes.loginInput}
          ></input>
        </div>

        <div className={classes.buttonDiv}>
          <button type="submit" className={classes.formLoginBtn}>
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};
export default SignUpComponent;
