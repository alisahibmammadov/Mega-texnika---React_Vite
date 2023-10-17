import PropTypes from "prop-types";
function Form({ siteLang }) {
  return (
    <main className="py-16 flex  gap-8 px-3 relative">
      <section className="w-full mx-auto  flex gap-5 py-10 px-5 sm:px-0 bg-[#efefef]">
        <form className="container mx-auto flex flex-col gap-5 lg:w-1/2">
          <div className="flex justify-between items-center gap-4">
            <input
              className="h-10 rounded-3xl border-[1px] border-[#353535] w-1/2 pl-2 sm:pl-5 text-[#686868] sm:text-xs text-[10px] font-bold outline-none bg-transparent"
              type="text"
              placeholder={
                siteLang === "az"
                  ? "Ad, Soyad*"
                  : siteLang === "en"
                  ? "First name and last name*"
                  : siteLang === "ru"
                  ? "Имя и фамилия*"
                  : null
              }
            />
            <input
              className="h-10 rounded-3xl border-[1px] border-[#353535] w-1/2 pl-2 sm:pl-5 text-[#686868] sm:text-xs text-[10px] font-bold outline-none bg-transparent"
              type="email"
              placeholder={
                siteLang === "az"
                  ? "E-mail*"
                  : siteLang === "en"
                  ? "E-mail*"
                  : siteLang === "ru"
                  ? "Электронная почта*"
                  : null
              }
            />
          </div>
          <div className="flex justify-between items-center gap-4">
            <input
              className="h-10 rounded-3xl border-[1px] border-[#353535] w-1/2 pl-2 sm:pl-5 text-[#686868] sm:text-xs text-[10px] font-bold outline-none bg-transparent"
              type="text"
              placeholder={
                siteLang === "az"
                  ? "Şirkətin adı"
                  : siteLang === "en"
                  ? "Company name"
                  : siteLang === "ru"
                  ? "Название компании"
                  : null
              }
            />
            <input
              className="h-10 rounded-3xl border-[1px] border-[#353535] w-1/2 pl-2 sm:pl-5 text-[#686868] sm:text-xs text-[10px] font-bold outline-none bg-transparent"
              type="text"
              placeholder={
                siteLang === "az"
                  ? "Telefon*"
                  : siteLang === "en"
                  ? "Phone*"
                  : siteLang === "ru"
                  ? "Телефон*"
                  : null
              }
            />
          </div>

          <div>
            <button className="bg-textHover hover:bg-textHeadColor hover:text-white transition w-full h-10 rounded-3xl text-[#353535] text-xs font-bold">
              {siteLang === "az"
                ? "Göndər"
                : siteLang === "en"
                ? "Send"
                : siteLang === "ru"
                ? "Отправлять"
                : null}
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}

export default Form;
Form.propTypes = {
  siteLang: PropTypes.string.isRequired,
};
