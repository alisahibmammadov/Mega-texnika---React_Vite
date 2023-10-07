import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Down from "../assets/icons/arrows/down.svg";

function MobileNavbar({ linkData, handleLang }) {
  const [modal, setModal] = useState(false);
  const handleClick = () => {
    setModal(!modal);
  };
  const [btn, setBtn] = useState();
  const [selectedBtn, setSelectedBtn] = useState(false);
  useEffect(() => {
    setBtn(localStorage.getItem("btnNum"));
  }, [btn]);

  return (
    <main className="bg-white absolute w-full  top-[110px] left-[0px] h-screen pb-3 ">
      <nav className="flex flex-col gap-5 items-start h-full pl-8">
        {linkData.map((item, index) => (
          <Link
            to={item.link}
            onClick={item.link === "techniques" ? handleClick : null}
            className={
              item.link === "techniques"
                ? " relative flex flex-col   gap-1 text-textColor text-sm not-italic font-normal leading-normal hover:text-textHover "
                : "text-textColor text-sm not-italic font-normal leading-normal hover:text-textHover"
            }
            key={index}
          >
            {item.name}{" "}
            {item.link === "techniques" ? (
              <img
                src={Down}
                alt="Down"
                className="absolute left-20 top-[10px]"
              />
            ) : null}{" "}
            {item.link === "techniques" && item.subCategories && modal ? (
              <nav className="flex flex-col gap-2   w-44 bg-white shadow-sm rounded-sm border-2 px-1">
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
        <nav className="flex items-center gap-5">
          <span
            className="flex cursor-pointer font-semibold"
            onClick={() => setSelectedBtn(!selectedBtn)}
          >
            {btn === "1" ? "Az" : btn === "2" ? "En" : "Ru"}
          </span>
          {selectedBtn ? (
            <nav className=" gap-2 flex flex-row items-center  shadow-sm rounded-lg px-2">
              <button
                className={btn === "1" ? " font-semibold" : null}
                onClick={() => {
                  handleLang("az"),
                    setBtn("1"),
                    localStorage.setItem("btnNum", "1");
                  setSelectedBtn(false);
                }}
              >
                Az
              </button>
              <button
                className={btn === "2" ? " font-semibold" : null}
                onClick={() => {
                  handleLang("en"),
                    setBtn("2"),
                    localStorage.setItem("btnNum", "2");
                  setSelectedBtn(false);
                }}
              >
                En
              </button>
              <button
                className={btn === "3" ? " font-semibold" : null}
                onClick={() => {
                  handleLang("ru"),
                    setBtn("3"),
                    localStorage.setItem("btnNum", "3");
                  setSelectedBtn(false);
                }}
              >
                Ru
              </button>
            </nav>
          ) : null}
        </nav>
      </nav>
    </main>
  );
}

export default MobileNavbar;
MobileNavbar.propTypes = {
  linkData: PropTypes.string.isRequired,
  handleLang: PropTypes.string.isRequired,
};
