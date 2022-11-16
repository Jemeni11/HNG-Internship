import "./home.css";

import { MBToken, MetaMask, OpenSea } from "../../assets/Banner";

import FrameOne from "./FrameOne/FrameOne";
import FrameTwo from "./FrameTwo/FrameTwo";
import FrameThree from "./FrameThree/FrameThree";

const Home = () => {
  return (
    <div className="HomeContainer">
      <FrameOne />
      <Banner />
      <FrameTwo />
      <FrameThree />
    </div>
  );
};

function Banner() {
  return (
    <div id="Banner">
      <div id="BannerImageContainer">
        <img src={MBToken} alt="MBToken" />
        <img src={MetaMask} alt="MetaMask" />
        <img src={OpenSea} alt="OpenSea" />
      </div>
    </div>
  );
}

export default Home;
