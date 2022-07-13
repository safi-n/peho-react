import React from 'react'

const DesktopFooter = () => {
  return (
    <div className="footer-container">
        {/* Logo Section */}
        <div className="footer-logo-section">
          <div className="footer-log-white">
            <img src={PEHOLogoWhite} alt="Footer logo" />
          </div>
          <div className="footer-connect-title">
            <h2>CONNECT WITH US</h2>
          </div>
          <div className="footer-socialmedia-icons">
            <img src={facebookIcon} alt="" />
            <img src={twitterIcon} alt="" />
            <img src={instagramIcon} alt="" />
            <img src={linkedinIcon} alt="" />
            <img src={youtubeIcon} alt="" />
          </div>
        </div>
        {/* Support Link */}
        <div className="footer-support-link">
          <a href="/contact-us">Message us</a>
          <a href="/about-us">Know more about us</a>
          <a href="/about-us">Our team</a>
        </div>
        {/* Support Link 2 */}
        <div className="footer-support-link2">
          <a href="/empower-us">Empower women</a>
          <a href="/empower-us">Empower Health</a>
        </div>

      </div>
  )
}

export default DesktopFooter