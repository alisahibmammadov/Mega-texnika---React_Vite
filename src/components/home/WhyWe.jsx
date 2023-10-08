import PropTypes from "prop-types";
import Texnika from '../../assets/images/fon/image4.png'
function WhyWe({siteLang}) {
  return (
    <main className="py-16 flex  gap-8 px-3">
      <section className="container mx-auto flex flex-col md:flex-row  justify-between gap-5 px-5 sm:px-0">
        <div className="flex flex-col gap-3 items-center md:items-start md:max-w-md lg:max-w-2xl ">
          <h2 className="text-textHeadColor md:w-2/3 text-center md:text-left text-xl lg:text-4xl md:text-3xl leading-normal font-bold">
            {siteLang === "az"
              ? "Niyə bizi seçməlisiniz"
              : siteLang === "en"
              ? "Why you should choose us"
              : siteLang === "ru"
              ? "Почему вам следует выбрать нас"
              : null}
          </h2>
          <span className="text-textColor md:w-4/5 text-sm text-center md:text-left md:leading-5 font-normal">
            {siteLang === "az"
              ? "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled"
              : siteLang === "en"
              ? "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled"
              : siteLang === "ru"
              ? "Лорем Ипсум — это просто текст-пустышка полиграфической и наборной индустрии. Лорем Ипсум был стандартным текстом-пустышкой в ​​отрасли с 1500-х годов, когда неизвестный печатник"
              : null}
          </span>
          <span className="text-textColor md:w-4/5 text-sm text-center md:text-left md:leading-5 font-normal">
            {siteLang === "az"
              ? "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled"
              : siteLang === "en"
              ? "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled"
              : siteLang === "ru"
              ? "Лорем Ипсум — это просто текст-пустышка полиграфической и наборной индустрии. Лорем Ипсум был стандартным текстом-пустышкой в ​​отрасли с 1500-х годов, когда неизвестный печатник"
              : null}
          </span>
          
        </div>
        <div className="md:w-[640px]  flex shadow-boxShadow p-2">
          <img src={Texnika} alt="" className="md:w-[640px]"/>
        </div>
      </section>
    </main>
  )
}

export default WhyWe
WhyWe.propTypes = {
    siteLang: PropTypes.string.isRequired,
  };