import "./footer.css";
import FooterLogo from "../../assets/Footer/footerLogo.svg";
import FacebookLogo from "../../assets/Footer/facebook.png";
import InstagramLogo from "../../assets/Footer/instagram.png";
import TwitterLogo from "../../assets/Footer/twitter.png";

const footerInfoObjectsArray = [
  {
    title: "Community",
    listItems: ["NFT", "Tokens", "Landlords", "Discord"],
  },
  {
    title: "Places",
    listItems: ["Castle", "Farms", "Beach", "Learn more"],
  },
  {
    title: "About Us",
    listItems: ["Road map", "Creators", "Career", "Contact Us"],
  },
];

const FooterInfoList = ({ title, listItems }) => {
  return (
    <div className="FooterInfoList">
      <p className="FooterInfoListTitle">{title}</p>
      <ul>
        {listItems?.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="FooterContainer">
      <div>
        <div className="FooterLogoContainer">
          <img src={FooterLogo} alt="Footer logo" />
        </div>
        <div className="FooterSocialLogosContainer">
          <img src={FacebookLogo} alt="Facebook logo" />
          <img src={InstagramLogo} alt="Instagram logo" />
          <img src={TwitterLogo} alt="Twitter logo" />
        </div>
        <p>&copy; 2022 Metabnb</p>
      </div>
      {footerInfoObjectsArray.map((footerInfoObject) => (
        <FooterInfoList
          key={footerInfoObject.title}
          title={footerInfoObject.title}
          listItems={footerInfoObject.listItems}
        />
      ))}
    </footer>
  );
};

export default Footer;
