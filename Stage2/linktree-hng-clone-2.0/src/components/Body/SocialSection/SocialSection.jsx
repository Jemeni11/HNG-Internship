import Slack from "../../../assets/slack.png"
import GitHub from "../../../assets/github.png"
import "./socialSection.css"

const SocialSection = () => {
  return (
    <div className="socialSectionContainer">
      <div className="socialImagesContainer">
        <img src={Slack} alt="Slack Link" />
        <img src={GitHub} alt="GitHub Link" />
      </div>
    </div>
  )
}

export default SocialSection