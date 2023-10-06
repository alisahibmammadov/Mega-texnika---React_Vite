import Instagram from "../assets/icons/instagram.svg";
import Facebook from "../assets/icons/facebook.svg";
import Twitter from "../assets/icons/twitter.svg";
function Header() {
  return (
    <main className="bg-customColor">
      <header className="container flex justify-between mx-auto py-3 px-5 sm:px-0">
        <nav className="flex flex-col sm:flex-row items-start justify-start gap-1">
          <span className="text-textColor font-medium text-[10px] sm:text-xs not-italic">
            +994(12) 123 45 67
          </span>
          <span className="text-textColor font-medium text-[10px] sm:text-xs not-italic ">
             Fətəli Xan Xoyski 111A, Bakı Azərbaycan
          </span>
        </nav>

        <nav className="flex items-center gap-4 sm:gap-6">
          <img src={Instagram} alt="Instagram" />
          <img src={Facebook} alt="Facebook" />
          <img src={Twitter} alt="Twitter" />
        </nav>
      </header>
    </main>
  );
}

export default Header;
