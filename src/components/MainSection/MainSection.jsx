import { useState, useEffect } from "react";
import Counter from "../Counter";
import { RiStarSLine } from "react-icons/ri";
import { GoTriangleUp } from "react-icons/go";
import TopRatedList from "../TopRatedList";
import Voted from "../Voted";
import { GET } from "../../utils/api";
import UpComingList from "../UpComingList";
import "./index.scss";
import FavoriteList from "../FavoriteList";

const MainSection = ({ modalVisibility, TopRated, UpComing, ScrollTop }) => {
  const [movieLists, setMovieLists] = useState({});
  const [isUpvisible, setUpvisible] = useState(false);
  const [favouriteList, setFavouriteList] = useState([]);

  const [page, setPage] = useState(9);

  useEffect(() => {
    GET("movie", "popular", "&language=en-US&page=", page).then((data) =>
      setMovieLists((prev) => ({ ...prev, popular: data.results }))
    );

    GET("movie", "top_rated", "&language=en-US&page=", 1).then((data) =>
      setMovieLists((prev) => ({ ...prev, topRated: data.results }))
    );

    GET("movie", "upcoming", "&language=en-US&page=", page).then((data) =>
      setMovieLists((prev) => ({ ...prev, upcoming: data.results }))
    );
  }, [page]);



  const scrollTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: ScrollTop.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", () =>
      window.scrollY >= 500
        ? setUpvisible(true)
        : setUpvisible(false)
    );
  }, []);
  return (
    <div className="MainSection" scrolltop={ScrollTop}>
      <div className="Voted">
        <h2 className="best">
          {" "}
          TOP 5 FOR YOU 8.6 <RiStarSLine />{" "}
        </h2>
        {movieLists.topRated && (
          <Voted
            favouriteList={favouriteList}
            setFavouriteList={setFavouriteList}
            modalVisibility={modalVisibility}
            cardData={movieLists.topRated.filter(
              (movie) => movie.vote_average >= 8.6
            )}
          />
        )}
      </div>{" "}
      {favouriteList.length && (
        <FavoriteList
          modalVisibility={modalVisibility}
          favouriteList={favouriteList}
          setFavouriteList={setFavouriteList}
        />
      )}
      <div className="TopRated_Section" ref={TopRated}>
        <h1>
          {" "}
          <span>T</span><span>o</span><span>p</span> <span>R</span><span>a</span><span>t</span>
          <span>e</span>
          <span>d</span>{" "}
          <i className="star_1">
            <RiStarSLine />{" "}
          </i>
        </h1>
        {movieLists.topRated && (
          <TopRatedList
            favouriteList={favouriteList}
            setFavouriteList={setFavouriteList}
            modalVisibility={modalVisibility}
            cardData={movieLists.topRated}
            scrolltop={scrollTop}
          />
        )}
       
        {isUpvisible && (<button className="up" onClick={scrollTop}>
            <GoTriangleUp />
          </button>)}
        
      </div>
      <div className="UpComing_Section" ref={UpComing}>
        {" "}
        <h1>
          {" "}
          <span>U</span>
          <span>P</span> <span>C</span>
          <span>o</span>
          <span>M</span>
          <span>I</span>
          <span>N</span>
          <span>G</span>
        </h1>
        {movieLists.upcoming && (
          <UpComingList
            favouriteList={favouriteList}
            setFavouriteList={setFavouriteList}
            modalVisibility={modalVisibility}
            cardData={movieLists.upcoming}
          />
        )}
        <Counter
          increase={() => setPage((prev) => prev + 1)}
          decrease={() => setPage((prev) => prev - 1)}
          page={page}
        />
      </div>
    </div>
  );
};

export default MainSection;
