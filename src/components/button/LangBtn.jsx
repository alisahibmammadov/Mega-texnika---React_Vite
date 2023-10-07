function LangBtn({ langs }) {
  return (
    <button onClick={() => console.log(langs.langType)}>
      {langs.langName}
    </button>
  );
}

export default LangBtn;
