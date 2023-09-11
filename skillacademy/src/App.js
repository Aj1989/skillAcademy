import "./App.css";
import RootLayout from "./RootLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginComponent from "./components/loginComponent/LoginComponent";
import HomePage from "./components/homePage/HomePage";
import SignUpComponent from "./components/signupPage/signupPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index={true} element={<LoginComponent />}></Route>
          <Route path="signupcomponent" element={<SignUpComponent />}></Route>
          <Route path="homepage" element={<HomePage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
