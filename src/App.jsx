import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Header from "./layout/Header.jsx";
import Navbar from "./layout/Navbar.jsx";
import Footer from "./layout/Footer.jsx";
import { useState } from "react";

function App() {
  const [siteLang, setSiteLang] = useState("az");
  return (
    <div>
      <BrowserRouter>
        <Header lang={siteLang}/>
        <Navbar setLang={setSiteLang} lang={siteLang} />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
