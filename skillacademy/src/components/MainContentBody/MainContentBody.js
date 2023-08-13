import HomePage from "../homePage/HomePage";
import LoginComponent from "../loginComponent/LoginComponent";

import "./MainContentBody.css";
const MainContentBody = () => {
  const isLoggedIn = true;
  return (
    <>
      <div id="mainContent">
        {isLoggedIn && <LoginComponent />}
        {isLoggedIn && <HomePage />}
      </div>
    </>
  );
};
export default MainContentBody;
