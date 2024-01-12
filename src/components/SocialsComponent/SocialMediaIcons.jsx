import React from 'react'
import { InstagramIcon } from '../SVGs/SVGs'
import { TwitterIcon } from '../SVGs/SVGs'
import { YouTubeIcon } from '../SVGs/SVGs'
import { LinkedInIcon } from '../SVGs/SVGs'

const SocialMediaIcons = () => {
  return (
    <div className="social-media-buttons">
     <button className="social-media-button">
      <InstagramIcon  />
     </button> 
     <button className="social-media-button">
      <TwitterIcon />
     </button> 
     <button className="social-media-button">
      <YouTubeIcon />
     </button> 
     <button className="social-media-button">
      <LinkedInIcon />
     </button>
    </div>
  )
}

export default SocialMediaIcons
