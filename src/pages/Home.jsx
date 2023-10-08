import Categories from "../components/home/Categories"
import PropTypes from "prop-types";
import Techniques from "../components/home/Techniques";
function Home({texnikalarData,siteLang}) {
  return (
    <div>
      <Categories texnikalarData={texnikalarData} siteLang={siteLang}/>
      <Techniques siteLang={siteLang}/>
    </div>
  )
}

export default Home
Home.propTypes = {
  texnikalarData: PropTypes.string.isRequired,
  siteLang: PropTypes.string.isRequired,
};