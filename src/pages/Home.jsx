import Categories from "../components/home/Categories"
import PropTypes from "prop-types";
import Techniques from "../components/home/Techniques";
import Header from "../components/home/Header";
function Home({texnikalarData,siteLang}) {
  return (
    <div>
      <Header siteLang={siteLang}/>
      <Categories texnikalarData={texnikalarData} siteLang={siteLang}/>
      <Techniques texnikalarData={texnikalarData} siteLang={siteLang}/>
    </div>
  )
}

export default Home
Home.propTypes = {
  texnikalarData: PropTypes.string.isRequired,
  siteLang: PropTypes.string.isRequired,
};