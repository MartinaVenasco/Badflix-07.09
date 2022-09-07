import MainCard from "../MainCard";
import "./index.scss";
import { memo } from "react";



const TopRatedList = ({ cardData, modalVisibility, setFavouriteList, favouriteList }) => {
  return (
    <div className="TopRatedList">
   
      {cardData.map((cardData, ii) => (
        <MainCard
         setFavouriteList={setFavouriteList}
              favouriteList={favouriteList}
          modalVisibility={modalVisibility}
          cardData={cardData}
          value={{ className: "TopRated__card" }}
          key={ii}
        />
      ))}
    </div>
  );
};

export default memo(TopRatedList);
