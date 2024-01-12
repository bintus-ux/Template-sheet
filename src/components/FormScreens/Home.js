import React from 'react'
import Header from '../Header-section/Header'
import FileUpload from '../FileUpload'
import Card from '../CardsComponent/Card'
import SocialMediaIcons from '../SocialsComponent/SocialMediaIcons'

const Home = () => {
  return (
    <div>
      <Header />
      <FileUpload />
      <Card />
      <SocialMediaIcons />
    </div>
  )
}

export default Home
