import style from "../assets/styles/footer.module.css";
import PropTypes from "prop-types";
import WebLogo from "../assets/images/WebLogo/logo.svg";
import { Link } from "react-router-dom";
import Instagram from "../assets/icons/instagram.svg";
import Facebook from "../assets/icons/facebook.svg";
import Twitter from "../assets/icons/twitter.svg";

function Footer({ siteLang, linkData }) {
  return (
    <footer className={`${style?.footer}  w-full py-8 flex flex-col gap-20 px-3`}>
      <main className="container mx-auto flex flex-wrap items-start justify-between gap-10 px-5 sm:px-0">
        <div>
          <Link to="/">
            <img src={WebLogo} alt="Mega Texnika" />
          </Link>
        </div>
        <div className="flex flex-col gap-5">
          {linkData.map((item, index) => (
            <Link
              className="text-textColor text-sm font-normal not-italic hover:text-textHover"
              key={index}
              to={item.link}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="flex flex-col gap-5">
          <span className="text-textColor text-sm font-normal not-italic">
            {siteLang === "az"
              ? "Fətəli Xan Xoyski 111A, Bakı Azərbaycan"
              : siteLang === "en"
              ? "Fatali Khan Khoyski 111A, Baku Azerbaijan"
              : siteLang === "ru"
              ? "Фатали Хана Хойского 111А, Баку Азербайджан"
              : null}
          </span>
          <span className="text-textColor text-sm font-normal not-italic">
            +994(51) 123 45 67
          </span>
          <span className="text-textColor text-sm font-normal not-italic">
            +994(12) 123 45 67
          </span>
          <span className="text-textColor text-sm font-normal not-italic">
            info@lmegatexnika.az
          </span>
        </div>
        <div className="flex flex-col gap-6">
          <span className="text-textColor text-sm font-normal not-italic"> 
            {siteLang === "az"
              ? "Qrafik (iş saatlarımız)"
              : siteLang === "en"
              ? "Schedule (our working hours)"
              : siteLang === "ru"
              ? "График работы (время работы)"
              : null}
            : B.e - Ş. 10:00 - 19:00
          </span>
          <nav className="flex items-center gap-4 sm:gap-6">
            <img src={Instagram} alt="Instagram" className="cursor-pointer" />
            <img src={Facebook} alt="Facebook" className="cursor-pointer" />
            <img src={Twitter} alt="Twitter" className="cursor-pointer" />
          </nav>
        </div>
      </main>

      <div className="container mx-auto flex justify-between items-center px-5 sm:px-0">
        <span className="text-textColor text-xs not-italic select-none">
          © 2022{" "}
          {siteLang === "az"
            ? " Megatexnika / Müəllif hüquqları"
            : siteLang === "en"
            ? " Megatechnics / Copyright"
            : siteLang === "ru"
            ? " Мегатехника / Авторские права"
            : null}
        </span>
        <span className="text-textColor text-xs not-italic select-none">
          {" "}
          {siteLang === "az"
            ? "Dizayn"
            : siteLang === "en"
            ? "Design by"
            : siteLang === "ru"
            ? "Дизайн"
            : null}{" "}
          <span className="font-semibold ">JEDAİ</span>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
Footer.propTypes = {
  siteLang: PropTypes.string.isRequired,
  linkData: PropTypes.string.isRequired,
};
