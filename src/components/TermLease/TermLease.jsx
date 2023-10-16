import PropTypes from "prop-types";
import Texnika2 from '../../assets/images/fon/image6.png'
import Texnika1 from '../../assets/images/fon/image7.png'

function TermLease({siteLang}) {
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
            
            <span className="text-textColor md:w-4/5 text-xs text-center lg:text-left md:leading-5 font-normal">
              {siteLang === "az"
                ? "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled"
                : siteLang === "en"
                ? "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled"
                : siteLang === "ru"
                ? "Лорем Ипсум — это просто текст-пустышка полиграфической и наборной индустрии. Лорем Ипсум был стандартным текстом-пустышкой в ​​отрасли с 1500-х годов, когда неизвестный печатник"
                : null}
            </span>
            <span className="text-textColor md:w-4/5 text-xs text-center lg:text-left md:leading-5 font-normal">
              {siteLang === "az"
                ? "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled"
                : siteLang === "en"
                ? "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled"
                : siteLang === "ru"
                ? "Лорем Ипсум — это просто текст-пустышка полиграфической и наборной индустрии. Лорем Ипсум был стандартным текстом-пустышкой в ​​отрасли с 1500-х годов, когда неизвестный печатник"
                : null}
            </span>
            
          </div>
        </div>
      </section>
    </main>
  )
}

export default TermLease
TermLease.propTypes = {
    siteLang: PropTypes.string.isRequired,
  };
  