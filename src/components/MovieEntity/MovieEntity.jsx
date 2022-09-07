import { useState, useEffect } from "react";
import { GET } from "../../utils/api.js";
import {GoTriangleUp} from 'react-icons/go';
import "./index.scss";

const MovieEntity = ({ movieID, isRendered, setInputValue, ScrollTop }) => {
  const [movieData, setMovieData] = useState({});
  const [isUpvisibleSec3, setUpvisibleSec3] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () =>
      window.scrollY >= 2980
        ? setUpvisibleSec3(true)
        : setUpvisibleSec3(false)
    );
  }, []);

  useEffect(() => {
    GET("movie", movieID).then((data) => setMovieData(data)).then(setInputValue(""));// eslint-disable-next-line
  }, [isRendered]);  

  const { poster_path, original_title, genres, vote_average, tagline, title } =
    movieData;

    const scrollTop = (e) => {
      e.preventDefault()
      window.scrollTo({
        top: ScrollTop.current.offsetTop,
        left: 0,
        behavior: "smooth",
      });
    };
  return (
    <div className="MovieEntity">
      <div className="MovieEntity__info">
        <div className="MovieEntity__info--title">
          <p>title</p>
          <h1>{title}</h1>
        </div>
        <div className="MovieEntity__info--bottom">
          <p>rating</p>
          <p>{vote_average || "not found"}</p>
          <p>genre</p>
          <ul>
            {genres &&
              genres.map((genre) => <li key={genre.id}>{genre.name}</li>)}
          </ul>
          <p className="MovieEntity__info--bottom--tagline">{tagline}</p>
        </div>
      </div>
      <img
        className="MovieEntity__poster"
        src={`https://image.tmdb.org/t/p/original${poster_path}`}
        alt={original_title}
      />
      <div className="MovieEntity__book">
        <button className="MovieEntity__book--btn">Book it!</button>
      </div>
      {movieData ? console.log(movieData) : <p>loading...</p>}
      {isUpvisibleSec3 && (
        <button className="up_movieEntity" onClick={scrollTop}> <GoTriangleUp/></button>)}
    </div>
  );
};

export default MovieEntity;
