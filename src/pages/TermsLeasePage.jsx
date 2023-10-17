import { Link } from "react-router-dom";
import Faq from "../components/TermLease/Faq";
import TermLease from "../components/TermLease/TermLease";
import PropTypes from "prop-types";

function TermsLeasePage({siteLang}) {
  return (
    <div className="py-16 flex flex-col gap-8 px-3">
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
            ? "İcarə şərtləri"
            : siteLang === "en"
            ? "Terms of lease"
            : siteLang === "ru"
            ? "Условия аренды"
            : null}
        </span>
      </header>
      <TermLease siteLang={siteLang}/>
      <Faq siteLang={siteLang}/>
    </div>
  );
}

export default TermsLeasePage;
TermsLeasePage.propTypes = {
  siteLang: PropTypes.string.isRequired,
};
