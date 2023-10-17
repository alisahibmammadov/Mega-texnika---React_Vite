import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import HomeNews from "../components/home/HomeNews";
import Image8 from "../assets/images/fon/image8.png";

function BlogPages({ siteLang, newsData }) {
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
            ? "Blog"
            : siteLang === "en"
            ? "Blog"
            : siteLang === "ru"
            ? "Блог"
            : null}
        </span>
      </header>

      <section className="container mx-auto w-full flex flex-col gap-8 md:gap-0 md:flex-row flex-wrap justify-between items-center px-5 sm:px-0">
        <div className="md:w-1/2 flex flex-col gap-2 w-full">
          <h2 className="text-textHeadColor md:text-2xl lg:text-3xl xl:text-5xl text-3xl leading-normal font-bold text-center md:text-left">
            {siteLang === "az"
              ? "Yeniliklər"
              : siteLang === "en"
              ? "Updates"
              : siteLang === "ru"
              ? "Обновления"
              : null}
          </h2>

          <div className="flex flex-col gap-5 mt-5">
            {siteLang === "az"
              ? "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
              : siteLang === "en"
              ? "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
              : siteLang === "ru"
              ? "Лорем Ипсум — это просто текст-пустышка полиграфической и наборной индустрии. Лорем Ипсум был стандартным текстом-пустышкой в ​​отрасли с 1500-х годов, когда неизвестный типограф взял гранку шрифтов и переделал ее, чтобы сделать книгу образцов шрифтов. Он пережил не только пять столетий, но и скачок в электронную верстку, оставшись по существу неизменным. Он был популяризирован в 1960-х годах с выпуском листов Letraset, содержащих отрывки из Лорем Ипсум, а в последнее время с появлением программного обеспечения для настольных издательских систем, такого как Aldus PageMaker, включая версии"
              : null}
          </div>
        </div>
        <div className="md:w-1/3 w-full ">
          <div className="shadow-boxShadow p-2">
            <img src={Image8} alt="" className="w-full" />
          </div>
        </div>
      </section>
      <HomeNews newsData={newsData} siteLang={siteLang} />
    </div>
  );
}

export default BlogPages;
BlogPages.propTypes = {
  siteLang: PropTypes.string.isRequired,
  newsData: PropTypes.string.isRequired,
};
