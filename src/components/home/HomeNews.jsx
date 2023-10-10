import PropTypes from "prop-types";
import { Link } from "react-router-dom";
function HomeNews({ newsData, siteLang }) {
  return (
    <main className="py-16 flex flex-col gap-8 px-3">
      <header className="container mx-auto px-5 sm:px-0">
        <h5 className="text-textHeadColor text-3xl font-bold leading-normal not-italic flex justify-center sm:justify-between">
          {siteLang === "az"
            ? "Yeniliklər"
            : siteLang === "en"
            ? "News"
            : siteLang === "ru"
            ? "Новости"
            : null}
        </h5>
      </header>
      <section className="container mx-auto px-5 sm:px-0 flex flex-wrap sm:justify-between justify-center gap-5 sm:gap-0">
        {newsData.slice(0, 4).map((item, index) => (
          <Link
            key={index}
            to={"/news/" + item.id}
            className="h-[438px] flex flex-col justify-between shadow-boxShadow pb-8 hover:bg-textHover "
          >
            <img src={item.img} alt="" />
            <nav className="px-5 flex flex-col gap-4">
              <h2 className="text-[#191919] text-base font-medium leading-normal">
                {item.head}
              </h2>
              <div className="overflow-hidden max-h-16 w-[260px] ">
                <p className="line-clamp-2 text-[#69768B] font-normal text-sm">
                  {item.infoF}
                </p>
              </div>
            </nav>
            <span className="px-5 text-[#69768B] font-normal text-sm  ">
              {item.date}
            </span>
          </Link>
        ))}
      </section>
    </main>
  );
}

export default HomeNews;

HomeNews.propTypes = {
  newsData: PropTypes.string.isRequired,
  siteLang: PropTypes.string.isRequired,
};
