// import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./layout/Header/index";
import Home from "./pages/Home";
import Apropos from "./pages/APropos";
import Footer from "./layout/Footer/footer";
import Error from "./pages/Error";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/A_propos" element={<Apropos />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
