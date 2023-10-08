import PropTypes from "prop-types";
function Techniques({siteLang}) {
  return (
    <main className="py-16 flex flex-col gap-8 px-3">
        <header className="container mx-auto px-5 sm:px-0">
        <h5 className="text-textHeadColor text-3xl font-bold leading-normal not-italic flex justify-center sm:justify-between">
          {
            siteLang === 'az' ? 'Texnikalar' : siteLang === 'en' ? 'Techniques' : siteLang === 'ru' ? 'Техники':null
          }
        </h5>
      </header>
    </main>
  )
}

export default Techniques
Techniques.propTypes = {
    siteLang: PropTypes.string.isRequired,
};
