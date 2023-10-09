import PropTypes from "prop-types";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "../../App.css";
import { Link } from "react-router-dom";

function Techniques({ siteLang, texnikalarData }) {
  const items = texnikalarData.map((item, index) => (
    <div
      key={index}
      className="w-56 sm:w-72 h-[545px] shadow-boxShadow mx-9 bg-white my-2"
    >
      <img key={index} src={item.img} alt={item.head} className="w-full" />
      <nav className="flex flex-col items-center justify-between grow h-64  px-4 md:px-8">
        <div className="flex flex-col gap-1 self-start">
          <span className=" text-textHeadColor text-lg font-semibold">
            {siteLang === "az"
              ? "Məhsulun adı"
              : siteLang === "en"
              ? "The name of the product"
              : siteLang === "ru"
              ? "Название продукта"
              : null}
          </span>
          <span className=" text-textColor text-sm font-normal">
            {item.head}
          </span>
          <span className="self-start text-[#B0ADAD] text-sm font-normal mt-2">
            {item.year}
          </span>
        </div>

        <nav className="flex flex-col text-right self-end">
          <span className="text-textHover font-semibold text-sm md:text-lg">
            {item.priceMonth} /{" "}
            {siteLang === "az"
              ? "ay"
              : siteLang === "en"
              ? "month"
              : siteLang === "ru"
              ? "месяц"
              : null}{" "}
          </span>
          <span className="text-textHover font-semibold text-sm md:text-lg">
            {item.priceDay} /{" "}
            {siteLang === "az"
              ? "gün"
              : siteLang === "en"
              ? "day"
              : siteLang === "ru"
              ? "день"
              : null}
          </span>
        </nav>
        <Link
          to=""
          className="text-textColor font-bold rounded-3xl border-2 flex items-center justify-center text-xs not-italic w-52 md:w-64 h-10 hover:bg-textHover"
        >
          {siteLang === "az"
            ? "İcarə et"
            : siteLang === "en"
            ? "Rent it"
            : siteLang === "ru"
            ? "Арендуйте это"
            : null}
        </Link>
      </nav>
    </div>
  ));
  const responsiveness = {
    0: { items: 1 },
    550: { items: 2 },
    1024: { items: 3 },
  };
  return (
    <main className="py-16 flex flex-col gap-8 px-3">
      <header className="container mx-auto px-5 sm:px-0">
        <h5 className="text-textHeadColor text-3xl font-bold leading-normal not-italic flex justify-center sm:justify-between">
          {siteLang === "az"
            ? "Texnikalar"
            : siteLang === "en"
            ? "Techniques"
            : siteLang === "ru"
            ? "Техники"
            : null}
        </h5>
      </header>
      <section className="container mx-auto">
        <AliceCarousel
          infinite={true}
          responsive={responsiveness}
          mouseTracking
          items={items}
        />
      </section>
    </main>
  );
}

export default Techniques;
Techniques.propTypes = {
  texnikalarData: PropTypes.string.isRequired,
  siteLang: PropTypes.string.isRequired,
};
