import "./Header.css";

const Header = () => {
  return (
    <>
      <div id="title">
        <h1>SKILLS ACDADEMY</h1>
        <div id="logRegBtnDiv">
          <button id="iconButton">
            <i className="bi bi-house i-btn"></i>
            <i className="bi bi-bag i-btn"></i>
            <i className="bi bi-telephone i-btn"></i>
            <i className="bi bi-gear i-btn"></i>
          </button>
        </div>
      </div>
    </>
  );
};
export default Header;
