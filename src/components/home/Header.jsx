import { Link } from "react-router-dom";
import Texnika from "../../assets/images/fon/image1.png";
import PropTypes from "prop-types";

function Header({ siteLang }) {
  return (
    <main className="py-16 flex  gap-8 px-3">
      <section className="container mx-auto flex flex-col md:flex-row  justify-between gap-2 px-5 sm:px-0">
        <div className="flex flex-col gap-3 items-center md:items-start md:max-w-md lg:max-w-2xl ">
          <h3 className="text-textHeadColor md:w-2/3 text-center md:text-left text-xl lg:text-5xl md:text-3xl leading-normal font-bold">
            {siteLang === "az"
              ? "Ağır texnikanızı bizdən satın alın"
              : siteLang === "en"
              ? "Buy your heavy equipment from us"
              : siteLang === "ru"
              ? "Купите у нас тяжелую технику"
              : null}
          </h3>
          <span className="text-textColor md:w-4/5 text-sm text-center md:text-left md:leading-5 font-normal">
            {siteLang === "az"
              ? "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled"
              : siteLang === "en"
              ? "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled"
              : siteLang === "ru"
              ? "Лорем Ипсум — это просто текст-пустышка полиграфической и наборной индустрии. Лорем Ипсум был стандартным текстом-пустышкой в ​​отрасли с 1500-х годов, когда неизвестный печатник"
              : null}
          </span>
          <Link
            to="/about"
            className="flex items-center justify-center w-36 h-10 mt-5 font-bold rounded-3xl border-2  text-xs not-italic  hover:bg-textHover text-textColor "
          >
            {siteLang === "az"
              ? "Ətraflı"
              : siteLang === "en"
              ? "Detailed"
              : siteLang === "ru"
              ? "Более"
              : null}
          </Link>
        </div>
        <div className="md:w-[640px] hidden md:flex shadow-boxShadow p-2">
          <img src={Texnika} alt="" className="md:w-[640px]"/>
        </div>
      </section>
    </main>
  );
}

export default Header;

Header.propTypes = {
  siteLang: PropTypes.string.isRequired,
};
