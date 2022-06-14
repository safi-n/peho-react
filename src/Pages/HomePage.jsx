import React from 'react'
import MainBanner from '../assets/XDFiles/MainBanner.jpg'

const HomePage = () => {
  return (
      <div className="heroImg">
        <div className="heroImage bg-cover">
          <img src={MainBanner} alt="Hero Banner"/>
        </div>
      </div>
  )
}

export default HomePage

