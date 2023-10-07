import { Link } from "react-router-dom";
import WebLogo from "../assets/images/WebLogo/logo.svg";
import Down from "../assets/icons/arrows/down.svg";
import { useState } from "react";
import linkDataAz from "../data/az/linkData.js";
import linkDataEn from "../data/en/linkData.js";
import linkDataRu from "../data/ru/linkData.js";
import LangBtn from "../components/button/langBtn";
import PropTypes from "prop-types";

// const langs = [
//   { id: 1, langName: "Az", langType: "az", num:"1" },
//   { id: 2, langName: "En", langType: "en", num:"2" },
//   { id: 3, langName: "Ru", langType: "ru", num:"3" },
// ];

function Navbar({ siteLang, handleLang }) {
  const [modal, setModal] = useState(false);
  const handleClick = () => {
    setModal(!modal);
  };
  return (
    <main className="shadow-lg shadow-[#9f9f9f40]">
      <nav className="container mx-auto flex justify-between py-10">
        <Link to="/">
          <img src={WebLogo} alt="Mega texnika" />
        </Link>

        {siteLang === "az" ? (
          <nav className="flex gap-10 items-center">
            {linkDataAz.map((item, index) => (
              <Link
                to={item.link}
                onClick={item.name === "Texnikalar" ? handleClick : null}
                className={
                  item.name === "Texnikalar"
                    ? "relative  flex items-center gap-1 text-textColor text-sm not-italic font-normal leading-normal hover:text-textHover "
                    : "text-textColor text-sm not-italic font-normal leading-normal hover:text-textHover"
                }
                key={index}
              >
                {item.name}{" "}
                {item.name === "Texnikalar" ? (
                  <img src={Down} alt="Down" />
                ) : null}{" "}
                {item.name === "Texnikalar" && item.subCategories && modal ? (
                  <nav className="flex flex-col gap-2 absolute top-10 left-0 bg-red-500 w-36">
                    {item.subCategories.map((item, index) => (
                      <Link
                        to={item.link}
                        className="text-textColor text-sm not-italic font-normal leading-normal hover:font-medium hover:text-textHover"
                        key={index}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </nav>
                ) : null}
              </Link>
            ))}
          </nav>
        ) : null}

        {siteLang === "en" ? (
          <nav className="flex gap-10 items-center">
            {linkDataEn.map((item, index) => (
              <Link
                to={item.link}
                onClick={item.name === "Techniques" ? handleClick : null}
                className={
                  item.name === "Techniques"
                    ? "relative  flex items-center gap-1 text-textColor text-sm not-italic font-normal leading-normal hover:text-textHover "
                    : "text-textColor text-sm not-italic font-normal leading-normal hover:text-textHover"
                }
                key={index}
              >
                {item.name}{" "}
                {item.name === "Techniques" ? (
                  <img src={Down} alt="Down" />
                ) : null}{" "}
                {item.name === "Techniques" && item.subCategories && modal ? (
                  <nav className="flex flex-col gap-2 absolute top-10 left-0 bg-red-500 w-36">
                    {item.subCategories.map((item, index) => (
                      <Link
                        to={item.link}
                        className="text-textColor text-sm not-italic font-normal leading-normal hover:font-medium hover:text-textHover"
                        key={index}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </nav>
                ) : null}
              </Link>
            ))}
          </nav>
        ) : null}
        {siteLang === "ru" ? (
          <nav className="flex gap-10 items-center">
            {linkDataRu.map((item, index) => (
              <Link
                to={item.link}
                onClick={item.name === "Техника" ? handleClick : null}
                className={
                  item.name === "Техника"
                    ? "relative  flex items-center gap-1 text-textColor text-sm not-italic font-normal leading-normal hover:text-textHover "
                    : "text-textColor text-sm not-italic font-normal leading-normal hover:text-textHover"
                }
                key={index}
              >
                {item.name}{" "}
                {item.name === "Техника" ? <img src={Down} alt="Down" /> : null}{" "}
                {item.name === "Техника" && item.subCategories && modal ? (
                  <nav className="flex flex-col gap-2 absolute top-10 left-0 bg-red-500 w-36">
                    {item.subCategories.map((item, index) => (
                      <Link
                        to={item.link}
                        className="text-textColor text-sm not-italic font-normal leading-normal hover:font-medium hover:text-textHover"
                        key={index}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </nav>
                ) : null}
              </Link>
            ))}
          </nav>
        ) : null}

        <LangBtn handleLang={handleLang} />
      </nav>
    </main>
  );
}

export default Navbar;
Navbar.propTypes = {
  siteLang: PropTypes.string.isRequired, 
  handleLang: PropTypes.string.isRequired, 
};
