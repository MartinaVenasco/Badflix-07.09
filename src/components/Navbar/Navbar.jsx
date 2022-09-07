import { RiSearchLine } from "react-icons/ri";
import "./index.scss";

const Navbar = ({ TopRated, UpComing, InputRef }) => {
  console.log(TopRated);

  const scrollTopRated = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: TopRated.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };
  const scrollUpComing = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: UpComing.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };
  const ScrollToInput = (e) => {
    e.preventDefault();

    window.scrollTo({
      top: InputRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="Navbar">
      <ul className="Navbar__list">
        <li>
          <a href="/" onClick={scrollTopRated}>
            TOP RATED
          </a>
        </li>

        <li>
          <a href="#topM" onClick={scrollUpComing}>
            UP COMING
          </a>
        </li>
      

        <li>
          {" "}
          <a href="/" className="search_navbar" onClick={ScrollToInput}>
            {" "}
            <RiSearchLine size={16} />
          </a>
        </li>
      </ul>
    </div>
  );
};
export default Navbar;
