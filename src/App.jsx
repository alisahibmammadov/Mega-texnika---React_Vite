import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Header from "./layout/Header.jsx";
import Navbar from "./layout/Navbar.jsx";
import Footer from "./layout/Footer.jsx";
import { useEffect, useState } from "react";

function App() {
  const [siteLang, setSiteLang] = useState();

  useEffect(() => {
    setSiteLang(JSON.parse(localStorage.getItem("lang")));
  }, [siteLang]);

  const handleLang = (lang) => {
    setSiteLang(lang);
    localStorage.setItem("lang", JSON.stringify(lang));
  };
  return (
    <div>
      <BrowserRouter>
        <Header siteLang={siteLang} />
        <Navbar handleLang={handleLang} siteLang={siteLang} />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
