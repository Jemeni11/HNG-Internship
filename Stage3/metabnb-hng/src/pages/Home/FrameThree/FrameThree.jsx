import "./framethree.css"
import MetabnbNFT from "../../../assets/FrameThree/Image1-3.png";

export default function FrameThree() {
  return (
    <div id="FrameThree">
      <div className="FrameThreeInfoContainer">
        <h2>Metabnb NFTs</h2>
        <p>
          Discover our NFT gift cards collection. Loyal customers gets amazing
          gift cards which are traded as NFTs. These NFTs gives our cutomer
          access to loads of our exclusive services.
        </p>
        <button>Learn More</button>
      </div>
      <div className="FrameThreeImageContainer">
        <img src={MetabnbNFT} alt="Metabnb NFTs Image" />
      </div>
    </div>
  );
}
