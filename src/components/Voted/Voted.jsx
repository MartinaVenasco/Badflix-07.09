import MainCard from "../MainCard";
import "./index.scss";
import { memo } from "react";
const Voted = ({ cardData, modalVisibility, setFavouriteList, favouriteList }) => {
  return (
    <div className="VotedList">
 
      {cardData.map((cardData, ii) => (
        <MainCard
         setFavouriteList={setFavouriteList} 
         favouriteList={favouriteList}
          modalVisibility={modalVisibility}
          cardData={cardData}
          value={{ className: "Voted__card" }}
          key={ii}
        />
      ))}
    </div>
  );
};

export default memo(Voted);
