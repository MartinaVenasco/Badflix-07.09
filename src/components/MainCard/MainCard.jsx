import "./index.scss";
import { RiStarSLine } from "react-icons/ri";
import {MdInfo} from 'react-icons/md'
import { memo } from "react";
import LikeButton from "../LikeButton/LikeButton";

const MainCard = ({
  cardData,
  value = { className: "MainCard" },
  averageIsVis = true,
  modalVisibility,
  favouriteList,
  setFavouriteList,
  isBtnVisible = true,
}) => {
  const { title, vote_average, poster_path } = cardData;

  return (
    <div className={value.className} >
   
      <div className="likebtn">
       <i className="info_icon" onClick={() => modalVisibility(cardData)}> <MdInfo/></i>
       <LikeButton
          data={cardData}
          favouriteList={favouriteList}
          setFavouriteList={setFavouriteList}
          isBtnVisible={isBtnVisible}
        />
      </div>
      <img
        className="MainCard--img"
        src={`https://image.tmdb.org/t/p/w342${poster_path}`}
        alt={title}
      />
      <div className="MainCard__text">
        <h3>{title}</h3>
       
        {averageIsVis && <p>
          {vote_average}{" "}
          <i className="star">
            <RiStarSLine />
          </i>{" "}
        </p>}
      </div>
    </div>
  );
};

export default memo(MainCard);
