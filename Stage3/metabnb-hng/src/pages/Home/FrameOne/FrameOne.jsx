import "./frameone.css";
import {
  FrameOneImage1,
  FrameOneImage2,
  FrameOneImage3,
  FrameOneImage4,
} from "../../../assets/FrameOne";

export default function FrameOne() {
  return (
    <div id="FrameOne">
      <div className="FrameOneInfoContainer">
        <h1>
          Rent a <span className="clr-dp fw-700">Place</span> away from{" "}
          <span className="clr-dp fw-700">Home</span> in the{" "}
          <span className="clr-dp fw-700">Metaverse</span>
        </h1>
        <p>
          We provide you access to luxury and affordable houses in the
          metaverse, get a chance to turn your imagination to reality at your
          comfort zone
        </p>
        <div className="FrameOneSearchContainer">
          <label
            htmlFor="FrameOneSearchBox"
            children="Search"
            style={{ display: "none" }}
          />
          <input
            type="text"
            name="FrameOneSearchBox"
            id="FrameOneSearchBox"
            placeholder="Search for location"
          />
          <button>Submit</button>
        </div>
      </div>
      <div className="FrameOneImageContainer">
        <div id="FOIC_left">
          <img src={FrameOneImage1} alt="Image 1" />
          <img src={FrameOneImage2} alt="Image 2" />
        </div>
        <div id="FOIC_right">
          <img src={FrameOneImage3} alt="Image 3" />
          <img src={FrameOneImage4} alt="Image 4" />
        </div>
      </div>
    </div>
  );
}
