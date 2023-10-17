import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Categories({ texnikalarData,siteLang }) {
  return (
    <main className="py-16 flex flex-col gap-8 px-3">
      <header className="container mx-auto px-5 sm:px-0">
        <h5 className="text-textHeadColor text-3xl font-bold leading-normal not-italic flex justify-center sm:justify-between">
          {
            siteLang === 'az' ? 'Kateqoriyalar' : siteLang === 'en' ? 'Categories' : siteLang === 'ru' ? 'Категории':null
          }
        </h5>
      </header>
      <section className="container mx-auto flex flex-wrap justify-center sm:justify-between gap-5 px-5 sm:px-0">
        {texnikalarData.slice(0, 8).map((item, index) => (
          <Link key={index} to='/techniques'>
            <div className="w-72 h-96 flex flex-col justify-end items-center gap-10 cursor-pointer bg-white hover:bg-textHover rounded shadow-boxShadow">
              <h4 className="text-textHeadColor text-xl font-semibold leading-normal not-italic">
                {item.head}
              </h4>
              <img src={item.img} alt="" className="object-fill" />
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}

export default Categories;
Categories.propTypes = {
    texnikalarData: PropTypes.string.isRequired,
    siteLang: PropTypes.string.isRequired,
};
