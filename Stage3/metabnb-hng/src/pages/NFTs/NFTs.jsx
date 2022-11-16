import { useNavigate } from "react-router-dom";
import "./nfts.css";

const NFTs = () => {
  const navigate = useNavigate();
  return (
    <div className="NFTsContainer">
      <h1>NFTs</h1>
      <p>The NFTs Page is under development</p>
      <button onClick={() => navigate("/")}>Go back Home</button>
    </div>
  );
};

export default NFTs;
