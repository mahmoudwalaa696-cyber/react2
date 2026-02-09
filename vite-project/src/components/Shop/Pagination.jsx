import { Link } from "react-router-dom";
const Pagination = () => {
  return (
    <div>
      {/*  Start Section Pagination  */}
      <section id="Pagination" className="section-p1">
        <Link to="#">1</Link>
        <Link to="#">2</Link>
        <Link to="#">
          <i className="fa-solid fa-arrow-right"></i>
        </Link>
      </section>
    </div>
  );
};

export default Pagination;
