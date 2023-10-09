import PropTypes from "prop-types";
import { Link } from "react-router-dom";
function HomeNews({ newsData,siteLang }) {
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
      <section className="container mx-auto px-5 sm:px-0">
        {
            newsData.slice(0,4).map((item,index)=>{
                <Link to='/news'></Link>
            })
        }
      </section>
    </main>
  );
}

export default HomeNews;

HomeNews.propTypes = {
  newsData: PropTypes.string.isRequired,
  siteLang: PropTypes.string.isRequired,
};
