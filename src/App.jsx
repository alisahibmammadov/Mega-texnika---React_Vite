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
import texnikalarAz from "./data/az/texnikalarAz";
import texnikalarEn from "./data/en/texnikalarEn";
import texnikalarRu from "./data/ru/texnikalarRu";
import newsAz from "./data/az/newsAz";
import newsEn from "./data/en/newsEn";
import newsRu from "./data/ru/newsRu";
import techniquesTypeAz from './data/az/techniquesTypeAz'
import techniquesTypeEn from './data/en/techniquesTypeEn'
import techniquesTypeRu from './data/ru/techniquesTypeRu'
import NewsPage from "./pages/NewsPage";
import Techniques from "./pages/Techniques";
import AboutPage from "./pages/AboutPage";
import TermsLeasePage from "./pages/TermsLeasePage";

function App() {
  const [linkData, setLinkData] = useState([]);
  const [texnikalarData, setTexnikalarData] = useState([]);
  const [newsData, setNewsData] = useState([]);
  const [siteLang, setSiteLang] = useState();
  const [topBtn, setTopBtn] = useState(false);
  const [techniquesType,setTechniquesType] = useState([])

  useEffect(() => {
    const topBtnScroll = () => {
      if (window.pageYOffset > 10) {
        setTopBtn(true);
      } else {
        setTopBtn(false);
      }
    };
    window.addEventListener("scroll", topBtnScroll);
    setSiteLang(JSON.parse(localStorage.getItem("lang")));
    if (siteLang === "az") {
      setLinkData(linkDataAz);
      setTexnikalarData(texnikalarAz);
      setNewsData(newsAz);
      setTechniquesType(techniquesTypeAz)
    } else if (siteLang === "en") {
      setLinkData(linkDataEn);
      setTexnikalarData(texnikalarEn);
      setNewsData(newsEn);
      setTechniquesType(techniquesTypeEn)
    } else {
      setLinkData(linkDataRu);
      setTexnikalarData(texnikalarRu);
      setNewsData(newsRu);
      setTechniquesType(techniquesTypeRu)
    }
    return () => {
      window.removeEventListener("scroll", topBtnScroll);
    };
  }, [siteLang]);

  const handleLang = (lang) => {
    setSiteLang(lang);
    localStorage.setItem("lang", JSON.stringify(lang));
  };

  const handleClickTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      {topBtn ? (
        <div
          className="top bg-[#fff5dc] hover:bg-textHover hover:cursor-pointer hover:text-white w-12 h-12 rounded-full flex items-center justify-center shadow-boxShadow"
          onClick={handleClickTop}
        >
          <i className="fa-solid fa-chevron-up"></i>
        </div>
      ) : null}
      <BrowserRouter>
        <Header siteLang={siteLang} />
        <Navbar handleLang={handleLang} linkData={linkData}  />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                texnikalarData={texnikalarData}
                newsData={newsData}
                siteLang={siteLang}
                
              />
            }
          />
          <Route
            path="/news/:id"
            element={
              <NewsPage  siteLang={siteLang} />
            }
          />
          <Route path="/techniques" element={<Techniques siteLang={siteLang} texnikalarData={texnikalarData} techniquesType={techniquesType}/>}/>
           <Route path="/about" element={<AboutPage siteLang={siteLang}/>} />
           <Route path="/termslease" element={<TermsLeasePage siteLang={siteLang}/>} />
        </Routes>
        <Footer siteLang={siteLang} linkData={linkData} />
      </BrowserRouter>
    </div>
  );
}

export default App;
