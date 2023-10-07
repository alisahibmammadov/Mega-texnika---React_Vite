import PropTypes from "prop-types";

function LangBtn({ langs }) {
  return (
    <button onClick={() => console.log(langs.langType)}>
      {langs.langName}
    </button>
  );
}

export default LangBtn;

LangBtn.propTypes = {
  langs: PropTypes.string.isRequired, // veya uygun tip
};
