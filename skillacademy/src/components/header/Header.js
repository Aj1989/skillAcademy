import "./Header.css";
//import HomePage from "./homePage/HomePage";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  function onHomeBtnCick() {
    navigate("/homepage");
  }

  function onCartBtnCick() {
    navigate("/");
  }

  return (
    <>
      <div id="title">
        <h1>SKILLS ACDADEMY</h1>
        <div id="logRegBtnDiv">
          <button id="iconButton">
            <i className="bi bi-house i-btn" onClick={onHomeBtnCick}></i>
            <i className="bi bi-bag i-btn" onClick={onCartBtnCick}></i>
            <i className="bi bi-telephone i-btn"></i>
            <i className="bi bi-gear i-btn"></i>
          </button>
        </div>
      </div>
    </>
  );
};
export default Header;
