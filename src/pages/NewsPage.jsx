import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import newsAz from "../data/az/newsAz";
import newsEn from "../data/en/newsEn";
import newsRu from "../data/ru/newsRu";
import { useEffect, useState } from "react";

function NewsPage({ selectedNews, siteLang }) {
  const [matchingItems, setMatchingItems] = useState(selectedNews);
  const { id } = useParams();
  const [data, setData] = useState([]);
  //   console.log(matchingItems);

  useEffect(() => {
    if (siteLang === "az") {
      setData(newsAz.find((item) => item.id === Number(id)));
      if (data) {
        setMatchingItems([data]);
      }
      console.log(matchingItems);
    } else if (siteLang === "en") {
      console.log("hello");
      setData(newsEn.find((item) => item.id === Number(id)));
      if (data) {
        setMatchingItems([data]);
      }
    } else if (siteLang === "ru") {
      console.log("privet");
      setData(newsRu.find((item) => item.id === Number(id)));
      if (data) {
        setMatchingItems([data]);
      }
    }
    console.log(data);
  }, [siteLang]);

  //   function findMatchingData(data1, id) {
  //     const matchingData = [];

  //     for (const item1 of data1) {
  //         if (item1.id === id) {
  //           matchingData.push(item1);
  //           console.log(item1);
  //           console.log(id);
  //           break;
  //         }
  //     }
  //     console.log(matchingData);
  //     return matchingData;
  //   }

  //   useEffect(() => {

  //     if (siteLang === "az") {
  //       setMatchingItems(findMatchingData(newsAz, id));
  //     } else if (siteLang === "en") {
  //       setMatchingItems(findMatchingData(newsEn, id));
  //     } else if (siteLang === "ru") {
  //       setMatchingItems(findMatchingData(newsRu, id));
  //     }
  //   }, [siteLang]);

  return (
    <main className="py-16 flex flex-col gap-8 px-3">
      <header className="container mx-auto flex items-center gap-2">
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
        <span className="w-1 h-5 bg-[#686868]"></span>
        <Link
          to="/blog"
          className="text-[#ADADAD] text-xs  leading-normal hover:text-textHover font-medium"
        >
          {siteLang === "az"
            ? "Blog"
            : siteLang === "en"
            ? "Blog"
            : siteLang === "ru"
            ? "Блог"
            : null}
        </Link>
        <span className="w-1 h-5 bg-[#686868]"></span>
        {/* {matchingItems.map((item, index) => (
          <span
            key={index}
            className="text-textHeadColor text-xs  leading-normal font-medium"
          >
            {item.head}
          </span>
        ))} */}
      </header>

      {/* {matchingItems?.map((item, index) => (
        <section
          key={index}
          className="container mx-auto flex justify-between items-center"
        >
          <div>
            <h2>{item.head}</h2>
            <span>{item.date}</span>
            <p>{item.infoF}</p>
            <p>{item.infoT}</p>
          </div>
          <div className="shadow-boxShadow p-2">
            <img src={item.img} alt="" />
          </div>
        </section>
      ))} */}
    </main>
  );
}

export default NewsPage;
NewsPage.propTypes = {
  selectedNews: PropTypes.string.isRequired,
  siteLang: PropTypes.string.isRequired,
};
//   useEffect(() => {
//     // Local Storage'dan veriyi al
//     const storedData = JSON.parse(localStorage.getItem("selectedNews"));

//     if (storedData) {
//       // Eğer Local Storage'da veri varsa, eşleşen verileri ayarla
//       setMatchingItems(storedData);
//     } else {
//       // Eğer Local Storage'da veri yoksa, eşleşen verileri hesapla
//       let data = [];

//       if (siteLang === "az") {
//         data = findMatchingData(newsAz, selectedNews);
//       } else if (siteLang === "en") {
//         data = findMatchingData(newsEn, selectedNews);
//       } else if (siteLang === "ru") {
//         data = findMatchingData(newsRu, selectedNews);
//       }

//       // Hesaplanan veriyi Local Storage'a kaydet
//       localStorage.setItem("selectedNews", JSON.stringify(data));

//       // Hesaplanan veriyi state'e ayarla
//       setMatchingItems(data);
//     }
//   }, [siteLang, selectedNews]);
