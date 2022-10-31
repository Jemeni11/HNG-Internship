import React from 'react'
import MainSection from './MainSection/MainSection'
import SocialSection from './SocialSection/SocialSection'
import "./body.css"

type Props = {}

const Body = (props: Props) => {
  return (
    <div className="bodyContainer">
      <MainSection />
      <SocialSection />
    </div>
  )
}

export default Body