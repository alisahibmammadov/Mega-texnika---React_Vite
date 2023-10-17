import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Instagram from "../assets/icons/instagram.svg";
import Facebook from "../assets/icons/facebook.svg";
import Twitter from "../assets/icons/twitter.svg";

function ContactPage({ siteLang }) {
  return (
    <div className="py-16 flex flex-col gap-8 px-3">
      <header className="container mx-auto flex items-center gap-1 sm:gap-2 px-5 sm:px-0 ">
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
        <span className="w-[2px] h-5 bg-[#686868]"></span>
        <span className="text-textHeadColor text-xs  leading-normal font-medium">
          {siteLang === "az"
            ? "Əlaqə"
            : siteLang === "en"
            ? "Contact"
            : siteLang === "ru"
            ? "Контакт"
            : null}
        </span>
      </header>
      <section className="container mx-auto px-5 sm:px-0 flex flex-wrap md:justify-between justify-center gap-5 sm:gap-0">
        {/* Left side */}
        <div className="w-full sm:w-1/2 flex flex-col justify-around ">
          <header className="container mx-auto flex items-center gap-1 sm:gap-2 px-5 sm:px-0 ">
            <h2 className="text-textHeadColor text-3xl  leading-normal font-medium">
              {siteLang === "az"
                ? "Bizə yazın!"
                : siteLang === "en"
                ? "Write to us!"
                : siteLang === "ru"
                ? "Напишите нам!"
                : null}
            </h2>
          </header>
          <section>
            <form className="flex flex-col gap-8">
              <div className="flex justify-between items-center gap-4">
                <input
                  className="h-10 rounded-3xl border-[1px] border-[#353535] w-1/2 pl-2 sm:pl-5 text-[#353535] sm:text-xs text-[10px] font-normal outline-none"
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
                  className="h-10 rounded-3xl border-[1px] border-[#353535] w-1/2 pl-2 sm:pl-5 text-[#353535] sm:text-xs text-[10px] font-normal outline-none"
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
                  className="h-10 rounded-3xl border-[1px] border-[#353535] w-1/2 pl-2 sm:pl-5 text-[#353535] sm:text-xs text-[10px] font-normal outline-none"
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
                  className="h-10 rounded-3xl border-[1px] border-[#353535] w-1/2 pl-2 sm:pl-5 text-[#353535] sm:text-xs text-[10px] font-normal outline-none"
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
                <textarea
                  className="resize-none  rounded-3xl border-[1px] border-[#353535] w-full h-32 text-[#353535] text-xs font-normal pl-5 pt-3 outline-none"
                  placeholder={
                    siteLang === "az"
                      ? "Mesaj*"
                      : siteLang === "en"
                      ? "Message*"
                      : siteLang === "ru"
                      ? "Сообщение*"
                      : null
                  }
                ></textarea>
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
        </div>

        {/* Right side */}
        <div className="box-border px-4   md:w-[350px] lg:w-[427px] h-[467px] bg-white shadow-boxShadow flex flex-col items-center justify-center gap-8">
          <h3 className="text-textHeadColor text-3xl  leading-normal font-medium">
            {siteLang === "az"
              ? "Əlaqə"
              : siteLang === "en"
              ? "Contact"
              : siteLang === "ru"
              ? "Контакт"
              : null}
          </h3>
          {siteLang === "az" ? (
            <span className="text-textHeadColor font-medium text-[10px] sm:text-xs not-italic ">
              Fətəli Xan Xoyski 111A, Bakı Azərbaycan
            </span>
          ) : siteLang === "en" ? (
            <span className="text-textHeadColor font-medium text-[10px] sm:text-xs not-italic ">
              Fatali Khan Khoyski 111A, Baku Azerbaijan
            </span>
          ) : siteLang === "ru" ? (
            <span className="text-textHeadColor font-medium text-[10px] sm:text-xs not-italic ">
              Фатали Хана Хойского 111А, Баку Азербайджан
            </span>
          ) : null}
          <nav className="flex items-center gap-5">
            <span className="text-textHeadColor font-medium text-[10px] sm:text-xs not-italic">
              +994(12) 123 45 67
            </span>
            <span className="text-textHeadColor font-medium text-[10px] sm:text-xs not-italic">
              +994(12) 123 45 67
            </span>
          </nav>
          <span className="text-textHeadColor font-medium text-[10px] sm:text-xs not-italic">
            info@megatexnika.az
          </span>
          <span className="text-textHeadColor text-sm font-normal not-italic">
            {siteLang === "az"
              ? "Qrafik (iş saatlarımız)"
              : siteLang === "en"
              ? "Schedule (our working hours)"
              : siteLang === "ru"
              ? "График работы (время работы)"
              : null}
            : B.e - Ş. 10:00 - 19:00
          </span>
          <nav className="flex items-center gap-4 sm:gap-6">
            <img src={Instagram} alt="Instagram" className="cursor-pointer" />
            <img src={Facebook} alt="Facebook" className="cursor-pointer" />
            <img src={Twitter} alt="Twitter" className="cursor-pointer" />
          </nav>
        </div>
      </section>
    </div>
  );
}

export default ContactPage;
ContactPage.propTypes = {
  siteLang: PropTypes.string.isRequired,
};
