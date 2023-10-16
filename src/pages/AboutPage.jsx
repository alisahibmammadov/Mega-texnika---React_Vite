import PropTypes from "prop-types";
import About from "../components/home/About";
import Header from "../components/home/Header";
import WhyWe from "../components/home/WhyWe";
import { Link } from "react-router-dom";

function AboutPage({ siteLang }) {
  return <div className="py-16 flex flex-col gap-8 px-3">
    <header className="container mx-auto flex items-center gap-1 sm:gap-2 px-5 sm:px-0 ">
        <Link
          to="/"
          className="text-[#ADADAD] text-xs  leading-normal hover:text-textHover font-normal"
        >
          {siteLang === "az"
            ? "Ana səhifə"
            : siteLang === "en"
            ? "Home page"
            : siteLang === "ru"
            ? "Домашняя страница"
            : null}
        </Link>
        <span className="w-[2px] h-5 bg-[#686868]"></span>
        <span className="text-textHeadColor text-xs  leading-normal font-medium">
          {siteLang === "az"
            ? "Haqqımızda"
            : siteLang === "en"
            ? "About"
            : siteLang === "ru"
            ? "О нас"
            : null}
        </span>
      </header>
    <Header siteLang={siteLang}/>
    <About siteLang={siteLang}/>
    <WhyWe siteLang={siteLang}/>
  </div>;
}

export default AboutPage;
AboutPage.propTypes = {
  siteLang: PropTypes.string.isRequired,
};
