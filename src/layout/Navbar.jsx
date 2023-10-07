import { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import WebLogo from "../assets/images/WebLogo/logo.svg";
import Down from "../assets/icons/arrows/down.svg";
import LangBtn from "../components/LangBtn";
function Navbar({ handleLang, linkData }) {
  const [modal, setModal] = useState(false);
  
  const handleClick = () => {
    setModal(!modal);
  };

  return (
    <main className="shadow-lg shadow-[#9f9f9f40]">
      <nav className="container mx-auto flex justify-between items-center py-10 gap-2 px-5 sm:px-0">
        <Link to="/">
          <img src={WebLogo} alt="Mega texnika" className="sm:w-20 md:w-auto " />
        </Link>

        <nav className="hidden sm:flex gap-1 items-center lg:gap-16 md:gap-4">
          {linkData.map((item, index) => (
            <Link
              to={item.link}
              onClick={item.link === "techniques" ? handleClick : null}
              className={
                item.link === "techniques"
                  ? "relative  flex items-center gap-1 text-textColor text-sm not-italic font-normal leading-normal hover:text-textHover "
                  : "text-textColor text-sm not-italic font-normal leading-normal hover:text-textHover"
              }
              key={index}
            >
              {item.name}{" "}
              {item.link === "techniques" ? (
                <img src={Down} alt="Down" />
              ) : null}{" "}
              {item.link === "techniques" && item.subCategories && modal ? (
                <nav className="flex flex-col gap-2 absolute top-10 left-0 w-44 bg-white shadow-sm rounded-sm border-2 px-1">
                  {item.subCategories.map((item, index) => (
                    <Link
                      to={item.link}
                      className="text-textColor text-sm not-italic font-normal leading-normal hover:font-medium hover:text-textHover hover:shadow-sm border-b-2 pt-2"
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
        <LangBtn handleLang={handleLang} />
      </nav>
    </main>
  );
}

export default Navbar;
Navbar.propTypes = {
  handleLang: PropTypes.string.isRequired,
  linkData: PropTypes.string.isRequired,
};
