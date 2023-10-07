import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Header from "./layout/Header";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
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
