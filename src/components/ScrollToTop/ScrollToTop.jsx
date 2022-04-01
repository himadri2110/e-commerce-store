import "./ScrollToTop.css";

const ScrollToTop = () => {
  return (
    <button
      className="scroll-btn btn btn-floating btn-primary"
      onClick={() => window.scrollTo(0, 0)}
    >
      <i className="fa-solid fa-angle-up"></i>
    </button>
  );
};

export { ScrollToTop };
