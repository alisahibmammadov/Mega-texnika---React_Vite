import Categories from "../components/home/Categories";
import PropTypes from "prop-types";
import Techniques from "../components/home/Techniques";
import Header from "../components/home/Header";
import WhyWe from "../components/home/WhyWe";
import Brand from "../components/home/Brand";
import About from "../components/home/About";
import HomeNews from "../components/home/HomeNews";
import Form from "../components/home/Form";
function Home({ texnikalarData, siteLang, newsData }) {
  return (
    <div>
      <Header siteLang={siteLang} />
      <Categories texnikalarData={texnikalarData} siteLang={siteLang} />
      <About siteLang={siteLang} />
      <Techniques texnikalarData={texnikalarData} siteLang={siteLang} />
      <Brand siteLang={siteLang} />
      <HomeNews newsData={newsData} siteLang={siteLang} />
      <Form siteLang={siteLang}/>
      <WhyWe siteLang={siteLang} />
    </div>
  );
}

export default Home;
Home.propTypes = {
  texnikalarData: PropTypes.array.isRequired,
  siteLang: PropTypes.string.isRequired,
  newsData: PropTypes.array.isRequired,
};
