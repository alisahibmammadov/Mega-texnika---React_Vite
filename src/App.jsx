import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import Header from "./layout/Header.jsx";
import Navbar from "./layout/Navbar.jsx";
import Footer from "./layout/Footer.jsx";
import linkDataAz from "./data/az/linkData";
import linkDataEn from "./data/en/linkData";
import linkDataRu from "./data/ru/linkData";

function App() {
  const [linkData, setLinkData] = useState([]);
  const [siteLang, setSiteLang] = useState();

  useEffect(() => {
    setSiteLang(JSON.parse(localStorage.getItem("lang")));
    if (siteLang === "az") {
      setLinkData(linkDataAz);
    } else if (siteLang === "en") {
      setLinkData(linkDataEn);
    } else {
      setLinkData(linkDataRu);
    }
  }, [siteLang]);

  const handleLang = (lang) => {
    setSiteLang(lang);
    localStorage.setItem("lang", JSON.stringify(lang));
  };
  return (
    <div>
      <BrowserRouter>
        <Header siteLang={siteLang} />
        <Navbar handleLang={handleLang} linkData={linkData} />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
