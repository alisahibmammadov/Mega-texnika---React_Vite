import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
function Techniques({ siteLang, texnikalarData, techniquesType }) {
  const initialCardsType = localStorage.getItem("cardsType");
  const [cardsType, setCardsType] = useState(
    initialCardsType ||
      'Katok'
  );

  const handleClickType = (type) => {
    setCardsType(type.type);
    localStorage.setItem("cardsType", type.type);
    localStorage.setItem("cardsTypeId", type.id);
  };
  useEffect(() => {
    localStorage.removeItem("cardsType");
  }, [siteLang]);
  useEffect(() => {
    const storedCardsType = localStorage.getItem("cardsType");
    if (storedCardsType) {
      setCardsType(storedCardsType);
    } else if (storedCardsType === null) {
      setCardsType(
        (siteLang === "az"
          ? "Hamısı"
          : siteLang === "en"
          ? "All"
          : siteLang === "ru"
          ? "Все"
          : "Hamısı") 
      ) 
    }
  }, [siteLang,]);
 
  
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
        <span className="text-textHeadColor text-xs  leading-normal font-medium">
          {siteLang === "az"
            ? "Texnikalar"
            : siteLang === "en"
            ? "Techniques"
            : siteLang === "ru"
            ? "Техники"
            : null}
        </span>
      </header>
      <nav className="container mx-auto px-5 sm:px-0 flex flex-col items-center gap-10">
        <h2 className="text-textHeadColor text-3xl  leading-normal font-bold">
          {siteLang === "az"
            ? "Texnikalar"
            : siteLang === "en"
            ? "Techniques"
            : siteLang === "ru"
            ? "Техники"
            : null}
        </h2>
        <nav className="flex flex-wrap gap-5">
          {techniquesType.map((type, index) => (
            <button
              className={`h-10 px-5 text-[#353535] text-sm font-bold shadow-boxShadow rounded-3xl hover:bg-textHover ${
                cardsType === type.type ? "bg-textHover text-white" : ""
              }`}
              // className={`${cardsType === type.type ? "bg-textHover text-white":null} h-10 px-5 text-[#353535] text-sm font-bold shadow-boxShadow rounded-3xl hover:bg-textHover`}
              key={index}
              onClick={() => handleClickType(type)}
            >
              {type.type}
            </button>
          ))}
        </nav>
      </nav>
      <section className="container mx-auto flex flex-wrap justify-center sm:justify-between">
        {texnikalarData
          .filter(
            (item) =>
              cardsType === "All" ||
              cardsType === "Hamısı" ||
              cardsType === "Все" ||
              item.class === cardsType
          )
          .map((item, index) => (
            <div
              key={index}
              className="w-56 sm:w-72 h-[545px] shadow-boxShadow mx-1 bg-white my-2"
            >
              <img
                key={index}
                src={item.img}
                alt={item.head}
                className="w-full"
              />
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
          ))}
      </section>
    </main>
  );
}

export default Techniques;
Techniques.propTypes = {
  siteLang: PropTypes.string.isRequired,
  texnikalarData: PropTypes.array.isRequired,
  techniquesType: PropTypes.array.isRequired,
};
