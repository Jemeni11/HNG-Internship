import "./placestostay.css";
import {
  FrameTwoImage1,
  FrameTwoImage2,
  FrameTwoImage3,
  FrameTwoImage4,
  FrameTwoImage5,
  FrameTwoImage6,
  FrameTwoImage7,
  FrameTwoImage8,
} from "../../assets/Grid";
import {
  PlaceImage1,
  PlaceImage2,
  PlaceImage3,
  PlaceImage4,
  PlaceImage5,
  PlaceImage6,
  PlaceImage7,
  PlaceImage8,
  Settings,
} from "../../assets/Places";
import { Grid } from "../../components";

const PlacesGridObjectsArray = [
  { id: 1, picture: FrameTwoImage5 },
  { id: 2, picture: FrameTwoImage6 },
  { id: 3, picture: FrameTwoImage7 },
  { id: 4, picture: FrameTwoImage8 },
  { id: 5, picture: FrameTwoImage1 },
  { id: 6, picture: FrameTwoImage2 },
  { id: 7, picture: FrameTwoImage3 },
  { id: 8, picture: FrameTwoImage4 },
  { id: 9, picture: PlaceImage1 },
  { id: 10, picture: PlaceImage2 },
  { id: 11, picture: PlaceImage3 },
  { id: 12, picture: PlaceImage4 },
  { id: 13, picture: PlaceImage5 },
  { id: 14, picture: PlaceImage6 },
  { id: 15, picture: PlaceImage7 },
  { id: 16, picture: PlaceImage8 },
];

const PlacesToStay = () => {
  return (
    <div className="PlacesContainer">
      <nav className="PlacesNavbar">
        <ul>
          <li>Resturant</li>
          <li>Cottage</li>
          <li>Castle</li>
          <li>Fantast city</li>
          <li>Beach</li>
          <li>Carbins</li>
          <li>Off-grid</li>
          <li>Farm</li>
        </ul>
        <button>
          <p>Location</p>
          <img src={Settings} alt="settings" />
        </button>
      </nav>
      <div id="PlacesGrid">
        <Grid GridObjectsArray={PlacesGridObjectsArray} />
      </div>
    </div>
  );
};

export default PlacesToStay;
