import Profile from "../../../assets/profile.png";
import "./mainSection.css";
import "./tooltip.css";

const LinkSectionListItemsData = [
  {
    href: "https://training.zuri.team/",
    id: "btn__zuri",
    title: "Zuri Team",
  },
  {
    href: "http://books.zuri.team",
    id: "books",
    title: "Zuri Books",
    subtitle:
      "Find the best books on coding and design at Zuri Books! With over a million books in our stores nationwide! Order now!",
  },
  {
    href: "https://books.zuri.team/python-for-beginners?ref_id=Jemeni11",
    id: "book__python",
    title: "Python Books",
    subtitle:
      "This book is a bestseller with an overall rating of 5 stars! The perfect book to learn python! Grab a copy now!",
  },
  {
    href: "https://background.zuri.team",
    id: "pitch",
    title: "Background Check for Coders",
    subtitle:
      "The best background check service! With a database of over a million records, you can find information on anyone! Try it now!",
  },
  {
    href: "https://books.zuri.team/design-rules",
    id: "book__design",
    title: "Design Books",
    subtitle:
      "Trust this book to show you everything you need to know about design. Zuri is a well known provider of quality and this book does not disappoint. Get it for free!",
  },
  {
    href: "/contact",
    id: "contact",
    title: "Contact Me",
  },
];

const LinkSectionListItem = (props) => {
  return (
    <a
      id={props.id}
      className="linkSectionListItem"
      href={props.href}
      target="_blank"
    >
      <p className="linkSectionListItem__title">{props.title}</p>
      {props.subtitle && (
        <p className="linkSectionListItem__subtitle">{props.subtitle}</p>
      )}
    </a>
  );
};

const MainSection = () => {
  return (
    <div className="mainSectionContainer">
      <div className="hover-text">
        <div id="shareButtonContainer"></div>
        <span className="tooltip-text">Share Link</span>
      </div>
      <div className="profileSection">
        <div className="profile__imgContainer">
          <img id="profile__img" src={Profile} alt="Profile Photo" />
        </div>
        <p id="twitter">Jemeni11</p>
        <p id="slack" style={{ display: "none" }}>
          Jemeni11
        </p>
      </div>
      <div className="linkSection">
        <div id="linkList">
          {LinkSectionListItemsData.map((listItem) => (
            <LinkSectionListItem key={listItem.id} {...listItem} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainSection;
