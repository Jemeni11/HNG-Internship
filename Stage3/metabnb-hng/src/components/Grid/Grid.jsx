import { useState } from "react";
import "./grid.css";

import { Heart, Star } from "../../assets/Grid";

const Grid = ({ GridObjectsArray }) => {
  return (
    <>
      {GridObjectsArray.map((item) => (
        <GridItem key={item.id} id={item.id} picture={item.picture} />
      ))}
    </>
  );
};

function GridItem({
  id,
  picture,
  title = "Desert King",
  distance = "2345km away",
  price = "1MBT per night",
  duration = "available for two weeks stay",
  rating = "5",
}) {
  const [isFavourite, setIsFavourite] = useState(false);
  return (
    <div className="GridItem" id={`GridItem${id}`}>
      <img
        src={Heart}
        alt="heart"
        style={
          !isFavourite
            ? { filter: "none" }
            : {
                filter:
                  "invert(21%) sepia(97%) saturate(7180%) hue-rotate(2deg) brightness(109%) contrast(120%)",
              }
        }
        onClick={() => setIsFavourite((prevState) => !prevState)}
      />
      <img src={picture} alt={title} />
      <div className="GridItemRow1">
        <p>{title}</p>
        <p>{price}</p>
      </div>
      <div className="GridItemRow2">
        <p>{distance}</p>
        <p>{duration}</p>
      </div>
      <p className="GridItemRow3">
        <img src={Star} alt="star" />
        <img src={Star} alt="star" />
        <img src={Star} alt="star" />
        <img src={Star} alt="star" />
        <img src={Star} alt="star" />
      </p>
    </div>
  );
}

export default Grid;
