import "./frametwo.css"
import {
  FrameTwoImage1,
  FrameTwoImage2,
  FrameTwoImage3,
  FrameTwoImage4,
  FrameTwoImage5,
  FrameTwoImage6,
  FrameTwoImage7,
  FrameTwoImage8,
} from "../../../assets/Grid";
import { Grid } from "../../../components";

const FrameTwoGridObjectsArray = [
  { id: 1, picture: FrameTwoImage1 },
  { id: 2, picture: FrameTwoImage2 },
  { id: 3, picture: FrameTwoImage3 },
  { id: 4, picture: FrameTwoImage4 },
  { id: 5, picture: FrameTwoImage5 },
  { id: 6, picture: FrameTwoImage6 },
  { id: 7, picture: FrameTwoImage7 },
  { id: 8, picture: FrameTwoImage8 },
];

export default function FrameTwo() {
  return (
    <div id="FrameTwo">
      <h2>Inspiration for your next adventure</h2>
      <div id="FrameTwoGrid">
        <Grid GridObjectsArray={FrameTwoGridObjectsArray} />
      </div>
    </div>
  );
}
