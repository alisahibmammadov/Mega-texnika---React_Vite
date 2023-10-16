import { useEffect, useState } from "react";
import PropTypes from "prop-types";

function AccordionItem({ title, content, isOpen, toggleAccordion }) {
  return (
    <div className="border rounded mb-2">
      <div className="p-2 cursor-pointer" onClick={toggleAccordion}>
        {title}
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
            ? "Lorem Ipsum is simply dummy text of the printing and type?"
            : siteLang === "en"
            ? "Lorem Ipsum is simply dummy text of the printing and type?"
            : siteLang === "ru"
            ? "Лорем Ипсум это просто текст-пустышка в печати и верстке?"
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
            ? "Lorem Ipsum is simply dummy text of the printing and type?"
            : siteLang === "en"
            ? "Lorem Ipsum is simply dummy text of the printing and type?"
            : siteLang === "ru"
            ? "Лорем Ипсум это просто текст-пустышка в печати и верстке?"
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
            ? "Lorem Ipsum is simply dummy text of the printing and type?"
            : siteLang === "en"
            ? "Lorem Ipsum is simply dummy text of the printing and type?"
            : siteLang === "ru"
            ? "Лорем Ипсум это просто текст-пустышка в печати и верстке?"
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
            ? "Lorem Ipsum is simply dummy text of the printing and type?"
            : siteLang === "en"
            ? "Lorem Ipsum is simply dummy text of the printing and type?"
            : siteLang === "ru"
            ? "Лорем Ипсум это просто текст-пустышка в печати и верстке?"
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
            ? "Lorem Ipsum is simply dummy text of the printing and type?"
            : siteLang === "en"
            ? "Lorem Ipsum is simply dummy text of the printing and type?"
            : siteLang === "ru"
            ? "Лорем Ипсум это просто текст-пустышка в печати и верстке?"
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
    <div className="container mx-auto">
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
