import MainCard from "../MainCard";
import "./index.scss";
import { memo } from "react";

const FavoriteList = ({ modalVisibility, favouriteList, setFavouriteList }) => {
  return (
    <div className="LikedList">
      <h1>LIKED </h1>
        {favouriteList.length ? (
          favouriteList.map((likedElement) => (
            <MainCard
              cardData={likedElement}
              value={{ className: "LikedStyle" }}
              key={likedElement.id}
              averageIsVis={false}
              modalVisibility={modalVisibility}
              isBtnVisible={false}
              setFavouriteList={setFavouriteList}
              favouriteList={favouriteList}
            />
          ))
        ) : (
          <p>Nessun elemento presente al momento</p>
        )}
      </div>
 
  );
};

export default memo(FavoriteList);
