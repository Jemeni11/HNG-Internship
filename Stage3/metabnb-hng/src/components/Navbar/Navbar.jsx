import { createPortal } from "react-dom";
import "./navbar.css";
import Logo from "../../assets/logo.png";

const modalRoot = document.getElementById("modalRoot");

const Modal = () => {};

const Navbar = ({ setShowModal }) => {
  const connectWalletHandler = () => {
    setShowModal(true);
    return createPortal(Modal, modalRoot);
  };

  return (
    <nav className="NavbarContainer">
      <div>
        <img src={Logo} alt="Metabnb logo" />
      </div>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/places">Place to stay</a>
        </li>
        <li>
          <a href="/nfts">NFTs</a>
        </li>
        <li>
          <a href="/community">Community</a>
        </li>
      </ul>
      <div className="NavbarButtonContainer">
        <button onClick={connectWalletHandler}>Connect Wallet</button>
      </div>
    </nav>
  );
};

export default Navbar;
