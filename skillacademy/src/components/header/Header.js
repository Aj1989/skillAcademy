import "./Header.css";

const Header = () => {
  return (
    <>
      <div id="title">
        <h1>SKILLS ACDADEMY</h1>
        <div id="logRegBtnDiv">
          <button id="iconButton">
            <i className="bi bi-house-fill"></i>
            <i className="bi bi-bag-fill"></i>
            <i class="bi bi-telephone-fill"></i>
            <i class="bi bi-gear-fill"></i>
          </button>
        </div>
      </div>
    </>
  );
};
export default Header;
