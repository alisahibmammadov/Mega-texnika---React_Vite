import { useEffect, useState } from "react";
import PropTypes from "prop-types";

function LangBtn({ handleLang }) {
  const [btn, setBtn] = useState();
  useEffect(() => {
    setBtn(localStorage.getItem("btnNum"));
  }, [btn]);
  return (
    <>
      {
        <nav className="flex gap-2">
          <button
            className={btn === "1" ? "text-red-500" : null}
            onClick={() => {
              handleLang("az"),
                setBtn("1"),
                localStorage.setItem("btnNum", "1");
            }}
          >
            Az
          </button>
          <button
            className={btn === "2" ? "text-red-500" : null}
            onClick={() => {
              handleLang("en"),
                setBtn("2"),
                localStorage.setItem("btnNum", "2");
            }}
          >
            En
          </button>
          <button
            className={btn === "3" ? "text-red-500" : null}
            onClick={() => {
              handleLang("ru"),
                setBtn("3"),
                localStorage.setItem("btnNum", "3");
            }}
          >
            Ru
          </button>
        </nav>
      }
    </>
  );
}

export default LangBtn;

LangBtn.propTypes = {
  handleLang: PropTypes.string.isRequired,
};
