import Zuri from "../../assets/Zuri_Internship_Logo.png"
import I4G from "../../assets/I4G.png"
import "./footer.css"

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className="footerContainer">
      <img src={Zuri} alt="Zuri Internship" />
      <p>HNG Internship 9 Frontend Task</p>
      <img src={I4G} alt="Ingressive for Good" />
    </div>
  )
}

export default Footer