import { useEffect, useState } from "react";
import PropTypes from "prop-types";

function AccordionItem({ title, content, isOpen, toggleAccordion }) {
  return (
    <div className="border rounded mb-2 ">
      <div className="p-2 cursor-pointer flex justify-between items-center " onClick={toggleAccordion}>
        {title}
        {!isOpen ? (
          <i className="fa-solid fa-plus text-[#ffc01f] text-xl "></i>
        ) : (
          <i className="fa-solid fa-minus text-[#ffc01f] text-xl"></i>
        )}
      </div>
      {isOpen && <div className="p-2">{content}</div>}
    </div>
  );
}

function Faq({ siteLang }) {
  console.log(siteLang);
  const [accordions, setAccordions] = useState([]);
  useEffect(() => {
    setAccordions([
      {
        title:
          siteLang === "az"
            ? "Lorem Ipsum is simply dummy text of the printing and type?"
            : siteLang === "en"
            ? "Lorem Ipsum is simply dummy text of the printing and type?"
            : siteLang === "ru"
            ? "Лорем Ипсум это просто текст-пустышка в печати и верстке?"
            : null,
        content:
          siteLang === "az"
            ? "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled"
            : siteLang === "en"
            ? "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled"
            : siteLang === "ru"
            ? "Лорем Ипсум — это просто текст-пустышка полиграфической и наборной индустрии. Лорем Ипсум был стандартным текстом-пустышкой в ​​отрасли с 1500-х годов, когда неизвестный печатник Лорем Ипсум — это просто текст-пустышка полиграфической и наборной индустрии. Лорем Ипсум был стандартным текстом-пустышкой в ​​отрасли с 1500-х годов, когда неизвестный печатник"
            : null,
        isOpen: false,
      },
      {
        title:
          siteLang === "az"
            ? "Lorem Ipsum is simply dummy text of the printing and type?"
            : siteLang === "en"
            ? "Lorem Ipsum is simply dummy text of the printing and type?"
            : siteLang === "ru"
            ? "Лорем Ипсум это просто текст-пустышка в печати и верстке?"
            : null,
        content:
          siteLang === "az"
            ? "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled"
            : siteLang === "en"
            ? "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled"
            : siteLang === "ru"
            ? "Лорем Ипсум — это просто текст-пустышка полиграфической и наборной индустрии. Лорем Ипсум был стандартным текстом-пустышкой в ​​отрасли с 1500-х годов, когда неизвестный печатник Лорем Ипсум — это просто текст-пустышка полиграфической и наборной индустрии. Лорем Ипсум был стандартным текстом-пустышкой в ​​отрасли с 1500-х годов, когда неизвестный печатник"
            : null,
        isOpen: false,
      },
      {
        title:
          siteLang === "az"
            ? "Lorem Ipsum is simply dummy text of the printing and type?"
            : siteLang === "en"
            ? "Lorem Ipsum is simply dummy text of the printing and type?"
            : siteLang === "ru"
            ? "Лорем Ипсум это просто текст-пустышка в печати и верстке?"
            : null,
        content:
          siteLang === "az"
            ? "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled"
            : siteLang === "en"
            ? "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled"
            : siteLang === "ru"
            ? "Лорем Ипсум — это просто текст-пустышка полиграфической и наборной индустрии. Лорем Ипсум был стандартным текстом-пустышкой в ​​отрасли с 1500-х годов, когда неизвестный печатник Лорем Ипсум — это просто текст-пустышка полиграфической и наборной индустрии. Лорем Ипсум был стандартным текстом-пустышкой в ​​отрасли с 1500-х годов, когда неизвестный печатник"
            : null,
        isOpen: false,
      },
      {
        title:
          siteLang === "az"
            ? "Lorem Ipsum is simply dummy text of the printing and type?"
            : siteLang === "en"
            ? "Lorem Ipsum is simply dummy text of the printing and type?"
            : siteLang === "ru"
            ? "Лорем Ипсум это просто текст-пустышка в печати и верстке?"
            : null,
        content:
          siteLang === "az"
            ? "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled"
            : siteLang === "en"
            ? "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled"
            : siteLang === "ru"
            ? "Лорем Ипсум — это просто текст-пустышка полиграфической и наборной индустрии. Лорем Ипсум был стандартным текстом-пустышкой в ​​отрасли с 1500-х годов, когда неизвестный печатник Лорем Ипсум — это просто текст-пустышка полиграфической и наборной индустрии. Лорем Ипсум был стандартным текстом-пустышкой в ​​отрасли с 1500-х годов, когда неизвестный печатник"
            : null,
        isOpen: false,
      },
    ]);
  }, [siteLang]);
  const toggleAccordion = (index) => {
    const updatedAccordions = [...accordions];
    updatedAccordions[index].isOpen = !updatedAccordions[index].isOpen;
    setAccordions(updatedAccordions);
  };

  return (
    <div className="container mx-auto flex flex-col gap-2   px-5 sm:px-0 ">
      {accordions.map((accordion, index) => (
        <AccordionItem
          key={index}
          title={accordion.title}
          content={accordion.content}
          isOpen={accordion.isOpen}
          toggleAccordion={() => toggleAccordion(index)}
        />
      ))}
    </div>
  );
}

export default Faq;
AccordionItem.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.array.isRequired,
  isOpen: PropTypes.array.isRequired,
  toggleAccordion: PropTypes.array.isRequired,
};
Faq.propTypes = {
  siteLang: PropTypes.string.isRequired,
};
