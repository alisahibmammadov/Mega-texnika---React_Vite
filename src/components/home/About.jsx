import PropTypes from "prop-types";
import Texnika1 from "../../assets/images/fon/image3.png";
import Texnika2 from "../../assets/images/fon/image2.png";
import { Link } from "react-router-dom";

function About({ siteLang }) {
  return (
    <main className="py-16 flex gap-10 px-3 ">
      <section className="container mx-auto flex  items-end justify-between gap-5 px-5 sm:px-0">
        <div className="p-2 shadow-boxShadow hidden lg:flex ">
          <img src={Texnika1} alt="Texnika" />
        </div>
        <div className="flex flex-col gap-10 items-end">
          <nav className="p-2 shadow-boxShadow">
            <img src={Texnika2} alt="Texnika" />
          </nav>
          
          <div className="flex flex-col gap-3 items-center lg:items-start md:max-w-full lg:max-w-2xl ">
            <h3 className="text-textHeadColor  text-center lg:text-left text-lg lg:text-4xl md:text-3xl leading-normal font-bold">
              {siteLang === "az"
                ? "Mega Texnika-da sınaqdan keçirilmiş texnikalar"
                : siteLang === "en"
                ? "Mega Technika-tried and tested techniques"
                : siteLang === "ru"
                ? "Мега Техника–проверенные методы."
                : null}
            </h3>
            <span className="text-textColor md:w-4/5 text-xs text-center lg:text-left md:leading-5 font-normal">
              {siteLang === "az"
                ? "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled"
                : siteLang === "en"
                ? "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled"
                : siteLang === "ru"
                ? "Лорем Ипсум — это просто текст-пустышка полиграфической и наборной индустрии. Лорем Ипсум был стандартным текстом-пустышкой в ​​отрасли с 1500-х годов, когда неизвестный печатник"
                : null}
            </span>
            <Link
              to=""
              className="flex items-center justify-center w-36 h-10 mt-5 font-bold rounded-3xl border-2  text-xs not-italic  hover:bg-textHover text-textColor "
            >
              {siteLang === "az"
                ? "Haqqımızda"
                : siteLang === "en"
                ? "About us"
                : siteLang === "ru"
                ? "О нас"
                : null}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;
About.propTypes = {
  siteLang: PropTypes.string.isRequired,
};
