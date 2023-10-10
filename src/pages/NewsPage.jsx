import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import newsAz from "../data/az/newsAz";
import newsEn from "../data/en/newsEn";
import newsRu from "../data/ru/newsRu";
import { useEffect, useState } from "react";

function NewsPage({ siteLang }) {
  const [matchingItems, setMatchingItems] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    let data = [];
    if (siteLang === "az") {
      data = newsAz.find((item) => item.id === Number(id));
    } else if (siteLang === "en") {
      data = newsEn.find((item) => item.id === Number(id));
    } else if (siteLang === "ru") {
      data = newsRu.find((item) => item.id === Number(id));
    }
    console.log(data);
    setMatchingItems([data]);
  }, [siteLang, id]);

  return (
    <main className="py-16 flex flex-col gap-8 px-3">
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
        <Link
          to="/blog"
          className="text-[#ADADAD] text-xs  leading-normal hover:text-textHover font-medium"
        >
          {siteLang === "az"
            ? "Blog"
            : siteLang === "en"
            ? "Blog"
            : siteLang === "ru"
            ? "Блог"
            : null}
        </Link>
        <span className="w-[2px] h-5 bg-[#686868]"></span>
        {matchingItems.map((item, index) => (
          <span
            key={index}
            className="text-textHeadColor text-xs  leading-normal font-medium"
          >
            {item.head}
          </span>
        ))}
      </header>

      {matchingItems?.map((item, index) => (
        <section
          key={index}
          className="container mx-auto w-full flex flex-col gap-8 md:gap-0 md:flex-row flex-wrap justify-between items-center px-5 sm:px-0"
        >
          <div className="md:w-1/2 flex flex-col gap-2 w-full">
            <h2 className="text-textHeadColor md:text-2xl lg:text-3xl xl:text-5xl text-3xl leading-normal font-bold text-center md:text-left">
              {item.head}
            </h2>
            <span className="text-[#686868]  text-sm font-normal text-center md:text-left">
              {item.date}
            </span>
            <div className="flex flex-col gap-5 mt-5">
              <p className="text-[#353535] text-xs xl:text-sm font-normal leading-normal text-center md:text-left">
                {item.infoF}
              </p>
              <p className="text-[#353535] text-xs xl:text-sm font-normal leading-normal text-center md:text-left">
                {item.infoT}
              </p>
            </div>
          </div>
          <div className="md:w-1/3 w-full ">
            <div className="shadow-boxShadow p-2">
              <img src={item.img} alt="" className="w-full" />
            </div>
          </div>
        </section>
      ))}
    </main>
  );
}

export default NewsPage;
NewsPage.propTypes = {
  siteLang: PropTypes.string.isRequired,
};
