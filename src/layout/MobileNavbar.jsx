import { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Down from "../assets/icons/arrows/down.svg";

function MobileNavbar({ linkData }) {
  const [modal, setModal] = useState(false);
  const handleClick = () => {
    setModal(!modal);
  };

  return (
    <main className="bg-white absolute w-full  top-[110px] h-screen pb-3 ">
      <nav className="flex flex-col gap-5 items-start h-full ">
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
            {item.link === "techniques" ? <img src={Down} alt="Down" className="absolute left-20 top-[10px]"/> : null}{" "}
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

      </nav>
    </main>
  );
}

export default MobileNavbar;
MobileNavbar.propTypes = {
  linkData: PropTypes.string.isRequired,
};