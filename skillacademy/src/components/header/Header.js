import "./Header.css";

const Header = () => {
  return (
    <>
      <div id="title">
        <h1>SKILLS ACDADEMY</h1>
        <div id="logRegBtnDiv">
          <button>Login</button>
          <button>Register</button>
          <button id="iconButton">
            <i
              class="bi bi-cart-plus"
              style={{ fontSize: 30, color: "red" }}
            ></i>
          </button>
        </div>
      </div>
    </>
  );
};
export default Header;
