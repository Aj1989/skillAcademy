import "./App.css";
import MainContentBody from "./components/MainContentBody/MainContentBody";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

function App() {
  return (
    <div>
      <header>
        <Header></Header>
        <MainContentBody />
        <Footer />
      </header>
    </div>
  );
}

export default App;
