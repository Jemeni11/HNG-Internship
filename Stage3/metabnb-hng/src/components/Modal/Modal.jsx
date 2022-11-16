import "./modal.css";
import Close from "../../assets/Connect Wallet/close.png";
import RightArrow from "../../assets/Connect Wallet/DownChevron.png";
import MetaMaskLogo from "../../assets/Connect Wallet/MetaMask.png";
import WalletConnectLogo from "../../assets/Connect Wallet/WalletConnect.png";

const ModalButton = ({ logo, title }) => {
  return (
    <button className="modalButton">
      <div>
        <img src={logo} alt={title} />
        <span>{title}</span>
      </div>
      <img src={RightArrow} alt="right arrow" />
    </button>
  );
};

const Modal = ({ closeButtonClickHandler }) => {
  return (
    <div className="modalContainer">
      <div className="modal">
        <div className="modalHeader">
          <p>Connect Wallet</p>
          <button onClick={closeButtonClickHandler}>
            <img src={Close} alt="Close" />
          </button>
        </div>
        <div className="modalBody">
          <p>Choose your preferred wallet:</p>
          <div>
            <ModalButton logo={MetaMaskLogo} title="Metamask" />
            <ModalButton logo={WalletConnectLogo} title="WalletConnect" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
