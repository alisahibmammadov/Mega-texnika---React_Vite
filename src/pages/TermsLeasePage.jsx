import Faq from "../components/TermLease/Faq";
import TermLease from "../components/TermLease/TermLease";
import PropTypes from "prop-types";

function TermsLeasePage({siteLang}) {
  return (
    <div>
      <TermLease siteLang={siteLang}/>
      <Faq siteLang={siteLang}/>
    </div>
  );
}

export default TermsLeasePage;
TermsLeasePage.propTypes = {
  siteLang: PropTypes.string.isRequired,
};
