import PropTypes from "prop-types";
import Instagram from "../assets/icons/instagram.svg";
import Facebook from "../assets/icons/facebook.svg";
import Twitter from "../assets/icons/twitter.svg";

function Header({ siteLang }) {
  return (
    <main className="bg-customColor px-3">
      <header className="container flex justify-between mx-auto py-3 px-5 sm:px-0">
        <nav className="flex flex-col sm:flex-row items-start justify-start gap-1">
          <span className="text-textColor font-medium text-[10px] sm:text-xs not-italic">
            +994(12) 123 45 67
          </span>
          {siteLang === "az" ? (
            <span className="text-textColor font-medium text-[10px] sm:text-xs not-italic ">
              Fətəli Xan Xoyski 111A, Bakı Azərbaycan
            </span>
          ) : siteLang === "en" ? (
            <span className="text-textColor font-medium text-[10px] sm:text-xs not-italic ">
              Fatali Khan Khoyski 111A, Baku Azerbaijan
            </span>
          ) : siteLang === "ru" ? (
            <span className="text-textColor font-medium text-[10px] sm:text-xs not-italic ">
              Фатали Хана Хойского 111А, Баку Азербайджан
            </span>
          ) : null}
        </nav>

        <nav className="flex items-center gap-4 sm:gap-6">
          <img src={Instagram} alt="Instagram" className="cursor-pointer" />
          <img src={Facebook} alt="Facebook" className="cursor-pointer" />
          <img src={Twitter} alt="Twitter" className="cursor-pointer" />
        </nav>
      </header>
    </main>
  );
}

export default Header;
Header.propTypes = {
  siteLang: PropTypes.string.isRequired,
};
