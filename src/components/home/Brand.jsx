import brand from "../../data/brand.js";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import PropTypes from "prop-types";
function Brand({siteLang}) {
  const items = brand.map((item, index) => (
    <img key={index} src={item.img} alt="Brand" className="mx-9 my-2"/>
  ));
  const responsiveness = {
    0: { items: 1 },
    425: { items: 2 },
    768: { items: 3 },
    1024: { items: 5 },
  };
  return (
    <main className="py-16 flex flex-col gap-10 px-3 ">
      <header className="container mx-auto px-5 sm:px-0 ">
        <h5 className="text-textHeadColor text-3xl font-bold leading-normal not-italic  flex justify-center">
          {siteLang === "az"
            ? "Markalar"
            : siteLang === "en"
            ? "Brands"
            : siteLang === "ru"
            ? "Бренды"
            : null}
        </h5>
      </header>
      <section className="container mx-auto px-5 sm:px-0">
        <AliceCarousel
          items={items}
          mouseTracking
          autoPlay={2000}
          infinite={true}
          responsive={responsiveness}
        />
      </section>
    </main>
  );
}

export default Brand;

Brand.propTypes = {
    siteLang: PropTypes.string.isrequired
}