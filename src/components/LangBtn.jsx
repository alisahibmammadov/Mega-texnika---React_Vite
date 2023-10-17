import { useEffect, useState } from "react";
import PropTypes from "prop-types";

function LangBtn({ handleLang }) {
  const [btn, setBtn] = useState();
  const [selectedBtn, setSelectedBtn] = useState(false);
  useEffect(() => {
    setBtn(localStorage.getItem("btnNum"));
  }, [btn]);
  return (
    <main className=" relative flex items-center justify-center w-8">
      <span
        className="hidden sm:flex cursor-pointer font-semibold"
        onClick={() => setSelectedBtn(!selectedBtn)}
      >
        {btn === "1" ? "Az" : btn === "2" ? "En" : "Ru"}
      </span>
      {selectedBtn ? (
        <nav className=" gap-2 hidden sm:flex flex-col absolute top-10  shadow-sm rounded-lg px-2">
          <button
            className={btn === "1" ? " font-semibold" : "hover:font-semibold"}
            onClick={() => {
              handleLang("az"),
                setBtn("1"),
                localStorage.setItem("btnNum", "1");
              setSelectedBtn(false);
            }}
          >
            Az
          </button>
          <button
            className={btn === "2" ? " font-semibold" : "hover:font-semibold"}
            onClick={() => {
              handleLang("en"),
                setBtn("2"),
                localStorage.setItem("btnNum", "2");
              setSelectedBtn(false);
            }}
          >
            En
          </button>
          <button
            className={btn === "3" ? " font-semibold" : "hover:font-semibold"}
            onClick={() => {
              handleLang("ru"),
                setBtn("3"),
                localStorage.setItem("btnNum", "3");
              setSelectedBtn(false);
            }}
          >
            Ru
          </button>
        </nav>
      ) : null}
    </main>
  );
}

export default LangBtn;
LangBtn.propTypes = {
  handleLang: PropTypes.func.isRequired,
};
